
db.animale.bulkWrite([
    {
      insertOne: {
        document: {
          nume: "Max",
          specie: "caine",
          rasa: "Pug",
          varsta: 3,
          gen: "M",
          disponibil: true,
          greutate: 5.3,
          vaccinari: [
            {
              nume_vaccin: "Rabia",
              data_vaccin: new Date("2020-06-01T10:00:00Z")
            },
            {
              nume_vaccin: "Parvoviroza",
              data_vaccin: new Date("2020-06-15T10:00:00Z")
            }
          ]
        }
      }
    },
    {
      insertOne: {
        document: {
          nume: "Bella",
          specie: "pisica",
          rasa: "Siameza",
          varsta: 2,
          gen: "F",
          disponibil: true,
          greutate: 1.1,
          vaccinari: [
            {
              nume_vaccin: "Panleucopenia",
              data_vaccin: new Date("2021-04-01T10:00:00Z")
            }
          ]
        }
      }
    },
    {
      updateMany: {
        filter: { specie: "Caine" },
        update: { $set: { disponibil: false } }
      }
    },
    { 
      deleteMany: { filter: { disponibil: false } } 
    }
  ],
  {
    ordered: true
  });