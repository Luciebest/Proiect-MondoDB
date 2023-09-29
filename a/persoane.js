db.createCollection("persoane", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [ "nume", "prenume", "date_contact"],
        properties: {
          _id: {
            bsonType: "objectId",
            description: "must be an object id"
          },
          nume: {
            bsonType: "string",
            description: "must be a string and is required"
          },
          prenume: {
            bsonType: "string",
            description: "must be a string and is required"
          },
          date_contact: {
            bsonType: "object",
            required: ["adresa", "telefon", "email", "oras"],
            properties: {
              adresa: {
                bsonType: "string",
                description: "must be a string and is required"
              },
              telefon: {
                bsonType: "string",
                pattern:"^[0-9]{10}$",
                /*Expresia regulata ^[0-9]{10}$ inseamna urmatoarele:
                - ^- inceputul sirului de caractere
                -[0-9]{10} - Orice cifra de la 0 la 9, exact de 10 ori
                -$ - Sfarsitul sirului de caractere*/
                description: "must be a 10-digit number and is required"
              },
              email: {
                bsonType: "string",
                pattern:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", 
                //Acest regulat expresion verifica daca sirul de caractere contine cel putin un caracter alfanumeric, urmat de "@" si alte caractere alfanumerice, apoi un punct si in cele din urma cel putin doua caractere alfabete.
                description: "must be a string and is required"
              },
              oras: {
                bsonType: "string",
                description: "must be a string and is required"
              },
            }
          }
        }
      }
    }
  });