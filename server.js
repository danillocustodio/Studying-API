const express = require('express');
const app = express()
const data = require('./data.json');

app.use(express.json());

//GET all
app.get("/clients", function(req, res){
    res.json(data);
});

//GET by ID
app.get("/clients/:id", function(req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();

    res.json(client);
});

//POST
app.post("/clients", function(req, res){
    const { name, email } = req.body;

    //Lógica para salvar este Post 

    res.json({ name, email });
});

//PUT
app.put("/clients/:id", function(req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();

    const { name, email } = req.body;

    client.name = name;
    client.email = email;

    res.json(client);
});

//DELETE
app.delete("/clients/:id", function(req, res){
    const { id } = req.params;
    const clientsFiltered = data.filter(cli => cli.id != id);

    res.json(clientsFiltered);
});

//Host site port & Start message
app.listen(3000, function() {
    console.log("Server is running");
});

//I used Insomnia to run the tests with the HTTP verbs.