db.createCollection("adoptii", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [ "id_animal", "id_persoana", "data"],
        properties: {
          _id: {
            bsonType: "objectId",
            description: "must be an object id"
          },
          id_animal: {
            bsonType: "objectId",
            description: "must be an object id and is required"
          },
          id_persoana: {
            bsonType: "objectId",
            description: "must be an object id and is required"
          },
          data: {
            bsonType: "date",
            description: "must be a date and is required"
          },
          status: {
            bsonType: "string",
            description: "must be a string"
          }
        }
      }
    }
  });