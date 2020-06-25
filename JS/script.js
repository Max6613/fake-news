// affiche ou masque le menu nav en fonction de l'etat de la checkbox'
$("input[name=burger-check]").change(function () {
    if ($(this).is(":checked")){
        console.log("dis block");
        $("#main-menu").css("flex-basis", "300px");
    } else {
        console.log("dis none");
        $("#main-menu").css("flex-basis", "0");
    }
});
