const ipcRenderer = require('electron').ipcRenderer;

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

function heyLivre(n){
    ipcRenderer.send('heyLivre', n)

}