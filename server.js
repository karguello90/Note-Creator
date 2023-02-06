const express = require('express');
const path = require('path');
let dbjson = require("./db/db.json")
//const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//app.use('/api', api);
//local host 3001 with no extra endpoint
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//adding notes portion to address
//localhost:3001/notes
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// api/controller routes based off of fetch calls in index.js
app.get("/api/notes", (req,res) => {
// render our dbjson file as json data to front end based on fetch url
res.json(dbjson)
})
app.post("/api/notes", (req,res) => {
    
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);