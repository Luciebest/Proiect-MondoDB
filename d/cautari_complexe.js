//Dorim sa procesam fiecare document returnat de o interogare, pentru a imprima numele si prenumele fiecarei persoane
var cursor = db.persoane.find();

while (cursor.hasNext()) {
   var doc = cursor.next();
   print("Nume: " + doc.nume + ", Prenume: " + doc.prenume);
}


//Pentru fiecare document de adoptie, putem utiliza metoda findOne() pentru a obtine informatii despre persoana si animalul asociat cu adoptia respectiva
let cursor = db.adoptii.find();

while (cursor.hasNext()) {
   let adoptie = cursor.next();
   let persoana = db.persoane.findOne({ _id: adoptie.id_persoana });
   let animal = db.animale.findOne({ _id: adoptie.id_animal });
   
   print(`Persoana ${persoana.nume} ${persoana.prenume} a adoptat animalul ${animal.nume} la data de ${adoptie.data}`);
}



//Afiseaza adoptiile inainte de 2024-01-01 si numele persoanelor care au adoptat
//Pentru a realiza aceasta interogare, va trebui sa combinam doua colectii - "adoptii" si "persoane". MongoDB are o metoda speciala numita lookup, care este similara cu operatia de join in SQL. Operatorul $unwind este folosit pentru a transforma fiecare element din campul "persoana_info" intr-un document separat

db.adoptii.aggregate([
    { $match: { data: { $lt: new Date("2024-01-01") } } },
    {
      $lookup:
        {
          from: "persoane",
          localField: "id_persoana",
          foreignField: "_id",
          as: "persoana_info"
        }
   },
   { $unwind: "$persoana_info" },
   { 
       $project: { 
           "id_animal": 1, 
           "data": 1, 
           "status": 1, 
           "nume_persoana": "$persoana_info.nume", 
           "prenume_persoana": "$persoana_info.prenume" 
        } 
   }
]).pretty();



//Adaugam un nou atribut in persoane care calculeaza cate animale a adoptat fiecare persoana
//Pentru a realiza aceasta, vom utiliza operatiunea de agregare $lookup pentru a combina colectiile "persoane" si "adoptii". Apoi, vom utiliza $addFields pentru a adauga un nou atribut care va calcula numarul de animale pe care fiecare persoana le-a adoptat. In final, vom folosi $project pentru a afisa rezultatul dorit.

db.persoane.aggregate([
    {
      $lookup:
        {
          from: "adoptii",
          localField: "_id",
          foreignField: "id_persoana",
          as: "adoptii_info"
        }
   },
   { 
       $addFields: { 
           "numar_adoptii": { $size: "$adoptii_info" } 
        } 
   },
   { 
       $project: { 
           "nume": 1, 
           "prenume": 1, 
           "date_contact": 1,
           "numar_adoptii": 1 
        } 
   }
]).pretty();



//Vom grupa animalele dupa specie, vom colecta toate numele animalelor pentru fiecare specie, le vom sorta in ordine descrescatoare in functie de numarul de animale pe specie si vom limita rezultatul la cele mai comune 3 specii
db.animale.aggregate([
    {
      $group: {
        _id: "$specie", 
        animale: {
          $push: "$nume" 
        },
        total_animale: { 
          $sum: 1 
        }
      }
    },
    {
      $sort: {
        total_animale: -1 
      }
    },
    {
      $limit: 3 
    }
]).pretty();
//Aceasta interogare incepe prin gruparea documentelor din colectia "animale" dupa campul "specie". Pentru fiecare grup, creeaza un vector "animale" care contine numele tuturor animalelor din acea specie si calculeaza numarul total de animale din acea specie. Apoi, sortam grupurile in ordine descrescatoare a numarului total de animale si limitam rezultatul la primele 3 grupuri. In final, se foloseste functia pretty() pentru a afisa rezultatul intr-un format usor de citit.