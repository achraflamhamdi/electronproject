//JQuery functions being called down bellow
$(document).ready(function(){

    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/livres'
    }).then(function(response){
        let idl, tite, auteur, categorie;
        var $cards_holder = $('#cards-holder')
        var $modals_holder = $('#modals-holder')
        $cards_holder.empty();
        response.forEach(function(item){

            idl = item.IDLivre;
            titre = item.Titre;
            auteur = item.Auteur;
            categorie = item.Categorie;

            //card compenents
            var $card = $('<div class="card bg-light mb-3" style="max-width:98%; margin: 0 auto; text-align: center;"></div>')
            var $card_header = $('<h4 class="card-header"></h4>').html(item.Titre)
            var $card_body = $('<div class="card-body"></div>')
            var $card_title = $('<h4 class="card-title"></h4>').html(item.Auteur)
            var $card_text = $('<p class="card-text"></p>').html(item.Categorie)
            var $card_btn = $('<div class="card-footer btn-primary bg-secondary text-white"></div>').html('Savoir Plus').attr('data-toggle', 'modal'+idl).attr('data-target', '#myModal'+idl).attr('onclick', 'heyLivre('+idl+')')
            

            //appending card body
            $card_body.append([$card_title, $card_text])
            //appending the card
            $card.append([$card_header, $card_body, $card_btn])

            //appending the whole card to card holder
            $cards_holder.append($card)


            // //modal compenents
            // var $modal = $('<div class="" id="myModal"></div>').attr('class', 'modal'+idl).attr('id', 'myModal'+idl)

            // var $modal_dialog = $('<div class="modal-dialog" role="document"></div')

            // var $modal_content = $('<div class="modal-content"></div>')

            // var $modal_header = $('<div class="modal-header"></div>')

            // var $modal_title = $('<h5 class="modal-title"></h5>').html(titre)

            // var $modal_croix = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span>&times;</button>')

            // var $modal_body = $('<div class="modal-body"></div>').html(categorie)

            // var $modal_footer = $('<div class="modal-footer"></div>')

            // var $modal_footer_btn = $('<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>')

            // $modal_footer.append($modal_footer_btn)
            
            // $modal_header.append([$modal_title, $modal_croix])

            // $modal_content.append([$modal_header, $modal_body, $modal_footer])

            // $modal_dialog.append($modal_content)

            // $modal.append($modal_dialog)


            // //appending the whole modal to modals holder
            // $modals_holder.append($modal)

        })

        //function heyLivre
    })

    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/SearchLivre'
    }).then(function(response){
        var $cards_holder = $('#cards-holder')
        $cards_holder.empty();

        if(Object.entries(response).length === 0){
            var $card = $('<center><h3>Aucune Resultat</h3></center>')
                $cards_holder.append($card)
        }
        response.forEach(function(item){

            if(item == null){
                
            }

            var $card = $('<div class="card bg-light mb-3" style="max-width:98%; margin: 0 auto; text-align: center;"></div>')
            var $card_header = $('<h4 class="card-header"></h4>').html(item.Titre)
            var $card_body = $('<div class="card-body"></div>')
            var $card_title = $('<h4 class="card-title"></h4>').html(item.Auteur)
            var $card_text = $('<p class="card-text"></p>').html(item.Categorie)
            var $card_btn = $('<div class="card-footer btn-primary bg-secondary text-white"></div>').html('Savoir Plus')

            //appending card body
            $card_body.append([$card_title, $card_text])
            //appending the card
            $card.append([$card_header, $card_body, $card_btn])

            //appending the whole card to card holder
            $cards_holder.append($card)
        })
    })

    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/heyLivre'
    }).then(function(response){
        //var $cards_holder = $('#cards-holder')
        //$cards_holder.empty();

        if(Object.entries(response).length === 0){
            var $card = $('<center><h3>Aucune Resultat</h3></center>')
                $cards_holder.append($card)
        }
        response.forEach(function(item){

            if(item == null){
                
            }

            
        })
    })

});

