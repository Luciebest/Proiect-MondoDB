
//Modificarea disponibilitatii unui animal
try{
    db.animale.updateOne(
        {
            $and: [{ "rasa": "Husky" }]
        },
        {
            $set:{ "disponibil":false}
        }
);
}catch(e){
	print(e);
}

//Adaugarea unui vaccin pentru un animal
try{
    db.animale.updateOne(
        {
           $and: [{ nume: "Bella" }, { specie: "pisica" }]
        },
        {
            $push:
            {
                "vaccinari":  {
                    
                    "nume_vaccin": "Rabie",  
                    "data_vaccin": new Date("2023-04-24T12:18:28")  
                }
            }
        }
);
}catch(e){
	print(e);
}

// Modificarea numelui unui vaccin (al doilea) pentru un animal
try{
    db.animale.updateOne(
        {
            $and: [{ nume: "Bobita" }, { specie: "caine" }]
        },
        {
        $set: { "vaccinari.1.nume_vaccin": "Nobivac DHPPI" },
        }
    );
}catch(e){
	print(e);
}