const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const cors= require('cors')
// app.get('/', (req, res) => {
//   res.end('Hello World!');
// });
app.use(cors())
app.get("/list_movies", (req, res) => {
    
    fs.readFile( './' + 'db.json', (err, data) => {
        console.log(data)
        res.end(data);
        
    });
});
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });