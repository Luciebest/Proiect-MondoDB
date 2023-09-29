db.createCollection("animale", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [ "nume", "specie", "rasa", "varsta", "gen", "disponibil", "greutate"],
        properties: {
          _id: {
            bsonType: "objectId",
            description: "must be an object id and is required"
          },
          nume: {
            bsonType: "string",
            description: "must be a string and is required"
          },
          specie: {
            bsonType: "string",
            description: "must be a string and is required"
          },
          rasa: {
            bsonType: "string",
            description: "must be a string and is required"
          },
          varsta: {
            bsonType: "int",
            description: "must be an integer and is required"
          },
          gen: {
            bsonType: "string",
            description: "must be a string and is required"
          },
          disponibil: {
            bsonType: "bool",
            description: "must be a boolean and is required"
          },
          greutate: {
            bsonType: "double",
            description: "must be a double"
          },
          fotografie: {
            bsonType: "binData",
            description: "must be binary data"
          },
          vaccinari: {
            bsonType: "array",
            description: "must be an array of vaccination records",
            additionalItems: {
              bsonType: "object",
              required: [ "nume_vaccin", "data_vaccin"],
              properties: {
                _id: {
                  bsonType: "objectId",
                  description: "must be an object id"
                },
                nume_vaccin: {
                  bsonType: "string",
                  description: "must be a string and is required"
                },
                data_vaccin: {
                  bsonType: "date",
                  description: "must be a date and is required"
                }
              }
            }
          }
        }
      }
    }
  });