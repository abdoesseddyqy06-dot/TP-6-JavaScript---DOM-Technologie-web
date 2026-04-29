let form = document.getElementById("form");
let input = document.getElementById("input");
let liste = document.getElementById("liste");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let texte = input.value;
    if (texte === "") return;

    let li = document.createElement("li");
    li.textContent = texte;
    let btnDone = document.createElement("button");
    btnDone.textContent = "Accomplir";
    btnDone.addEventListener("click", function() {
        li.classList.toggle("done");
    });
    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Supprimer";

    btnDelete.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(btnDone);
    li.appendChild(btnDelete);

    liste.appendChild(li);

    input.value = "";
});
