const path = require('path');
//JQuery functions being called down bellow
$(document).ready(function(){

    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/livres'
    }).then(function(response){
        let idl, titre, auteur, categorie;
        var $cards_holder = $('#cards-holder')
        $cards_holder.empty();
        var $card, $card_header, $card_body, $card_title, $card_text, $card_body2, $card_title2, $card_text2,
            $card_body3, $card_title3, $card_text3, $card_text3_2,
            $card_body4, $card_text4, $card_text4_2, $card_all,
            $card_btn_del, $card_list, $card_list_item, $card_list_item_p, $card_list_item_etat, $card_list_item_btn, $card_btn
        
        
        response.forEach(function(item){

            

            if(idl != item.IDLivre){

                idl = item.IDLivre;
                titre = item.Titre;
                auteur = item.Auteur;
                categorie = item.Categorie;
                

                //card compenents
                $card = $('<div class="card bg-light mb-3" style="max-width:98%; margin: 0 auto; text-align: center;"></div>')
                $card_header = $('<h4 class="card-header"></h4>').html(item.Titre)
                $card_body = $('<div class="card-body"></div>')
                $card_title = $('<h4 class="card-title"></h4>').html(item.Auteur)
                $card_text = $('<p class="card-text"></p>').html(item.Categorie)
                //appending card body
                $card_body.append([$card_title, $card_text])
                $card_all = $('<div class="collapse" id="details'+idl+'"></div>')
                $card_img_div = $('<svg xmlns="http://www.w3.org/2000/svg" class="d-block user-select-none" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 100" style="font-size:1.125rem;text-anchor:middle"></svg>')
                $card_img = $('<img src="" height="318" width="200" />').attr('src', path.join(__dirname, '/img/'+item.Cover))
                $card_img_div.append($card_img)
                $card_body2 = $('<div class="card-body"></div>')
                $card_title2 = $('<h6 class="card-title">Description :</h6>')
                $card_text2 = $('<p class="card-text"></p>').html(item.Descr) //description
                $card_body2.append([$card_title2, $card_text2])
                $card_body3 = $('<div class="card-body"></div>')
                $card_title3 = $('<h6 class="card-title">Emplacement :</h6>')
                $card_text3 = $('<p class="card-text"></p>').html('Section : '+item.Section) //Section
                $card_text3_2 = $('<p class="card-text"></p>').html('Couloir : '+item.Couloir) // Couloir
                $card_body3.append([$card_title3, $card_text3, $card_text3_2])
                $card_body4 = $('<div class="card-body"></div>')
                $card_text4 = $('<p>Mots-Clés :</p>')
                $card_text4_2 = $('<p></p>').html(item.Tags) // tags
                $card_body4.append([$card_text4, $card_text4_2])
                $card_list = $('<ul class="list-group list-group-flush"></ul>')

                //response1.forEach(function(item){
                    $card_list_item = $('<li class="list-group-item d-flex justify-content-between align-items-center"></li>')
                    $card_list_item_p = $('<p></p>').html('Exemplaire : '+item.IDExemplaire)
                    $card_list_item_etat = $('<p></p>').html(item.Etat)
                    $card_list_item_btn = $('<button class="btn btn-primary bg-secondary text-white" onclick="delEx('+item.IDExemplaire+')">Detruire</button>')
                    $card_list_item.append($card_list_item_p, $card_list_item_etat, $card_list_item_btn)
                    $card_list.append($card_list_item)
                //})

                $card_btn_del = $('<div class="card-footer btn btn-warning bg-secondary text-white collapse" id="details'+idl+'" onclick="delLivre('+item.IDLivre+')">Detruire ce livre</div>')

                $card_all.append([$card_img, $card_body2, $card_body3, $card_body4, $card_list])

                $card_btn = $('<div class="card-footer btn btn-primary bg-secondary text-white"></div>').html('Savoir Plus').attr('data-toggle', 'collapse').attr('data-target', '#details'+idl).attr('onclick', 'heyLivre(this)')
                

                
                //appending the card
                $card.append([$card_header, $card_body, $card_all, $card_btn_del, $card_btn])

                //appending the whole card to card holder
                $cards_holder.append($card)
            }else{

                    $card_list_item = $('<li class="list-group-item d-flex justify-content-between align-items-center"></li>')
                    $card_list_item_p = $('<p></p>').html('Exemplaire : '+item.IDExemplaire)
                    $card_list_item_etat = $('<p></p>').html(item.Etat)
                    $card_list_item_btn = $('<button class="btn btn-primary bg-secondary text-white" onclick="delEx('+item.IDExemplaire+')">Detruire</button>')
                    $card_list_item.append($card_list_item_p, $card_list_item_etat, $card_list_item_btn)
                    $card_list.append($card_list_item)


            }



        })

        //function heyLivre
    })

    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/SearchLivre'
    }).then(function(response){
        let idl, titre, auteur, categorie;
        var $cards_holder = $('#cards-holder')
        $cards_holder.empty();

        if(Object.entries(response).length === 0){
            var $card = $('<center><h3>Aucune Resultat</h3></center>')
                $cards_holder.append($card)
        }

        var $card, $card_header, $card_body, $card_title, $card_text, $card_body2, $card_title2, $card_text2,
        $card_body3, $card_title3, $card_text3, $card_text3_2,
        $card_body4, $card_text4, $card_text4_2, $card_all,
        $card_btn_del, $card_list, $card_list_item, $card_list_item_p, $card_list_item_etat, $card_list_item_btn, $card_btn


        response.forEach(function(item){

            if(idl != item.IDLivre){

                idl = item.IDLivre;
                titre = item.Titre;
                auteur = item.Auteur;
                categorie = item.Categorie;
                

                //card compenents
                $card = $('<div class="card bg-light mb-3" style="max-width:98%; margin: 0 auto; text-align: center;"></div>')
                $card_header = $('<h4 class="card-header"></h4>').html(item.Titre)
                $card_body = $('<div class="card-body"></div>')
                $card_title = $('<h4 class="card-title"></h4>').html(item.Auteur)
                $card_text = $('<p class="card-text"></p>').html(item.Categorie)
                //appending card body
                $card_body.append([$card_title, $card_text])
                $card_all = $('<div class="collapse" id="details'+idl+'"></div>')
                $card_img_div = $('<svg xmlns="http://www.w3.org/2000/svg" class="d-block user-select-none" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 100" style="font-size:1.125rem;text-anchor:middle"></svg>')
                $card_img = $('<img src="" height="318" width="200" />').attr('src', path.join(__dirname, '/img/'+item.Cover))
                $card_img_div.append($card_img)
                $card_body2 = $('<div class="card-body"></div>')
                $card_title2 = $('<h6 class="card-title">Description :</h6>')
                $card_text2 = $('<p class="card-text"></p>').html(item.Descr) //description
                $card_body2.append([$card_title2, $card_text2])
                $card_body3 = $('<div class="card-body"></div>')
                $card_title3 = $('<h6 class="card-title">Emplacement :</h6>')
                $card_text3 = $('<p class="card-text"></p>').html('Section : '+item.Section) //Section
                $card_text3_2 = $('<p class="card-text"></p>').html('Couloir : '+item.Couloir) // Couloir
                $card_body3.append([$card_title3, $card_text3, $card_text3_2])
                $card_body4 = $('<div class="card-body"></div>')
                $card_text4 = $('<p>Mots-Clés :</p>')
                $card_text4_2 = $('<p></p>').html(item.Tags) // tags
                $card_body4.append([$card_text4, $card_text4_2])
                $card_list = $('<ul class="list-group list-group-flush"></ul>')

                //response1.forEach(function(item){
                    $card_list_item = $('<li class="list-group-item d-flex justify-content-between align-items-center"></li>')
                    $card_list_item_p = $('<p></p>').html('Exemplaire : '+item.IDExemplaire)
                    $card_list_item_etat = $('<p></p>').html(item.Etat)
                    $card_list_item_btn = $('<button class="btn btn-primary bg-secondary text-white" onclick="delEx('+item.IDExemplaire+')">Detruire</button>')
                    $card_list_item.append($card_list_item_p, $card_list_item_etat, $card_list_item_btn)
                    $card_list.append($card_list_item)
                //})

                $card_btn_del = $('<div class="card-footer btn btn-warning bg-secondary text-white collapse" id="details'+idl+'" onclick="delLivre('+item.IDLivre+')">Detruire ce livre</div>')

                $card_all.append([$card_img, $card_body2, $card_body3, $card_body4, $card_list])

                $card_btn = $('<div class="card-footer btn btn-primary bg-secondary text-white"></div>').html('Savoir Plus').attr('data-toggle', 'collapse').attr('data-target', '#details'+idl).attr('onclick', 'heyLivre(this)')
                

                
                //appending the card
                $card.append([$card_header, $card_body, $card_all, $card_btn_del, $card_btn])

                //appending the whole card to card holder
                $cards_holder.append($card)
            }else{

                    $card_list_item = $('<li class="list-group-item d-flex justify-content-between align-items-center"></li>')
                    $card_list_item_p = $('<p></p>').html('Exemplaire : '+item.IDExemplaire)
                    $card_list_item_etat = $('<p></p>').html(item.Etat)
                    $card_list_item_btn = $('<button class="btn btn-primary bg-secondary text-white" onclick="delEx('+item.IDExemplaire+')">Detruire</button>')
                    $card_list_item.append($card_list_item_p, $card_list_item_etat, $card_list_item_btn)
                    $card_list.append($card_list_item)


            }
        })
    })

    
    $('#btnAdh').click(function(){

        $.ajax({

            method: 'GET',
            url: 'http://localhost:3000/adherents'

        }).then(function(response){
            let ida, nom, prenom, email;
            var $cards_holder = $('#cards-holder')
            $cards_holder.empty();
            var $card, $card_header, $card_body, $card_title, $card_text, $card_list, $card_list_item, $card_list_item_p, $card_list_item_etat, $card_list_item_btn, $card_btn
            
            
            response.forEach(function(item){

                

                if(ida != item.IDAdherent){

                    ida = item.IDAdherent;
                    nom = item.Nom;
                    prenom = item.Prenom;
                    email = item.Email;
                    

                    //card compenents
                    $card = $('<div class="card bg-light mb-3" style="max-width:98%; margin: 0 auto; text-align: center;"></div>')
                    $card_header = $('<h4 class="card-header"></h4>').html(nom+' '+prenom)
                    $card_body = $('<div class="card-body"></div>')
                    $card_title = $('<h4 class="card-title"></h4>').html(email)
                    $card_text = $('<p class="card-text"></p>')
                    $card_list = $('<ul class="list-group list-group-flush collapse" id="details'+ida+'"></ul>')

                    //response1.forEach(function(item){
                        $card_list_item = $('<li class="list-group-item d-flex justify-content-between align-items-center"></li>')
                        $card_list_item_p = $('<p></p>').html()
                        $card_list_item_etat = $('<p></p>').html()
                        $card_list_item_btn = $('<button class="btn btn-primary bg-secondary text-white">Detruire</button>')
                        $card_list_item.append($card_list_item_p, $card_list_item_etat, $card_list_item_btn)
                        $card_list.append($card_list_item)
                    //})
                    $card_btn = $('<div class="card-footer btn btn-primary bg-secondary text-white"></div>').html('Savoir Plus').attr('data-toggle', 'collapse').attr('data-target', '#details'+ida).attr('onclick', 'heyLivre(this)')
                    

                    //appending card body
                    $card_body.append([$card_title, $card_text])
                    //appending the card
                    $card.append([$card_header, $card_body, $card_list, $card_btn])

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

});

