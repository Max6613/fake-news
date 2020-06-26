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

//_____________________________________________
// //création nouvelles regex
// jQuery.validator.addMethod(
//     "regexName",
//     function (value, element, regexp) {
//         if (regexp.constructor != RegExp){
//             regexp = new RegExp(regexp);
//         } else if (regexp.global){
//             regexp.lastIndex = 0;
//             return this.optional(element) || regexp.test(value);
//         }
//     }, "Ne correspond pas à un nom"
// );
//
// jQuery.extend(jQuery.validator.messages, {
//    required: "",
//    email: "",
//     maxlength: "",
//
// });

//Affichage de la modal de réussite
function buildModal(){

}

function errorMess(inputs){
    if (inputs.length > 0){
        console.log("erreur");
        let error = true;
        //Effacage champs invalides
        for (let i = 0; i < inputs.length; i++){
            $("#"+inputs[i]).val("");
        }
    } else{
        console.log("pas d'erreur");
        buildModal();
    }
    console.log(inputs);
}

function formVerif(){
    let inputs = {"name": $("#name"), "email": $("#email"), "mess": $("#mess")};
    let errors = [];

    let nameRegex = /^[a-zA-Z-']+$/;
    // let emailRegex = new RegExp(/^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    let emailRegex = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]+.[a-z]{2,6}$/);

    // if (inputs["name"].val() !== "" && nameRegex.test(inputs["name"].val()) &&
    //     inputs["email"].val() !== "" && emailRegex.test(inputs["email"].val()) &&
    //     inputs["mess"].val() !== ""){
    //     //valide
    //     console.log("champs valides");
    // } else {
    //     console.log("champs invalides");
    // }

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
    errorMess(errors);



    //
    // let nameRegex = /^[a-zA-Z-']+$/;
    // console.log(nameRegex.test("maxime")); //ok
    // console.log(nameRegex.test("MaximeFOntana"));
    //
    // let emailRegex = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]+.[a-z]{2,6}$/);
    // console.log(emailRegex.test("uneadresse@gmail.com"));


    // /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/
    // /^[a-zA-Z-']+$/

    // /^[a-zA-Z\-]+$/

    // $("#contact").validate({
    //     rules: {
    //         "name":{
    //             "required": true,
    //             "regexName": /^[a-zA-Z\-]+$/
    //         },
    //         "email":{
    //             "required": true,
    //             "email": true,
    //             "maxlength": 255
    //         },
    //         "mess":{
    //             "required": true,
    //         }
    //     }
    // });
}