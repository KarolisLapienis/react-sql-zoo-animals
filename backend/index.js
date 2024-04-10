const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const port = 3003;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const connectionToDB = mysql.createConnection({
    host: "localHost",
    user: "root",
    password: "",
    database: "react-sql-zoo-animals",
});

// POST
app.post ("/zoo", (req, res)=> {
    const sqlQuery = `INSERT INTO zoo(name, class, weight, lives_in_zoo) VALUES(?, ?, ?, ?)`;

    connectionToDB.query(sqlQuery, [req.body.name, req.body.class, req.body.weight, req.body.lives_in_zoo], 
    function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});

//GET
app.get("/zoo", (req,res) => {
    const sqlQuery = `SELECT * FROM zoo`

    connectionToDB.query(sqlQuery, function (err, result) {
        if(err) throw err;
        res.json(result);
    });
});

//DELETE
app.delete("/zoo/:id", (req, res) => {
    const sqlQuery = `DELETE FROM zoo where id=?`;

    connectionToDB.query(sqlQuery, [req.params.id], function(err, result) {
        if(err) throw err;
        res.json({message: "deleted"})
    })
})

//UPDATE
app.put("/zoo/:id", (req,res) => {
    const sqlQuery = `UPDATE zoo SET name=?, class=?, weight=?, lives_in_zoo=? WHERE id=?`;

    connectionToDB.query(sqlQuery, [req.body.name, req.body.class, req.body.weight, req.body.lives_in_zoo, req.params.id],
    function(err, result) {
        if (err) throw err;
        res.json(result);
    })
});

app.listen(port, ()=>{console.log(`listening port ${port}`)})

