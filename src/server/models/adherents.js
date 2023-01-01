const { contextBridge } = require('electron');
let mysql = require('mysql')
let db = require('../../db')

module.exports.getAdherents = function(){

    return new Promise(function(resolve, reject){

        $req = 'SELECT * FROM adherent';
        db.query($req, (err, rows, fields) => {
            if (err) reject(err);
            
            resolve(rows)

        });

    })

    

}

module.exports.getAdhSearch = function(cri){

    return new Promise(function(resolve, reject){

        $req = 'SELECT * FROM adherent WHERE Nom like "%'+cri+'%" OR Prenom like "%'+cri+'%" OR IDAdherent like "%'+cri+'%" OR Email like "%'+cri+'%"';
        db.query($req, (err, rows, fields) => {
            if (err) reject(err);
            
            resolve(rows)

        });

    })

    

}

module.exports.deleteAdh = function(id){

    return new Promise(function(resolve, reject){

        $req = 'delete from adherent where IDAdherent = "'+id+'" and IDAdherent not in (select AdherentID from emprunt where `EtatEmprunt` = "En cours")';
        db.query($req, (err, results) => {
            if (err) reject(err);
            
            resolve(results)

        });

    })

    

}