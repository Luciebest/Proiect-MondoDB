//Stergem prima inregistrare de adoptie pentru un anumit animal
db.adoptii.deleteOne({ id_animal: ObjectId("646f5a5edb2ce37ecaffc7bb")});

//Stergem toate inregistrarile de adoptie facute de o persoana
db.adoptii.deleteMany({ id_persoana: ObjectId("646f5c50db2ce37ecaffc7bf") });