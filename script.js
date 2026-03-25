document.addEventListener("DOMContentLoaded", function () { 
    document.getElementById("btn").addEventListener("click", function () {
        // cacher le texte et le bouton
        document.getElementById("texte").style.display = "none";
        document.getElementById("btn").style.display = "none";

        // changer le fond en blanc (ou transparent)
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#fff";

        // montrer l'image surprise seule
        document.getElementById("surprise").style.display = "block";
    });
});