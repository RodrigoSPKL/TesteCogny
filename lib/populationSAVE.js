const api = require("../helpers/api")();

(async () => {
  const db = await require("../helpers/db")();

  const population = await api.getPopulation();
  const x = db.api_data.insert({ doc_record: population }, function (err, res) {
    //full product with new id returned
  });
  console.log(await x);
})();
