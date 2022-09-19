const massive = require("massive");
const { DATABASE_URL } = require("../config");

let _dbInstance = null;

module.exports = async () => {
  return new Promise(async (resolve, reject) => {
    console.log(DATABASE_URL);

    if (!_dbInstance) {
      _dbInstance = await massive(
        {
          connectionString: DATABASE_URL,
          ssl: { rejectUnauthorized: false },
          max: 3,
        },
        {
          scripts: process.cwd() + "/sql",
          excludeFunctions: true,
        },
        {
          noWarnings: true,
          error: function (err, client) {
            console.log(err);
          },
        }
      );
    }

    resolve({
      ..._dbInstance,
    });
  }).catch((err) => {
    console.error(err);
  });
};
