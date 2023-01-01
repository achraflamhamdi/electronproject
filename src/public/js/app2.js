$(document).ready(function(){
    $.ajax({

        method: 'GET',
        url: 'http://localhost:3000/adherents'

    }).then(function(response){
        let ida, nom, prenom, email, app;
        var $cards_holder = $('#cards-holder')
        $cards_holder.empty();
        var $card, $card_header, $card_body, $card_title, $card_text, $card_text2, $card_btn_d, $card_all, $card_list, $card_list_item, $card_list_item_p, $card_list_item_etat, $card_list_item_btn, $card_btn
        
        
        response.forEach(function(item){

            

            if(ida != item.IDAdherent){

                ida = item.IDAdherent;
                nom = item.Nom;
                prenom = item.Prenom;
                email = item.Email;
                app = item.APP;
                

                //card compenents
                $card = $('<div class="card bg-light mb-3" style="max-width:98%; margin: 0 auto; text-align: center;"></div>')
                $card_header = $('<h4 class="card-header"></h4>').html(nom+' '+prenom)
                $card_body = $('<div class="card-body"></div>')
                $card_title = $('<h4 class="card-title"></h4>').html('Identifiant N°: '+ida)
                $card_text = $('<p class="card-text"></p>').html('Numéro d\'\appogee : '+ app)
                $card_text2 = $('<p class="card-text"></p>').html('Email : '+email)
                // $card_btn_d = $('<div class="card-footer btn btn-warning bg-secondary text-white"></div>').html('Supprimer cet adherent')
                $card_all = $('<div class="collapse" id="details'+ida+'"></div')
                $card_all.append([$card_text, $card_text2])
                
                $card_btn_d = $('<div class="card-footer btn btn-warning bg-secondary text-white collapse" id="details'+ida+'" onclick="delAdh('+ida+')"></div>').html('Supprimer cet adherent')
                $card_btn = $('<div class="card-footer btn btn-primary bg-secondary text-white"></div>').html('Savoir Plus').attr('data-toggle', 'collapse').attr('data-target', '#details'+ida).attr('onclick', 'heyLivre(this)')
                

                //appending card body
                $card_body.append([$card_title, $card_all])
                //appending the card
                $card.append([$card_header, $card_body, $card_btn_d, $card_btn])

                //appending the whole card to card holder
                $cards_holder.append($card)
            }else{

                    $card_list_item = $('<li class="list-group-item d-flex justify-content-between align-items-center"></li>')
                    $card_list_item_p = $('<p></p>').html()
                    $card_list_item_etat = $('<p></p>').html()
                    $card_list_item_btn = $('<button class="btn btn-primary bg-secondary text-white">Detruire</button>')
                    $card_list_item.append($card_list_item_p, $card_list_item_etat, $card_list_item_btn)
                    $card_list.append($card_list_item)


            }



        })

        //function heyLivre
    })

    $.ajax({

        method: 'GET',
        url: 'http://localhost:3000/SearchAdh'

    }).then(function(response){
        let ida, nom, prenom, email, app;
        var $cards_holder = $('#cards-holder')
        $cards_holder.empty();

        if(Object.entries(response).length === 0){
            var $card = $('<center><h3>Aucune Resultat</h3></center>')
                $cards_holder.append($card)
        }

        var $card, $card_header, $card_body, $card_title, $card_text, $card_text2, $card_btn_d, $card_all, $card_list, $card_list_item, $card_list_item_p, $card_list_item_etat, $card_list_item_btn, $card_btn
        
        
        response.forEach(function(item){

            

            if(ida != item.IDAdherent){

                ida = item.IDAdherent;
                nom = item.Nom;
                prenom = item.Prenom;
                email = item.Email;
                app = item.APP;
                

                //card compenents
                $card = $('<div class="card bg-light mb-3" style="max-width:98%; margin: 0 auto; text-align: center;"></div>')
                $card_header = $('<h4 class="card-header"></h4>').html(nom+' '+prenom)
                $card_body = $('<div class="card-body"></div>')
                $card_title = $('<h4 class="card-title"></h4>').html('Identifiant N°: '+ida)
                $card_text = $('<p class="card-text"></p>').html('Numéro d\'\appogee : '+ app)
                $card_text2 = $('<p class="card-text"></p>').html('Email : '+email)
                // $card_btn_d = $('<div class="card-footer btn btn-warning bg-secondary text-white"></div>').html('Supprimer cet adherent')
                $card_all = $('<div class="collapse" id="details'+ida+'"></div')
                $card_all.append([$card_text, $card_text2])
                
                $card_btn_d = $('<div class="card-footer btn btn-warning bg-secondary text-white collapse" id="details'+ida+'" onclick="delAdh('+ida+')"></div>').html('Supprimer cet adherent')
                $card_btn = $('<div class="card-footer btn btn-primary bg-secondary text-white"></div>').html('Savoir Plus').attr('data-toggle', 'collapse').attr('data-target', '#details'+ida).attr('onclick', 'heyLivre(this)')
                

                //appending card body
                $card_body.append([$card_title, $card_all])
                //appending the card
                $card.append([$card_header, $card_body, $card_btn_d, $card_btn])

                //appending the whole card to card holder
                $cards_holder.append($card)
            }else{

                    $card_list_item = $('<li class="list-group-item d-flex justify-content-between align-items-center"></li>')
                    $card_list_item_p = $('<p></p>').html()
                    $card_list_item_etat = $('<p></p>').html()
                    $card_list_item_btn = $('<button class="btn btn-primary bg-secondary text-white">Detruire</button>')
                    $card_list_item.append($card_list_item_p, $card_list_item_etat, $card_list_item_btn)
                    $card_list.append($card_list_item)


            }



        })

        //function heyLivre
    })
})