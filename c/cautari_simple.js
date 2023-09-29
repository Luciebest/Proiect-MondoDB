//Cautarea unui animal dupa nume
db.animale.find({ nume: "Bella" });

//Cautarea persoanelor dupa oras in subdocumentul date_contact
db.persoane.find({ "date_contact.oras": "Iasi" });

//Cautarea adoptiilor dupa status, cu proiectarea doar a anumitor atribute
db.adoptii.find({ status: "rezervat" }, { id_animal: ObjectId("60bdf02066f6f1b0f4b5cd9a"), id_persoana: ObjectId("60bdf02066f6f1b0f4b5cd99") });

//Cautarea animalelor pentru care nu exista un atribut specific (de exemplu, fotografie)
db.animale.find({ fotografie: { $exists: false } });

//Cautarea animalelor care au fost vaccinate cu un anumit vaccin:
db.animale.find({ "vaccinari.nume_vaccin": "Rabie" });


//Persoane al caror nume incepe cu 'M' sau al caror email se termina cu '@student.tuiasi.ro'
db.persoane.find({
    $or: [
        { nume: { $regex: '^P' } },
        { "date_contact.email": { $regex: '@student.tuiasi.ro$' } }
    ]
});


//Sortam persoanele dupa nume si apoi dupa prenume in ordine alfabetica
db.persoane.find().sort({ nume: 1,  prenume: 1 });
//in acest caz, 1 indica o sortare ascendenta (de la 'a' la 'z' pentru siruri de caractere). Daca dorim sa sortam in ordine descendenta, putem folosi -1



// Interogarea va cauta toate adoptiile inainte de 2024, le va sorta in ordine descrescatoare dupa data (cel mai recent la inceput), apoi va aplica paginarea
let numarDocumentePePagina = 2; 
let numarPagina = 2; 
db.adoptii.find({ "data": { "$lt": new Date("2024-01-01") } }).sort({ "data": -1 }).limit(numarDocumentePePagina).skip(numarDocumentePePagina * (numarPagina - 1));
// Daca vrem sa vedem pagina urmatoare, pur si simplu schimbam valoarea numarPagina la 2, 3, etc.



//Paginarea dupa cainii care au vaccinul pentru Rabia
let numarDocumentePePagina2 = 10; 
let numarPagina2 = 1;


db.animale.find({ 
    "specie": "caine",
    "vaccinari": { 
        $elemMatch: { "nume_vaccin": "Rabia" } 
    } 
}).limit(numarDocumentePePagina2).skip(numarDocumentePePagina2 * (numarPagina2 - 1));
//Utilizam operatorul $elemMatch pentru a cauta in array-ul vaccinari



//Paginarea in ordine descrescatoare dupa numele persoanelor din Bucuresti al caror numar de telefon incepe cu '07',
let numarDocumentePePagina3 = 3; 
let numarPagina3 = 1;

db.persoane.find({
    "date_contact.telefon": { $regex: /^07/ },
    "date_contact.oras": "Bucuresti"
}).sort({nume: -1}).limit(numarDocumentePePagina3).skip(numarDocumentePePagina3 * (numarPagina3 - 1));