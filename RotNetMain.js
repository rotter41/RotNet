let novX = 0, novY = 0, startX = 0, startY = 0;
let poradiPC = 0, poradiSW = 0, poradiRouter = 0;

document.getElementById("pridatPC").addEventListener("click", () => {
    poradiPC++
    const novyPrvek = document.createElement("div"); 
    novyPrvek.textContent = "PC " + poradiPC;
    novyPrvek.classList.add("PC");
    document.getElementById("pracProstor").appendChild(novyPrvek);

    //vytvořeni okna

    novyOk = document.createElement("div");
    novyOk.classList.add("OKNO");
    document.getElementById("pracProstor").appendChild(novyOk);
    novyOk.style.opacity = 0

    const cancel = document.createElement("div");
    cancel.textContent = "X"
    cancel.classList.add("ZRUSIT" );
    cancel.addEventListener("click" , () =>
    {
        novyOk.style.opacity = 0
    })
    novyOk.appendChild(cancel);

    novyOk.addEventListener("mousedown", mysDole);

    novyPrvek.addEventListener("dblclick", () => {
        novyOk.style.opacity = 1
    })

    novyPrvek.addEventListener("mousedown", mysDole);
});

document.getElementById("pridatSW").addEventListener("click", () => {
    poradiSW++
    const novyPrvek = document.createElement("div"); 
    novyPrvek.textContent = "Switch " + poradiSW;
    novyPrvek.classList.add("SW");
    document.getElementById("pracProstor").appendChild(novyPrvek);

    novyPrvek.addEventListener("mousedown", mysDole);
});

document.getElementById("pridatRoutr").addEventListener("click", () => {
    poradiRouter++
    const novyPrvek = document.createElement("div");
    novyPrvek.textContent = "Router " + poradiRouter;
    novyPrvek.classList.add("Router");
    document.getElementById("pracProstor").appendChild(novyPrvek);

    novyPrvek.addEventListener("mousedown", mysDole);
});

function mysDole(e) {
    const prvek = e.target;  
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener("mousemove", mysPohyb);
    document.addEventListener("mouseup", mysNahore);

    function mysPohyb(e) {
        novX = startX - e.clientX;
        novY = startY - e.clientY;

        startX = e.clientX;
        startY = e.clientY;

        prvek.style.top = prvek.offsetTop - novY + "px";
        prvek.style.left = prvek.offsetLeft - novX + "px";
    }

    function mysNahore(e) {
        document.removeEventListener("mousemove", mysPohyb);
    }

}


