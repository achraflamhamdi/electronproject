let express = require('express')
let app = express()
let livres = require('./models/livre')

app.get('/livres', function(req, res){

    livres.getLivres().then(function(response){

        res.json(response)

    }).catch(function(){
        console.log('error in server.js')
    })

})

app.get('/SearchLivre', function(req, res){
    livres.getLivreSearch(req).then(function(response){
        res.json(response)
    })
})


app.listen(3000, function(){
    
    console.log('server is on 3000!');
})

