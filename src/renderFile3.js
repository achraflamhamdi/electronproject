const ipcRenderer = require('electron').ipcRenderer;
const {remote} = require('electron')
const dialog   = remote.dialog
let emprunts = require('./server/models/emprunt')
let exemplaires = require('./server/models/exemplaire')

let cri;
let form = document.getElementById('form_search');

form.addEventListener('submit', function(){
    cri = document.getElementById('SearchWord')
    ipcRenderer.send('Search-emp', cri.value)
    cri = null
})

function tout(){
    ipcRenderer.send('Search-emp', 'tout')
}

function heyLivre(e){
    
    if(e.innerHTML == 'Savoir Plus'){
        e.innerHTML = 'Savoir Moins'
    }else if(e.innerHTML == 'Savoir Moins'){
        e.innerHTML = "Savoir Plus"
    }

}

function ann(id){
    let WIN = remote.getCurrentWindow()
    let options = {}
    options.buttons = ["Oui","Non"]
    options.message = "Etes-vous sûr de vouloir annuler cet emprunt ?"
    dialog.showMessageBox(WIN, options).then( res => {
        emprunts.annEmprunt(id);
        window.location.reload();
    })
}

var idemp;

function ter(id){
    // let WIN = remote.getCurrentWindow()
    // let options = {}
    // options.buttons = ["Oui","Non"]
    // options.message = "Etes-vous sûr de vouloir supprimer ce livre ?"
    // dialog.showMessageBox(WIN, options).then( res => {
    //     if(res.response === 0){
    //         livres.delById(id);
    //         window.location.reload();
    //     }
    // })

    idemp = id;
    
    $('#modal-title').html('Terminer l\'\emprunt n : '+id)

    $('#myModal').modal('show');


    
}

function delEmp(){
    var date = document.getElementById("DatePre").value;
    if(date == '') {
        new Notification('Erreur', {
            body: 'Vous n\'\avez pas entrer un date !'
          })
        displayNotification('');
        return;
    }
    emprunts.terEmprunt(idemp, date);

    new Notification('Notification', {
        body: 'Succès !'
      })
    
    $('#myModal').modal('hide');
    window.location.reload();
}