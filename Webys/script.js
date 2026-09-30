let date = new Date();

let heure = date.getHours();
let minutes = date.getMinutes();

if (minutes < 10) {
    minutes = "0" + minutes;
}

document.querySelectorAll(".heure").forEach(function(element) {
    element.textContent = heure + ":" + minutes;
});

// Ouvre la fenêtre
document.getElementById("nouveau-message").onclick = function() {
    document.getElementById("fenetre-message").style.display = "block";
};

// Ferme la fenêtre
document.getElementById("fermer-message").onclick = function() {
    document.getElementById("fenetre-message").style.display = "none";
};