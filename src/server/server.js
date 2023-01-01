let express = require('express')
let app = express()
let router =  require('electron').router
let Router = express.Router()
let livres = require('./models/livre')
let exemplaires = require('./models/exemplaire')
let adherents = require('./models/adherents')
let emprunts = require('./models/emprunt')

//app.use(express.json());



app.get('/livres', function(req, res){

    livres.getLivres().then(function(response){

        res.json(response)
        


    }).catch(function(){
        console.log('error in server.js')
    })

})

module.exports.settingValue = function(arg){
    app.set('cri', arg);
}

module.exports.tout = function(){
    app.get('/livres', function(req, res){

        livres.getLivres().then(function(response){
    
            res.json(response)
    
        }).catch(function(){
            console.log('error in server.js')
        })
    
    })
}

module.exports.cherche = function(){
    app.get('/SearchLivre', function(req, res){
        let cri = app.get('cri')
        //console.log(cri);
        livres.getLivreSearch(cri).then(function(response){
            res.json(response)
        }).catch(function(){
            console.log('Erreur in server.js searchlivre')
        })
    })
}

module.exports.settingId = function(arg){
    app.set('id', arg);
}

module.exports.heyLivre = function(){
    app.get('/heyLivre', function(req, res){
        let id = app.get('id')
        //console.log(id);
        // livres.getLivreSearch(cri).then(function(response){
        //     res.json(response)
        // }).catch(function(){
        //     console.log('Erreur in server.js searchlivre')
        // })
    })
}

module.exports.showAdhs = function(){
    app.get('/adherents', function(req, res){
        adherents.getAdherents().then(function(response){

            res.json(response)
            


        }).catch(function(){
            console.log('error in server.js')
        })
    })
}

app.get('/adherents', function(req, res){
    adherents.getAdherents().then(function(response){

        res.json(response)
        


    }).catch(function(){
        console.log('error in server.js')
    })
})

module.exports.toutAdh = function(){
    app.get('/adherents', function(req, res){

        adherents.getAdherents().then(function(response){
    
            res.json(response)
    
        }).catch(function(){
            console.log('error in server.js')
        })
    
    })
}

module.exports.chercheAdh = function(){
    app.get('/SearchAdh', function(req, res){
        let cri = app.get('cri')
        //console.log(cri);
        adherents.getAdhSearch(cri).then(function(response){
            res.json(response)
        }).catch(function(){
            console.log('Erreur in server.js searchlivre')
        })
    })
}

app.get('/emprunts', function(req,res){
    emprunts.getEmprunts().then(function(response){
        res.json(response)
    }).catch(function(err){
        console.log(err)
    })
})

module.exports.chercheEmp = function(){
    app.get('/SearchEmp', function(req, res){
        let cri = app.get('cri')
        //console.log(cri);
        emprunts.getEmpruntSearch(cri).then(function(response){
            res.json(response)
        }).catch(function(err){
            console.log(err)
        })
    })
}

module.exports.toutemp = function(){
    app.get('/emprunts', function(req, res){

        emprunts.getEmprunts().then(function(response){
    
            res.json(response)
    
        }).catch(function(){
            console.log('error in server.js')
        })
    
    })
}


app.listen(3000, function(){
    
    console.log('server is on 3000!');
})

//module.exports = app;

