function randomize() {
    var mainSettings = document.getElementsByClassName('setting');
    var offOron = document.getElementsByClassName('offOn');
    var formMults = document.getElementsByClassName('expMult');
    var worldSettings = document.getElementsByClassName('world');

    for(var i = 0; i < mainSettings.length; i++) {
        var randomItem = settings[Math.floor(Math.random()*settings.length)];
        mainSettings[i].innerHTML = randomItem;
    }

    for(var i = 0; i < offOron.length; i++) {
        var randomItem = on[Math.floor(Math.random()*on.length)];
        offOron[i].innerHTML = randomItem;
    }

    for(var i = 0; i < formMults.length; i++) {
        var randomItem = form[Math.floor(Math.random()*form.length)];
        formMults[i].innerHTML = randomItem;
    }

    for(var i = 0; i < worldSettings.length; i++) {
        worldSettings[i].innerHTML = "Randomize";
    }

    var levelSetting = leveling[Math.floor(Math.random()*leveling.length)];
    document.getElementById('level').innerHTML = levelSetting;

    var keyStatSetting = keyStats[Math.floor(Math.random()*keyStats.length)];
    document.getElementById('keybladeStats').innerHTML = keyStatSetting;

    var keyAbleSetting = keyAbilities[Math.floor(Math.random()*keyAbilities.length)];
    document.getElementById('keybladeAbilities').innerHTML = keyAbleSetting;

    var baseEXPSetting = exp[Math.floor(Math.random()*exp.length)];
    document.getElementById('expMainMult').innerHTML = baseEXPSetting;

    worlds = shuffle(worlds);
    
    for(var i = 0; i < 6; i++) {
        var randomItem = settings[Math.floor(Math.random()*settings.length)];
        document.getElementById(worlds[i]).innerHTML = randomItem;
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var leveling = [
    "Level 1",
    "Level 50",
    "Level 99"
];

var settings = [
    "Vanilla",
    "Replace",
    "Randomize"
];

var on = [
    "Off",
    "On"
];

var keyStats = [
    "Vanilla",
    "Balanced",
    "Boosted"
];

var exp = [
    "1x",
    "1.5x",
    "2x",
    "3x",
    "5x"
];

var form = [
    "1x",
    "2x",
    "3x",
    "4x",
    "5x"
];

var keyAbilities = [
    "Vanilla",
    "Support",
    "Action/Support"
];

var worlds = [
    "STT",
    "TT",
    "HB",
    "CoR",
    "BC",
    "OC",
    "AG",
    "LoD",
    "AW",
    "AT",
    "PL",
    "DC",
    "TR",
    "HT",
    "PR",
    "SP",
    "TWTNW"
];