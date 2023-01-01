const { contextBridge } = require('electron');
let mysql = require('mysql')
let db = require('../../db')


module.exports.getLivres = function(){

    return new Promise(function(resolve, reject){

        $req = 'SELECT IDLivre, Titre, Categorie, Auteur, Section, Couloir, Descr, Cover, Tags, IDExemplaire, Etat FROM `livre` inner join exemplaire on livre.IDLivre = exemplaire.LivreID';
        db.query($req, (err, rows, fields) => {
            if (err) reject(err);
            
            resolve(rows)

        });

    })

    

}

module.exports.getLivreSearch = function(arg){
    return new Promise(function(resolve, reject){
        $req = 'SELECT IDLivre, Titre, Categorie, Auteur,  Section, Couloir, Descr, Cover, Tags, IDExemplaire, Etat FROM `livre` inner join exemplaire on livre.IDLivre = exemplaire.LivreID WHERE `Titre` like "%' +arg+ '%" OR `Categorie` like "%' +arg+ '%" OR `Auteur` like "%' +arg+ '%" OR `IDExemplaire` like "%' +arg+ '%"';
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

module.exports.delById = function(arg){
    return new Promise(function(resolve, reject){
        $req = 'DELETE FROM `exemplaire` WHERE `LivreID` = "' +arg+ '"';
        db.query($req, (err, fields) => {
            if (err) reject(err);
        });

        $req = 'DELETE FROM `livre` WHERE `IDLivre` = "' +arg+ '"';
        db.query($req, (err, fields) => {
            if (err) reject(err);

        });
    })
}