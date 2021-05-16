const ipcRenderer = require('electron').ipcRenderer;

function sendForm(event) {
    event.preventDefault() // stop the form from submitting
    let adherent = {
        email :  document.getElementById("email").value,
        pswd : document.getElementById('pwd').value,
    };
    ipcRenderer.send('form-submission', email);
}

let cri = document.getElementById('SearchWord')

cri.addEventListener('input', function(){
    ipcRenderer.send('Search-word', cri.value)
})