db.persoane.insertMany([
    {
       "nume": "Mertic",
       "prenume": "Silviu",
       "date_contact": {
          "adresa": "Str. Camil Petrescu",
          "telefon": "0760558406",
          "email": "silviu.mertic@student.tuiasi.ro",
          "oras": "Iasi",
       }
       
    },
    {
       "nume": "Popescu",
       "prenume": "Marian",
       "date_contact": {
          "adresa": "Str. Crinilor",
          "telefon": "0760558407",
          "email": "marian.popescu@gmail.com",
          "oras": "Cluj",
       }
       
    }
 ])

 db.persoane.insertOne(
   {
      "_id": ObjectId("60bdf02066f6f1b0f4b5cd99"),
      "nume": "Popescu",
      "prenume": "Mariana",
      "date_contact": {
         "adresa": "Str. Tudor Vladimirescu 23",
         "telefon": "0744448406",
         "email": "popescu_mariana@student.tuiasi.ro",
         "oras": "Iasi",
      }
      
   })