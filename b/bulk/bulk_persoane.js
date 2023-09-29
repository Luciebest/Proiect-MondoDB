db.persoane.bulkWrite([
    {
      insertOne: {
        document: {
          nume: "Ceausescu",
          prenume: "Alin",
          date_contact: {
            adresa: "Str. Mihai Viteazu 12",
            telefon: "0721122991",
              email: "ceausescu.alin@yahoo.com",
              oras: "Iasi"
          }
        }
      }
    },
    {
      insertOne: {
        document: {
          nume: "Postolachi",
          prenume: "Gabriela",
          date_contact: {
            adresa: "Str. Independentei 202",
            telefon: "0734455677",
              email: "postolachigabriela@gmail.com",
              oras: "Iasi"
          }
        }
      }
    },
    {
      updateMany: {
            filter: { "date_contact.oras": "Iasi" },
        update: { $set: { "date_contact.oras": "Bucuresti" } }
      }
    },
    { deleteMany: { filter: { "date_contact.oras": "Bucuresti" } } }
  ], 
  {
    ordered: true
  });