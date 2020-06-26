// affiche ou masque le menu nav en fonction de l'etat de la checkbox'
$("input[name=burger-check]").change(function () {
    if ($(this).is(":checked")){
        console.log("dis block");
        $("#main-menu").css("flex-basis", "300px");
        //TODO empecher scroll vertical (JS?) et horizontal (CSS?)
        $("body").css("overflow", "hidden");
    } else {
        console.log("dis none");
        $("#main-menu").css("flex-basis", "0");
        $("body").css("overflow", "auto");
    }
});



//____________Form contact + modal____________
//Supprime les message d'erreur au focus
function delLabel(name) {
    $("label[for=" + name).remove();
}

$("input[name=name]").focus(function () {
    delLabel(this.getAttribute("name"));
});

$("input[name=email]").focus(function () {
    delLabel(this.getAttribute("name"));
});

$("input[name=mess]").focus(function () {
    delLabel(this.getAttribute("name"));
});


//Affiche la modale de réussite
function buildModal(){
    $('body').append("<div class='modal'><p>On vous avait prévenu qu'il allait faire " +
        "tout noir...<br>Votre message en à profité pour s'enfuir jusqu'à chez nous!</p>" +
        "<button onclick='closeModal()'><i class='fas fa-check'></i> J'AI PEUR DU NOIR :'(</button></div>" +
        "<div class='layer'></div>")
}


//Affiche messages d'erreurs
function errorMess(fieldName){
    //Affichage message d'erreur
    let mess = "";

    switch (fieldName){
        case "name":
            mess = "Les lettres anonymes c'est mal !";
            break;
        case "email":
            mess = "Et comment on fait pour vous spammer ?";
            break;
        case "mess":
            mess = "Non mais allô quoi, tu nous écris et tu nous écris rien ?";
            break;
        case "":
            return null;
    }
    $("#" + fieldName).after("<label class='error' for='" + fieldName + "'>" + mess + "</label>")
}


//Efface le contenu des champs en erreur
function delErrorField(inputs, error = true){
    if (inputs.length > 0){
        for (let i = 0; i < inputs.length; i++){
            //Effacage des champs invalide
            $("#" + inputs[i]).val("");

            if (error){
                /* affiche les mess d'erreurs uniquement lors
                   de l'appel via la fonction de verif */
                errorMess(inputs[i]);
            }
        }
    } else{
        console.log("pas d'erreur");//TODO del
        buildModal();
        //Rappel de la fonction pour effacer les champs
        delErrorField(["name", "email", "mess"], false);
    }
}


//Vérifie la validité des entrées
function formVerif(){
    let inputs = {"name": $("#name"), "email": $("#email"), "mess": $("#mess")};
    let errors = [];

    let nameRegex = /^[a-zA-Z-']+$/;
    //TODO améliorer/choisir regex email
    // let emailRegex = new RegExp(/^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    let emailRegex = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]+.[a-z]{2,6}$/);

    for (let key in inputs){
        switch (key){
            case "name":
                if (inputs[key].val() === "" || !nameRegex.test(inputs[key].val())){
                    //Nom invalide
                    errors.push(key);
                }
                break;
            case "email":
                if (inputs["email"].val() === "" || !emailRegex.test(inputs["email"].val())){
                    //mail invalide
                    errors.push(key);
                }
                break;
            case "mess":
                if (inputs["mess"].val() === ""){
                    //message invalide
                    errors.push(key);
                }
                break;
        }
    }
    delErrorField(errors);
}


//Retire la modal du html
function closeModal() {
    console.log("closeModal");
    $(".modal").remove();
    $(".layer").remove();
}