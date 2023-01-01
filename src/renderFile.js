const ipcRenderer = require('electron').ipcRenderer;
let exemplaires = require('./server/models/exemplaire')
let livres = require('./server/models/livre')
const {remote} = require('electron')
const dialog   = remote.dialog

function sendForm(event) {
    event.preventDefault() // stop the form from submitting
    let adherent = {
        email :  document.getElementById("email").value,
        pswd : document.getElementById('pwd').value,
    };
    ipcRenderer.send('form-submission', email);
}

let cri;
let form = document.getElementById('form_search');

form.addEventListener('submit', function(){
    cri = document.getElementById('SearchWord')
    ipcRenderer.send('Search-word', cri.value)
    cri = null
})

function tout(){
    ipcRenderer.send('Search-word', 'tout')
}

function heyLivre(e){
    
    if(e.innerHTML == 'Savoir Plus'){
        e.innerHTML = 'Savoir Moins'
    }else if(e.innerHTML == 'Savoir Moins'){
        e.innerHTML = "Savoir Plus"
    }

}

function delEx(id){
    let WIN = remote.getCurrentWindow()
    let options = {}
    options.buttons = ["Oui","Non"]
    options.message = "Etes-vous sûr de vouloir supprimer cet exemplaire ?"
    dialog.showMessageBox(WIN, options).then( res => {
        if(res.response === 0){
            exemplaires.delById(id);
            window.location.reload();
            new Notification('Notification!', {
                body: 'Exemplaire supprimé avec succès !'
              })
        }
    })
    
}

function delLivre(id){
    let WIN = remote.getCurrentWindow()
    let options = {}
    options.buttons = ["Oui","Non"]
    options.message = "Etes-vous sûr de vouloir supprimer ce livre ?"
    dialog.showMessageBox(WIN, options).then( res => {
        if(res.response === 0){
            livres.delById(id);
            window.location.reload();
            new Notification('Notification!', {
                body: 'Livre supprimé avec succès !'
            })
        }
    })
}

function showAdherents(){
    ipcRenderer.send('show-adhs', 'hello')
}

function showLivres(){
    ipcRenderer.send('show-livres', 'hello')
}