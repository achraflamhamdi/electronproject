const db = require('./db');
var express = require('express');
const { ipcRenderer } = require('electron');
var router = express.Router();


    function queryInsert(o){
        let email = o.email;
        let pswd = o.pswd;
        var sql = `INSERT INTO adherent (Email, MPasse) VALUES ('${email}', '${pswd}')`;
        db.query(sql, function(err, res){
            if (err) throw err;
            console.log('Success !');
        });
    }

    //insertion querry
    /*var sql = `INSERT INTO adherent (Email, MPasse) VALUES ('${email}', '${pswd}')`;
    db.querry(sql, formData, function(err, data){
        if (err) throw err;
        console.log('Success !');
    });*/


module.export = router;
