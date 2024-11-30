let novX = 0, novY = 0, startX = 0, startY = 0;
let poradiPC = 0, poradiSW = 0, poradiRouter = 0;
let PC = [], IPaddressPC = [], MaskPC = [], gatewayPC = [], switchConect = [];
let ipDev1 = [], ipDev2 = [], ipDev3 = [], ipDev4 = []
let provedlo

//PC

document.getElementById("pridatPC").addEventListener("click", () => {
    let novyOk
    poradiPC++
    const lokalniPoradi = poradiPC;
    const novyPrvek = document.createElement("div"); 
    novyPrvek.textContent = "PC " + poradiPC;
    PC[lokalniPoradi] = novyPrvek
    novyPrvek.classList.add("PC");
    document.getElementById("pracProstor").appendChild(novyPrvek);

    //vytvořeni okna

    novyOk = document.createElement("div")
    novyOk.classList.add("OKNO");
    novyOk.id = "PC" + poradiPC;
    document.getElementById("pracProstor").appendChild(novyOk);
    novyOk.style.display = "none"

    let cancel = document.createElement("div");
    cancel.textContent = "X"
    cancel.classList.add("ZRUSIT");

    cancel.addEventListener("click", () => {
        novyOk.style.display = "none"
    });

    novyOk.appendChild(cancel);

    zprava = document.createElement("div")
    zprava.classList.add("zprava");
    zprava.textContent = "PC " + poradiPC
    novyOk.appendChild(zprava);

    novyOk.addEventListener("mousedown", mysDole);

    novyPrvek.addEventListener("dblclick", () => {
        novyOk.style.display = "inline"
    })

    const textbox = document.createElement("input");
    textbox.type = "text"
    textbox.placeholder = "IP address"
    textbox.id = "IP_PC" + lokalniPoradi; 
    novyOk.appendChild(textbox)

    const textbox2 = document.createElement("input");
    textbox2.type = "text"
    textbox2.placeholder = "Subnet Mask"
    textbox2.id = "MASK_PC" + lokalniPoradi; 
    novyOk.appendChild(textbox2)

    const textbox3 = document.createElement("input");
    textbox3.type = "text"
    textbox3.placeholder = "Gateway"
    textbox3.id = "GATEWAY_PC" + lokalniPoradi; 
    novyOk.appendChild(textbox3)

    const SWconect = document.createElement("input");
    SWconect.type = "text"
    SWconect.placeholder = "Switch conect"
    SWconect.id = "SWconect" + lokalniPoradi; 
    novyOk.appendChild(SWconect)

    const bt1 = document.createElement("div");
    bt1.textContent = "OK"
    bt1.classList.add("bt1");
    bt1.id = "OKNO_OK" + lokalniPoradi; 
    novyOk.appendChild(bt1)

    const textbox4 = document.createElement("input");
    textbox4.type = "text"
    textbox4.classList.add("pingBox")
    textbox4.placeholder = "Ping device ip address"
    textbox4.id = "PCping" + lokalniPoradi; 
    novyOk.appendChild(textbox4)

    const bt2 = document.createElement("div");
    bt2.textContent = "PING"
    bt2.classList.add("bt1");
    bt2.id = "PINGbt" + lokalniPoradi; 
    novyOk.appendChild(bt2)

    bt1.addEventListener("click", () =>
    {
        IPaddressPC[lokalniPoradi] = textbox.value
        console.log("Ip pc" + lokalniPoradi + ": " + IPaddressPC[lokalniPoradi])
        MaskPC[lokalniPoradi] = textbox2.value
        console.log("Mask pc" + lokalniPoradi + ": " + MaskPC[lokalniPoradi])
        gatewayPC[lokalniPoradi] = textbox3.value
        console.log("Default gateway pc" + poradiPC + ": " + gatewayPC[lokalniPoradi])
        switchConect[lokalniPoradi] = SWconect.value
        console.log("Switch conect" + poradiPC + ": " + switchConect[lokalniPoradi])
    });

    bt2.addEventListener("click", () =>
        {
            try {SWnum = switchConect[lokalniPoradi][2]}
            catch {console.log("No switch")}
            
            try{ if( textbox4.value == ipDev1[SWnum] || textbox4.value == ipDev2[SWnum] || textbox4.value == ipDev3[SWnum] || textbox4.value == ipDev4[SWnum] )
            {
                console.log("PC se propojila")
            }
            else throw new Error
            }
            catch{ console.log("PC se nepropojila")}
        });

    novyPrvek.addEventListener("mousedown", mysDole);
});

//SW

document.getElementById("pridatSW").addEventListener("click", () => {
    let novyOk
    poradiSW++
    const lokalniPoradi = poradiSW
    const novyPrvek = document.createElement("div"); 
    novyPrvek.textContent = "Switch " + poradiSW;
    novyPrvek.classList.add("SW");
    document.getElementById("pracProstor").appendChild(novyPrvek);

    novyOk = document.createElement("div")
    novyOk.classList.add("OKNO");
  
    novyOk.id = "Switch" + lokalniPoradi;
    document.getElementById("pracProstor").appendChild(novyOk);
    novyOk.style.display = "none"

    let cancel = document.createElement("div");
    cancel.textContent = "X"
    cancel.classList.add("ZRUSIT");

    cancel.addEventListener("click", () => {
        novyOk.style.display = "none"
    });

    novyOk.appendChild(cancel);

    zprava = document.createElement("div")
    zprava.classList.add("zprava");
    zprava.textContent = "SW " + lokalniPoradi
    novyOk.appendChild(zprava);

    novyOk.addEventListener("mousedown", mysDole);

    novyPrvek.addEventListener("dblclick", () => {
        novyOk.style.display = "inline"
    })

    const textbox1 = document.createElement("input");
    textbox1.type = "text"
    textbox1.placeholder = "Device1"
    textbox1.id = "DE1_IP_SW" + lokalniPoradi; 
    novyOk.appendChild(textbox1)

    const textbox2 = document.createElement("input");
    textbox2.type = "text"
    textbox2.placeholder = "Device2"
    textbox2.id = "DE2_IP_SW" + lokalniPoradi; 
    novyOk.appendChild(textbox2)

    const textbox3 = document.createElement("input");
    textbox3.type = "text"
    textbox3.placeholder = "Device3"
    textbox3.id = "DE3_IP_SW" + lokalniPoradi; 
    novyOk.appendChild(textbox3)

    const textbox4 = document.createElement("input");
    textbox4.type = "text"
    textbox4.placeholder = "Device4"
    textbox4.id = "DE4_IP_SW" + lokalniPoradi; 
    novyOk.appendChild(textbox4)

    const bt1 = document.createElement("div");
    bt1.textContent = "OK"
    bt1.classList.add("bt1");
    bt1.id = "OKNO_OK" + lokalniPoradi; 
    novyOk.appendChild(bt1)

    bt1.addEventListener("click", () =>
    {
        let SW_DEV1 = textbox1.value, SW_DEV2 = textbox2.value, SW_DEV3 = textbox3.value, SW_DEV4 = textbox4.value

        textbox1.value.trim() === "" ? ipDev1[lokalniPoradi] = "none": ipDev1[lokalniPoradi] = IPaddressPC[SW_DEV1[2]]
        console.log("Switch"+ lokalniPoradi+" device 1 ip address: " + ipDev1[lokalniPoradi])
        textbox2.value.trim() === "" ? ipDev2[lokalniPoradi] = "none": ipDev2[lokalniPoradi] = IPaddressPC[SW_DEV2[2]]
        console.log("Switch"+ lokalniPoradi+" device 2 ip address: " + ipDev2[lokalniPoradi])
        textbox3.value.trim() === "" ? ipDev3[lokalniPoradi] = "none": ipDev3[lokalniPoradi] = IPaddressPC[SW_DEV3[2]]
        console.log("Switch"+ lokalniPoradi+" device 3 ip address: " + ipDev3[lokalniPoradi])
        textbox4.value.trim() === "" ? ipDev4[lokalniPoradi] = "none": ipDev4[lokalniPoradi] = IPaddressPC[SW_DEV4[2]]
        console.log("Switch"+ lokalniPoradi+" device 4 ip address: " + ipDev4[lokalniPoradi])

    });

    novyPrvek.addEventListener("mousedown", mysDole);

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
