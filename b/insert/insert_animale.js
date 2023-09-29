

db.animale.insertMany([
    {
       "nume": "Bobita",
       "specie":"caine",
       "rasa":"Husky",
       "varsta":2,
       "gen":"M",
       "disponibil":true,
       "greutate":2.3,
       "vaccinari": [{
          "nume_vaccin": "Nobivac DP",
          "data_vaccin": new Date("2023-04-24T12:18:28")
       },
       {
        "nume_vaccin": "Nobivac DHPPI-L",
        "data_vaccin": new Date("2023-02-25T11:18:28")
        
     }]
       
    },
    {
       "nume": "Coana Mita",
       "specie":"pisica",
       "rasa":"Bengal",
       "varsta":1,
       "gen":"F",
       "disponibil":false,
       "greutate":1.2,
       "vaccinari": [{
          "nume_vaccin": "FeLV",
          "data_vaccin": new Date("2023-02-26T10:18:28")
       },
       {
        "nume_vaccin": "FCV",
        "data_vaccin": new Date("2023-01-27T12:14:28")
        
     }]
       
    },
    {
       "nume": "Cocosatu",
       "specie":"papagal",
       "rasa":"Jako",
       "varsta":1,
       "gen":"F",
       "disponibil":true,
       "greutate":0.3,
       "vaccinari": [{
          "nume_vaccin": "Pacheco",
          "data_vaccin": new Date("2023-01-22T12:12:29")
       }
       ]
       
    }
 ])

 
 db.animale.insertOne(
   {
       "_id":ObjectId("60bdf02066f6f1b0f4b5cd98"),
       "nume": "Puricosu",
       "specie":"caine",
       "rasa":"Pitbull",
       "varsta":1,
       "gen":"M",
       "disponibil":true,
       "greutate":8.6,
       "vaccinari": [{
          "nume_vaccin": "Pacheco",
          "data_vaccin": new Date("2023-01-22T12:12:29")
       }
       ]
       
    } 
)

db.animale.insertOne(
   {
       "_id":ObjectId("60bdf02066f6f1b0f4b5cd9a"),
       "nume": "Carutasu",
       "specie":"cal",
       "rasa":"Iberic",
       "varsta":3,
       "gen":"M",
       "disponibil":false,
       "greutate":170.5,
       "vaccinari": [{
          "nume_vaccin": "BioEquin H",
          "data_vaccin": new Date("2022-01-22T12:12:29")
       }
       ]
       
    } 
)