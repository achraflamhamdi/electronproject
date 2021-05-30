let express = require('express')
let app = express()
let router =  require('electron').router
let livres = require('./models/livre')

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
        console.log(cri);
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
        console.log(id);
        // livres.getLivreSearch(cri).then(function(response){
        //     res.json(response)
        // }).catch(function(){
        //     console.log('Erreur in server.js searchlivre')
        // })
    })
}


app.listen(3000, function(){
    
    console.log('server is on 3000!');
})

//module.exports = app;

