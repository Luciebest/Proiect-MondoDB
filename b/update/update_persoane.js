//Actualizarea numarului de telefon a unei persoane

try{
    db.persoane.updateOne(
        {
            $and: [{ nume: "Mertic" }, { prenume: "Silviu" }]
        },
        {
            $set:{"date_contact.telefon":"0765199999"}
        }
);
}catch(e){
	print(e);
}

//Actualizarea adresei unei persoane

try{
    db.persoane.updateOne(
        {
            nume: "Popescu"
        },
        {
            $set:{"date_contact.oras":"Neamt"}
        }
);
}catch(e){
	print(e);
}