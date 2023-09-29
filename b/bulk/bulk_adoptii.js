db.adoptii.bulkWrite([
    {
      insertOne: {
        document: {
          id_animal: ObjectId("60bdf02066f6f1b0f4b5cd98"),  //un id random de obiect
          id_persoana: ObjectId("60bdf02066f6f1b0f4b5cd99"), //un id random de obiect
          data: new Date("2023-01-01T10:00:00Z"),
          status: "liber"
        }
      }
    },
    {
      insertOne: {
        document: {
          id_animal: ObjectId("60bdf02066f6f1b0f4b5cd9a"),  //un id random de obiect
          id_persoana: ObjectId("60bdf02066f6f1b0f4b5cd9b"), //un id random de obiect
          data: new Date("2023-01-02T11:00:00Z"),
          status: "rezervat"
        }
      }
    },
    {
      updateMany: {
        filter: { status: "rezervat" },
        update: { $set: { status: "adoptat" } }
      }
    },
    { 
      deleteMany: { filter: { status: "adoptat" } } 
    }
  ],
  {
    ordered: true
  });