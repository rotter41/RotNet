let novX = 0, novY = 0, startX = 0, startY = 0;
let poradiPC = 0, poradiSW = 0, poradiRouter = 0;
let oknoPC = [], zrusitOknPC = [], PC = [], IP_PC = [], MASK_PC = [], GATEWAY_PC = [], OkBt1 = [], IPaddressPC = [], MaskPC = [], gatewayPC = [];
let provedlo

document.getElementById("pridatPC").addEventListener("click", () => {
    poradiPC++
    const lokalniPoradi = poradiPC;
    novyPrvek = document.createElement("div"); 
    novyPrvek.textContent = "PC " + poradiPC;
    PC[poradiPC] = novyPrvek
    PC[poradiPC].classList.add("PC");
    document.getElementById("pracProstor").appendChild(PC[poradiPC]);

    //vytvořeni okna

    novyOk = document.createElement("div")
    novyOk.classList.add("OKNO");
    oknoPC[poradiPC] = novyOk;
    oknoPC[poradiPC].id = "PC" + poradiPC;
    document.getElementById("pracProstor").appendChild(oknoPC[poradiPC]);
    oknoPC[poradiPC].style.opacity = 0

    let cancel = document.createElement("div");
    cancel.textContent = "X"
    zrusitOknPC[poradiPC] = cancel;
    zrusitOknPC[poradiPC].classList.add("ZRUSIT");

    zrusitOknPC[poradiPC].addEventListener("click", () => {
        oknoPC[lokalniPoradi].style.opacity = 0; 
    });

    oknoPC[poradiPC].appendChild(zrusitOknPC[poradiPC]);

    zprava = document.createElement("div")
    zprava.classList.add("zprava");
    zprava.textContent = "PC " + poradiPC
    oknoPC[poradiPC].appendChild(zprava);

    oknoPC[poradiPC].addEventListener("mousedown", mysDole);

    PC[poradiPC].addEventListener("dblclick", () => {
        oknoPC[lokalniPoradi].style.opacity = 1
    })

    const textbox = document.createElement("input");
    textbox.type = "text"
    textbox.placeholder = "IP address"
    IP_PC[poradiPC] = textbox
    IP_PC[poradiPC].id = "IP_PC" + lokalniPoradi; 
    oknoPC[poradiPC].appendChild(IP_PC[poradiPC])

    const textbox2 = document.createElement("input");
    textbox2.type = "text"
    textbox2.placeholder = "Subnet Mask"
    MASK_PC[poradiPC] = textbox2
    MASK_PC[poradiPC].id = "MASK_PC" + lokalniPoradi; 
    oknoPC[poradiPC].appendChild(MASK_PC[poradiPC])

    const textbox3 = document.createElement("input");
    textbox3.type = "text"
    textbox3.placeholder = "Gateway"
    GATEWAY_PC[poradiPC] = textbox3
    GATEWAY_PC[poradiPC].id = "GATEWAY_PC" + lokalniPoradi; 
    oknoPC[poradiPC].appendChild(GATEWAY_PC[poradiPC])

    const bt1 = document.createElement("div");
    bt1.textContent = "OK"
    bt1.classList.add("bt1");
    OkBt1[poradiPC] = bt1
    OkBt1[poradiPC].id = "OKNO_OK" + lokalniPoradi; 
    oknoPC[poradiPC].appendChild(OkBt1[poradiPC])

    OkBt1[poradiPC].addEventListener("click", () =>
    {
        IPaddressPC = IP_PC[poradiPC].value
        console.log("Ip pc" + poradiPC + ": " + IPaddressPC)
        MaskPC = MASK_PC[poradiPC].value
        console.log("Mask pc" + poradiPC + ": " + MaskPC)
        gatewayPC = GATEWAY_PC[poradiPC].value
        console.log("Default gateway pc" + poradiPC + ": " + gatewayPC)
    });

    PC[poradiPC].addEventListener("mousedown", mysDole);
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
