class Model {
    constructor(ID, PageTitle, Action, ActionEvent, Info, BackID, ButtonEvent) {
        this.ID = ID;
        this.PageTitle = PageTitle;
        this.Action = Action;
        this.ActionEvent = ActionEvent;
        this.Info = Info;
        this.BackID = BackID;
        this.ButtonEvent = ButtonEvent;
    }
}

let components = {
    Action1: document.getElementById("ACTION1"),
    Action2: document.getElementById("ACTION2"),
    Action3: document.getElementById("ACTION3"),
    Action4: document.getElementById("ACTION4"),
    Action5: document.getElementById("ACTION5"),
    Info1: document.getElementById("INFO1"),
    Info2: document.getElementById("INFO2"),
    Info3: document.getElementById("INFO3"),
    Info4: document.getElementById("INFO4"),
    Info5: document.getElementById("INFO5"),
    PageTitle: document.getElementById("PAGETITLE"),
    Time: document.getElementById("TIME")
}

let states = {
    ModelLookups: [], // List of lookups for the Model<class>s.
    CurrentModel: null, //Current model being displayed.
    Datas: {
        timerActive: false,
        timer: null,
        callsign: "?",
        ArrCode: "?",
        ArrRwy: "?",
        DepCode: "?",
        DepRwy: "?",
        Cruise: "?",
        Hdg: "?",
        AircraftModel: "?"
    } //contains playerdata like Hdg, Cruise alt, callsign, etc..
}

states.ModelLookups.push(new Model(
    "Menu",
    "Menu",
    ["Aircraft Config", "Route Config", "Quick Panel", "Reference", "Next&#8594;"],
    [() => { utils.setModel("Aircraft Config") }, () => { utils.setModel("Route Config") }, () => { 
        let Q = states.ModelLookups[utils.getArrayID("Quick Panel")];
        Q.Info[0] = "Loading Timer"
        Q.Info[1] = `Hdg ${states.Datas.Hdg}&deg; Cruise ${states.Datas.Cruise}ft`
        Q.Info[2] = `${states.Datas.DepCode} ${states.Datas.DepRwy} &#9654; ${states.Datas.ArrCode} ${states.Datas.ArrRwy}`
        utils.setModel("Quick Panel")
    }, () => { utils.setModel("Reference") }, () => { utils.setModel("Menu (2)") }],
    ["", "", "", "", ""], //&nbsp; must be used instead of spaces in INFOxs to preserve spacing
    "Menu",
    () => { }
))
states.ModelLookups.push(new Model(
    "Quick Panel",
    "Quick Panel",
    ["Timer Toggle", "Timer Reset", "", "", ""],
    [() => { 
        states.Datas.timerActive = !states.Datas.timerActive;
    }, () => { 
        states.Datas.timer = 0;
    }, () => { }, () => { }, () => { }],
    ["X", "X", "X", "", ""],
    "Menu",
    () => { }
))
states.ModelLookups.push(new Model(
    "Menu (2)",
    "Menu (2)",
    ["Credits", "", "", "", ""],
    [() => { utils.setModel("Credits") }, () => {  }, () => { }, () => { }, () => { }],
    ["", "", "", "", ""],
    "Menu",
    () => { }
))
states.ModelLookups.push(new Model(
    "Credits",
    "Credits",
    ["OK", "", "", "", ""],
    [() => { utils.setModel("Menu (2)") }, () => { }, () => { }, () => { }, () => { }],
    ["Inspired and based off of DahbixLP's MCDU", "Built by obscuredc", "", "", "CIDU"],
    "Menu (2)",
    () => { }
))
states.ModelLookups.push(new Model(
    "Routing",
    "Routing",
    ["OK", "", "", "", ""],
    [() => {}, () => { }, () => { }, () => { }, () => { }],
    ["", "", "", "", ""],
    "",
    () => { }
))
states.ModelLookups.push(new Model(
    "Reference",
    "Reference",
    ["Cyprus", "Grindavik", "Izolirani", "Orenji", "Next&#8594;"],
    [() => { utils.setModel("Cyprus") }, () => { utils.setModel("Grindavik") }, () => { utils.setModel("Izolirani") }, () => { utils.setModel("Orenji") }, () => { utils.setModel("Reference (2)") }],
    ["", "", "", "", ""],
    "Menu",
    () => { }
))
states.ModelLookups.push(new Model(
    "Aircraft Config",
    "Aircraft Config",
    ["Set Aircraft Model", "Set Aircraft Callsign", "Aircraft Information", "", ""],
    [() => { components.Info5.innerHTML = "WIP 💀"; }, () => { utils.setModel("Set Aircraft Callsign") }, () => { 
        let T = states.ModelLookups[utils.getArrayID("Aircraft Information")];
        T.Info[0] = `MODEL: ${states.Datas.AircraftModel}`
        T.Info[1] = `CALLSIGN: ${states.Datas.callsign}`
        utils.setModel("Aircraft Information")
    }, () => { }, () => { }],
    ["", "", "", "", ""],
    "Menu",
    () => { }
))
states.ModelLookups.push(new Model(
    "Aircraft Information",
    "Aircraft Information",
    ["OK", "", "", "", ""],
    [() => { utils.setModel("Aircraft Config") }, () => { }, () => { }, () => { }, () => { }],
    ["", "", "", "", ""],
    "Aircraft Config",
    () => { }
))
states.ModelLookups.push(new Model(
    "Set Aircraft Callsign",
    "Set Aircraft Callsign",
    ["Backspace", "Submit", "", "", ""],
    [() => { 
        components.Info2.innerHTML = components.Info2.innerHTML.slice(0, components.Info2.innerHTML.length -1) 
    }, () => {
        states.Datas.callsign = components.Info2.innerHTML;
        states.ModelLookups[utils.getArrayID("Set Aircraft Callsign/Success")].Info[1] = states.Datas.callsign; 
        utils.setModel("Set Aircraft Callsign/Success") 
        }, () => { }, () => { }, () => { }],
    ["TYPE IN CALLSIGN:", "", "", "", ""],
    "Aircraft Config",
    (key) => {
        components.Info2.innerHTML += key;
     }
))
states.ModelLookups.push(new Model(
    "Set Aircraft Callsign/Success",
    "Set Aircraft Callsign/Success",
    ["OK", "", "", "", ""],
    [() => { utils.setModel("Aircraft Config") }, () => { }, () => { }, () => { }, () => { }],
    ["SET CALLSIGN TO:", "", "", "", ""],
    "Aircraft Config",
    () => { }
))
states.ModelLookups.push(new Model(
    "Route Config",
    "Route Config",
    ["Set Flight Path", "Change Flight Options", "Presets", "Reset Flight Path", ""],
    [() => { }, () => { utils.setModel("Change Flight Options") }, () => { /** presets */}, () => { 
        states.Datas.DepCode = "?"; states.Datas.DepRwy = "?"; states.Datas.ArrCode = "?"; states.Datas.ArrRwy = "?"; states.Datas.Cruise = "?"; states.Datas.Hdg = "?";
        utils.setModel("Reset Flight Path")
    }, () => { }],
    ["", "", "", "", ""],
    "Menu",
    () => { }
))
states.ModelLookups.push(new Model(
    "Reset Flight Path",
    "Reset Flight Path",
    ["OK", "", "", "", ""],
    [() => { utils.setModel("Route Config") }, () => { }, () => { }, () => { }, () => { }],
    ["SUCCESSFULLY RESET FLIGHT PATH", "", "", "", ""],
    "Route Config",
    () => { }
))
states.ModelLookups.push(new Model(
    "Change Flight Options",
    "Change Flight Options",
    ["Set Departure Code", "Set Departure Rwy", "Set Arrival Code", "Set Arrival Rwy", "Next&#8594;"],
    [() => { utils.setModel("Set Departure Code") }, () => { utils.setModel("Set Departure Rwy") }, () => { utils.setModel("Set Arrival Code") }, () => { utils.setModel("Set Arrival Rwy") }, () => { utils.setModel("Change Flight Options (2)") }],
    ["", "", "", "", ""],
    "Route Config",
    () => { }
))
states.ModelLookups.push(new Model(
    "Change Flight Options (2)",
    "Change Flight Options (2)",
    ["Set Cruise Altitude", "Set Heading", "", "", ""],
    [()=>{ utils.setModel("Set Cruise Altitude") }, ()=>{ utils.setModel("Set Heading") }, ()=>{}, ()=>{}, ()=>{}],
    ["", "", "", "", ""],
    "Change Flight Options",
    () => {}
))
states.ModelLookups.push(new Model(
    "Set Cruise Altitude",
    "Set Cruise Altitude",
    ["Backspace", "Submit", "", "", ""],
    [() => { components.Info2.innerHTML = components.Info2.innerHTML.slice(0, components.Info2.innerHTML.length - 1) }, () => {
        states.Datas.Cruise = components.Info2.innerHTML;
        states.ModelLookups[utils.getArrayID("Set Cruise Altitude/Success")].Info[1] = states.Datas.Cruise;
        utils.setModel("Set Cruise Altitude/Success")
    }, () => { }, () => { }, () => { }],
    ["TYPE IN CRUISE ALTITUDE:", "", "", "", ""],
    "Change Flight Options (2)",
    (key) => { components.Info2.innerHTML += key }
))
states.ModelLookups.push(new Model(
    "Set Cruise Altitude/Success",
    "Set Cruise Altitude/Success",
    ["OK", "", "", "", ""],
    [() => { utils.setModel("Change Flight Options (2)") }, () => { }, () => { }, () => { }, () => { }],
    ["SET CRUISE ALTITUDE TO:", "", "", "", ""],
    "Change Flight Options (2)",
    () => { }
))
states.ModelLookups.push(new Model(
    "Set Heading",
    "Set Heading",
    ["Backspace", "Submit", "", "", ""],
    [() => { components.Info2.innerHTML = components.Info2.innerHTML.slice(0, components.Info2.innerHTML.length - 1) }, () => {
        states.Datas.Hdg = components.Info2.innerHTML;
        states.ModelLookups[utils.getArrayID("Set Heading/Success")].Info[1] = states.Datas.Hdg;
        utils.setModel("Set Heading/Success")
    }, () => { }, () => { }, () => { }],
    ["TYPE IN HEADING:", "", "", "", ""],
    "Change Flight Options (2)",
    (key) => { components.Info2.innerHTML += key }
))
states.ModelLookups.push(new Model(
    "Set Heading/Success",
    "Set Heading/Success",
    ["OK", "", "", "", ""],
    [() => { utils.setModel("Change Flight Options (2)") }, () => { }, () => { }, () => { }, () => { }],
    ["SET HEADING TO:", "", "", "", ""],
    "Change Flight Options (2)",
    () => { }
))
states.ModelLookups.push(new Model(
    "Set Departure Code",
    "Set Departure Code",
    ["Backspace", "Submit", "", "", ""],
    [() => { components.Info2.innerHTML = components.Info2.innerHTML.slice(0, components.Info2.innerHTML.length - 1) }, () => { 
        states.Datas.DepCode = components.Info2.innerHTML;
        states.ModelLookups[utils.getArrayID("Set Departure Code/Success")].Info[1] = states.Datas.DepCode;
        utils.setModel("Set Departure Code/Success") 
    }, () => { }, () => { }, () => { }],
    ["TYPE IN DEPARTURE AIRPORT CODE:", "", "", "", ""],
    "Change Flight Options",
    (key) => { components.Info2.innerHTML += key }
))
states.ModelLookups.push(new Model(
    "Set Departure Code/Success",
    "Set Departure Code/Success",
    ["OK", "", "", "", ""],
    [() => { utils.setModel("Change Flight Options") }, () => { }, () => { }, () => { }, () => { }],
    ["SET DEPARTURE AIRPORT CODE TO:", "", "", "", ""],
    "Change Flight Options",
    () => { }
))
states.ModelLookups.push(new Model(
    "Set Departure Rwy",
    "Set Departure Rwy",
    ["Backspace", "Submit", "", "", ""],
    [() => { components.Info2.innerHTML = components.Info2.innerHTML.slice(0, components.Info2.innerHTML.length - 1) }, () => {
        states.Datas.DepRwy = components.Info2.innerHTML;
        states.ModelLookups[utils.getArrayID("Set Departure Rwy/Success")].Info[1] = states.Datas.DepRwy;
        utils.setModel("Set Departure Rwy/Success")
    }, () => { }, () => { }, () => { }],
    ["TYPE IN DEPARTURE AIRPORT RUNWAY:", "", "", "", ""],
    "Change Flight Options",
    (key) => { components.Info2.innerHTML += key }
))
states.ModelLookups.push(new Model(
    "Set Departure Rwy/Success",
    "Set Departure Rwy/Success",
    ["OK", "", "", "", ""],
    [() => { utils.setModel("Change Flight Options") }, () => { }, () => { }, () => { }, () => { }],
    ["SET DEPARTURE AIRPORT RUNWAY TO:", "", "", "", ""],
    "Change Flight Options",
    () => { }
))
//ARRIVAL
states.ModelLookups.push(new Model(
    "Set Arrival Code",
    "Set Arrival Code",
    ["Backspace", "Submit", "", "", ""],
    [() => { components.Info2.innerHTML = components.Info2.innerHTML.slice(0, components.Info2.innerHTML.length - 1) }, () => {
        states.Datas.ArrCode = components.Info2.innerHTML;
        states.ModelLookups[utils.getArrayID("Set Arrival Code/Success")].Info[1] = states.Datas.ArrCode;
        utils.setModel("Set Arrival Code/Success")
    }, () => { }, () => { }, () => { }],
    ["TYPE IN ARRIVAL AIRPORT CODE:", "", "", "", ""],
    "Change Flight Options",
    (key) => { components.Info2.innerHTML += key }
))
states.ModelLookups.push(new Model(
    "Set Arrival Code/Success",
    "Set Arrival Code/Success",
    ["OK", "", "", "", ""],
    [() => { utils.setModel("Change Flight Options") }, () => { }, () => { }, () => { }, () => { }],
    ["SET ARRIVAL AIRPORT CODE TO:", "", "", "", ""],
    "Change Flight Options",
    () => { }
))
states.ModelLookups.push(new Model(
    "Set Arrival Rwy",
    "Set Arrival Rwy",
    ["Backspace", "Submit", "", "", ""],
    [() => { components.Info2.innerHTML = components.Info2.innerHTML.slice(0, components.Info2.innerHTML.length - 1) }, () => {
        states.Datas.ArrRwy = components.Info2.innerHTML;
        states.ModelLookups[utils.getArrayID("Set Arrival Rwy/Success")].Info[1] = states.Datas.ArrRwy;
        utils.setModel("Set Arrival Rwy/Success")
    }, () => { }, () => { }, () => { }],
    ["TYPE IN ARRIVAL AIRPORT RUNWAY:", "", "", "", ""],
    "Change Flight Options",
    (key) => { components.Info2.innerHTML += key }
))
states.ModelLookups.push(new Model(
    "Set Arrival Rwy/Success",
    "Set Arrival Rwy/Success",
    ["OK", "", "", "", ""],
    [() => { utils.setModel("Change Flight Options") }, () => { }, () => { }, () => { }, () => { }],
    ["SET ARRIVAL AIRPORT RUNWAY TO:", "", "", "", ""],
    "Change Flight Options",
    () => { }
))
let utils = {
    fetchModel: (id) => {
        return states.ModelLookups.find((val) => val.ID == id)
    },
    displayModel: (model) => {
        //there is a more efficient way, no im not doing it
        components.PageTitle.innerHTML = model.PageTitle;
        components.Action1.innerHTML = model.Action[0];
        components.Action2.innerHTML = model.Action[1];
        components.Action3.innerHTML = model.Action[2];
        components.Action4.innerHTML = model.Action[3];
        components.Action5.innerHTML = model.Action[4];
        components.Info1.innerHTML = model.Info[0];
        components.Info2.innerHTML = model.Info[1];
        components.Info3.innerHTML = model.Info[2];
        components.Info4.innerHTML = model.Info[3];
        components.Info5.innerHTML = model.Info[4];
    },
    TimeWorker: () => {
        if(states.Datas.timerActive == true) states.Datas.timer += 1;
        if(states.CurrentModel.ID == "Quick Panel") components.Info1.innerHTML = `Elapsed Time: ${Math.floor(states.Datas.timer / 60)}min ${states.Datas.timer % 60}sec`;
        components.Time.innerHTML = new Date().toLocaleTimeString('en-US')
        setTimeout(utils.TimeWorker, 1000); //updates once per second
    },
    setModel: (id) => {
        states.CurrentModel = utils.fetchModel(id)
        utils.displayModel(states.CurrentModel)
    },
    getArrayID: (id) => {
        return states.ModelLookups.findIndex((value) => value.ID == id)
    }
}

function beep(freq, len) {
    //Frequency: hz of sound
    //len: length in seconds of sound
    let audioCtx = new AudioContext();
    let osc = audioCtx.createOscillator();
    osc.frequency.value = freq;
    osc.connect(audioCtx.destination)
    osc.start();
    osc.stop(audioCtx.currentTime + len)
}

addEventListener("keydown", (event) => {
    if(!"abcdefghijklmnopqrstuvwxyz0123456789.;[/']-".includes(event.key)) return;
    beep(300, 0.03)
    if("abcdefghijklmnopqrstuvwxyz0123456789".includes(event.key)) states.CurrentModel.ButtonEvent(event.key.toUpperCase());
    else if(event.key == "[") states.CurrentModel.ActionEvent[0]()
    else if (event.key == ";") states.CurrentModel.ActionEvent[1]()
    else if (event.key == ".") states.CurrentModel.ActionEvent[2]()
    else if (event.key == "]") states.CurrentModel.ActionEvent[3]()
    else if (event.key == "'") states.CurrentModel.ActionEvent[4]()
    else if (event.key == "/") utils.setModel(states.CurrentModel.BackID)
    else if (event.key == "-") utils.setModel("Menu")
})