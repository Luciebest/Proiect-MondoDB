// stergerea unei persoane dupa nume si prenume
db.persoane.deleteOne({
    $and: [{ nume: "Ceausescu" }, { prenume: "Alin" }],
  });
  
// stergerea tututor persoanelor din orasul Cluj
db.persoane.deleteMany({
  "date_contact.oras": "Cluj",
});
  