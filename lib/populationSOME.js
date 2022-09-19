(async () => {
  const db = await require("../helpers/db")();
  const db_find = await db.api_data.find(7, function (err, res) {});
  let soma = 0;
  const findObject = Object.entries(db_find.doc_record);

  //   for (let objeto of findObject[0][1]) {
  //     if (objeto.Year > 2017) {
  //       soma += objeto.Population;
  //     }
  //   }

  const findObjectMap = findObject[0][1].map(function (num) {
    if (num.Year > 2017) {
      soma += num.Population;
    }
  });

  console.log(`Soma: ${soma}`);
})();
