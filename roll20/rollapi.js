// Farhome dice roller
// API Commands:
// !skill <attribute score> <proficiency> <expertise|optional>
// !roll <s> <p> <n> <b> <t>

var FarhomeDice = FarhomeDice || (function () {
    'use strict';

    var imgF = "https://s3.amazonaws.com/files.d20.io/images/114237545/sRxfOmyU06x_DFrr8TPepg/max.png?1585452751",
        imgF2 = "https://s3.amazonaws.com/files.d20.io/images/107590200/QaOgNT0gHTQUgq-byxG8JQ/max.png?1584123366",
        imgCF = "https://s3.amazonaws.com/files.d20.io/images/113901630/pBqRjg2R081cTUmeSmupww/max.png?1585420997",
        imgB = "https://s3.amazonaws.com/files.d20.io/images/113912286/D8sWt6VVWv-dc1scnXuVqA/max.png?1585421847 ",
        imgS = "https://s3.amazonaws.com/files.d20.io/images/113912076/wu9nexX8Cwouq_TJiUNgNA/max.png?1585421832",
        imgS2 = "https://s3.amazonaws.com/files.d20.io/images/107587007/UB4Hqe7F8ouo5MDQnU9ZVw/max.png?1584122383",
        imgCS = "https://s3.amazonaws.com/files.d20.io/images/113911411/L0Ck0kGZs7SUrFCywO2-_g/max.png?1585421814",
        imgD = "https://s3.amazonaws.com/files.d20.io/images/113902479/d1T796ZiqD4WzSA-U21M4w/max.png?1585421073",
        imgD2 = "https://s3.amazonaws.com/files.d20.io/images/107590426/eOdjSvCe9i0G7-FdBI1JZw/max.png?1584123452",
        imgCD = "https://s3.amazonaws.com/files.d20.io/images/113902795/WznAuqOp8COfHOvjMGA4cg/max.png?1585421099",
        imgW = "https://s3.amazonaws.com/files.d20.io/images/113901964/dQcoCGnGAUQLp44mGxGuaQ/max.png?1585421028"

    var lastRollResult = [];
    var allDice = [
        { roll: [imgB, imgS, imgS, imgS, imgS2, imgCS], val: [0, 1, 1, 1, 2, 2], crit: [0, 0, 0, 0, 0, 1], rrthresh: 0, clr: 'yellow' },
        { roll: [imgB, imgB, imgS, imgS, imgS, imgCS], val: [0, 0, 1, 1, 1, 2], crit: [0, 0, 0, 0, 0, 1], rrthresh: 0, clr: 'green' },
        { roll: [imgF, imgB, imgB, imgS, imgS, imgS], val: [-1, 0, 0, 1, 1, 1], crit: [0, 0, 0, 0, 0, 0], rrthresh: 0, clr: 'white' },
        { roll: [imgCF, imgF, imgF, imgF, imgB, imgB], val: [-2, -1, -1, -1, 0, 0], crit: [-1, 0, 0, 0, 0, 0], rrthresh: -1, clr: 'red' },
        { roll: [imgCF, imgF2, imgF, imgF, imgF, imgB], val: [-2, -2, -1, -1, -1, 0], crit: [-1, 0, 0, 0, 0, 0], rrthresh: -1, clr: 'purple' },
        { roll: [imgB, imgB, imgD, imgD2, imgCD, imgCD], val: [0, 0, 1, 2, 2, 2], crit: [0, 0, 0, 0, 1, 1], rrthresh: 0, clr: 'silver' },
        { roll: [imgB, imgB, imgD, imgD, imgD, imgCD], val: [0, 0, 1, 1, 1, 2], crit: [0, 0, 0, 0, 0, 1], rrthresh: 0, clr: 'goldenrod' },
        { roll: [imgW, imgW, imgW, imgW, imgW, imgW], val: [1, 1, 1, 1, 1, 1], crit: [0, 0, 0, 0, 0, 0], rrthresh: 0, clr: 'orangered' },
        { roll: [imgB, imgW, imgB, imgW, imgB, imgW], val: [0, 1, 0, 1, 0, 1], crit: [0, 0, 0, 0, 0, 0], rrthresh: 0, clr: 'orangered' },
        { roll: [imgS, imgS, imgS2, imgS2, imgCS, imgCS], val: [1, 1, 2, 2, 2, 2], crit: [0, 0, 0, 0, 1, 1], rrthresh: 0, clr: 'gold' }
    ];
    var rollHistory = [];
    var character = undefined;

    var templateBtn = "background-color: transparent; padding: 0px; display: inline-block; color: black; border: 0.5px solid";

    var spellText = {
        "cold-snap": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: ["Sap the heat from a target. Make a spellcasting roll vs the targets stamina. On hit the target takes a wound. For every crit roll you the target gains a level of Slow until the end of their next turn.", "Add a proficiency die for every level above cantrip."] },
        "firebolt": { dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1], txt: ["Blast a target with a bolt of fire. Make a spellcasting roll against the targets defense. On hit the target takes a wound, adding a wound die on crit.", "Add a wound die for every level above cantrip."] },
        "message": { dmg: [], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: ["You attempt to send a telepathic message to a target you know. Make a spellcasting roll, adding a bad die for every 10 tiles you want the spell to travel, with a minimum of 1 bad die. On success the message is successfully broadcast. You know if the target recieved the message or not.", "Add a proficiency die for every level above cantrip."] },
        "minor-image": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "static-shock": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "thundering-blow": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "arcane-blasts": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "arcane-key": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "beam-of-fire": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "call-lightning": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "chilling-ray": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "detect-magic": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "identify": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "magic-sight": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "poison-trap": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "ray-of-sickness": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "sword-burst": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "thunderclap": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "barrier": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "combust": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "dispel-magic": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "elemental-shell": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "flurry": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "imprint": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "magic-weapon": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "misty-step": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "resilient-shield": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "animate-guardian": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "chain-lightning": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "counter-spell": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "far-sight": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "fireball": { dmg: [2, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1], txt: ["shoot a ball of fire centered at a target location you can see. The fireball explodes on impact, hitting all creatures in a 5x5 area. Creatures must make a Dexterity save vs your spellcasting, taking 1 wound on success. On failure they take 2 wounds, plus a wound die on crit.", "Add a wound die for every level above 3rd."] },
        "flight": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: ["Gain magical flight, allowing you to float through the air. Target up to 5 willing creatures, adding a Terrible die to the spellcasting roll for each creature targeted. On success all targeted creatures gain a flying speed equal to their movement speeds.", "Add a proficient die for every level above 3rd."] },
        "phantasmal-blades": { dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0], txt: ["Launch a series of arcane swords at a target. The target makes a Strength save vs your spellcasting, taking 3 wounds on fail.", "Add a wound and proficiency die for every level past 3rd."] },

    }

    var commandListener = function () {
        // Listens for API command
        on('chat:message', function (msg) {
            if (msg.type === 'api' && !msg.rolltemplate) {
                var processedMsg = processInlinerolls(msg);
                var params = processedMsg.substring(1).split(' '),
                    command = params[0].toLowerCase();
                params = params.slice(1, params.length);
                character = findObjs({ type: 'character', name: msg.who })[0];
                var player = getObj('player', msg.playerid);


                if (msg.selected != undefined) {
                    var token = getObj('graphic', msg.selected[0]._id);
                    if (token) {
                        character = getObj('character', token.get('represents'));
                    }
                }
                if (!character && player != undefined) {
                    character = findObjs({ type: 'character', controlledby: player.id })[0];
                }

                var msgFrom = character ? 'character|' + character.id : 'player|' + player.id;
                var result = "";
                var name = "";

                rollHistory = [];

                if (character === undefined) {
                    sendChat(msgFrom, 'No character selected. Select a token or change who your playing as.');
                    return;
                }

                if (command === 'skill') {
                    name = "Skill Check";
                    result = skillRoll(params);
                }
                else if (command === 'initiative') {
                    if (params.length < 5) {
                        sendChat(msgFrom, 'Need values for all dice types');
                        return;
                    }
                    initiative(msgFrom, params);
                }
                else if (command === 'attack') {
                    if (params.length < 5) {
                        sendChat(msgFrom, 'Need values for all dice types');
                        return;
                    }
                    name = "Attack";
                    result = attack(params);
                }
                else if (command === 'save') {
                    if (!character) {
                        sendChat(msgFrom, 'No character found for player, try changing your "As" in chat.');
                        return;
                    }
                    name = "Saving Throw";
                    result = saveRoll(params[0]);
                }
                else if (command === 'roll') {
                    if (params.length < 5) {
                        sendChat(msgFrom, 'Need values for all dice types');
                        return;
                    }
                    name = "Roll";
                    result = customRoll(params);
                }
                else if (command === 'defend') {
                    if (params.length < 2) {
                        sendChat(msgFrom, 'Need values for all dice types');
                        return;
                    }
                    name = "Defend";
                    result = defend(params);
                }
                else if (command === 'wound') {
                    if (params.length < 2) {
                        sendChat(msgFrom, 'Need values for all dice types');
                        return;
                    }
                    name = "Wounds";
                    result = wound(params);
                }
                else if (command === 'hero') {
                    name = "Hero";
                    result = hero(params);
                }
                else if (command === 'rtmp') {
                    handleTemplateRoll(msgFrom, processedMsg);
                }
                else if (command === 'srr') {
                    togglereroll(params);
                }
                else if (command === 'rr') {
                    reroll(msgFrom);
                }


                if (result != "") {
                    sendChat(msgFrom, "/direct " + makeTemplate({ name: name, roll1: result }));
                }
            }
        });
    },

        processInlinerolls = function (msg) {
            if (_.has(msg, 'inlinerolls')) {
                return _.chain(msg.inlinerolls)
                    .reduce(function (previous, current, index) {
                        previous['$[[' + index + ']]'] = current.results.total || 0;
                        return previous;
                    }, {})
                    .reduce(function (previous, current, index) {
                        return previous.replace(index, current);
                    }, msg.content)
                    .value();
            } else {
                return msg.content;
            }
        },

        getMods = function (param) {
            var modObj = {}
            if (param.substring(0, 2) === 'kh') {
                modObj.keepHighest = param.substring(2, param.length);
            }
            return modObj;
        },
        getAttr = function (attrName, defaultValue) {
            var attr = findObjs({ type: 'attribute', characterid: character.id, name: attrName }, { caseInsensitive: true })[0];
            if (!attr) {
                attr = createObj("attribute", { name: attrName, current: defaultValue, characterid: character.id });
            }
            return attr;
        },
        getAttrDice = function (attribute, proficiency, allowNegatives = true) {
            var attributeUnder5 = Math.min(5, attribute);
            var attributeOver5 = Math.max(0, attribute - 5);
            var proficiencyOver5 = Math.max(0, proficiency - 5);

            // We start with White dice
            var dice = [0, 0, 5 + attributeOver5, 0, 0, 0, 0, 0, 0, 0];
            // Improve White to Green for every attribute point
            if (attributeUnder5 > 0) {
                dice[1] += attributeUnder5;
                dice[2] -= attributeUnder5;
            } else {
                if (allowNegatives === true) {
                    dice[3] -= attributeUnder5;
                    dice[2] += attributeUnder5;
                }
            }
            // Improve Green to Yellow for every proficiency point
            if (proficiency > 0) {
                var maxProf = Math.min(dice[1], proficiency);
                dice[0] += maxProf;
                dice[1] -= maxProf;
            } else {
                if (allowNegatives === true) {
                    var greenToWhite = Math.min(dice[1], -proficiency);
                    var redToPurple = Math.min(dice[3], (-proficiency) - greenToWhite);
                    dice[1] -= greenToWhite;
                    dice[2] += greenToWhite;
                    dice[3] -= redToPurple;
                    dice[4] += redToPurple;
                }
            }
            // Attributes over 5 add White/improve to Green dice.
            if (attributeOver5 > 0 && proficiencyOver5 > 0) {
                var maxProf = Math.min(dice[2], proficiencyOver5);
                dice[1] += maxProf;
                dice[2] -= maxProf;
            }

            return dice;
        },

        saveRoll = function (stat) {
            var statVal = parseInt(getAttr(stat, -1).get("current"));
            var statProf = 0;
            var poison = parseInt(getAttr("poison", 0).get("current"));
            var fear = parseInt(getAttr("fear", 0).get("current"));
            var hex = parseInt(getAttr("hex", 0).get("current"));

            switch (stat) {
                case 'str':
                    statProf = parseInt(getAttr("strsave", 0).get("current"));
                    break;
                case 'dex':
                    statProf = parseInt(getAttr("dexsave", 0).get("current"));
                    break;
                case 'sta':
                    statProf = parseInt(getAttr("stasave", 0).get("current"));
                    break;
                case 'int':
                    statProf = parseInt(getAttr("intsave", 0).get("current"));
                    break;
                case 'wil':
                    statProf = parseInt(getAttr("wilsave", 0).get("current"));
                    break;
                case 'cha':
                    statProf = parseInt(getAttr("chasave", 0).get("current"));
                    break;
            }

            var dice = getAttrDice(statVal, statProf, false);
            dice[4] += poison;
            dice[3] += fear;

            var modObj = {};
            modObj.hex = hex;

            return roll(dice, modObj)
        },

        skillRoll = function (params) {
            var modObj = params.length > 3 ? getMods(params[3]) : {};
            modObj.hex = character ? parseInt(getAttr("hex", 0).get("current")) : 0;
            var statVal = parseInt(params[0]);
            var statProf = parseInt(params[1]);
            var poison = character ? parseInt(getAttr("poison", 0).get("current")) : 0;
            var fear = character ? parseInt(getAttr("fear", 0).get("current")) : 0;

            var expertise = params.length >= 2 ? parseInt(params[2]) : 0;

            if (expertise == 1) {
                modObj.keepHighest = modObj.keepHighest ? modObj.keepHighest + 3 : 3;
            }

            var dice = getAttrDice(statVal, statProf);
            dice[4] += poison;
            dice[3] += fear;

            return roll(dice, modObj);
        },

        customRoll = function (params) {
            var modObj = params.length > 5 ? getMods(params[5]) : {};
            modObj.hex = character ? parseInt(getAttr("hex", 0).get("current")) : 0;

            var diceVals = [parseInt(params[0]), parseInt(params[1]), parseInt(params[2]), parseInt(params[3]), parseInt(params[4]), 0, 0, 0, 0, 0];

            return roll(diceVals, modObj);
        },

        attack = function (params) {
            var modObj = params.length > 5 ? getMods(params[5]) : {};
            modObj.hex = character ? parseInt(getAttr("hex", 0).get("current")) : 0;
            var poison = character ? parseInt(getAttr("poison", 0).get("current")) : 0;
            var fear = character ? parseInt(getAttr("fear", 0).get("current")) : 0;
            var blind = character ? parseInt(getAttr("blind", 0).get("current")) : 0;
            var restrained = character ? parseInt(getAttr("restarined", 0).get("current")) : 0;
            var diceVals = [parseInt(params[0]), parseInt(params[1]), parseInt(params[2]), parseInt(params[3]), parseInt(params[4]), 0, 0, 0, 0, 0];

            diceVals[3] += fear + (restrained * 2);
            diceVals[4] += poison + (blind * 2);

            return roll(diceVals, modObj);
        },

        initiative = function (msgFrom, params) {
            var diceVals = [parseInt(params[0]), parseInt(params[1]), parseInt(params[2]), parseInt(params[3]), parseInt(params[4]), 0, 0, 0, 0, 0];

            var modObj = params.length > 5 ? getMods(params[5]) : {};
            modObj.hex = character ? parseInt(getAttr("hex", 0).get("current")) : 0;

            var msg = roll(diceVals, modObj);
            var total = lastRollResult[0];

            var turnOrder = Campaign().get("turnorder") ? JSON.parse(Campaign().get("turnorder")) : [];
            var added = false;
            for (var i = 0; i < turnOrder.length; i++) {
                if (total > turnOrder[i].pr) {
                    turnOrder.splice(i, 0, { id: "-1", pr: total.toString(), custom: character.get("name"), _pageid: Campaign().get("playerpageid") });
                    added = true;
                    break;
                }
            }
            if (added == false) {
                turnOrder.splice(i, 0, { id: "-1", pr: total.toString(), custom: character.get("name"), _pageid: Campaign().get("playerpageid") });
            }
            Campaign().set("turnorder", JSON.stringify(turnOrder));

            sendChat(msgFrom, "/direct " + makeTemplate({ name: "Initiative", roll1: msg, initiative: total }));
        },

        defend = function (params) {
            var diceVals = [0, 0, 0, 0, 0, parseInt(params[0]), parseInt(params[1]), 0, 0, 0];
            var modObj = params.length > 2 ? getMods(params[2]) : {};
            modObj.hex = character ? parseInt(getAttr("hex", 0).get("current")) : 0;

            return roll(diceVals, modObj);
        },

        hero = function (__params) {
            var modObj = {};
            modObj.hex = 0;

            return roll([0, 0, 0, 0, 0, 0, 0, 0, 0, 1], modObj);
        },

        wound = function (params) {
            var modObj = params.length > 2 ? getMods(params[2]) : {};
            var diceVals = [0, 0, 0, 0, 0, 0, 0, parseInt(params[0]), parseInt(params[1]), 0];
            if (character) {
                var weaken = parseInt(getAttr("weaken", 0).get("current"));
                if (weaken == 1) {
                    diceVals[1] += diceVals[0];
                    diceVals[0] = 0;
                }
            }
            return roll(diceVals, modObj);
        },

        togglereroll = function (params) {
            //toggle the reroll status of a die in the last roll.
            var rolls = state.FarhomeDice.lastRolls[character.id];
            //exit early if there is no roll history
            if (rolls.length === 0) {
                return;
            }

            var idx = [parseInt(params[0]), parseInt(params[1])];
            // if for some reason the values don't line up (eg: old rolls, other players trying to toggle rolls) don't do anything
            if (idx[0] >= rolls.length || idx[1] >= rolls[idx[0]].d.length) {
                return;
            }
            rolls[idx[0]].r[idx[1]] = !rolls[idx[0]].r[idx[1]];

            state.FarhomeDice.lastRolls[character.id] = rolls;
        },

        reroll = function (msgFrom) {
            var lastRolls = state.FarhomeDice.lastRolls[character.id];
            var values = { name: "Reroll" };
            for (var i = 0; i < lastRolls.length; i++) {
                var rollMsg = "<span>";
                for (var t = 0; t < lastRolls[i].d.length; t++) {
                    // we can't reroll hexes
                    if (lastRolls[i].v[t] === -1) {
                        rollMsg += "<span style='background-color:" + allDice[lastRolls[i].d[t]].clr + "; border: 1px solid;'>Hex!</span>";
                    }
                    else if (lastRolls[i].r[t] === true) {
                        var newRoll = randomInteger(6) - 1;
                        rollMsg += "<div style='display:inline-block'>(<img src='" + allDice[lastRolls[i].d[t]].roll[newRoll] + "' style='background-color:" + allDice[lastRolls[i].d[t]].clr + "; border: 1px solid;'>" +
                            "<img src='" + allDice[lastRolls[i].d[t]].roll[lastRolls[i].v[t]] + "' style='background-color:" + allDice[lastRolls[i].d[t]].clr + "; border: 1px solid; opacity: 0.25;'>)</div>";
                    }
                    else {
                        rollMsg += "<img src='" + allDice[lastRolls[i].d[t]].roll[lastRolls[i].v[t]] + "' style='background-color:" + allDice[lastRolls[i].d[t]].clr + "; border: 1px solid;'>";
                    }
                }
                rollMsg += "</span>";
                values["roll" + i] = rollMsg;
            }
            var msg = makeTemplate(values, false);
            sendChat(msgFrom, "/direct " + msg);
        },

        handleTemplateRoll = function (msgFrom, msgContent) {
            // parsing message
            var idx = 0;
            var ops = [];
            while (idx < msgContent.length) {
                if (msgContent[idx] == '`') {
                    for (var i = idx + 1; i < msgContent.length; i++) {
                        if (msgContent[i] == '`') {
                            ops.push(msgContent.substring(idx + 1, i));
                            idx = i;
                            break;
                        }
                    }
                }
                idx++;
            }
            //process template values
            var handleRoll = function (params) {
                if (params[0] == "skill") {
                    return skillRoll(params.slice(1, params.length));
                } else if (params[0] == "save") {
                    return saveRoll(params[1]);
                } else if (params[0] == "roll") {
                    return customRoll(params.slice(1, params.length));
                } else if (params[0] == "attack") {
                    return attack(params.slice(1, params.length));
                } else if (params[0] == "defend") {
                    return defend(params.slice(1, params.length));
                } else if (params[0] == "wound") {
                    return wound(params.slice(1, params.length));
                }
            };
            var templateObj = {};
            for (var i = 0; i < ops.length; i++) {
                var opStr = ops[i].split('|');
                var params = [];
                if (opStr[0].substring(0, 4) == "roll") {
                    params = opStr[1].split(' ');
                    templateObj[opStr[0]] = handleRoll(params);
                } else {
                    templateObj[opStr[0]] = opStr[1];
                }
            }

            var msg = makeTemplate(templateObj);
            sendChat(msgFrom, "/direct " + msg);
        },

        makeTemplate = function (values, rrButton = true) {
            var msg = '' +
                '<rolltemplate class="sheet-rolltemplate-CustomRoll">' +
                '<div style="background-color: #ffffff; border: 1px solid; padding: 2px; width: 218px;">';
            if (values.name) {
                msg += '<div style="padding: 2px"><h1 style="color: rgb(126, 45, 64); font-size: 1.2em; font-variant: small-caps; line-height: 20px;">' + values.name + '</h1></div>';
            }
            if (values.description) {
                msg += '<div style="padding: 2px"><span style="color: #000; font-size: 0.85em; font-style: italic;">' + values.description + '</span></div>';
            }
            msg += '<div style="line-height: 20px;border-bottom: 2px solid transparent; border-left: 200px solid rgb(126, 45, 64); border-top: 2px solid transparent;"><div class="arrow-right"></div></div>';

            var keys = Object.keys(values);
            for (var i = 0; i < keys.length; i++) {
                if (keys[i].substring(0, 4) === "roll") {
                    msg += '<div style="font-size: 0.9em"><span>' + keys[i].substring(4) + ': </span>' + values[keys[i]] + '</div>';
                }
            }
            msg += '<div style="line-height: 20px;border-bottom: 2px solid transparent; border-left: 200px solid rgb(126, 45, 64); border-top: 2px solid transparent;"><div class="arrow-right"></div></div>';

            if (values.effect) {
                msg += '<div style="font-size: 0.9em"><span style="font-weight:bold">Effect: </span>' + values.effect + '</div>';
            }
            if (values.onHit) {
                msg += '<div style="font-size: 0.9em"><span style="font-weight:bold">On Hit: </span>' + values.onHit + '</div>';
            }
            if (values.onCrit) {
                msg += '<div style="font-size: 0.9em"><span style="font-weight:bold">On Crit: </span>' + values.onCrit + '</div>';
            }
            if (values.initiative) {
                msg += '<div style="font-size: 0.9em"><span style="font-weight:bold">Initiatve: </span>' + values.initiative + '</div>';
            }
            if (rrButton === true) {
                msg += '<div style="font-size: 0.9em"><a href="!rr" style="background-color: transparent; display: inline-block; color: black; border: 0.5px solid">Reroll Selected</a></div>';
            }
            msg += '</div>' +
                '</rolltemplate>';

            // this is usually the last step to sending a message. Set the last roll to the character
            state.FarhomeDice.lastRolls[character.id] = rollHistory;
            return msg;
        },

        roll = function (diceVals, modObj) {
            var msg = "";
            var successes = 0, crits = 0;
            // we need to save the roll history to allow rerolls to happen
            var rollResult = { d: [], v: [], r: [] };
            var diceCount = 0;
            for (var i = 0; i < diceVals.length; i++) {
                if (diceVals[i] > 0) {
                    msg += "<span>";
                    for (var t = 0; t < diceVals[i]; t++) {
                        rollResult.d.push(i);
                        rollResult.r.push(false);
                        var rollVal = randomInteger(6) - 1;
                        if (allDice[i].crit[rollVal] == 1 && modObj.hex > 0) {
                            rollResult.v.push(-1);
                            msg += "<span style='background-color:" + allDice[i].clr + "; border: 1px solid;'>Hex!</span>";
                            modObj.hex--;
                        }
                        // if (allDice[i].val[rollVal] <= allDice[i].rrthresh && modObj.keepHighest > 0) {
                        //     var oldVal = rollVal;
                        //     rollVal = randomInteger(6) - 1;
                        //     modObj.keepHighest--;
                        //     successes += allDice[i].val[rollVal];
                        // //     crits += allDice[i].crit[rollVal];
                        //     msg += "<div style='display:inline-block'>(<img src='" + allDice[i].roll[rollVal] + "' style='background-color:" + allDice[i].clr + "; border: 1px solid;'>" +
                        //         "<img src='" + allDice[i].roll[oldVal] + "' style='background-color:" + allDice[i].clr + "; border: 1px solid; opacity: 0.25;'>)</div>";
                        //     continue;
                        // }
                        else {
                            rollResult.v.push(rollVal);
                            successes += allDice[i].val[rollVal];
                            crits += allDice[i].crit[rollVal];
                            msg += "<a href='!srr " + rollHistory.length + " " + diceCount + "' style='" + templateBtn + "'>";
                            msg += "<img src='" + allDice[i].roll[rollVal] + "' style='background-color:" + allDice[i].clr + "; border: none;'>";
                            msg += "</a>";
                        }
                        diceCount++;
                    }
                    msg += "</span>";
                }
            }
            lastRollResult = [successes, crits];
            rollHistory.push(rollResult);
            return msg;
        },

        spell = function (params, character) {
        };

    return {
        CommandListener: commandListener
    };

}());

on('ready', function () {
    'use strict';

    FarhomeDice.CommandListener();

    if (state.FarhomeDice === undefined || state.FarhomeDice.version !== "v1.0") {
        state.FarhomeDice = { lastRolls: {}, version: "v1.0" };
    }

    log("Farhome Dice v1.0 loaded");
});