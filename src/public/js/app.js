//JQuery functions being called down bellow
$(document).ready(function(){

    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/livres'
    }).then(function(response){
        var $cards_holder = $('#cards-holder')
        response.forEach(function(item){
            var $card = $('<div class="card bg-light mb-3" style="max-width:98%; margin: 0 auto; text-align: center;"></div>')
            var $card_header = $('<h4 class="card-header"></h4>').html(item.Titre)
            var $card_body = $('<div class="card-body"></div>')
            var $card_title = $('<h4 class="card-title"></h4>').html(item.Auteur)
            var $card_text = $('<p class="card-text"></p>').html(item.Categorie)
            var $card_btn = $('<div class="card-footer btn-primary bg-secondary text-white"></div>').html('Consulter Etat')

            //appending card body
            $card_body.append([$card_title, $card_text])
            //appending the card
            $card.append([$card_header, $card_body, $card_btn])

            //appending the whole card to card holder
            $cards_holder.append($card)
        })
    })

});

$(document).ready(function(){

    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/SearchLivre'
    }).then(function(response){
        var $cards_holder = $('#cards-holder')
        response.forEach(function(item){
            var $card = $('<div class="card bg-light mb-3" style="max-width:98%; margin: 0 auto; text-align: center;"></div>')
            var $card_header = $('<h4 class="card-header"></h4>').html(item.Titre)
            var $card_body = $('<div class="card-body"></div>')
            var $card_title = $('<h4 class="card-title"></h4>').html(item.Auteur)
            var $card_text = $('<p class="card-text"></p>').html(item.Categorie)
            var $card_btn = $('<div class="card-footer btn-primary bg-secondary text-white"></div>').html('Consulter Etat')

            //appending card body
            $card_body.append([$card_title, $card_text])
            //appending the card
            $card.append([$card_header, $card_body, $card_btn])

            //appending the whole card to card holder
            $cards_holder.append($card)
        })
    })

});