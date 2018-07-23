const express = require('express');
const path = require('path');
const app = express();

//TODO:
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

//TODO: ingtegrate postgres and mongo
app.get('/api/v1/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'DoeJJJ'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

module.exports = app;