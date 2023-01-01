const { contextBridge } = require('electron');
let mysql = require('mysql')
let db = require('../../db')


module.exports.getEmprunts = function(){

    return new Promise(function(resolve, reject){

        //$req = 'SELECT DISTINCT(`IDEmprunt`),`DateEmprunt`,`EtatEmprunt`,`DatePrecis`,`DateRetour`,`AdherentID`,`ExemplaireID`, concat(`Nom`," ",`Prenom`) as "Nom_Ad", Titre FROM emprunt e, exemplaire ex, livre l, adherent a where e.AdherentID = a.IDAdherent and ex.LivreID = l.IDLivre and e.ExemplaireID = ExemplaireID and l.IDLivre in (select ex.LivreID from exemplaire ex where ex.IDExemplaire=e.ExemplaireID) order by IDEmprunt DESC';
        $req = 'select emprunt.IDEmprunt, emprunt.DateEmprunt, emprunt.EtatEmprunt, emprunt.DatePrecis, emprunt.DateRetour, emprunt.AdherentID, emprunt.ExemplaireID, concat(adherent.Nom," ",adherent.Prenom) as "Nom_Ad", livre.Titre from emprunt, exemplaire, adherent, livre where emprunt.AdherentID = adherent.IDAdherent and exemplaire.IDExemplaire = emprunt.ExemplaireID and exemplaire.LivreID = livre.IDLivre and emprunt.ExemplaireID = exemplaire.IDExemplaire order by emprunt.IDEmprunt DESC';
        db.query($req, (err, rows, fields) => {
            if (err) reject(err);
            
            resolve(rows)

        });

    })

    

}

module.exports.getEmpruntSearch = function(arg){
    return new Promise(function(resolve, reject){
        //$req = 'SELECT DISTINCT(`IDEmprunt`),`DateEmprunt`,`EtatEmprunt`,`DatePrecis`,`DateRetour`,`AdherentID`,`ExemplaireID`, concat(`Nom`," ",`Prenom`) as "Nom_Ad", Titre FROM emprunt e, exemplaire ex, livre l, adherent a where e.AdherentID = a.IDAdherent and ex.LivreID = l.IDLivre and e.ExemplaireID = ExemplaireID and l.IDLivre in (select ex.LivreID from exemplaire ex where ex.IDExemplaire=e.ExemplaireID) and (`IDEmprunt` = "' +arg+ '" OR `EtatEmprunt` like "%' +arg+ '%" OR `AdherentID` = "' +arg+ '" OR `ExemplaireID` = "' +arg+ '" OR `Nom` like "%' +arg+ '%" OR `Prenom` like "%' +arg+ '%" OR `Titre` like "%' +arg+ '%") order by IDEmprunt DESC';
        $req = 'select emprunt.IDEmprunt, emprunt.DateEmprunt, emprunt.EtatEmprunt, emprunt.DatePrecis, emprunt.DateRetour, emprunt.AdherentID, emprunt.ExemplaireID, concat(adherent.Nom," ",adherent.Prenom) as "Nom_Ad", livre.Titre from emprunt, exemplaire, adherent, livre where emprunt.AdherentID = adherent.IDAdherent and exemplaire.IDExemplaire = emprunt.ExemplaireID and exemplaire.LivreID = livre.IDLivre and emprunt.ExemplaireID = exemplaire.IDExemplaire and (`emprunt`.`IDEmprunt` = "' +arg+ '" OR `emprunt`.`EtatEmprunt` like "%' +arg+ '%" OR `emprunt`.`AdherentID` = "' +arg+ '" OR `emprunt`.`ExemplaireID` = "' +arg+ '" OR `adherent`.`Nom` like "%' +arg+ '%" OR `adherent`.`Prenom` like "%' +arg+ '%" OR `livre`.`Titre` like "%' +arg+ '%") order by IDEmprunt DESC'
        db.query($req, (err, rows, fields) => {
            if (err) reject(err);
            
            resolve(rows)

        });
    })
}

module.exports.terEmprunt = function(id, date){
    return new Promise(function(resolve, reject){
        //$req = 'SELECT DISTINCT(`IDEmprunt`),`DateEmprunt`,`EtatEmprunt`,`DatePrecis`,`DateRetour`,`AdherentID`,`ExemplaireID`, concat(`Nom`," ",`Prenom`) as "Nom_Ad", Titre FROM emprunt e, exemplaire ex, livre l, adherent a where e.AdherentID = a.IDAdherent and ex.LivreID = l.IDLivre and e.ExemplaireID = ExemplaireID and l.IDLivre in (select ex.LivreID from exemplaire ex where ex.IDExemplaire=e.ExemplaireID) and (`IDEmprunt` = "' +arg+ '" OR `EtatEmprunt` like "%' +arg+ '%" OR `AdherentID` = "' +arg+ '" OR `ExemplaireID` = "' +arg+ '" OR `Nom` like "%' +arg+ '%" OR `Prenom` like "%' +arg+ '%" OR `Titre` like "%' +arg+ '%") order by IDEmprunt DESC';
        //$req = 'select emprunt.IDEmprunt, emprunt.DateEmprunt, emprunt.EtatEmprunt, emprunt.DatePrecis, emprunt.DateRetour, emprunt.AdherentID, emprunt.ExemplaireID, concat(adherent.Nom," ",adherent.Prenom) as "Nom_Ad", livre.Titre from emprunt, exemplaire, adherent, livre where emprunt.AdherentID = adherent.IDAdherent and exemplaire.IDExemplaire = emprunt.ExemplaireID and exemplaire.LivreID = livre.IDLivre and emprunt.ExemplaireID = exemplaire.IDExemplaire and (`emprunt`.`IDEmprunt` = "' +arg+ '" OR `emprunt`.`EtatEmprunt` like "%' +arg+ '%" OR `emprunt`.`AdherentID` = "' +arg+ '" OR `emprunt`.`ExemplaireID` = "' +arg+ '" OR `adherent`.`Nom` like "%' +arg+ '%" OR `adherent`.`Prenom` like "%' +arg+ '%" OR `livre`.`Titre` like "%' +arg+ '%") order by IDEmprunt DESC'
        $req = 'UPDATE `emprunt` SET `EtatEmprunt`="Termine", `DateRetour`="'+date+'" where `IDEmprunt` = "'+id+'"';
        db.query($req, (err, fields) => {
            if (err) reject(err);

        });
    })
}
module.exports.annEmprunt = function(id){
    return new Promise(function(resolve, reject){
        //$req = 'SELECT DISTINCT(`IDEmprunt`),`DateEmprunt`,`EtatEmprunt`,`DatePrecis`,`DateRetour`,`AdherentID`,`ExemplaireID`, concat(`Nom`," ",`Prenom`) as "Nom_Ad", Titre FROM emprunt e, exemplaire ex, livre l, adherent a where e.AdherentID = a.IDAdherent and ex.LivreID = l.IDLivre and e.ExemplaireID = ExemplaireID and l.IDLivre in (select ex.LivreID from exemplaire ex where ex.IDExemplaire=e.ExemplaireID) and (`IDEmprunt` = "' +arg+ '" OR `EtatEmprunt` like "%' +arg+ '%" OR `AdherentID` = "' +arg+ '" OR `ExemplaireID` = "' +arg+ '" OR `Nom` like "%' +arg+ '%" OR `Prenom` like "%' +arg+ '%" OR `Titre` like "%' +arg+ '%") order by IDEmprunt DESC';
        //$req = 'select emprunt.IDEmprunt, emprunt.DateEmprunt, emprunt.EtatEmprunt, emprunt.DatePrecis, emprunt.DateRetour, emprunt.AdherentID, emprunt.ExemplaireID, concat(adherent.Nom," ",adherent.Prenom) as "Nom_Ad", livre.Titre from emprunt, exemplaire, adherent, livre where emprunt.AdherentID = adherent.IDAdherent and exemplaire.IDExemplaire = emprunt.ExemplaireID and exemplaire.LivreID = livre.IDLivre and emprunt.ExemplaireID = exemplaire.IDExemplaire and (`emprunt`.`IDEmprunt` = "' +arg+ '" OR `emprunt`.`EtatEmprunt` like "%' +arg+ '%" OR `emprunt`.`AdherentID` = "' +arg+ '" OR `emprunt`.`ExemplaireID` = "' +arg+ '" OR `adherent`.`Nom` like "%' +arg+ '%" OR `adherent`.`Prenom` like "%' +arg+ '%" OR `livre`.`Titre` like "%' +arg+ '%") order by IDEmprunt DESC'
        $req = 'UPDATE `emprunt` SET `EtatEmprunt`="Annule" where `IDEmprunt` = "'+id+'"';
        db.query($req, (err, fields) => {
            if (err) reject(err);

        });
        $req = 'UPDATE exemplaire SET `Etat`="Disponible" WHERE `IDExemplaire` = (SELECT ExemplaireID FROM emprunt WHERE IDEmprunt = "'+id+'")';
        db.query($req, (err, fields) => {
            if (err) reject(err);

        });
    })
}