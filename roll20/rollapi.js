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

    var commandListener = function () {
        // Listens for API command
        on('chat:message', function (msg) {
            if (msg.type === 'api' && !msg.rolltemplate) {
                var processedMsg = processInlinerolls(msg);
                var params = processedMsg.substring(1).split(' '),
                    command = params[0].toLowerCase();
                params = params.slice(1, params.length);
                var character = findObjs({ type: 'character', name: msg.who })[0],
                    player = getObj('player', msg.playerid);


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

                if (command === 'skill') {
                    name = "Skill Check";
                    result = skillRoll(params, character);
                }
                else if (command === 'initiative') {
                    if (params.length < 5) {
                        sendChat(msgFrom, 'Need values for all dice types');
                        return;
                    }
                    initiative(msgFrom, params, character);
                }
                else if (command === 'attack') {
                    if (params.length < 5) {
                        sendChat(msgFrom, 'Need values for all dice types');
                        return;
                    }
                    name = "Attack";
                    result = attack(params, character);
                }
                else if (command === 'save') {
                    if (!character) {
                        sendChat(msgFrom, 'No character found for player, try changing your "As" in chat.');
                        return;
                    }
                    name = "Saving Throw";
                    result = saveRoll(params[0], character);
                }
                else if (command === 'roll') {
                    if (params.length < 5) {
                        sendChat(msgFrom, 'Need values for all dice types');
                        return;
                    }
                    name = "Roll";
                    result = customRoll(params, character);
                }
                else if (command === 'defend') {
                    if (params.length < 2) {
                        sendChat(msgFrom, 'Need values for all dice types');
                        return;
                    }
                    name = "Defend";
                    result = defend(params, character);
                }
                else if (command === 'wound') {
                    if (params.length < 2) {
                        sendChat(msgFrom, 'Need values for all dice types');
                        return;
                    }
                    name = "Wounds";
                    result = wound(params, character);
                }
                else if (command === 'hero') {
                    name = "Hero";
                    result = hero(params, character);
                }
                else if (command === 'rtmp') {
                    handleTemplateRoll(msgFrom, processedMsg, character);
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
        getAttr = function (character, attrName, defaultValue) {
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
            var dice = [0, 0, 5 + attributeOver5, 0, 0];
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

        saveRoll = function (stat, character) {
            var statVal = parseInt(getAttr(character, stat, -1).get("current"));
            var statProf = 0;
            var poison = parseInt(getAttr(character, "poison", 0).get("current"));
            var fear = parseInt(getAttr(character, "fear", 0).get("current"));
            var hex = parseInt(getAttr(character, "hex", 0).get("current"));
            var blind = 0;
            var grapple = 0;
            var restrained = 0;
            var stagger = 0;

            switch (stat) {
                case 'str':
                    statProf = parseInt(getAttr(character, "strsave", 0).get("current"));
                    break;
                case 'dex':
                    statProf = parseInt(getAttr(character, "dexsave", 0).get("current"));
                    grapple = parseInt(getAttr(character, "grapple", 0).get("current"));
                    restrained = parseInt(getAttr(character, "restrained", 0).get("current"));
                    stagger = parseInt(getAttr(character, "stagger", 0).get("current"));
                    blind = parseInt(getAttr(character, "blind", 0).get("current"));
                    break;
                case 'sta':
                    statProf = parseInt(getAttr(character, "stasave", 0).get("current"));
                    break;
                case 'int':
                    statProf = parseInt(getAttr(character, "intsave", 0).get("current"));
                    break;
                case 'wil':
                    statProf = parseInt(getAttr(character, "wilsave", 0).get("current"));
                    break;
                case 'cha':
                    statProf = parseInt(getAttr(character, "chasave", 0).get("current"));
                    break;
            }

            var dice = getAttrDice(statVal, statProf, false);
            dice[4] += poison;
            dice[3] += fear;

            var modObj = {};
            modObj.hex = hex;

            return roll(dice, allDice.slice(0, 5), modObj)
        },

        skillRoll = function (params, character) {
            var modObj = params.length > 3 ? getMods(params[3]) : {};
            modObj.hex = character ? parseInt(getAttr(character, "hex", 0).get("current")) : 0;
            var statVal = parseInt(params[0]);
            var statProf = parseInt(params[1]);
            var poison = character ? parseInt(getAttr(character, "poison", 0).get("current")) : 0;
            var fear = character ? parseInt(getAttr(character, "fear", 0).get("current")) : 0;

            var expertise = params.length >= 2 ? parseInt(params[2]) : 0;

            if (expertise == 1) {
                modObj.keepHighest = modObj.keepHighest ? modObj.keepHighest + 3 : 3;
            }

            var dice = getAttrDice(statVal, statProf);
            dice[4] += poison;
            dice[3] += fear;

            return roll(dice, allDice.slice(0, 5), modObj);
        },

        customRoll = function (params, character) {
            var modObj = params.length > 5 ? getMods(params[5]) : {};
            modObj.hex = character ? parseInt(getAttr(character, "hex", 0).get("current")) : 0;

            var diceVals = [parseInt(params[0]), parseInt(params[1]), parseInt(params[2]), parseInt(params[3]), parseInt(params[4])];

            return roll(diceVals, allDice.slice(0, 5), modObj);
        },

        attack = function (params, character) {
            var modObj = params.length > 5 ? getMods(params[5]) : {};
            modObj.hex = character ? parseInt(getAttr(character, "hex", 0).get("current")) : 0;
            var poison = character ? parseInt(getAttr(character, "poison", 0).get("current")) : 0;
            var fear = character ? parseInt(getAttr(character, "fear", 0).get("current")) : 0;
            var blind = character ? parseInt(getAttr(character, "blind", 0).get("current")) : 0;
            var restrained = character ? parseInt(getAttr(character, "restarined", 0).get("current")) : 0;
            var diceVals = [parseInt(params[0]), parseInt(params[1]), parseInt(params[2]), parseInt(params[3]), parseInt(params[4])];

            diceVals[3] += fear + (restrained * 2);
            diceVals[4] += poison + (blind * 2);

            return roll(diceVals, allDice.slice(0, 5), modObj);
        },

        initiative = function (msgFrom, params, character) {
            var diceVals = [parseInt(params[0]), parseInt(params[1]), parseInt(params[2]), parseInt(params[3]), parseInt(params[4])];

            var modObj = params.length > 5 ? getMods(params[5]) : {};
            modObj.hex = character ? parseInt(getAttr(character, "hex", 0).get("current")) : 0;

            var msg = roll(diceVals, allDice.slice(0, 5), modObj);
            total += lastRollResult[0];

            sendChat(msgFrom, "/direct " + makeTemplate({ name: "Initiative", roll1: msg, initiative: total }));
        },

        defend = function (params, character) {
            var diceVals = [parseInt(params[0]), parseInt(params[1])];
            var modObj = params.length > 2 ? getMods(params[2]) : {};
            modObj.hex = character ? parseInt(getAttr(character, "hex", 0).get("current")) : 0;

            return roll(diceVals, allDice.slice(5, 7), modObj);
        },

        hero = function (__params, __character) {
            var modObj = {};
            modObj.hex = 0;

            return roll([1], [allDice[9]], modObj);
        },

        wound = function (params, character) {
            var modObj = params.length > 2 ? getMods(params[2]) : {};
            var diceVals = [parseInt(params[0]), parseInt(params[1])];
            if (character) {
                var weaken = parseInt(getAttr(character, "weaken", 0).get("current"));
                if (weaken == 1) {
                    diceVals[1] += diceVals[0];
                    diceVals[0] = 0;
                }
            }
            return roll(diceVals, allDice.slice(7, 9), modObj);
        },

        handleTemplateRoll = function (msgFrom, msgContent, character) {
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
                    return skillRoll(params.slice(1, params.length), character);
                } else if (params[0] == "save") {
                    return saveRoll(params[1], character);
                } else if (params[0] == "roll") {
                    return customRoll(params.slice(1, params.length), character);
                } else if (params[0] == "attack") {
                    return attack(params.slice(1, params.length), character);
                } else if (params[0] == "defend") {
                    return defend(params.slice(1, params.length), character);
                } else if (params[0] == "wound") {
                    return wound(params.slice(1, params.length), character);
                }
            };
            var templateObj = {};
            for (var i = 0; i < ops.length; i++) {
                var opStr = ops[i].split('|');
                var params = [];
                if (opStr[0] == "roll1" || opStr[0] == "roll2" || opStr[0] == "roll3") {
                    params = opStr[1].split(' ');
                    templateObj[opStr[0]] = handleRoll(params);
                } else {
                    templateObj[opStr[0]] = opStr[1];
                }
            }

            var msg = makeTemplate(templateObj);
            sendChat(msgFrom, "/direct " + msg);
        },

        makeTemplate = function (values) {
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

            if (values.roll1) {
                msg += '<div ><span>Roll 1: </span>' + values.roll1 + '</div>';
            }
            if (values.roll2) {
                msg += '<div ><span>Roll 2: </span>' + values.roll2 + '</div>';
            }
            if (values.roll3) {
                msg += '<div ><span>Roll 3: </span>' + values.roll3 + '</div>';
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
            msg += '</div>' +
                '</rolltemplate>';
            return msg;
        },

        roll = function (diceVals, dice, modObj) {
            var msg = "";
            var successes = 0, crits = 0;
            for (var i = 0; i < diceVals.length; i++) {
                if (diceVals[i] > 0) {
                    msg += "<span>";
                    for (var t = 0; t < diceVals[i]; t++) {
                        var rollVal = randomInteger(6) - 1;
                        if (i < 2 && rollVal == 5 && modObj.hex > 0) {
                            msg += "<span style='background-color:" + dice[i].clr + "; border: 1px solid;'>Hex!</span>";
                            modObj.hex--;
                            continue;
                        }
                        if (dice[i].val[rollVal] <= dice[i].rrthresh && modObj.keepHighest > 0) {
                            var oldVal = rollVal;
                            rollVal = randomInteger(6) - 1;
                            modObj.keepHighest--;
                            successes += dice[i].val[rollVal];
                            crits += dice[i].crit[rollVal];
                            msg += "<div style='display:inline-block'>(<img src='" + dice[i].roll[rollVal] + "' style='background-color:" + dice[i].clr + "; border: 1px solid;'>" +
                                "<img src='" + dice[i].roll[oldVal] + "' style='background-color:" + dice[i].clr + "; border: 1px solid; opacity: 0.25;'>)</div>";
                            continue;
                        }
                        successes += dice[i].val[rollVal];
                        crits += dice[i].crit[rollVal];
                        msg += "<img src='" + dice[i].roll[rollVal] + "' style='background-color:" + dice[i].clr + "; border: 1px solid;'>";
                    }
                    msg += "</span>";
                }
            }
            lastRollResult = [successes, crits];
            return msg;
        };

    return {
        CommandListener: commandListener
    };

}());

on('ready', function () {
    'use strict';

    FarhomeDice.CommandListener();
});