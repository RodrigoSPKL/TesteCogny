const axios = require("axios");

class Api {
  constructor() {
    this._access_token = null;
  }
  async getPopulation() {
    return new Promise(async (resolve) => {
      try {
        const url = `https://datausa.io/api/data?drilldowns=Nation&measures=Population`;
        const endPoint = `${url}`;
        const response = await axios.get(endPoint, {
          timeout: 10000,
          cache: "no-cache",
        });

        if (response.status === 200) {
          console.log(
            `get [Population] success '${endPoint}' status: ${response.status}`
          );
          //console.log(response.data);
          resolve(response.data);
        }
      } catch (error) {
        if (error.response) {
          console.log(`Error: ${error.response}`);
        } else if (error.request) {
          console.log(`Error: ${error.request}`);
        }
        resolve(error);
      }
    });
  }
}
module.exports = () => {
  const instance = new Api();

  return instance;
};
