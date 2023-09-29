// Modificarea statusului dupa id-ul unui animal
try{
    db.adoptii.updateOne(
        {
            id_animal:  ObjectId("646f5a5edb2ce37ecaffc7bc") ,
        },
        {
            $set: { "status": "liber" },
        }
    );
}catch(e){
	print(e);
}


//Schimbarea datei adoptiei
try {
    db.adoptii.updateOne(
        {
            id_animal:  ObjectId("60bdf02066f6f1b0f4b5cd9a"),
        },
        {
            $set: { "data": new Date("2023-12-01T12:00:00") },
        }
    );
} catch(e) {
    print(e);
}

//Schimbarea persoanei care a adoptat animalul
try {
    db.adoptii.updateOne(
        {
            id_animal:  ObjectId("60bdf02066f6f1b0f4b5cd9a"),
        },
        {
            $set: { "id_persoana": ObjectId("60bdf02066f6f1b0f4b5cd99") },
        }
    );
} catch(e) {
    print(e);
}