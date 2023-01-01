const ipcRenderer = require('electron').ipcRenderer;
let adherents = require('./server/models/adherents')
const {remote} = require('electron')
const dialog   = remote.dialog

let cri;
let form = document.getElementById('form_search');

form.addEventListener('submit', function(){
    cri = document.getElementById('SearchWord')
    ipcRenderer.send('Search-adh', cri.value)
    cri = null
})

function tout(){
    ipcRenderer.send('Search-adh', 'tout')
}

function heyLivre(e){
    
    if(e.innerHTML == 'Savoir Plus'){
        e.innerHTML = 'Savoir Moins'
    }else if(e.innerHTML == 'Savoir Moins'){
        e.innerHTML = "Savoir Plus"
    }

}

function delAdh(id){
    let WIN = remote.getCurrentWindow()
    let options = {}
    options.buttons = ["Oui","Non"]
    options.message = "Etes-vous sûr de vouloir supprimer cet adherent ?"
    dialog.showMessageBox(WIN, options).then( res => {
        if(res.response === 0){
            adherents.deleteAdh(id).then(function(response){
                if(response.affectedRows != 0){
                        window.location.reload();
                        new Notification('Notification', {
                            body: 'Adhérent supprimé avec succès !'
                          })
                }else{
                    new Notification('Erreur!', {
                        body: 'Adhérent ayant déjà un emprunt en cours !'
                      })
                }
            })
        }
    })
    
}