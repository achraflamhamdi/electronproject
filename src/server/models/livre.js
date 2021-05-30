const { contextBridge } = require('electron');
let mysql = require('mysql')
let db = require('../../db')


module.exports.getLivres = function(){

    return new Promise(function(resolve, reject){

        $req = 'SELECT * FROM `livre`';
        db.query($req, (err, rows, fields) => {
            if (err) reject(err);
            
            resolve(rows)

        });

    })

    

}

module.exports.getLivreSearch = function(arg){
    return new Promise(function(resolve, reject){
        $req = 'SELECT * FROM `livre` WHERE `titre` like "%' +arg+ '%"';
        db.query($req, (err, rows, fields) => {
            if (err) reject(err);
            
            resolve(rows)

        });
    })
}
module.exports.getLivreById = function(arg){
    return new Promise(function(resolve, reject){
        $req = 'SELECT * FROM `livre` WHERE `IDLivre` = "' +arg+ '"';
        db.query($req, (err, rows, fields) => {
            if (err) reject(err);
            
            resolve(rows)

        });
    })
}