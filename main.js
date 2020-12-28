// Polyfill for Element.closest() for IE and older browsers
// From https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        var el = this;

        do {
            if (Element.prototype.matches.call(el, s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

// Build settings object for use in URL params
function setSettings(settings, item, value) {
    var group = item.closest(".tab").id;
    if (!group) {
        return settings;
    }

    if (!settings.hasOwnProperty(group)) {
        settings[group] = {};
    }

    var groupSettings = settings[group];
    groupSettings[item.id] = value;

    return settings;
}

function randomize() {
    var allSettings = {};

    var mainSettings = document.getElementsByClassName("setting");
    var offOron = document.getElementsByClassName("offOn");
    var formMults = document.getElementsByClassName("expMult");
    var worldSettings = document.getElementsByClassName("world");

    for (var i = 0; i < mainSettings.length; i++) {
        var randomItem = Math.floor(Math.random() * settings.length);
        mainSettings[i].innerHTML = settings[randomItem];
        allSettings = setSettings(allSettings, mainSettings[i], randomItem);
    }

    for (var i = 0; i < offOron.length; i++) {
        var randomItem = Math.floor(Math.random() * on.length);
        offOron[i].innerHTML = on[randomItem];
        allSettings = setSettings(allSettings, offOron[i], randomItem);
    }

    for (var i = 0; i < formMults.length; i++) {
        var randomItem = Math.floor(Math.random() * form.length);
        formMults[i].innerHTML = form[randomItem];
        allSettings = setSettings(allSettings, formMults[i], randomItem);
    }

    for (var i = 0; i < worldSettings.length; i++) {
        worldSettings[i].innerHTML = "Randomize";
        allSettings = setSettings(allSettings, worldSettings[i], 2);
    }

    var levelSetting = Math.floor(Math.random() * leveling.length);
    var elem = document.getElementById("leveling");
    elem.innerHTML = leveling[levelSetting];
    allSettings = setSettings(allSettings, elem, levelSetting);

    var keyStatSetting = Math.floor(Math.random() * keyStats.length);
    elem = document.getElementById("keybladeStats");
    elem.innerHTML = keyStats[keyStatSetting];
    allSettings = setSettings(allSettings, elem, keyStatSetting);

    var keyAbleSetting = Math.floor(Math.random() * keyAbilities.length);
    elem = document.getElementById("keybladeAbilities");
    elem.innerHTML = keyAbilities[keyAbleSetting];
    allSettings = setSettings(allSettings, elem, keyAbleSetting);

    var baseEXPSetting = Math.floor(Math.random() * exp.length);
    elem = document.getElementById("expMultiplier");
    elem.innerHTML = exp[baseEXPSetting];
    allSettings = setSettings(allSettings, elem, baseEXPSetting);

    worlds = shuffle(worlds);

    for (var i = 0; i < 6; i++) {
        var randomItem = Math.floor(Math.random() * settings.length);
        var elem = document.getElementById(worlds[i]);
        elem.innerHTML = settings[randomItem];
        allSettings = setSettings(allSettings, elem, randomItem);
    }

    var url = "https://randomizer.valaxor.com/#/seed?";
    for (var group in allSettings) {
        url += group;
        url += "=";
        url += JSON.stringify(allSettings[group]);
        url += "&";
    }

    document.getElementById("randoLink").setAttribute("href", url);
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

var leveling = ["Level 1", "Level 50", "Level 99"];

var settings = ["Vanilla", "Replace", "Randomize"];

var on = ["Off", "On"];

var keyStats = ["Vanilla", "Balanced", "Boosted"];

var exp = ["1x", "1.5x", "2x", "3x", "5x"];

var form = ["1x", "2x", "3x", "4x", "5x"];

var keyAbilities = ["Vanilla", "Support", "Action/Support"];

var worlds = [
    "simulatedTwilightTown",
    "twilightTown",
    "hollowBastion",
    "cavernOfRemembrance",
    "beastsCastle",
    "olympus",
    "agrabah",
    "landOfDragons",
    "pooh",
    "atlantica",
    "prideLands",
    "disneyCastle",
    "timelessRiver",
    "halloweenTown",
    "portRoyal",
    "spaceParanoids",
    "twtnw",
];
