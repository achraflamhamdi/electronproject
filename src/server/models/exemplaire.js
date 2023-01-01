const { contextBridge } = require('electron');
let mysql = require('mysql')
let db = require('../../db')

module.exports.getByLivreId = function(id){

    return new Promise(function(resolve, reject){

        $req = 'SELECT * FROM `exemplaire` WHERE LivreID = '+id;
        db.query($req, (err, rows, fields) => {
            if (err) reject(err);
            
            resolve(rows)

        });

    })

    

}

module.exports.delById = function(id){

    return new Promise(function(resolve, reject){

        $req = 'delete FROM `exemplaire` WHERE IDExemplaire = '+id;
        db.query($req, (err, rows, fields) => {
            if (err) reject(err);

        });

    })

    

}

module.exports.changeStateByEmp = function(id){

    return new Promise(function(resolve, reject){

        $req = 'UPDATE exemplaire SET `Etat`="Disponible" WHERE `IDExemplaire` = (SELECT ExemplaireID FROM emprunt WHERE IDEmprunt = "'+id+'")';
        db.query($req, (err, fields) => {
            if (err) reject(err);

        });

    })

    

}