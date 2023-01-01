$(document).ready(function(){
    $.ajax({

        method: 'GET',
        url: 'http://localhost:3000/emprunts'

    }).then(function(response){
        let ide, dateE, etat, dateP, dateR, ida, idex,nom, titre;
        var $cards_holder = $('#cards-holder')
        $cards_holder.empty();
        var $card, $card_header, $card_body, $card_title, $card_text, $card_all, $card_body2, $card_title2,
        $card_title2_1, $card_title2_2, $card_title2_3, $card_title2_4, $card_title2_5, $card_btn_del, $card_btn_ter, $card_list, $card_list_item, $card_list_item_p, $card_list_item_etat, $card_list_item_btn, $card_btn
        
        
        response.forEach(function(item){

            

            if(ide != item.IDEmprunt){

                ide = item.IDEmprunt;
                dateE = item.DateEmprunt;
                etat = item.EtatEmprunt;
                dateP = item.DatePrecis;
                dateR = item.DateRetour;
                ida = item.AdherentID;
                idex= item.ExemplaireID;
                nom = item.Nom_Ad;
                titre = item.Titre;

                if(dateR == null) dateR = 'Pas encore entree !'

                try{
                    //formatDate
                }catch(err){console.log(err)}                

                //card compenents
                $card = $('<div class="card bg-light mb-3" style="max-width:98%; margin: 0 auto; text-align: center;"></div>')
                $card_header = $('<h4 class="card-header"></h4>').html('Emprunt numéro : '+ide)
                $card_body = $('<div class="card-body"></div>')
                $card_title = $('<h4 class="card-title"></h4>').html('Bénéficiaire : '+nom)
                $card_text = $('<h4 class="card-title"></h4>').html('Livre Emprunté : '+titre)
                //appending card body
                $card_body.append([$card_title, $card_text])
                $card_all = $('<div class="collapse" id="details'+ide+'"></div>')
                $card_body2 = $('<div class="card-body"></div>')
                $card_title2 = $('<h4 class="card-title"></h4>').html('Exemplaire Emprunté : '+idex)
                $card_title2_1 = $('<h4 class="card-title"></h4>').html('Numéro de bénéficiaire : '+ida)
                $card_title2_2 = $('<h4 class="card-title"></h4>').html('Date d\'\emprunt : '+dateE)
                $card_title2_3 = $('<h4 class="card-title"></h4>').html('Date Précisée  de retour : '+dateP)
                $card_title2_4 = $('<h4 class="card-title"></h4>').html('Date réelle de retour : '+dateR)
                $card_title2_5 = $('<h4 class="card-title"></h4>').html('Etat d\'\emprunt : '+etat)
                //appending card body
                $card_body2.append([$card_title2, $card_title2_1, $card_title2_2, $card_title2_3, $card_title2_4, $card_title2_5])
                

                $card_btn_del = $('<div class="card-footer btn btn-warning bg-secondary text-white collapse" id="details'+ide+'" onclick="ann('+ide+')">Annuler cet emprunt</div>')
                $card_btn_ter = $('<div class="card-footer btn btn-warning bg-secondary text-white collapse" id="details'+ide+'" onclick="ter('+ide+')" >Terminer cet emprunt</div>')

                $card_all.append([$card_body2])

                
                $card_btn = $('<div class="card-footer btn btn-primary bg-secondary text-white"></div>').html('Savoir Plus').attr('data-toggle', 'collapse').attr('data-target', '#details'+ide).attr('onclick', 'heyLivre(this)')
                

                if(item.EtatEmprunt === 'En cours'){
                    //appending the card
                $card.append([$card_header, $card_body, $card_all, $card_btn_del, $card_btn_ter, $card_btn])
                }else{
                    $card.append([$card_header, $card_body, $card_all, $card_btn])
                }
                
                

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

    $('#form_search').submit(function(){

        

    })

    $.ajax({

        method: 'GET',
        url: 'http://localhost:3000/SearchEmp'

    }).then(function(response){
        let ide, dateE, etat, dateP, dateR, ida, idex,nom, titre;
        var $cards_holder = $('#cards-holder')
        $cards_holder.empty();

        if(Object.entries(response).length === 0){
            var $card = $('<center><h3>Aucune Resultat</h3></center>')
                $cards_holder.append($card)
        }

        var $card, $card_header, $card_body, $card_title, $card_text, $card_all, $card_body2, $card_title2,
        $card_title2_1, $card_title2_2, $card_title2_3, $card_title2_4, $card_title2_5, $card_btn_del, $card_btn_ter, $card_list, $card_list_item, $card_list_item_p, $card_list_item_etat, $card_list_item_btn, $card_btn
        
        
        response.forEach(function(item){

            

            if(ide != item.IDEmprunt){

                ide = item.IDEmprunt;
                dateE = item.DateEmprunt;
                etat = item.EtatEmprunt;
                dateP = item.DatePrecis;
                dateR = item.DateRetour;
                ida = item.AdherentID;
                idex= item.ExemplaireID;
                nom = item.Nom_Ad;
                titre = item.Titre;

                if(dateR == null) dateR = 'Pas encore entree !'

                try{
                    //formatDate
                }catch(err){console.log(err)}                

                //card compenents
                $card = $('<div class="card bg-light mb-3" style="max-width:98%; margin: 0 auto; text-align: center;"></div>')
                $card_header = $('<h4 class="card-header"></h4>').html('Emprunt numéro : '+ide)
                $card_body = $('<div class="card-body"></div>')
                $card_title = $('<h4 class="card-title"></h4>').html('Bénéficiaire : '+nom)
                $card_text = $('<h4 class="card-title"></h4>').html('Livre Emprunté : '+titre)
                //appending card body
                $card_body.append([$card_title, $card_text])
                $card_all = $('<div class="collapse" id="details'+ide+'"></div>')
                $card_body2 = $('<div class="card-body"></div>')
                $card_title2 = $('<h4 class="card-title"></h4>').html('Exemplaire Emprunté : '+idex)
                $card_title2_1 = $('<h4 class="card-title"></h4>').html('Numéro de bénéficiaire : '+ida)
                $card_title2_2 = $('<h4 class="card-title"></h4>').html('Date d\'\emprunt : '+dateE)
                $card_title2_3 = $('<h4 class="card-title"></h4>').html('Date Précisée  de retour : '+dateP)
                $card_title2_4 = $('<h4 class="card-title"></h4>').html('Date réelle de retour : '+dateR)
                $card_title2_5 = $('<h4 class="card-title"></h4>').html('Etat d\'\emprunt : '+etat)
                //appending card body
                $card_body2.append([$card_title2, $card_title2_1, $card_title2_2, $card_title2_3, $card_title2_4, $card_title2_5])

                $card_btn_del = $('<div class="card-footer btn btn-warning bg-secondary text-white collapse" id="details'+ide+'" onclick="ann('+ide+')">Annuler cet emprunt</div>')
                $card_btn_ter = $('<div class="card-footer btn btn-warning bg-secondary text-white collapse" id="details'+ide+'" onclick="ter('+ide+')">Terminer cet emprunt</div>')

                $card_all.append([$card_body2])

                
                $card_btn = $('<div class="card-footer btn btn-primary bg-secondary text-white"></div>').html('Savoir Plus').attr('data-toggle', 'collapse').attr('data-target', '#details'+ide).attr('onclick', 'heyLivre(this)')
                

                
                //appending the card
                $card.append([$card_header, $card_body, $card_all, $card_btn_del, $card_btn_ter, $card_btn])

                //appending the whole card to card holder
                $cards_holder.append($card)
            }else{

                    // $card_list_item = $('<li class="list-group-item d-flex justify-content-between align-items-center"></li>')
                    // $card_list_item_p = $('<p></p>').html()
                    // $card_list_item_etat = $('<p></p>').html()
                    // $card_list_item_btn = $('<button class="btn btn-primary bg-secondary text-white">Detruire</button>')
                    // $card_list_item.append($card_list_item_p, $card_list_item_etat, $card_list_item_btn)
                    // $card_list.append($card_list_item)


            }



        })

        //function heyLivre
    })
})