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
        { roll: [imgS, imgS, imgS2, imgS2, imgCS, imgCS], val: [1, 1, 2, 2, 2, 2], crit: [0, 0, 0, 0, 1, 1], rrthresh: 0, clr: 'gold' },
        { roll: [imgF, imgB, imgD, imgD, imgD, imgD], val: [-1, 0, 0, 1, 1, 1], crit: [0, 0, 0, 0, 0, 0], rrthresh: 0, clr: 'brown' }
    ];
    var rollHistory = [];
    var character = undefined;

    var templateBtn = "background-color: transparent; padding: 0px; display: inline-block; color: black; border: 0.5px solid";

    var spellInfo = {
        "cold-snap": { stat: "int", prof: "arcane", level: 0, ap: "5 AP", range: "1", duration: "instant", dmgType: "Cold", dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Sap the heat from a target. Make a spellcasting roll vs the targets stamina. On hit the target takes a wound. For every crit roll you the target gains a level of Slow until the end of their next turn.', 'Add a proficiency die for every level above cantrip.'] },
        "firebolt": { stat: "int", prof: "arcane", level: 0, ap: "6 AP", range: "8", duration: "instant", dmgType: "Fire", dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['Blast a target with a bolt of fire. Make a spellcasting roll against the targets defense. On hit the target takes a wound, adding a wound die on crit.', 'Add a wound die for every level above cantrip.'] },
        "message": { stat: "int", prof: "arcane", level: 0, ap: "2 AP", range: "10+", duration: "instant", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You attempt to send a telepathic message to a target you know. Make a spellcasting roll, adding a bad die for every 10 tiles you want the spell to travel, with a minimum of 1 bad die. On success the message is successfully broadcast. You know if the target recieved the message or not.', 'Add a proficiency die for every level above cantrip.'] },
        "minor-image": { stat: "int", prof: "arcane", level: 0, ap: "4 AP", range: "10", duration: "5 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["You create a small, soundless illusory image no larger than 1 tile at a point within range. The image has no physical presence and objects pass through it as if it wasn't there. Any creature attempting to see through the illusion must make a perception check against your spellcasting, seeing the illusion for what it is on success. A creature that touches or passes through the illusion automatically passes this check.", 'Add a proficiency die for every level above cantrip.'] },
        "static-shock": { stat: "int", prof: "arcane", level: 0, ap: "6 AP", range: "3", duration: "instant", dmgType: "Lightning", dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Charge the air around the target. Make a spellcasting roll vs the targets Dexterity. On success the target takes a wound. If you roll a crit the spell bounces to a creature adjacent to the target, making a new roll for the new target. This spell ends when you do not roll a crit or you run out of targets. This cannot effect the same target twice.', 'Add a proficiency die for every level above cantrip.'] },
        "thundering-blow": { stat: "int", prof: "arcane", level: 0, ap: "5 AP", range: "Touch", duration: "instant", dmgType: "Thunder", dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['conjure a rolling thunder to blast a target away. Make a spellcasting roll vs the targets Strength. On hit, roll a wound die and the target is pushed back 1 tile and is staggered until the end of their next turn, being pushed an additional tile for every crit. If the target is unable to move, either due to another creature or obstacle, roll a wound die for every tile remaining.', 'Add a proficiency die for every level above cantrip.'] },
        "arcane-blasts": { stat: "int", prof: "arcane", level: 1, ap: "8 AP", range: "7", duration: "instant", dmgType: "Force", dmg: [0, 3], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['You shoot a volley of 2 force blasts, sending a blast to any target in range. The blasts travel around corners and obstacles, homing in on their target. You may have all blasts target the same creature, or split the blasts between creatures. The target creatures make a Strength save vs your spellcasting roll. On fail they take 1 wound die for every blast aimed at them, upgrading a wound die to a wound for every crit rolled.', 'Add a blast (and wound die) for every level above the first.'] },
        "arcane-key": { stat: "int", prof: "arcane", level: 1, ap: "1 minute", range: "Touch", duration: "instant", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Magically force a lock to open. Make a lockpicking roll, using your spellcasting roll instead of your lockpicking skill. On success the lock is opened. This spell can open magical locks.', 'Add a proficiency die for every level above 1st.'] },
        "beam-of-fire": { stat: "int", prof: "arcane", level: 1, ap: "7 AP", range: "Self", duration: "instant", dmgType: "Fire", dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['A blast of fire shoots from your hands, hitting all creatures in a 3x1 beam. Make a spellcasting roll vs the targets defense. On hit the target takes a wound, if you crit the targets take another wound.', 'The beam length increases by 1 per level and deals an extra wound die for every level above 1st'] },
        "call-lightning": { stat: "int", prof: "arcane", level: 1, ap: "7 (5) AP", range: "10", duration: "instant", dmgType: "Lightning", dmg: [1, 2], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Call a bolt of lightning to strike a nearby target. The target makes a Dexterity save vs your spellcasting. On hit they take 1 wound, plus 2 wound dice in damage, and are paralyzed until the end of their next turn on crit. If cast in rainy conditions this spell only costs 5 AP.', 'Add a proficiency die for every level above first.'] },
        "chilling-ray": { stat: "int", prof: "arcane", level: 1, ap: "6 AP", range: "5", duration: "instant", dmgType: "Cold", dmg: [0, 1], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You shoot a chilling beam at up to 3 targets in range. Make a spellcasting roll vs the targets Stamina. On hit, the target takes 1 wound die and gains Slow 1, or Slow 2 on crit.', 'Add a proficiency die for every level above 1st.'] },
        "detect-magic": { stat: "int", prof: "arcane", level: 1, ap: "6 AP", range: "10", duration: "instant", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Target a 10x10 area, making a spellcasting roll against 2 bad die. On success you can see a faint outline over any magical effect in the area. For each crit you are able to determine the school of a given magic effect and a rough idea of the magic's purpose.", 'Add a proficiency die for every level above the 1st.'] },
        "identify": { stat: "int", prof: "arcane", level: 1, ap: "1 minute", range: "Touch", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Attempt to learn the secrets of a magical item or trinket. When attempting to identify an item, use your spellcasting instead of your Lore skill to make the roll.', 'Add a proficiency die for every level above 1st'] },
        "magic-sight": { stat: "int", prof: "arcane", level: 1, ap: "10 AP", range: "Self", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Create an invisible floating eye, visible only to those who can see the etheral plane or have cast _Detect Magic_. You can see, but not hear, everything the eye can see in addition to your normal senses. You can command the eye to move, moving 5 tiles each turn. If the eye moves more than 10 tiles away from you, you must make a spellcasting roll against 2 Bad die, repeating this roll every minute. On fail the spell ends. The eye cannot move through solid objects, but can fit through holes as small as 1 inch.', 'If the eye is able to fully spot a creature behind cover, they gain 1 less bonus die from cover against your attacks.', 'Add a proficiency die for every level above 1st.'] },
        "poison-trap": { stat: "int", prof: "arcane", level: 1, ap: "7 AP", range: "5", duration: "1 minute", dmgType: "Poison", dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Choose 3 connected tiles in range. When a creature starts their turn or enters a tile for the first time they must make a Stamina save against your spellcasting. On a fail they take 1 wound. On a crit the target is poisoned until the end of their next turn. These tiles count as difficult terrain, and last for 1 minute.', 'Add a tile for every level above first.'] },
        "ray-of-sickness": { stat: "int", prof: "arcane", level: 1, ap: "5 AP", range: "7", duration: "instant", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Make a spellcasting roll vs a targets stamina. On success the target gains Poison 1 for the next 10 minutes, or Poison 2 on crit.', 'Add a target for every level above 1st.'] },
        "sword-burst": { stat: "int", prof: "arcane", level: 1, ap: "3 AP", range: "Self", duration: "1 minute.", dmgType: "Force", dmg: [0, 1], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['Magically enchant your weapon to fire a burst of energy with your next attack. You gain _Reach 1_ for the duration of the spell. On your next attack the target makes a Strength save against your weapon attack roll. On fail, you connect with the attack, converting all physical damage to Force damage and adding an extra wound die to the damage roll. After you make the attack the spell ends.', 'Your reach increases by 1 and you add a wound die to the damage for every level above the 1st.'] },
        "thunderclap": { stat: "int", prof: "arcane", level: 1, ap: "5 AP", range: "Self", duration: "instant", dmgType: "Thunder", dmg: [1, 1], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['A wave of force slams the ground around you, hitting all creatures adjacent to you. Make a spellcasting roll vs the targets defense. On hit the target takes a wound and a wound die in damage and is staggered, and on a crit the target is pushed away 1 tile from you, taking an extra wound if an object or creature blocks their movement.', 'Add a proficiency die for every level above first.'] },
        "barrier": { stat: "int", prof: "arcane", level: 2, ap: "2 AP", range: "Self", duration: "instant", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['As a reaction you quickly pull up magical defenses, protecting you and all creatures adjacent to yourself. Make a spellcasting roll, you and all effected creatures add 1 superior die, adding an extra superior die for every crit, against the incoming spell. If the spell does not require a save, roll the superior dice against the casters spellcasting roll. On a success the spell has no effect.', 'Increase the range of protection by 1 and add a proficiency die for every level above the first.'] },
        "combust": { stat: "int", prof: "arcane", level: 2, ap: "7 AP", range: "10", duration: "1 minute", dmgType: "Fire", dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Cause up to 2 creatures in range to burst into flames. Targets makes a Dexterity save vs your spellcasting, on a fail they ignite in flames. At the start of their turn they take 1 wound. On their turn they may spend 5 AP rolling on the ground to extinguish the fire, leaving them prone.', 'Add a target for every level above 2nd.'] },
        "dispel-magic": { stat: "int", prof: "arcane", level: 2, ap: "5 AP", range: "5", duration: "instant", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You attempt to dispel a magical effect targeting a creature or area. Make a spellcasting roll vs 1 proficient die per level of spell you are trying to dispel. If the effect you are trying to break is actively being concentrated on by another creature make a spellcasting roll vs the creatures concentration instead. On success the magical effect ends. If targeting an effect caused by an object, such as a magic item or animated armor, they regain their magical effects after 10 minutes.', 'You may target an additional effect for every level past 2nd.'] },
        "elemental-shell": { stat: "int", prof: "arcane", level: 2, ap: "5 AP", range: "Self", duration: "10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Create an energy barrier around yourself. Choose a damage type: fire, cold, lightning, thunder, poison. Make a spellcasting roll, gaining Resistance 1 to that damage type, increasing the resistance by 1 for every crit rolled.', 'Add a proficiency die for every level above 2nd.'] },
        "flurry": { stat: "int", prof: "arcane", level: 2, ap: "7 AP", range: "Touch", duration: "instant", dmgType: "Cold", dmg: [0, 2], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['You conjure a flurry of ice shards in a 3x3 area. Each creature must make a Stamina save vs your spellcasting modifier. On fail they take 2 wound die, gaining 1 level of Slow for the next minute on crit.', 'Increase the number of wounds and level of slow by 1 for every level above 2nd.'] },
        "imprint": { stat: "int", prof: "arcane", level: 2, ap: "up to 5 minutes", range: "Self", duration: "concentration, 5 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Attempt to record your senses to an object, allowing a creature to replay your recording by holding the object and speaking a command word. Make a spellcasting roll, adding a superior die if a gemstone worth at least 50sc is used. Depending on your successes the quality of the recording will change:', '- **0-1**: There is no sound, and the visuals are too blurry to make out faces, but you can make out the type of area you are in.', "- **2-3**: You can determine each creatures race, but not face. You get a good idea of the area (in a cellar/building, number of trees, important PoI's such as a rock or pillar). You can hear if people are talking, but cannot make out words.", '- **3-5**: You can make out a creatures race and identify them if you have seen them before. You can hear enough to make out individual words when spoken, although there are occasional gaps.', '- **6+**: The recording is exact, with the user seeing and hearing exactly as the caster saw.', 'The recording is permanent, unless a command word is spoken to end the spell or _Dispel Magic_ is cast on it. A creature under _Nondetection_ appears as a blurry patch and their voice is unrecognizable regardless of the quality of recording.', 'Add a proficiency die for every level above 2nd.'] },
        "magic-weapon": { stat: "int", prof: "arcane", level: 2, ap: "10 AP", range: "5", duration: "concentration, 1 hour.", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Temporarily enchant a weapon with magic. Target up to 5 weapons, adding 1 terrible die to your spelclasting roll for each weapon targeted. On success the weapons are considered +1 magic weapons. If you lose or drop concentration before the hour is finished the weapons retain the magic for 1 minute before fading completely.', 'Add a proficiency die for every level above 2nd.'] },
        "misty-step": { stat: "int", prof: "arcane", level: 2, ap: "3 AP", range: "5/10", duration: "instant", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Teleport to a unoccupied point you can see in range. Make a spellcasting roll, adding 2 bad die if you attempt to teleport more than 5 tiles, with a max range of 10. On success you teleport to that position, preventing any opportunity attacks or attacks that trigger on entering someones zone of control.', 'Add a proficiency die for every level above 2nd.'] },
        "resilient-shield": { stat: "int", prof: "arcane", level: 2, ap: "4 AP", range: "Self", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['On your turn, or as a reaction, you create a dampening shield around yourself. While the shield holds you gain Resistance 1 to all physical damage. Make a spellcasting roll, the shield can take 3 hits before shattering, adding a hit for each crit rolled. While the spell is active you cannot take the move or sprint actions, but movement effects do not break the spell.', 'Add a proficiency die for every level above 2nd.'] },
        "animate-guardian": { stat: "int", prof: "arcane", level: 3, ap: "8 AP", range: "Touch", duration: "1 hour", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You attempt to animate a simple object made of plant, wood, stone, or metal no more than 1 tile in size. If the object is part of a larger construction (a stone wall, a dirt mound, etc) you add 1 terrible die to your roll as you try to force it free.', "Make a spellcasting roll adding 2 terrible dice or 4 terrible dice if the meterial is metal. On success you create a golem out of the object. The golem has 3 wounds and acts on your turn. It can take a move action to move 4 tiles and can make a single attack. The golem's attack uses 5 normal dice, improing one die for every success and adding a die for every crit. The creature deals 1 wound on hit, adding a wound die for every size increase. After the duration or if the caster is incapacitated the golem reverts to inanimate material. Golems made of metal have _Resistance 1_ to physical damage.", 'Add a proficient die for every level above 3rd. At 5th level you may target a 2x2 area creating a golem with 5 wounds, and at 7th a 3x3 area creating a golem with 8 wounds and two attacks per turn.'] },
        "chain-lightning": { stat: "int", prof: "arcane", level: 3, ap: "7 AP", range: "5", duration: "instant", dmgType: "Lightning", dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['A burst of lightning that bounces from target to target. The Lightning bounces from your target to a creature of your choice within 3 tiles of the target, bouncing this way up to 2 times. The lightning cannot bounce to the same creature twice and must bounce to a creature if able. Each creature hit by the lightning must make a Dexterity save vs your spellcasting, on hit they take 1 wound in damage, plus a wound die for every crit rolled in your spellcasting roll.', 'The number of bounces increases by 1 and you add a proficient die to your spellcasting roll for every level above 3rd.'] },
        "counter-spell": { stat: "int", prof: "arcane", level: 3, ap: "2 AP", range: "5", duration: "instant", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Attempt to counter the flow of magic. As a reaction make a spellcasting roll vs the targets Intelligence, adding a terrible/superior die for every level this spell is below/above the target spell. On success the spell is countered.'] },
        "far-sight": { stat: "int", prof: "arcane", level: 3, ap: "10 AP", range: "1 mile", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['See far into the distance, bending your sight around obstacles. Choose a location in range, making a spellcasting roll against 2 Terrible die, or 3 if the location is unfamiliar to you. On success you can see the target location as long as it is not complete incased, for example you would be able to see the happenings in a town, but not inside buildings. You can see the location as if you were present there, but cannot make out sounds. At any time you may change the target of your sight, requiring a minute to reorient yourself.', 'Add a proficient die for every level above 3rd.'] },
        "fireball": { stat: "int", prof: "arcane", level: 3, ap: "8 AP", range: "10", duration: "instant", dmgType: "Fire", dmg: [2, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['shoot a ball of fire centered at a target location you can see. The fireball explodes on impact, hitting all creatures in a 5x5 area. Creatures must make a Dexterity save vs your spellcasting, taking 1 wound on success. On failure they take 2 wounds, plus a wound die on crit.', 'Add a wound die for every level above 3rd.'] },
        "flight": { stat: "int", prof: "arcane", level: 3, ap: "7 AP", range: "5", duration: "concentration, 1 hour", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Gain magical flight, allowing you to float through the air. Target up to 5 willing creatures, adding a Terrible die to the spellcasting roll for each creature targeted. On success all targeted creatures gain a flying speed equal to their movement speeds.', 'Add a proficient die for every level above 3rd.'] },
        "phantasmal-blades": { stat: "int", prof: "arcane", level: 3, ap: "8 AP", range: "10", duration: "instant", dmgType: "Force", dmg: [3, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['Launch a series of arcane swords at a target. The target makes a Strength save vs your spellcasting, taking 3 wounds on fail.', 'Add a wound and proficiency die for every level past 3rd.'] },
        "telepathic-bond": { stat: "int", prof: "arcane", level: 3, ap: "1 minute", range: "5", duration: "1 hour", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You form a telepathic connection with up to 5 willing creatures. Make a spellcasting roll, adding a bad die for every creature targeted. On success all creatures may communicate telepathically with each other over any distance, as long as they remain on the same plane. Creatures communicating this way understand each other even if they do not speak the same language.', 'Add a proficient die for each level above the 3rd.'] },
        "conjure-elemental": { stat: "int", prof: "arcane", level: 4, ap: "7 AP", range: "5", duration: "instant", dmgType: "Poison", dmg: [0, 0], lroll: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You conjure an elemental construct at a target location. You can create an air, water, earth, or fire elemental. Make a spellcasting roll against 2 Terrible dice, on success you conjure an elemental with wounds equal to your spellcasting roll. The elemental is a medium creature, becoming a large creature if it has 5 wounds or more. The elemental uses your spellcasting roll for attacks and has Resistance 2 against its own element.', 'The elemental gains 1 max AP and you add a superior dice for every level cast above 4th.', '> ## Elemental', '> ___', '> - **Armor** 0/3', '> - **Wounds** \\*/*', '> - **Speed** 3/3', '> - **AP** 10', '>___', '>|STR|DEX|STA|INT|WIL|CHA|', '>|:---:|:---:|:---:|:---:|:---:|:---:|', '>|1/3|1/2|0/3|0/0|0/1|0/0|', '>___', '> - **Resistance:** 2 against their element', '> - **Elemental Affinity:** Each elemental gains a different bonus. *Fire:* melee attacks deal an extra wound die on crit. *Earth:* gain 1 defense die. *Air:* gain a flying speed equal to their movement speed. *Water:* gains 1 to their move and sprint speeds.', '> ### Actions', "> - ***Attack.*** *All* 5 AP, melee, Make a spellcasting roll against target's defense, dealing 1 wound + 1 wound die in damage based on it's element.", "> - ***Firebolt.*** *Fire Only* 5 AP, range 10, Make a spellcasting roll against a target's defense, dealing 1 wound in fire damage, plus 1 wound die on crit.", '> - ***Harden.*** *Earth Only* 3 AP, Improve all defense dice to superior defense dice.', '> - ***Gust.*** *Air Only* 7 AP, Creates a torrent of wind in a direction away from the elemental. The gust is 3 tiles wide and 7 tiles long and lasts until the start of the elementals next turn. All creatures moving into the wind use an extra tile of movement for each tile moved. All ranged attacks moving into the wind add 1 terrible dice to their attack.', '> - ***Freeze*** *Water Only* 5 AP, melee, Attempt to freeze a creature in place, make a spellcasting roll against the targets Dexterity, dealing 1 wound in cold damage and restraining them until the start of your next turn on crit.'] },
        "fire-shell": { stat: "int", prof: "arcane", level: 4, ap: "6 AP", range: "Self", duration: "concentration, 10 minutes", dmgType: "Fire", dmg: [0, 2], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['A shell of fire surrounds your body. For the duration you add 1 superior defense die to your defense rolls against ranged attacks, incinerating the projectile on success. When a creature adjacent to you makes a melee attack against you, they must make a dexterity save vs your spellcasting. On fail, they take 2 wound die in fire damage, or 2 wounds on crit. The damage from Fire Shell happens before the attack lands, if the creature is killed their attack deals no damage.', 'Add a proficient die for every level above the 4th.'] },
        "ice-lance": { stat: "int", prof: "arcane", level: 4, ap: "8 AP", range: "Touch", duration: "10 minutes", dmgType: "Cold", dmg: [1, 2], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You create 3 spears of solid ice that last for 10 minutes. For the duration you may replace your normal weapon attack with an Ice Lance, using your Arcane spellcasting for the attack roll. The Lance is a Two-handed weapon with Reach, and deals 1 wound and 1 wound die in cold damage. Instead you may throw the lance at a target creature within 10 tiles. Make a spellcasting roll vs the creatures Defense, dealing 1 wound and 2 wound dice on hit and giving a level of Slow for every crit rolled. All adjacent creatures take 1 wound, and Slow 1 if you crit. The spell ends after 10 minutes or all spears have been thrown.', 'You can make one attack, melee or thrown, when casting this spell.', 'You create an additional lance for every level above 4th.'] },
        "lightning-bolt": { stat: "int", prof: "arcane", level: 4, ap: "8 AP", range: "Self", duration: "instant", dmgType: "Lightning", dmg: [1, 2], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Fire a bolt of lightning, hitting all creatures in a 15 tile line. The lightning ricochets off walls and solid objects. All creatures must make a Dexterity save vs your spellcasting. On fail, they take 1 wound and 2 wound dice, plus a wound die for every crit, or 1 wound on success.', 'Add a proficient die for every level above the 4th.'] },
        "nondetection": { stat: "int", prof: "arcane", level: 4, ap: "10 AP", range: "Touch", duration: "24 hours", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['For the duration of the spell a creature is undetectable by most forms of magic. Any spell of 4th level or below that grants sight does not see this creature, and locate spells of a similar level fail to find them. When using spells of 5th level or higher, such as _Scrying_, roll 4 superior die against the spellcasting roll, staying undetectable on success.', 'You may target an additional creature for every level above the 4th.'] },
        "orb-of-acid": { stat: "int", prof: "arcane", level: 4, ap: "7 AP", range: "10", duration: "instant", dmgType: "Poison", dmg: [0, 3], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['You conjure an orb of vitriolic acid, launching it at a target in range. On impact the orb explodes in a splash of acid, hitting all creatures in a 2 tile radius star pattern. Creatures must make a Dexterity save vs your spellcasting modifier, on fail they take 3 wound dice in damage and their armor breaks on crit, lowering its modifier by 1.', 'Regardless of outcome acid covers the floor for the next minute. Any creature that starts their turn, or takes a move or sprint action on the acid take 1 wound die in damage.', 'The radius of the blast and the wound dice of the initial attack increase by 1 for every level above 4th.'] },
        "passwall": { stat: "int", prof: "arcane", level: 4, ap: "1 minute", range: "Touch", duration: "1 hour", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You attempt to mold a passage into a surface made of wood, stone, earth or other inorganic material creating a doorway up to 2x2 tiles in size. The passage can be at most 4 tiles deep, if there is no exit on the other side the spell automatically fails. Make a spellcasting roll, adding a terrible die for every 2 tiles of distance the passage creates. On success the passage is created.', 'Add a proficiency die and increase the maximum depth by 2 tiles for every level cast above 4th. At 7th level and above you may cast this on metal surfaces as well.'] },
        "starfall": { stat: "int", prof: "arcane", level: 4, ap: "9 AP", range: "25", duration: "1 minute", dmgType: "Force", dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Summon magical star shards to fall over a target area. You cover a 9x9 tile area centered on a point in range. For the duration, any creature that starts their turn in the area makes a Strength save against your spellcasting. On fail they take 1 wound, adding a wound die on crit.', 'Increase the area by 2 and duration by 1 turn for every level cast above 4th.'] },
        "illusory-space": { stat: "int", prof: "arcane", level: 5, ap: "10 AP", range: "20", duration: "concentration, 1 Hour", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You create an illusory landscape covering a 10x10x10 tile area. The illusion can change the look, smell, sounds and temperature of the area. All effects happen in the creatures mind and have no effect on the creature themselves. The illusion covers the landscape, you may extend the illusion up to 6 inches from a surface with no ill effects, creatures will believe they are interacting with the illusion.', 'You may cast the illusion over a cliff or gap, for example creating a bridge over a a ravine. A creature falling from your illusion makes a Willpower save vs your spellcasting, on fail they rationalize a reason for the outcome. Similarly you may create an illusion of something inside the space (eg: creating an illusion of a tower in a flat meadow), with the creature making a Willpower save when attempting to interact with it.', 'A creature attempting to perceive the illusion must make a perception check against your spellcasting, on success they see the illusion for what it is.', 'For every level above 5th you may extend the illusory space by another 10x10x10 area.'] },
        "open-warren": { stat: "int", prof: "arcane", level: 5, ap: "9 AP", range: "5", duration: "1 minute, concentration", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Rip open a hole in this plane, leading to a Warren. You can hold the warren open for one minute, after which the gate closes.', 'While inside the warren, every hour of travel is equivalent to 8 on the material plane. Every hour you must make a spellcasting roll against 1 terrible die. On failure you are ejected from the Warren, randomly placed within 20 miles of your position. For every roll made, add a terrible die. You gain no benefits from short or long rests while inside a warren. You may end the spell at any time, opening a gate back to the material plane.', 'You do not start making spellcasting rolls to stay inside the warren for an additional hour for every level cast above the 5th.'] },
        "poison-cloud": { stat: "int", prof: "arcane", level: 5, ap: "8 AP", range: "15", duration: "10 minutes", dmgType: "Poison", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You create a 7x7 cloud of poison at a point in range you can see. The poison cloud bends around corners and permeates surfaces. While inside the poison cloud, any creature starting their turn must make a Stamina save vs your spellcasting. On fail their Poison level increases by 1 to a max of 3 and they take 1 wound die per level of Poison effecting them. While inside the cloud creatures do not make Stamina saves at the end of their turns to reduce the poison effect.', 'Strong winds can move or reduce the size of the poison cloud, with spells like _Gust_ reducing the size of the cloud by 1 for every crit rolled.', 'The size of the cloud increases by 2 and you add a proficiency die to your spellcasting roll for every level cast above 5th.'] },
        "wall-of-fire": { stat: "int", prof: "arcane", level: 5, ap: "8 AP", range: "15", duration: "instant", dmgType: "Fire", dmg: [1, 3], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['A great wall of fire, 10 tiles wide and 3 tiles high, errupts from the ground. Any creature that starts their turn in or enters the wall for the first time must make a defense roll vs your spellcasting. On hit they take 1 wound and 3 wound die in damage, and are ignited for 1 minute on a crit. On success they take 1 wound. Any ranged weapon or spell attack made through the wall adds 2 bad die to the attack, being incinerated by the wall if the attack misses.', 'Add a wound die for every level above the 5th.'] },
        "ward-area": { stat: "int", prof: "arcane", level: 5, ap: "10 minutes", range: "5", duration: "24 hours", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You crystalize the weave of magic around an area no larger than 100 tiles, securing it from outsiders. You may choose any or all of the following effects:', '- Sound cannot pass through the warded area, preventing sounds from entering or leaving.', '- The barrier becomes opaque preventing vision, looking like a dense cloud from the outside.', '- Magical sensors, such as those created by _Magic Sight_, cannot pass through or be created inside the barrier.', '- Divination magic targeting a creature inside the barrier automatically fail.', '- Teleportation by any means is prevented inside the barrier.', '- Planar travel is prevented inside the barrier.', 'Make a spellcasting roll adding a bad die for every effect chosen. On success the barrier is created over the target area.', 'The number of tiles effected increases by 100 for every level cast above 5th.'] },
        "anti-magic-field": { stat: "int", prof: "arcane", level: 6, ap: "9 AP", range: "10", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Attempt to stablize an area against magic. Choose a point within range making a spellcasting roll against 2 terrible die, on success a 5x5 anti-magic field is created centered on that point. For the duration, any spell passing through it or targeted inside it must have more successes than your spellcasting roll or else the spell has no effect.', 'If a spell entering the field does not require a roll it must make one following the rules above.', 'The area increases by 2 and you add a superior die to your spellcasting rolls for each level above 6th.'] },
        "conjuration": { stat: "int", prof: "arcane", level: 6, ap: "10 minutes", range: "Touch", duration: "1 day", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You conjure or reshape material into a form of your choosing. The material can be made of organic or inorganic material, such as leather, food, stone, or iron as long as you have seen the material before. Conjuring precious metals and materials, such as gemstones, gold, or diamonds will be brittle, crumbling after 10 minutes. The object cannot be magical in nature, such as a magic sword, potion, or scroll, and must be simple, no more complex than a crossbow. For example, you may be able to conjure a door with hinges, a cart with wheels, or a chest but would not be able conjure a clock.', 'On casting the spell make a spellcasting roll vs 3 bad dice, on success you conjure an object or objects up to 4 tiles in size, or 1/4th that size when conjuring items made of stone or metal.', 'The amount you can conjure doubles with each level above 6th; up to 8 tiles at 7th level, 16 tiles at 8th level, and 32 tiles at 9th level.'] },
        "earthquake": { stat: "int", prof: "arcane", level: 6, ap: "10 AP", range: "200", duration: "concentration, 10 minutes", dmgType: "Bludgeoning", dmg: [0, 1], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You cause the ground to shake and tear, collapsing buildings and toppling trees in a 60x60 area centered on a point in range. Now, and at the start of each of your turns each creature in the area must make a Dexterity save vs your spellcasting, on fail they take 1 wound die in damage and are knocked prone. The strength of the earthquake causes all tiles in the area to become difficult terrain. Structures made of wood, trees, or similar material fall apart over the duration. Structures made of stone partially collapse after the full 10 minutes. Reinforced buildings such as keeps and castles may take superficial damage or partially break, depending on how the DM.', 'The range and area of the spell increases by 10 for each level above 6th.'] },
        "evocation": { stat: "int", prof: "arcane", level: 6, ap: "7 AP", range: "Self", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You tap in to the latent mana in your surroundings, empowering your spells. Make a spellcasting roll against 4 Terrible dice, on success you have expertise for all spellcasting rolls for the duration. Holding this connection is both mentally and physically exhausting. Should the spell end due to losing concentration you take 1 level of exhaustion, or 2 levels if you critically fail the concentration check.', 'Add a proficiency die for every level above 6th.'] },
        "forcewave": { stat: "int", prof: "arcane", level: 6, ap: "8 AP", range: "Touch", duration: "instant", dmgType: "Force", dmg: [0, 5], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['Harness your magic and unleash a destructive wave of force. A blast of force 5 tiles wide and 12 tiles long erupts from your hands. All creatures in the blast must make a Strength save vs your spellcasting. On fail they take 5 wound dice in damage and are thrown back half the distance of the wave, on success they take 2 wound dice and are pushed back 1 tile. Objects and structures in the waves path are destroyed, leaving difficult terrain.', 'The length of the wave increases by 3 and wound dice increases by 1 for each level above 6th.'] },
        "call-storm": { stat: "int", prof: "arcane", level: 7, ap: "10 AP", range: "20", duration: "concentration, 10 minutes", dmgType: "Lightning, Thunder", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You summon storm clouds overhead in a 20 tile radius. For the duration the area is covered in light rainfall and strong winds. On casting this spell, and by spending 4 AP once per turn on following turns, you may activate one of the following effects:', '- **Gale winds:** The winds blow in a direction of your choosing, covering the area of the storm. All creautres in range must make a Strength save or be pushed back 2 tiles, and are knocked prone on crit. Until the start of your next turn moving into the wind counts as difficult terrain and ranged attacks made into the wind add a terrible die to the roll.', '- **Downpour:** Torrential rainfall covers the area, extinguishing fires and greatly reducing visibility. A creature attempting to see through the rain and mists must make a perception check against your spellcasting. On fail they cannot see further than 3 tiles.', '- **Thunderstrike:** Call town a thundering bolt of lightning at a target creature. The creature makes a Dexterity save vs your spellcasting, on fail taking 1 wounds and 4 wound dice in lightning damage. In addition, all creatures within 2 tiles of the target must make a Stamina save or take 2 wound dice in thunder damage, being knocked prone on crit.', 'Add a proficiency die for every level cast above 7th.'] },
        "mass-fireball": { stat: "int", prof: "arcane", level: 7, ap: "10 AP", range: "20", duration: "instant", dmgType: "Fire", dmg: [2, 3], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You conjur a barrage of fireballs at points in range you can see. You summon 3 fireballs, each exploding in a 5x5 area and burning all creatures inside. All creatures inside the fireballs make a Dexterity save vs your spellcasting. On hit they take 2 wounds and 3 wound dice in damage, adding a wound die on crit. On success they take 3 wound dice in damage instead. The fireballs can overlap, with a creature making a single save against the spell. A creature hit by 2 or more fireballs adds an extra wound to the damage, or wound die on success.', 'Add an extra fireball for every level cast above 7th.'] },
        "power-word-fire": { stat: "int", prof: "arcane", level: 7, ap: "9 AP", range: "Self", duration: "5 minutes, concentration", dmgType: "Fire", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You speak a word of power as fire races across your body. Until the spell ends, you gain the following benefits:', '- You gain Fire Resistance 3.', '- Any creature that moves adjacent to you,begins their turn there or makes a melee attack against you are burned by the fire and take 1 wound in damage.', '- You may spend 5 AP to unleash a cone of fire infront of you. The cone extends 5 tiles out and 3 tiles wide, all creatures hit by the fire must make a Defense roll against your spellcasting. On fail they take 1 wound and 2 wound dice in damage, or 1 wound on success.', 'Only a single Power Word can be active at once, casting another Power Word spell ends another Power Word spell you control.', 'The damage from both sources increases by 1 wound die for every level above 7th.'] },
        "power-word-ice": { stat: "int", prof: "arcane", level: 7, ap: "9 AP", range: "Self", duration: "5 minutes, concentration", dmgType: "Cold", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You speak a word of power as ice rimes across your body. Until the spell ends, you gain the following benefits:', '- You gain Cold Resistance 3.', '- Any creature that moves within 3 tiles of you, or starts their turn there must make a Stamina save vs your spellcasting. On fail they gain Slow 1, or Slow 2 if you crit.', '- You may spend 5 AP to freeze a target within 5 tiles solid. A targeted creature must make a Stamina save vs your spellcasting. On fail they take 3 wound dice in damage, and on crit are frozen in ice until the end of their next turn. While frozen they gain Resistance 2 to physical damage and are incapacitated.', 'Only a single Power Word can be active at once, casting another Power Word spell ends another Power Word spell you control.', 'The range of both effects increase by 1 and you add a proficiency die to your spellcasting rolls for every level above 7th.'] },
        "power-word-lightning": { stat: "int", prof: "arcane", level: 7, ap: "9 AP", range: "Self", duration: "5 minutes, concentration", dmgType: "Lightning", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You speak a word of power as ice rimes across your body. Until the spell ends, you gain the following benefits:', '- You gain Lightning Resistance 3.', '- As a reaction or on your turn you may spend 2 AP to teleport to an unoccupied tile within 3 tiles of your position.', '- You may spend 5 AP to fire a lightning bolt against 3 creatures within 10 tiles of you. Make a spellcasting roll vs the targets Dexterity, on success they take 1 wound, plus 1 wound die for every crit rolled.', 'Only a single Power Word can be active at once, casting another Power Word spell ends another Power Word spell you control.', 'Add a superior die to your spellcasting roll for every level above 7th.'] },
        "project-image": { stat: "int", prof: "arcane", level: 7, ap: "5 AP", range: "5", duration: "concentration, 1 hour", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You create a perfect image of a willing creature. Make a spellcasting roll against 2 terrible die, on success an illusory copy of the creature appears next to the target creature. The illusion can interact with its surroundings and has temporary wounds equal to the number of successes in your spellcasting roll. A creature can make a perception check against your spellcasting to perceive the image as an illusion.', "The image looks identical to the creature it's based on, copying all clothes, armor, or weapons they are carrying. Any magical items are copied in appearance only, for example a magical sword will look magical but not have any of the properties of the original sword. The image does not need food, water, or air and any non-damaging spell targeting it fails. The image rolls defense equal to the gear the image is wearing, minus any magic properties. Only the appearance and items of a creature are copied, the image does not gain any of its features or abilities.", "For the duration of the spell you may choose to perceive through your senses or the image's senses. You may control the image as you would your own body; moving, interacting, and speaking as the image. When casting spells you may choose the image to be the source of the spell, and you may make attacks using the image, using your spellcasting roll for the attack. The image cannot be healed or repaired, once drops to 0 temporary wounds the spell ends. The image is destroyed when entering a zone similar to that of _Anti-Magic Field_.", 'The duration increases to 8 hours at 8th level, and 1 day at 9th level.'] },
        "fiendfire": { stat: "int", prof: "arcane", level: 8, ap: "10 AP", range: "touch", duration: "instant", dmgType: "Fire", dmg: [2, 5], lroll: [0, 0, 0, 0, 0, 0, 0, 1, 1, 0], txt: ['Blast an area with the fires of hell. Fiendfire blasts from your hands in a narrow arc, extending 9 tiles long and 3 tiles wide. Each creature in the fire makes a Dexterity save against your spellcasting roll. On hit they take 2 wounds and 5 wound dice in damage, adding a wound die for every crit rolled. On success they take 3 wound dice instead.', 'The fire burns through trees, bushes, or other plant matter leaving only ash. On impacting stone or earth the fire burns through it, leaving a hole a size of half the remaining distance. Metal and other similar materials burn, leaving a hole only a quarty of the remaining distance. Any armor or weapon a creature is holding is destroyed if it is mundane, otherwise taking 1 level of damage.', 'Add a wound and wound die at 9th level.'] },
        "invulnerability": { stat: "int", prof: "arcane", level: 8, ap: "9 AP", range: "self", duration: "concentration, 1 minute", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You cover yourself in a layer of force, warding yourself from harm. Make a spellcasting roll against 2 terible dice. On success you gain Resistance 1 to all damage, increasing it by 1 for every crit rolled.', 'The duration increases to 2 minutes at 9th level.'] },
        "slow-time": { stat: "int", prof: "arcane", level: 8, ap: "10 AP", range: "5", duration: "concentration, 1 minute", dmg: [0, 0], lroll: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Slow time, causing others to freeze in place. Choose up to 5 creatures, yourself included, and make a spellcasting roll adding 2 terrible dice for each creature added. On success these creatures are able to freely move, while all other creatures experience time at a rate 100 times slower.', 'While time is slowed, all objects and terrain not held are frozen, unable to move. Interacting with another creature, such as attacking or casting a spell on them ends the effects of _Slow Time_ for the attacker, resolving the action once the spell ends.', 'At the start each of the casters turn they must make an exhaustion check against 2 terrible dice, gaining 1 level of exhaustion and ending the spell on fail.', 'Add 2 superior dice to the spellcasting roll at 9th level.'] },
        "stablize-warren": { stat: "int", prof: "arcane", level: 8, ap: "10 minutes", range: "self", duration: "24 hours", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You stablize a Warren existing in the space between worlds. Make a spellcasting roll, adding 5 Terrible dice. On success you create a Warren with a name of your choosing. Any creature that knows the name can travel to your warren with the _Open Warren_ spell.', 'The warren is accessible from the plane it was created on, but you may connect your warren to any plane you have been before. You may choose the atmosphere, terrain, and weather inside the warren. While the Warren is stablized you automatically succeed spellcasting rolls while travelling through this Warren with the _Open Warren_ spell. After the duration the warren begins to decay and you lose any benefits for travelling this warren.', 'Repeating this spell every day for a week will stablize the Warren for 1 year.', 'When cast at 9th level the duration increases to 1 year, and casting every day for a week stablizes the warren for 77 years.'] },
        "armageddon": { stat: "int", prof: "arcane", level: 9, ap: "10 AP", range: "90 tiles", duration: "1 turn", dmgType: "Bludgeoning/Fire", dmg: [0, 14], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You attempt to bring forth the ruinous powers of armageddon. Make a spellcasting roll, conjuring up to 3 meteors and adding 3 terrible dice to your roll for each meteor conjured. On success, choose a tile in range for each meteor. At the start of your next turn the meteors impact the ground dealing 7 wound dice in bludgeoning damage and 7 wound dice in fire damage to all creatures within 7 tiles of the impact. A creature in range of multiple meteors instead adds 2 wound dice to both damage types for each additional meteor. Buildings take full damage regardless of roll.', 'On fail the magic grounds itself through you, dealing 1 wound die in force damage for every failure in your spellcasting roll to you and every adjacent creature.'] },        

        "bleed": { stat: "wil", prof: "curse", level: 0, ap: "5 AP", range: "5", duration: "instant", dmgType: "Death", dmg: [0, 1], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Targeting a creature in range you can see you cause their wounds to reopen. The creature makes a Stamina save against your spellcasting roll. On fail they take 1 wound die in damage, or 3 wound dice if they have missing wounds.', 'You may target an extra creature for every level cast above cantrip.'] },
        "eldritch-blast": { stat: "wil", prof: "curse", level: 0, ap: "5 AP", range: "8", duration: "instant", dmgType: "Force", dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Blast a target with eldritch force. Make a spellcasting roll against the targets Strength. On success they take 1 wound, adding a wound die on crit.', 'Add a proficiency die to your spellcasting roll for every level cast above cantrip.'] },
        "levitate": { stat: "wil", prof: "curse", level: 0, ap: "5 AP", range: "5", duration: "concentration, 5 minutes", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You magically levitate an object or creature weighing less than 25 lbs. If the target is an unwilling creature you must make a spellcasting roll against thir Strength save. On success, each turn you may move the target 3 tiles upwards or downwards. This movement does not provoke opportunity attacks, and does not move them with enough force to damage them, but can force them prone (against the ceiling or floor).', 'If the target is an unwilling creature they make the save again at the end of their turn, freeing themselves from your levitation on success. If the target is in the air when the spell ends it drops to the ground normally. If the target becomes heavier than the spell can carry (for example a creature standing ontop of a levitating slab) the spell ends.', 'The maximum weight doubles for every level cast above cantrip.'] },
        "life-sense": { stat: "wil", prof: "curse", level: 0, ap: "5 AP", range: "10", duration: "1 minute", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['targeting a 4x4 cube, all living creatures give off the glow of life. Creatures must make a Willpower save vs your spellcasting. On a fail a dim light outlines their body. Any attacks against this creature can change a normal die for a proficiency die.', 'Add a proficiency die to your spellcasting roll for every level cast above cantrip.'] },
        "trickery": { stat: "wil", prof: "curse", level: 0, ap: "2 AP", range: "3", duration: "instant", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['When you or an ally is targeted by an attack or maneuver, you can use a reaction to distract the attacker, adding 1 bad die to their attack roll.', 'Add a bad die for every level above cast cantrip.'] },
        "witchcraft": { stat: "wil", prof: "curse", level: 0, ap: "3 AP", range: "5", duration: "1 minute", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You conjure up a display of witchcraft, displaying one of the following effects:', '- give yourself a minor alteration to your look, for example changing your eye color, causing harmless steam or smoke to rise off your body, creating a dim halo around your head, etc.', '- Enhance your voice to reach 3 times as far', '- Cause harmless tremors and vibrations in the earth around you', '- Cause objects to harmlessly move', '- Change the brightness or color of fire, cause it to flicker, etc.', '- Create an instantaneous sound at a location.', 'A creature trying to see through these illusions must succeed on a perception check vs your spellcasting.', 'Add 1 proficient die for every level above cantrip.'] },
        "black-tendrils": { stat: "wil", prof: "curse", level: 1, ap: "7 AP", range: "5", duration: "10 minutes, requires a free hand", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Black tendrils erupt from your hand to bind a target. The target must make a Dexterity save vs your spellcasting. On fail, the target is grappled, or restrained on a crit. The Tendrils require a free hand to grasp, or else the target is freed. On each of your move and sprint actions you may pull or slide the grappled target 1 tile. The grappled creature can attempt to break free, but makes their Strength save vs your spellcasting roll instead. Any ability or effect that would cause them to move more than 5 tiles away from you uses your spellcasting roll for the save instead of the normal roll. If the target moves more than 5 tiles away from you the tendrils break and the spell ends.', 'Add a proficiency die for every level above the 1st.'] },
        "charming-guise": { stat: "wil", prof: "curse", level: 1, ap: "7 AP", range: "10", duration: "1 hour", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You take on a charming persona, attempting to charm up to 5 creatures in range. Make a spellcasting roll against the targets Willpower, adding 1 bad die for every creature targeted. If the creature is hostile to you it adds 2 superior die to the roll. On success, the targets are charmed by you for the duration. Charmed creatures treat you as a friendly aquaintance. The charm ends if they take any damage, or if you act in a harmful way towards them. After the spell ends the target knows it was charmed.', 'Add a proficiency die for every level above the 1st.'] },
        "concealment": { stat: "wil", prof: "curse", level: 1, ap: "10 AP", range: "5", duration: "concentration, 10 mintues", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['A dull sheen covers your body, hiding your presence. Target up to 5 creatures and make a spellcasting roll, adding 1 Terrible die for every creature targeted. On success you are concealed for the duration. Strangers passing you on the street have trouble remembering you, not being able to recall details such as race, gender, or appearance. As long as you are undetected by a creature, you gain 1 superior die for all stealth checks against that creature, adding a superior die for every crit rolled. Concealment ends after taking a hostile action against another creature.', 'Add a proficiency die for every level above the 1st.'] },
        "crow-of-magthera": { stat: "wil", prof: "curse", level: 1, ap: "6 AP", range: "10", duration: "instant", dmgType: "Death", dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['You summon a crow with obsidian feathers capable of cutting through flesh and armor. The target makes a Dexterity sav vs your spellcasting, on fail they take 1 wound in damage. On crit their armor is reduced by 1 die, lasting until repair. Armor that no longer provides a defense bonus is destroyed.', 'Add a proficiency die for every level above the 1st.'] },
        "curse-of-misfortune": { stat: "wil", prof: "curse", level: 1, ap: "6 AP", range: "5", duration: "1 day", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Curse a creature with misfortune. They must make a willpower save vs your spellcasting. On fail, the creature adds a bad die to all saving throws for the next day. If you crit they add a terrible die instead. The curse can be removed through _Cleanse_.', 'You may target an additional person for every level above the 1st.'] },
        "firefly-swarm": { stat: "wil", prof: "curse", level: 1, ap: "7 AP", range: "7", duration: "1 minute", dmgType: "Fire", dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You summon a swarm of burning flies at a target tile in range. The flies attach themselves to nearby creatures, igniting themselves and burning the target. When a creature enters the swarm or begins their turn there, they make a Stamina save vs your spellcasting, taking 1 wound of fire damage on fail. Any invisible creatures hit by this lose their invisibility if it came from a spell, or becomes visible for 1 minute otherwise. There are enough fireflies to burn 3 times, after which the swarm disappears.', 'The the fireflies spread across 1 more tile and the number of burns increase by 1 for every level above 1st.'] },
        "ghoulish-claws": { stat: "wil", prof: "curse", level: 1, ap: "5 AP", range: "1", duration: "1 minute", dmgType: "Poison", dmg: [0, 3], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Your hands elongate becoming deadly claws. When casting this ability, and for the duration of the spell you may make an attack against a target in range. Make a spellcasting roll against the targets Defense, on hit they take 3 wound dice in poison damage, paralyzing the target on crit until the end of their next turn.', 'The duration increases by 1 minute for every level above 1st.'] },
        "hex": { stat: "wil", prof: "curse", level: 1, ap: "5 AP", range: "5", duration: "instant", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Hex a target. Make a spellcasting roll vs the targets Willpower. On success they gain Hex for 10 minutes, or Hex 2 on crit.', 'Add a proficiency die to your spellcasting roll for every level above 1st.'] },
        "hex-bolt": { stat: "wil", prof: "curse", level: 1, ap: "7 AP", range: "5", duration: "1 minute", dmgType: "Pyschic", dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Fire a bolt of pyschic force at a target. If the target is not Hexxed add 1 bad die to your roll. Make a spellcasting roll against the targets Willpower. On success deal 1 wound, rolling a wound die if the target is also Hexxed. On crit, the target gains Hex, or increases their level of Hex for 1 minute up to a max of 3. For the next minute, once per turn you may spend 2 AP to make an attack against the same target or move it to another target within 30 ft.', 'Add a proficiency die for every level above the 1st.'] },
        "occult-whispers": { stat: "wil", prof: "curse", level: 1, ap: "5 AP", range: "5", duration: "instant", dmgType: "Pyschic", dmg: [1, 1], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You whisper eldritch words into a creatures mind, causing it to panic. Make a spellcasting roll against the targets Willpower. On success the creature takes 1 wound of pyschic damage, and must spend its AP fleeing from you on crit. The creature, if able, moves 1 tile per remaining AP up to their movespeed, avoiding dangerous terrain if possible.', 'Regardless of if the spell hits the creature is distracted by the whispers and cannot make opportunity attacks against you this turn.', 'Add a proficiency die for every level above 1st.'] },
        "quicken": { stat: "wil", prof: "curse", level: 1, ap: "7 AP", range: "5", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Target up to 5 creatures. Make a spellcasting roll, adding a bad die for every creature you target. On success, the move action costs 2 less AP and sprint costs 1 less AP. In addition, for every crit the targets movespeed is increased by 1.', 'Add a proficiency die for every level above the 1st.'] },
        "sleep": { stat: "wil", prof: "curse", level: 1, ap: "7 AP", range: "10", duration: "1 hour", dmg: [0, 0], lroll: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You attempt to put a group of living creatures to sleep. Target a 4x4 tile area and make a spellcasting roll with 2 additional superior dice. Starting with the creature with the lowest current wounds, subtract their remaining wounds from your successes. If you have 0 or more successes remaining they fall asleep for the duration. Continue this until there are no more creatures or you have no more successes remaining. Creatures that are hostile towards you, or have magic resistance double the number of successes needed to sleep that creature.', 'The creatures wake up after the duration, or if they take damage, or if another creature uses 5 AP to wake them.', 'Add 2 superior die for each level above 1st.'] },
        "weal": { stat: "wil", prof: "curse", level: 1, ap: "1 minute", range: "5", duration: "4 hours", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Take a moment to study your surroundings, watching for signs of the future. This can come in many forms: the smell of a forest, the pattern of dust, the movement of clouds in the sky. Make a spellcasting roll, targeting up to 5 creatures and adding Terrible die to the roll for each. On success each creature chooses an action and rolls a superior die. For the duration the next time the creature takes this action they add the value of the die to their roll.', 'Add a proficienct die to the spellcasting roll for every level above 1st.'] },
        "betrayal": { stat: "wil", prof: "curse", level: 2, ap: "8 AP", range: "5", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Fill a targets mind with rage, forcing it to lash out against its surroundings. Make a spellcasting roll vs the targets Willpower. On success the target loses all remaining AP and makes a single attack against a random target within range. For every crit rolled the target adds a normal die for all attack rolls for the duration. On each of this creatures turns they must either attack a random target in range or move towards the closest creature. Each time this creature takes damage they make a willpower save against 2 bad die, adding a superior die for every wound taken.', 'Add a proficiency die for every level above the 2nd.'] },
        "bewitched-arrow": { stat: "wil", prof: "curse", level: 2, ap: "1 minute", range: "Touch", duration: "1 day", dmgType: "Death", dmg: [1, 2], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You conjure a number of deadly, black thorn arrows. Make a spellcasting roll to conjure up to 5 arrows, adding a bad die for every arrow conjoured. These arrows count as +1 ammunition and can be thrown instead of fired from a bow. When thrown they use your spellcasting modifier for the attack and have a range of 10.', 'On hit these arrows explode in a star pattern with 1 radius dealing 2 wound dice in death damage and inflicting blind until the end of the targets next turn. All other creatures in the blast must make a Stamina check against the arrows attack roll, taking 1 wound die in death damage and gaining blind until the end of their next turn.', 'You conjure an additional arrow for every level above 2nd.'] },
        "binding": { stat: "wil", prof: "curse", level: 2, ap: "7 AP", range: "10", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Shimmering chains bind a creature in range. Make a spellcasting roll against the creatures Dexterity, adding 2 bad die to the roll if the creature is Large or bigger. On success the creature is restrained for the duration. At the start of each of their turns they can make a Strength save vs your spellcasting, breaking the chains on success.', 'You can target an additional creature for every level above 2nd.'] },
        "cloud-of-teeth": { stat: "wil", prof: "curse", level: 2, ap: "6 AP", range: "Self", duration: "concentration, 10 minutes", dmgType: "Piercing", dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You create a swirling cloud of teeth around yourself. These teeth fill gaps in your armor, if you roll 4 or less defense die add a defense die, otherwise improve 1 defense die. The cloud extends to all adjacent tiles, any creature entering it for the first time or starting their turn there must make a defense save vs your spellcasting. On hit they take a wound and gain Slow 1.', 'The tiles effected increases by 1 in all directions for each level cast above the 2nd.'] },
        "command": { stat: "wil", prof: "curse", level: 2, ap: "7 AP", range: "10", duration: "8 Hours", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You attempt to force a creature to obey a given command or simple task. This spell automatically fails if the creature cannot be charmed, does not speak your language, or would harm the creature. The command can be no more than one sentence, and must be reasonable. For example, commanding a commoner to kill a dragon or hurt their friends will fail, but asking a peasant to buy you a drink will work.', "Make a spellcasting roll against the targets Willpower, on success they must complete the command to the best of their abilities. The spell ends when they have completed their task or they take damage. Creatures don't immediately know they have been commanded, but do remember their actions.", 'Add a proficiency die for every level cast above 2nd.'] },
        "corpse-explosion": { stat: "wil", prof: "curse", level: 2, ap: "7 AP", range: "10", duration: "instant", dmgType: "Death", dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You cause a Large or smaller corpse to explode, shooting sharp shards of bone to adjacent creatures. Medium and smaller creatures explode in a 1 radius star, while Large creatures explode in a 2 radius star. All creatures caught in the blast must make a Stamina save vs your spellcasting. On hit they take 1 wound and are poisoned for 1 minute, adding an wound die to the damage on crit.', 'You may target an additional corpse for each level cast above the 2nd.'] },
        "curse-of-fragility": { stat: "wil", prof: "curse", level: 2, ap: "6 AP", range: "5", duration: "1 day", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Curse a creature with fragility. They must make a willpower save vs your spellcasting. On a fail the creature adds a bad die to all defense rolls for the next day. If you crit they add a terrible die instead. The curse can be removed by remove curse.', 'You may target an additional person for every level above the 2nd.'] },
        "curse-of-suffering": { stat: "wil", prof: "curse", level: 2, ap: "6 AP", range: "5", duration: "1 day", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Curse a creature, extending their suffering. They must make a willpower save vs your spellcasting. On a fail any negative condition affecting the creature lasts an additional turn. If you crit, any time they gain Hex, Slow, or Poison they gain an additional level.', 'You may target an additional person for every level above the 2nd.'] },
        "dark-sight": { stat: "wil", prof: "curse", level: 2, ap: "1 minute", range: "5", duration: "1 hour", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Magically enhance a creatures vision, giving it the ability to see in the dark. Target up to 5 creatures, adding a bad die to your spellcasting roll for every creature added. On success they gain dark vision.', 'Add a proficiency die for every level above the 2nd.'] },
        "dull-intellect": { stat: "wil", prof: "curse", level: 2, ap: "6 AP", range: "5", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Attempt to cloud a targets mind. The creature makes a Willpower save vs your spellcasting. On a fail the creature adds a bad die to all spellcasting rolls. For each crit, use a terrible die instead.', 'The number of bad or terrible dice increases by 1 for every level above the 2nd.'] },
        "howling-whirlwind": { stat: "wil", prof: "curse", level: 2, ap: "7 AP", range: "10", duration: "1 minute", dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You create a spiraling mass of wind on a tile in range. Any creature that moves adjacent to the Whirlwind must make a Strength save vs your spellcasting, on fail they are pushed back 2 tiles stopping if a creature or object is in the way. If they stop this way they take 1 wound in damage. Any mundane projectile firing over or adjacent to the whirlwind must roll a wound die, missing on wound.', 'For the duration starting on the next turn, you may move the Whirlwind up to 2 tiles once per turn.', 'Add a proficiency die for every level cast above 2nd.'] },
        "mass-web": { stat: "wil", prof: "curse", level: 2, ap: "6 AP", range: "10", duration: "1 minute", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You create a mass of webs in a 3x3 area. All creatures inside the web or on the first time they enter must make a Dexterity save vs your spellcasting, on fail they are grappled, or restrained on crit. A creature effected by your Webs can be freed by making a successful attack against 3 defense dice. Any creature in range is capable of making this attack.', 'The webs are extremely flammable, and ignite after taking 1 wound of fire damage. Any creature caught in the web takes 1 wound of fire damage and is freed. After the duration the webs remain but lose their stickiness, becoming difficult terrain until cleared.', 'Add a proficiency die and increase the area by 1 for every level cast above 2nd.'] },
        "silent-passage": { stat: "wil", prof: "curse", level: 2, ap: "1 minute", range: "5", duration: "concentration, 1 Hour", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You emanate an aura of silence around yourself. Make a spellcasting roll against 2 Terrible die, on success each creature within range of you adds the total successes to any sound based stealth check. While the spell is active creatures in range do not leave tracks, and anything less than a shout cannot be heard outside of your aura.', 'Add a proficiency die for every level cast above 2nd.'] },
        "apathy": { stat: "wil", prof: "curse", level: 3, ap: "7 AP", range: "5", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Use your willpower to supress a creatures natural abilties. The target must make a willpower save, on fail you choose either Strength or Dexterity, the creature loses 2 to their proficiency modifier for all skills, saving throws, and weapon attacks using that attribute. Each crit further decreases the proficiency by 1.', 'Add a proficiency die for every level above 3rd.'] },
        "curse-of-weakness": { stat: "wil", prof: "curse", level: 3, ap: "6 AP", range: "5", duration: "1 day", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Curse a creature with weakness. They must make a willpower save vs your spellcasting. On a fail, They are Weakened. On a crit the creature cannot inflict Lesser or Greater wounds.', 'You may target an additional person for every level above the 3rd.'] },
        "enlarge/reduce": { stat: "wil", prof: "curse", level: 3, ap: "6 AP", range: "5", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Change a creatures size, either doubling or reducing by half. When targeting an unwilling creature, they must make a Stamina save vs your spellcasting. On fail, you choose if they are Enlarged or Reduced for the duration. Does not work on creatures Larger Huge.', '- Enlarge: Your body doubles in all proportions, increasing your size by 1 level. You add 1 superior die to all strength skills and saves, and 1 terrible die to all dexterity skills and saves. Attacks you make deal an additional wound in damage.', '- Reduce: Your body halfs in all proportions, decreasing your size by 1 level. You add 1 terrible die to all strength skills and saves, and 1 superior die to all dexterity skills and saves. Attacks you make replace all wounds dealt with wound dice.', 'You may target an additional creature for every level cast above 3rd. All targets must either be Enlarged or Reduced.'] },
        "false-aura": { stat: "wil", prof: "curse", level: 3, ap: "10 AP", range: "Touch", duration: "24 hours", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You change the aura of a creature or object, changing how it appears to magical effects, such as _Detect Magic_ or _Identify_. Target up to 5 creatures or objects, adding a bad die to the spellcasting roll for every target. On success, you may do any of the following:', "You can cause a mundane object to appear magical, a magical object appear mundane, or change it's magical aura to belong to a different school. For example, you could cause an arcane effect to appear as divine when seen by _Detect Magic_. You can change how a creature appears to different spells, such as disguising an Undead creature as a Human for the effects of _Concencrate Ground_. You may change how their race, type, or size appears to spells.", 'If you cast this spell on a creature or object with the same effect every day for 30 days the aura becomes permanent, lasting until dispelled.', 'The spell lasts an additional 24 hours for every level cast above 3rd.'] },
        "fearful-presence": { stat: "wil", prof: "curse", level: 3, ap: "7 AP", range: "15", duration: "1 minute", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You assume a horrifying visage, fearing up to 5 creatures in range that can see you. Make a spellcasting roll, adding 1 bad die for every creature targeted after the first against the targets Willpower. On success the creatures are Feared with you as the source. The fear wears off if they can break line of sight of you. Each time they take damage they can make a Willpower save vs your spellcasting, ending the effect on success.', 'Add a proficiency die for every level above 3rd.'] },
        "frog-morph": { stat: "wil", prof: "curse", level: 3, ap: "7 AP", range: "5", duration: "1 minute", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Attempt to turn a creature into a harmless frog. Make a spellcasting roll against the targets Stamina, adding 1 terrible dice to your roll for every size larger than medium. On success the creature turns into a harmless frog for the duration. Items they are wearing are transformed with them, but anything they were holding drops to the ground.', 'The creature spends its turns hopping around, moving a single tile in a random direction. The Frog has 1 wound and 1 Defense die. If reduced to 0 wounds the spell ends and the creature reverts to their old form keeping the damage dealt.', 'You may target an additional creature for every level above 3rd. If you try to cast this on multiple creatures larger than medium, sum the terrible dice across all creatures.'] },
        "inflict-wound": { stat: "wil", prof: "curse", level: 3, ap: "6 AP", range: "Touch", duration: "instant", dmgType: "Death", dmg: [2, 1], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['Scar the creature with death magic. The target makes a Stamina save vs your spellcasting roll. On fail they take a wound and 2 wound dice, adding a wound die for every crit rolled. On success they take 1 wound instead. If this deals at least 3 wounds the target gains a random Lesser Wound, or a random Greater Wound if it deals 5 or more.', 'Add a wound die for every level above the 3rd.'] },
        "shapechange": { stat: "wil", prof: "curse", level: 3, ap: "7 AP", range: "Self", duration: "1 hour", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You transform your body, turning into a dangerous beast. The creature must have a CR of 5 or lower and must be one you have seen before. While in this shape your max wounds become the max wounds of the creature and you take the Strength, Dexterity, and Stamina attributes, keeping your Intelligence, Willpower, and Charisma.', 'Make a spellcasting roll, your max wounds are increased by 1 for every crit rolled. If you are reduced to 0 wounds while in this form the spell ends, you take 2 wounds of damage and are incapacitated until the end of your next turn from the strain.', 'Add a proficiency die and increase the CR by 2 for every level above 3rd.'] },
        "shifting-image": { stat: "wil", prof: "curse", level: 3, ap: "7 AP", range: "Self", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Your form blurs as several illusory projections of yourself hide your true position. You create 3 illusions. Any time you would be attacked by a single target spell or attack the attacker must roll a perception check against your spellcasting. On fail, the attack misses, destroying one of the illusions. The spell ends once all illusions have been destroyed.', 'Add a proficiency die for every level above 3rd.'] },
        "shroud-of-darkness": { stat: "wil", prof: "curse", level: 3, ap: "5 AP", range: "10", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You shroud a 4x4 area in a consuming darkness, extinguishing mundane light. Make a spellcasting roll. Attacks, maneuvers, or spell made on targets inside the darkness, or coming from inside the darkness add 1 terrible die to their roll, plus 1 terrible die for every crit rolled in your spellcasting.', 'Add a proficiency die for every level above 3rd. In addition, the darkness size increases by 1 (5x5 at 4th lvl, 6x6 at 5th, etc).'] },
        "curse-of-slowness": { stat: "wil", prof: "curse", level: 4, ap: "6 AP", range: "5", duration: "1 day", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Curse a creature with an unnatural slowness. They must make a willpower save vs your spellcasting. On a fail all actions they take costs 1 additional AP. On a crit they instead cost 2 additional AP.', 'You may target an additional person for every level above the 4th.'] },
        "gloom": { stat: "wil", prof: "curse", level: 4, ap: "7 AP", range: "10", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Inflict an area with supernatural gloom. Choose a point you can see within range, making a spellcasting roll. Every success increases the raidus of the gloom by 2. Every undead creature inside the gloom adds 1 superior die to all rolls. Mundane lights only give light in adjacent tiles and magical light covers half as far. For the duration, undead heal 1 wound at the start of their turns and all healing effects on living creatures are reduced by 1.', 'Add a proficiency die for every level above the 4th.'] },
        "haste": { stat: "wil", prof: "curse", level: 4, ap: "9 AP", range: "5", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Enhance the speed of up to 3 creatures. Make a spellcasting roll, adding a terrible die for every creature targeted. On success, all creatures gain 3 to their move and sprint speeds, 4 to their max AP, and gain 2 superior dice to their Dexterity saves. When the spell ends all creatures make an exhaustion roll vs 2 bad dice and 1 terrible die, gaining 1 level of exhaustion on fail.', 'Add a proficiency die for every level above the 4th.'] },
        "instigate": { stat: "wil", prof: "curse", level: 4, ap: "8 AP", range: "10", duration: "10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You incite a crowd or group of creatures to violence. All creatures in a 7x7 tile area centered on a point in range must make a Willpower save vs your spellcasting modifier. On fail, non-hostile creatures begin to act violently, turning into an angry mob. The mob will provoke others, destroy or vandalize nearby buildings, carts, or other objects, and may attack others. Hostile creatures effected by this spell lose any organization they have and may ignore orders by others, instead becoming reckless.', 'A creature effected by this spell makes another save every time they are hit, making a Willpower roll vs 1 bad die, plus a bad die for every crit rolled in your spellcasting roll.', 'Add a proficiency die for every level above the 4th.'] },
        "mass-hex": { stat: "wil", prof: "curse", level: 4, ap: "9 AP", range: "10", duration: "instant", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You target a 4x4 area bestowing all creatures with a potent hex. All creatures must make a Willpower save vs your spellcasting roll. On fail, they gain 1 level of Hex, or Hex 2 on crit.', 'Increase the area by 1 for every level above 4th.'] },
        "paralytic-cloud": { stat: "wil", prof: "curse", level: 4, ap: "7 AP", range: "10", duration: "1 minute", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Create a 5x5 cloud of toxic spores. Any creature that starts their turn there or enters the cloud for the first time must make a Stamina save or be paralyzed until the end of their next turn. On crit the target is paralized for the next minute.', 'Add a proficiency die for every level above the 4th.'] },
        "raise-dead": { stat: "wil", prof: "curse", level: 4, ap: "10 AP", range: "2", duration: "1 day", dmg: [0, 0], lroll: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Attempt to raise a dead creature as a zombie, or take control of a zombie without an owner. You can target up to 4 medium sized corpses, adding a terrible die to the spellcasting roll for each corpse. You can target a Large sized corpse, adding 2 terrible die and taking up 2 of the 4 corpse maximum. When targeting Undead they make a Charisma save against your spellcasting. On success, medium corpses are raised as Zombies and large corpses raised as Zombie Ogres. They act on your turn and are under your control for 1 day, at which point they turn to mindless zombies.', 'The maximum targets increases by 1, and you add a superior die to your roll for every level above the 4th.'] },
        "void-lure": { stat: "wil", prof: "curse", level: 4, ap: "9 AP", range: "10", duration: "instant", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Attempt to break the barrier between this plane and the void. Make a spellcasting roll against up to 3 Terrible dice. On success a random Outsider with a CR of 6 + 2 per Terrible dice heeds your call and is summoned to the target location. The exact creature summoned is determined by the DM, and multiple creatures may be summoned if their combined CR is less than the spells maximum. After summoning roll a wound die, on success the creature is friendly towards you for the next minute, otherwise the creature follows it's own whims.", 'For every successful casting of _Void Lure_ in this location the past day, add a Terrible die to the spellcasting roll. This die does not effect the CR of the summoned creature.', 'Add a proficiency die for every level above 4th. The number of Terrible dice you can add to your roll increases by 1 for every level above 4th.'] },
        "invisibility": { stat: "wil", prof: "curse", level: 4, ap: "10 AP", range: "touch", duration: "concentration, 1 hour", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Turn yourself or another creature or object invisible. Make a spellcasting roll against 2 terrible dice. On success the target becomes completely invisible while standing still. Moving causes a barely noticable shimmer to the target. Creatures can make a perception check against your spellcasting to see a moving creature, spotting them on success. Attacks against an invisible creature add 2 terrible dice to their attack rolls.', 'Add a proficiency die for every level above the 4th.'] },
        "curse-of-pain": { stat: "wil", prof: "curse", level: 5, ap: "6 AP", range: "5", duration: "1 day", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Curse a creature with pain. Make a spellcasting roll vs the creatures Willpower. On success the creature takes an additional wound die every time they take damage, or a full wound on crit.', 'You may target an additional person for every level above the 5th.'] },
        "heart-grip": { stat: "wil", prof: "curse", level: 5, ap: "9 AP", range: "7", duration: "instant", dmgType: "Death", dmg: [0, 5], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['Reach out to a creature you can see and stop their heart. The target creature makes a Stamina save against your spellcasting roll, adding a Superior die if they have at least half their wounds, otherwise adding a Terrible die. On fail they take 5 wound dice in damage and all healing they recieve is half as effective until they take a long rest and on crit they are stunned until the end of their next turn. On success they take 2 wound dice and have no additional effects. Casting this on a creature already under the effects of _Heart Grip_ has no effect.', 'Add a proficiency die for every level above the 5th.'] },
        "mind-break": { stat: "wil", prof: "curse", level: 5, ap: "8 AP", range: "10", duration: "instant", dmgType: "Psychic", dmg: [0, 0], lroll: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], txt: ['Can only be cast against a creature that can look into your eyes. You make a telepathic link to the target, using your will to shatter their mind. The target makes an Intelligence save vs your spellcasting. On fail, roll a wound die for every remaining success from your spellcasting roll. If you deal at least 1 damage the target is dazed for the next minute.', 'Add a proficiency die for every level above 5th.'] },
        "suggestion": { stat: "wil", prof: "curse", level: 5, ap: "10 AP", range: "15", duration: "24 Hours", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You attempt to influence a group of people, suggesting a course or activity. You may target as many creatures in range as you want, adding a Terrible die for every 5 creatures targeted. The creatures must be able to understand you and be able to hear you.', 'Make a spellcasting roll against the creatures Willpower. On success you may give the creatures a 1 or 2 sentence command for them to follow. The command may have a condition to it, such as help the next dwarf they see. If they are unable to meet the conditions before the spell ends the command is ignored.', 'Creatures that are immune to charm are immune to this spell. The command must be something the creature can reasonably accomplish and cannot be obviously harmful to the creature. The spell ends if the creature has completed their task or they take a wound in damage.', 'Add a proficiency die for every level cast above 5th.'] },
        "true-sight": { stat: "wil", prof: "curse", level: 5, ap: "5 AP", range: "Self", duration: "1 Hour", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Enhance your vision, seeing through illusions and invisiblity, seeing things for how they really are. Make a spellcasting roll against 2 bad die, on success you gain True sight out to 15 tiles, even seeing into the etheral plane.', 'The duration increases by 1 hour for every level above 5th.'] },
        "curse-of-fear": { stat: "wil", prof: "curse", level: 6, ap: "6 AP", range: "5", duration: "1 day", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Curse a creature with unnatural fear. Make a spellcasting roll vs the creatures Willpower. On success the creature gains Fear as long as there is a hostile creature within 10 tiles, or all creatures on crit. A creature gains no benefits from resting while under this curse.', 'You may target an additional person for every level above the 6th.'] },
        "isolation": { stat: "wil", prof: "curse", level: 6, ap: "8 AP", range: "10", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You sever the connections surrounding the target creature, leaving them utterly isolated. Make a spellcasting roll vs their Willpower, on success the creature loses any spells, abilities, or enchantments effecting them that did not come from their own magic. While isolated, magic that is not their own cannot reach them, they cannot be detected with magical means and they cannot be contacted through telepathy. Any powers given from a deity or other being cannot be used while isolated.', 'Add a proficiency die for every level above 6th.'] },
        "psychic-scream": { stat: "wil", prof: "curse", level: 6, ap: "8 AP", range: "Self", duration: "instant", dmgType: "Psychic", dmg: [0, 4], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['You send out a wave of mental force to all creatures within 5 tiles of you. Each creature in range makes an Intelligence save against your spellcasting roll. On fail they take 3 wound dice in damage and are Dazed and gain Slow 1 for 1 minute. If a creature fails by 4 or more they are incapacitated until the end of their next turn. On success they take 1 wound dice and are Dazed until the end of their next turn.', 'Add a wound die for every level cast above 6th.'] },
        "ritual-of-mordiggian": { stat: "wil", prof: "curse", level: 6, ap: "10 minutes", range: "5", duration: "instant", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Targetting a beast or willing creature you permanently alter their form, only ending when _Restoration_ has been cast on them. Make a spellcasting roll, giving the creature the _Nightmare_ template, increasing their max wounds by 1 for every crit rolled.', 'Their max wounds increase by 1 for every level cast above 6th.', '> #### Nightmare Template', '> - **Bonus AP:** 4', '> - **Bonus Stats:** +1 Strength, +1 Stamina', '> - **Bonus Proficiencies:** +2 proficiency with Strength/Stamina saves, +3 proficiency with unarmed attacks', '> - **Bonus Wounds:** -', '> ___', '> ##### Additional Effects', '> At night this creature turns feral, actively seeking out and attacking nearby creatures. After killing a creature they will drink their blood for the remainder of the night.', '>', '> **Feral Form.** Their normal unarmed attacks are replaced with deadly claws costing 5 AP, dealing 1 wound in slashing and 2 wound dice in death damage. They gain a Bite attack costing 7 AP, dealing 1 wound in piercing and 3 wound dice in death damage. All attacks are Strength based.', '>', '> **Mordiggians Hunger.** Dealing death damage causes this creature to regenerate 1 wound. Not being able to feed at night reduces this creatures max wounds by 1 until they feed.'] },
        "curse-of-obedience": { stat: "wil", prof: "curse", level: 7, ap: "7 AP", range: "5", duration: "1 day", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Curse a creature to obey your every command. Make a spellcasting roll against the targets Willpower, on success the creature must follow your commands to the best of their ability. You cannot command the target to hurt itself or take an action that would obviously bring harm to the target (eg: telling them to jump off a cliff), however they must obey commands if harm is possible but not assured (eg: telling them to defend you).', 'You may target an additional person for every level above the 6th.'] },
        "gravity-well": { stat: "wil", prof: "curse", level: 7, ap: "9 AP", range: "10", duration: "concentration, 1 minute", dmgType: "Bludgeoning", dmg: [2, 2], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['You create a crushing gravity well at a target point. Choose a 5x5 area at a position centered inside your range. All lose objects are flung towards the center, destroying mundane items. All creatures that enter the gravity well or start their turns there must make a Strength save vs your spellcasting. On fail they are flung into the center tile, taking 2 wounds and 2 wound die in damage. On success their move and sprint speeds are reduced to 1, and cannot be improved. Creatures in the center take 1 wound and 1 wound die in damage at the start of their turn as they are crushed by the gravity well.', 'The radius of the gravity well increases by 1 and you add 1 wound die to each source of damage for every level cast above 7th.'] },
        "control": { stat: "wil", prof: "curse", level: 8, ap: "10 AP", range: "10", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You overpower a creatures mind, taking control of it. Make a spellcasting roll against the targets Willpower, on success you possess the creature, sensing through the creatures senses and taking actions for the creature. For the duration you become incapacitated, taking actions for the creature during the creatures turn. Taking damage as the creature causes you to make concentration checks as if you took the damage yourself. If the creature dies while you are still in control of it you take 3 wounds of pyschic damage from the strain of dying.', 'Add a superior die to your spellcasting roll for every level above 8th.'] },
        "curse-of-death": { stat: "wil", prof: "curse", level: 8, ap: "7 AP", range: "5", duration: "1 day", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Curse a creature with sudden mortality. They must make a willpower save vs your spellcasting. On a fail, if their health drops below 7 wounds they instantly die. The death threshold increases by 1 wound for every crit rolled.', 'You may target an additional creature for every level above 8th.'] },
        "power-word-kill": { stat: "wil", prof: "curse", level: 9, ap: "11 AP", range: "10", duration: "instant", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Speak a word and command a creature to die. Make a spellcasting roll, adding 2 Terrible dice to the roll. If the target creature has less wounds than you have successes the creature instantly dies.'] },
        "seal": { stat: "wil", prof: "curse", level: 9, ap: "10+ AP", range: "touch", duration: "1 year", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Seal a creature, binding their body and spirit to a location and preventing them from influencing their surroundings. Make a spellcasting roll against the targets Willpower, adding 4 terrible dice if the creature has half or more of its wounds. On success the creature is incased in a material based on your surroundings and is considered incapacitiated.', 'While sealed, the creature cannot take damage, does not need to breathe or eat, and does not age. The creature cannot be communicated with through any means and any telepathic or magical link between this creature and others is severed. Should the material sealing the creature be damaged the DM decides what actions are allowed by the sealed creature. Destroying the material ends the effects of this spell and returns the creature to the point it was sealed.', 'You may choose to spend a minute casting this spell instead. If you do so the seal lasts for 10 years instead of 1. Casting this spell on a sealed creature refreshes the seal, repairing any damage and extends the duration to 1 year if less than a year remains.'] },
        

        "guidance": { stat: "cha", prof: "divine", level: 0, ap: "3 AP", range: "2", duration: "1 minute", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Target up to 5 creatures. Make a spellcasting roll, adding a bad die for every creature targeted. On a success, the creature can add a proficiency die to their next attack roll or damage-dealing spell roll. On crit they add a superiority die instead.', 'Add a proficiency die for every level above cantrip.'] },
        "holy-protection": { stat: "cha", prof: "divine", level: 0, ap: "4 AP", range: "2", duration: "1 minute", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Target up to 5 creatures. Make a spellcasting roll, adding a bad die for every creature targeted. On success, The next die to roll a crit against this creature is ignored.', 'Add a proficiency die for every level above cantrip.'] },
        "light": { stat: "cha", prof: "divine", level: 0, ap: "6 AP", range: "Touch", duration: "concentration, 10 minutes.", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You cause a small object no larger than a fist to emit a bright light. You may control the intensity of the light, from 1 emitting 1 tile of dim light up to 3 tiles of bright light and 3 tiles of dim light. You may double the lights intensity, doubling the lights range but must make a concentration check each turn to maintain this effect. While intensifying the light, any creatures that are sensitive to bright light add 1 terrible die to their attack rolls while in this spells bright light.', 'When this light enters magical darkness you must make a spellcasting roll vs the spellcasting roll of the effect that created the darkness. You add a superior or terrible die for every level above or below this light spell is compared to the darkness. On success the darkness is dispelled, and on fail this spell ends.', 'The range of both the maximum bright and dim light increases by 1 tile for every level above cantrip. At level 5 and above this light is considered sunlight.'] },
        "radiant-light": { stat: "cha", prof: "divine", level: 0, ap: "6 AP", range: "5", duration: "instant", dmgType: "Holy", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['A ray of radiant light blasts a target creature in range. The creature makes a dexterity save vs your spellcasting. On a fail they take 1 wound, or 2 wounds if they are undead.', 'Add a target for every level above cantrip.'] },
        "spare-from-death": { stat: "cha", prof: "divine", level: 0, ap: "4 AP", range: "Touch", duration: "instant", dmg: [0, 0], lroll: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Magically slow the heart and prevent blood loss. Make a Medicine check using your spellcasting for the roll, adding a bad die for every temporary wound missing. On success the target is stabilized and will regain consciousness in 10 minutes.', 'Add a superior die for every level above cantrip.'] },
        "vine-whip": { stat: "cha", prof: "divine", level: 0, ap: "5 AP", range: "5 (10)", duration: "instant", dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['Magically influence a plant to attack or grapple a nearby creature. Choose a location in range to grow a plant, or take control of a small or larger plant within 10 tiles. The plant grows a bramble whip it can use to attack creatures in melee range. You may use the plant to make an attack or grapple roll, using your spellcasting roll for the attack. On hit they take 1 wound die in damage, or 1 wound on crit.', 'The plant lasts for 1 minute after which it returns to its original shape.', 'Add a wound die for every level above cantrip.'] },
        "animal-messenger": { stat: "cha", prof: "divine", level: 1, ap: "1 minute", range: "Touch", duration: "1 day", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You attempt to summon a small beast to deliver a message for you. Make a spellcasting roll against 2 Terrible dice in an urban environment, or 2 Bad dice elsewhere. On success you summon a small beast local to the area, with the beast having wings on crit. You can give the beast a message up to 1 minute long and a description of who to deliver the message to. The beast will give the message to the first creature it finds that matches the description, and may have trouble with overly complex messages.', 'On delivering the message the recipeint is able to give a 1 minute message in return. If the beast is unable to find a creature matching that description or unable to return the response within the spells duration the beast reverts back to a normal animal and the message is lost.', 'The duration increases by 1 day for each level above the 1st.'] },
        "bonfire": { stat: "cha", prof: "divine", level: 1, ap: "1 minute", range: "Touch", duration: "8 hours", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You create a magical soothing bonfire. The bonfire takes a single tile of space, emits bright light for 5 tiles, and dim light for an additional 5. Target up to 5 creatures and make a spellcasting roll, adding a bad die for every creature targeted. These creatures heal an additional wound during their long rest and recover 1 point of exhaustion.', 'Add a proficient die for every level above the 1st.'] },
        "bramble": { stat: "cha", prof: "divine", level: 1, ap: "7 AP", range: "7", duration: "5 minutes", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['A growth of razor sharp bramble appears at a target location. Choose a point in range, summoning bramble in a 3x3 square centered on that point. The bramble counts as difficult terrain. The bramble is flammable and a tile will burn away after taking 1 wound of fire damage.', 'Any creature attempting to take a move or sprint action through the bramble must make a Dexterity save vs your spellcasting. On fail they take 1 wound die, with their movement ending on a crit. A creature makes this save only once per move or sprint action.', 'The area increases by 1 for every level above 1st.'] },
        "chilling-fog": { stat: "cha", prof: "divine", level: 1, ap: "6 AP", range: "15", duration: "10 minute.", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['A chilling fog appears in a 5x5 area at a target location. Make a spellcasting roll, all creatures gain slow equal to the number of crits rolled, with a minimum of 1. All creatures inisde the fog gain fire resistance 1. The fog heavily obscures the area.', 'The size and range of the fog increase by 2 for every level above 1st.'] },
        "close-wound": { stat: "cha", prof: "divine", level: 1, ap: "5 AP", range: "Touch", duration: "instant", dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ["Mend a creature's wounds. Make a spellcasting roll, healing a single wound and adding a wound for every crit rolled.", 'Add a Wound die for every level above the 1st.'] },
        "healing-word": { stat: "cha", prof: "divine", level: 1, ap: "4 AP", range: "5", duration: "instant", dmg: [0, 0], lroll: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], txt: ['Send healing energy to a single target. Make a spellcasting roll, adding 3 Bad dice. On success, roll a wound die for every success rolled, healing for the total wounds rolled.', 'Add a normal die for every level above the 1st.'] },
        "holy-weapon": { stat: "cha", prof: "divine", level: 1, ap: "4 AP", range: "Self", duration: "concentration, 1 minute.", dmgType: "Holy", dmg: [0, 1], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Enchant your weapon with holy power. For the next minute you may use your divine spellcasting in place of attack rolls you make. Your attacks add an additional wound die to the damage, or 3 if the target is undead.', 'Duration increases by 1 minute for every level cast above 1st.'] },
        "solar-flash": { stat: "cha", prof: "divine", level: 1, ap: "6 AP", range: "Touch", duration: "instant", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Shine blinding light in a cone infront of you. A cone of light 3 tiles long shines from you. Each creature must make a Stamina save vs your spellcasting, on fail they are blinded until the end of their next turn. If the creature is sensitive to daylight or bright light they also take 1 wound in Holy damage.', 'The the length of the cone increases by 1 for every level above 1st.'] },
        "tremor": { stat: "cha", prof: "divine", level: 1, ap: "7 AP", range: "Self", duration: "instant", dmg: [0, 1], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You cause the earth around you to tremor. All creatures within 2 tiles of you must make a Strength save vs your spellcasting. On fail the creature takes 1 wound die in damage, getting knocked prone on crit. If the ground in the area is loose earth or stone it becomes difficult terrain until cleared.', 'The the effected tiles extends by 1 in all directions for every level above 1st.'] },
        "cleanse": { stat: "cha", prof: "divine", level: 2, ap: "3 AP", range: "3", duration: "instant", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Attempt to remove negative effects from a target. You may choose any number of conditions this spell can remove, adding a bad die to your spellcasting roll for each condition, and a bad die for every condition level above 1. On success, those conditions are removed from the target. Cleanse can remove Slow, Poison, Hex, Daze, Stun, Blind, and Fear.', 'Add a proficiency die for every level above the 1st.'] },
        "consecrate-ground": { stat: "cha", prof: "divine", level: 2, ap: "10 AP", range: "Self", duration: "concentration, 10 minutes", dmgType: "Holy", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Mark a 3x3 area centered on yourself, purifying the ground. Any undead or monstrosity attempting to enter the consecrated ground must make a Charisma save vs your spellcasting. On fail they cannot willingly enter. Any undead inside the consecrated ground takes 1 wound at the start of their turn. Allies inside the zone gain 1 proficiency on all saving throws. You may move normally, however leaving the area ends the spell. If the spell lasts for the full 10 minutes the area remains consecrated for 1 day.', 'The area increases by 2 for every level cast above 2nd (5x5 at 3rd level, 7x7 at 4th, etc).'] },
        "enhance-ability": { stat: "cha", prof: "divine", level: 2, ap: "5 AP", range: "3", duration: "concentration, 1 hour", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Target up to 5 creatures. Make a spellcasting roll adding 1 terrible die, plus a terrible die for every creature targeted. On success the creatures gain +1 to a single attribute for the duration of the spell. They also gain +1 to their proficiency modifier in that attributes saving throw for every crit rolled.', 'Add a proficiency die for every level above the 1st.'] },
        "gust": { stat: "cha", prof: "divine", level: 2, ap: "7 AP", range: "Touch", duration: "concentration, 1 minute", dmgType: "Bludgeoning", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You cause strong winds to blow in a direction, 10 tiles long by 2 tiles wide. Each creature in the line must make a Strength save vs your spellcasting, on fail they are blown back 1 tile, plus an additional tile for every crit rolled. If they are unable to move due to a wall or obstacle they instead take 1 wound die in damage. Any creature moving against the direction of the wind must spend two tiles of movement for every tile moved. You may spend 2 AP to reverse the direction of the wind.', 'Add a proficiency die for every level cast above 2nd.'] },
        "seed-of-renewal": { stat: "cha", prof: "divine", level: 2, ap: "1 minute", range: "Touch", duration: "10 minutes", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Putting a seed into the ground, sprout a rejuvenating bush, bearing fruit. You may add up to 5 uses of this bush, adding a bad die to the spellcasting roll for every use added. If used during a short or long rest the creature can spend a free healing surge. Users may also purge a single source of poison or disease, unless the effect comes from a spell cast at a higher level than _Seed of Renewal_.', 'The bush can be used an additonal time for every level cast above 2nd.'] },
        "shield-of-faith": { stat: "cha", prof: "divine", level: 2, ap: "5 AP", range: "3", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Protect a creature with a holy aura. Target up to 5 creatures. Make a spellcasting roll, adding a terrible die for every creature targeted. On success, target creatures gain 1 defense die, or a superior defense die on crit.', 'Add a proficiency die for every level above the 2nd.'] },
        "treat-injury": { stat: "cha", prof: "divine", level: 2, ap: "1 minute", range: "Touch", duration: "instant", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Try to restore a targets body. You may attempt to remove as many lesser and greater wounds as you wish. Make a spellcasting roll, adding a bad die for every lesser wound and 2 terrible die for every greater wound. On a success the effects of these wounds are removed.', 'Add a proficiency die for every level above the 2nd.'] },
        "wall-of-faith": { stat: "cha", prof: "divine", level: 2, ap: "6 (3) AP", range: "5", duration: "1 turn", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Channel your faith to form a protective wall. Make a religion roll vs 2 bad die, on success you create a shimmering wall 4 tiles wide and 4 tiles tall. The wall is seethrough and blocks creatures and projectiles from passing through it. This spell can be cast as a reaction for 3 AP, using 2 terrible dice instead.', 'Add a proficiency die for every level cast above 2nd.'] },
        "winds-of-battle": { stat: "cha", prof: "divine", level: 2, ap: "4 AP", range: "5", duration: "1 minute", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['A flurry of wind surrounds up to 5 willing creatures. Make a spellcasting roll, adding a terrible die for each creature targeted. On success creatures can move freely without taking opportunity attacks as the wind wards off foes. On crit the winds guide the creatures attacks, allowing them to reroll 1 die in their attack rolls for each crit in your spellcasting roll.', 'The winds last for the duration, or until the creature is hit by an attack.', 'Add a proficiency die for every level cast above 2nd.'] },
        "beacon": { stat: "cha", prof: "divine", level: 3, ap: "6 AP", range: "5", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You project your aura to a group of creatures, protecting them from harm. Target up to 5 creatures, adding a terrible die to your spellcasting roll for every target. On success, any time a target would need to make a Willpower save they may use your Divine spellcasting instead. In addition, creatures making death saving throws may reroll their wound die, taking either result.', 'Add a proficient die to your roll for every level cast above 3rd.'] },
        "break-curse": { stat: "cha", prof: "divine", level: 3, ap: "10 AP", range: "Touch", duration: "instant", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You attempt to remove a curse from a creature. Make a spellcasting roll, adding a superior or terrible die to your spellcasting roll for ever level above or bellow this spell is compared to the curse affecting the creature. On success the curse ends for the creature.'] },
        "cure": { stat: "cha", prof: "divine", level: 3, ap: "10 AP", range: "Touch", duration: "instant", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You draw poison and disease from up to 5 target creatures, purifying their bodies. Make a spellcasting roll, adding a terrible die for every creature targeted, on success you end any poison effecting them and cure one disease.', 'Add a proficiency die for every level above 3rd.'] },
        "demonic-skull": { stat: "cha", prof: "divine", level: 3, ap: "8 AP", range: "5", duration: "1 minute", dmgType: "Fire", dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You create a Flaming skull at position in range. When summoned, and again at the start of each of your turns the skull breathes fire at all creatures in its zone of control. Each creature must make a Defense roll against your spellcasting. On fail they take 1 wound, adding a wound die on crit. On your turn you may spend 2 AP to command the skull to move up to 5 tiles and change its facing. If the skull moves more than 10 tiles from you the spell ends.', 'Add a proficient die to your roll and increase the duration by 1 turn for every level cast above 3rd.'] },
        "detect-creatures": { stat: "cha", prof: "divine", level: 3, ap: "10 AP", range: "1 mile", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You attempt to detect the location of a type of creature in range. Choose one of the following: _Beast, Goblinoid, Humanoid, Fey, Monstrosity, Undead, Elemental, Fiend, Celestial_, or _Outsider_. Make a spellcasting roll, adding dice depending on the table below. On success you know the rough direction of creatures of that type, as well as a rough estimate of the strength of the strongest creature. You can detect their location for the duration or until you dismiss the spell.', 'The range increases by 1 mile for every level above 3rd.', '| Accuracy | Dice Modifier |', '|:----:|:-------------|', '| groups of 10+, within 1000 ft.  | 2B |', '| groups of 5-10, within 500 ft.  | 2B/1T |', '| groups of 2-5, within 100 ft. | 2B/2T |', '| groups of 1, within 10 ft. | 2B/3T |'] },
        "revive": { stat: "cha", prof: "divine", level: 3, ap: "10 AP", range: "Touch", duration: "instant", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Attempt to bring back a creature that has died in the past 10 minutes. Make a spellcasting roll, adding 2 terrible die plus a terrible die for every time this creature has died. On success the target is brought back to life with 1 wound. For the next 3 days they take a -1 to all attributes.', 'Add a proficiency die to the roll for every level above the 3rd.'] },
        "spirit-animal": { stat: "cha", prof: "divine", level: 3, ap: "10 minutes", range: "Self", duration: "3 days", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Attempt to commune with local nature spirits, gaining one as your guide. Make a spellcasting roll, adding 2 terrible dice to the roll, or 3 if casting this outside of a forest, plains, or swamp. On success you gain an spirit companion of your choosing. You may summon or dismiss the spirit for 5 AP. Each spirit has their own wounds, and if killed the spell ends. Spending a minute in concentration you may look through your spirit animals eyes, while doing so you gain the senses of the animal and lose your own.', '- Elk: While within 10 tiles you gain +3 proficiency to athletics challenges and your movespeed increases by 1.', '- Rabbit: While on your person, gives you +1 proficiency to Dexterity saves and Acrobatics challenges. The rabbit cannot be targeted while on your person.', '- Bear: Your max wounds increase by 1.', '- Snake: +1 proficiency to Intelligence saves and you cannot be charmed.', '- Eagle: +3 to perception proficiency. The eagle has a flying speed of 5/5.', '- Wolf: +3 to diplomacy proficiency. When helping or being helped by an ally, you may reroll 3 dice.', 'Add a proficient die to your roll for every level cast above 3rd.'] },
        "summoning": { stat: "cha", prof: "divine", level: 3, ap: "10 AP", range: "Touch", duration: "instant", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You attempt to summon a willing creature to your location. Make a spellcasting roll, adding dice according to the table below. On a success the creature is summoned to the location you touch. The creature gets a glimpse of the area they are being summoned to when the spell is cast.', "You may instead cast this into a small object or trinket using the 'Passing Aquaintance' difficulty. Successfully casting this every day for 10 days makes the spell permanent. Anyone holding the object and speaking the command word is teleported to the casting location. For the spell to take hold it must be cast each day in the same place with the same target location.", 'Add a proficiency die for every level cast above 3rd.', '##### Summoning Difficulty', '| Familiarity | Difficult |', '|:----:|:-------------|', '| Second hand description or unknown name  | 4 Terrible Die |', '| Passing Aquaintance  | 2 Terrible Die, 1 Bad Die |', '| Casual Friendship | 1 Terrible Die, 1 Bad Die |', '| Intimate Knowledgge | 1 Bad Die |', '| More than 200 miles away | +1 Terrible Die |'] },
        "traveler's-protection": { stat: "cha", prof: "divine", level: 3, ap: "3 minutes", range: "3", duration: "8 hours", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["A protective ward for the journey ahead. Target up to 5 creatures, adding a bad die for every creature targeted. On success the targets maximum Wounds increase by 1. A creature can only be under the effects of one source of _Traveler's Protection_.", 'Add a proficient die for every level above 3rd.'] },
        "turn-undead": { stat: "cha", prof: "divine", level: 3, ap: "6 AP", range: "Self", duration: "1 minute", dmgType: "Holy", dmg: [2, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['A blast of holy light emits from your symbol. All undead within 3 tiles must make a charisma save vs your spellcasting. On fail, they take 2 wounds and are turned. On a success they take 1 wound instead. An undead possessing a creature is forced out if they are turned.', 'Add a wound die and increase the area by 2 tiles for every level above the 3rd.'] },
        "bind-creature": { stat: "cha", prof: "divine", level: 4, ap: "6 AP", range: "5", duration: "concentration, 1 hour.", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Bind a creature to this plane of existence. The target must make a Willpower save vs your spellcasting. On fail, the creature is bound for the duration. While bound they are unable to leave this plane through any means, nor can they magically teleport or enter the etheral plane. On crit, the target gains Slow 1 for the duration.', 'Add a proficiency die for every level cast above 4th.'] },
        "commune-with-nature": { stat: "cha", prof: "divine", level: 4, ap: "10 minutes", range: "Self", duration: "instant", dmg: [0, 0], lroll: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You spend time in medidation, listening to the land itself. Covering a radius 3 miles out from your location you may learn any number of things, adding a Bad die to the roll for each:', '- General lay of the land and bodies of water.', '- Prevalent plants, creatures, or minerals', '- Presence of fey, elemental, celestial, undead, or demonic entities, and an estimate of their strength', '- General location and understanding of influence from other planes', '- General location of any structures, cave systems, or traces of people (such as a campsite).', 'Add a superior die for every level cast above the 4th.'] },
        "destroy-monstrosity": { stat: "cha", prof: "divine", level: 4, ap: "8 AP", range: "10", duration: "instant", dmgType: "Holy", dmg: [7, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 2, 0, 0], txt: ['Channel holy energy to destroy a creature living against the natural law. targeting an undead or monstrosity, make a spellcasting roll vs their stamina. On success they take 7 wounds. On fail, roll 7 wound die instead. Regardless of success, the target gains Slow equal to the number of crits you rolled.', 'The number of wounds dealt increases by 1 for every level above 4th.'] },
        "petrify": { stat: "cha", prof: "divine", level: 4, ap: "8 AP", range: "5", duration: "instant", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Choose a target in range you can see that is capable of looking at you. The target must make a Stamina save vs your spellcasting. If they succeed they are paralized until the end of their next turn and make no more saving throws. On fail they are paralized for 1 minute. While they are paralized they must make a Stamina save against your spellcasting, on fail turning into stone.', 'Add a proficiency die to the roll for every level above the 4th.'] },
        "purify-spirit": { stat: "cha", prof: "divine", level: 4, ap: "8 AP", range: "5", duration: "instant", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Attempt to purify a hostile spirit, returning it into a neutral or friendly state. Target a Celestial, Fey, or Elemental, they must make a Charisma save vs your spellcasting. If they have less than half of their wounds remaining, add 2 superior dice to your roll. On fail, they are no longer hostile to you or your allies, but not necessarily helpful. They remain this way for 24 hours unless you or an ally takes a hostile action against them.', 'Add a proficiency die for every level cast above 4th.'] },
        "regeneration": { stat: "cha", prof: "divine", level: 4, ap: "8 AP", range: "5", duration: "1 minute", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Fill a creature with healing energy, causing their wounds to close over time. Make a spellcasting roll against 2 Terrible dice. On success the target heals 1 wound for every crit rolled. For the duration, on the start of the creatures turn they heal 1 wound and remove the effects of 1 lesser wound.', 'Regeneration lasts an additional turn for every level above the 4th.'] },
        "shape-stone": { stat: "cha", prof: "divine", level: 4, ap: "8 AP", range: "Touch", duration: "1 hour", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Attempt to shape stone to a suitable form. Make a spellcasting roll against 2 bad die, on success an area of stone no larger than 1 tile takes the form of your chosing. The stone can have multiple parts, but cannot be more complex than a door. You can shape the stone into anything following these contraints, such as a weapon, an idol, or a chair. This can be used to seal a door shut or create a passage way through a wall as long as the wall is no more than 1 tile thick. After the spell ends the stone returns to its original shape.', 'You can increase the tiles effected by 1 for each level cast above 4th. The tiles must be adjacent.'] },
        "summon-demon": { stat: "cha", prof: "divine", level: 4, ap: "10 AP", range: "5", duration: "instant", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You attempt to call forth a demon from the abyss. Choose a target location in range, making a spellcasting roll vs 2 terrible die. On success a group of demons (determined by the DM) whose combined CR is 8 or lower appear in the target location. The demons make a Willpower save vs your Willpower, on fail the demons obey you for the next hour, after which they revert to their default behavior. Each casting of _Summon Demon_ in this location over the past day increases the difficulty by 1 terrible die.', 'The maxium CR increases by 2 for every level cast above 4th.'] },
        "ward-from-death": { stat: "cha", prof: "divine", level: 4, ap: "1 minute", range: "5", duration: "8 hours", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Prevent a fatal blow from killing a creature. Target up to 5 creatures, adding 2 terrible die to your spellcasting roll for each creature. The next attack or spell that would either take them down to 0 wounds or instantly kill them instead leaves them at 1 wound. Once triggered the spell ends on the creature.', 'Add a proficiency die to the roll for every level above the 4th.'] },
        "awaken-soul": { stat: "cha", prof: "divine", level: 5, ap: "10 minutes", range: "Touch", duration: "7 days*", dmg: [0, 0], lroll: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Attempt to awaken a plant or creature with an intelligence of -1 or less. Make a spellcasting roll vs 3 terrible dice, on success you weave a soul into their body. Their intelligence is set to 1 and are able to communicate in a language you speak. Plants awakend this way gain the ability to move and speak, and gain human like senses. The creature is charmed by you for 7 days and acts as your guardian. After 7 days the charm ends and the creature can choose if they remain friendly, based on your actions.', 'Add a superior die for every level cast above the 5th. In addition, the length of charm increases to 14 days at 6th level, 30 days at 7th level, 180 days at 8th level, and a year and a day at 9th level.'] },
        "inner-fire": { stat: "cha", prof: "divine", level: 5, ap: "8 AP", range: "5", duration: "concentration, 10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Empower a group of creatures with righteous fury. Target up to 5 creatures in range, adding a Terrible die for each creature targeted. On success the targeted creatures have expertise with all weapons and deal an extra wound die in holy damage with every attack.', 'Add a proficiency die for every level above 5th.'] },
        "judgement": { stat: "cha", prof: "divine", level: 5, ap: "10 AP", range: "10", duration: "instant", dmgType: "Holy", dmg: [0, 4], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ['You call down a holy judgement over a 5x5 area centered on a point you can see in range. All hostile creatures make a Charisma save vs your spellcasting. On fail they take 4 wound dice in damage with Undead taking 4 wounds. On crit the creature cannot move until the end of their next turn. Creatures that pass their saving throw take 1 wound die instead. If the damage would kill a living creature they are brought to 1 wound instead and stunned until the end of their turn. Undead killed this way cannot be raised again.', 'Add a wound die for every level above 5th.'] },
        "mass-healing-word": { stat: "cha", prof: "divine", level: 5, ap: "6 AP", range: "5", duration: "instant", dmg: [0, 0], lroll: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], txt: ['Targeting up to 5 creatures you can see, mend their wounds with a healing word. Make a spellcasting roll against 3 Terrible dice, on success you heal each creature for 1 wound adding a wound die for every success in your roll.', 'Add a normal die for every level above 5th.'] },
        "mass-cleanse": { stat: "cha", prof: "divine", level: 5, ap: "6 AP", range: "5", duration: "instant", dmg: [0, 0], lroll: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], txt: ['Attempt to remove afflictions from a group of creatures. Targetting up to 5 creatures, make a spellcasting roll adding 1 Terrible die for each creature added. On success you remove two negative conditions effecting each creature. Mass Cleanse can remove Slow, Poison, Hex, Daze, Stun, Blind, and Fear.', 'Add a normal die for every level above 5th.'] },
        "radiance": { stat: "cha", prof: "divine", level: 5, ap: "10 AP", range: "Self", duration: "concentration, 10 minutes", dmgType: "Holy", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['A holy light eminates bright light in 3 tiles and dim light a further 3. Any undead, demon, or monstrosity starting their turn inside or entering it for the first time must make a Stamina save vs your spellcasting. On fail they take 1 wound and are blind until the end of their next turn. Any creature making an attack roll against you add 1 terrible die to their roll. You and any creatures you choose inside the light add 1 superior die to all saving throws.', 'The radius of the bright light increases by 1 for every level above 5th.'] },
        "resurrect": { stat: "cha", prof: "divine", level: 5, ap: "10 AP", range: "Touch", duration: "instant", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Attempt to bring back a creature that has died in the past week. A majority of the creature must be present, and this spell restores missing body parts. Make a spellcasting roll, adding 2 bad die plus a terrible die for every time this creature has died in the past year. On success the target is brought back to life with 1 wound, plus a wound for every crit you rolled.', 'Add a proficiency die to the roll for every level above the 5th.'] },
        "spirit-warriors": { stat: "cha", prof: "divine", level: 5, ap: "10 AP", range: "3", duration: "10 minutes", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You call upon the fighting spirit of nearby dead creatures. Target any number of corpses within range with corpses of undead, monstrosities, or constructs being untargetable. Make a spellcasting roll adding a Terrible die for every corpse targeted, on succes spirits of the creature rise from their bodies to defend you.', 'The spirits have the same attributes and proficiencies they had in life, but lose any maneuvers, abilities, or spells. Each spirit has 2 wounds and Resistance 2 for all physical damage from non-silvered weapons. The warriors act immediately after the summoners turn and obey simple commands. The spirits vanish after the duration or when exposed to direct sunlight. Corpses that have had their spirits from this spell cannot be raised again.', 'Add a proficiency die for every level above 5th.'] },
        "exorcism": { stat: "cha", prof: "divine", level: 6, ap: "8 AP", range: "Touch", duration: "instant", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["You attempt to exorcise an undead, fiend, fey, or celestial creature, returning them to their home plane. This spell has no effect if the creature is on it's home plane of existence. Undead can always be targeted regardless of their home plane. The target makes a Charisma save vs your spellcasting, adding 2 superior dice if they are not under any conditions. On fail the creature is banished to their home plane, ending any posession or effects this creature was maintaining.", 'Add a proficiency die to the roll for every level above the 6th.'] },
        "power-word-harm": { stat: "cha", prof: "divine", level: 6, ap: "9 AP", range: "10", duration: "instant", dmgType: "Holy", dmg: [6, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], txt: ['Channel your divine wrath at a target creature, burning their body with holy might. Make a spellcasting roll vs the targets Stamina, on success the target takes 6 wounds, plus a wound die for every crit rolled. On fail the target takes 6 wound die in damage instead. Damage dealt from this spell reduces the targets maximum wounds an equal amount, recovering 1 max wound every day. casting _Power Word: Heal_ on a creature removes this effect.', 'This deals an additional wound for every level above the 6th.'] },
        "power-word-heal": { stat: "cha", prof: "divine", level: 6, ap: "9 AP", range: "Touch", duration: "instant", dmg: [6, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], txt: ['Restore a creatures form, healing mortal wounds. Make a spellcasting roll, a creature restores 5 wounds, plus a wound for every crit rolled. They may also remove the effects of a single Lesser or Greater wound. A creature can only be healed by this spell once per long rest, unable to withstand the strain of repeated casts.', 'This heals an additional wound for every level above the 6th.'] },
        "sanctuary": { stat: "cha", prof: "divine", level: 6, ap: "7 AP", range: "Touch", duration: "1 turn", dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You speak a word and open a rift to a location dedicated to your deity, such as a temple or altar on the same plane as you. A rift opens in an unoccupied space adjacent to you remaining open until the end of your next turn. Any creature you allow can enter the rift before it closes.', 'Once the rift closes you must make a spellcasting roll against 3 terrible dice, on success you appear at the location. On fail you appear in a random location within 20 miles of your target. Regardless of result the travel time takes 1 minute.', 'Add a proficiency die to the roll for every level above the 6th.'] },
        "word-of-command": { stat: "cha", prof: "divine", level: 6, ap: "8 AP", range: "self", duration: "instant", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['Your voice bellows a single command heard by all creatures within 10 tiles of you. Any creatures you choose make a Charisma save against your spellcasting roll, on fail they obey the command. You may command the creatures to not take a single action, such as preventing them from taking the Move, Attack, or Defend actions. Alternatively you may command them to immediately take an action, such as clearing a path or dropping their weapons. Creatures commanded this way will only take the action if they have AP remaining and are capable of doing so. The command is either resolved immediately or lasts until the end of the creatures next turn if the command prevents them from taking an action.', 'Your voice carries an extra 2 tiles for every level cast above 6th.'] },
        "divine-word": { stat: "cha", prof: "divine", level: 7, ap: "9 AP", range: "10", duration: "instant", dmgType: "Holy", dmg: [0, 3], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You invoke the name of your deity to smite any creatures in range that can hear you. All creatures targeted must make a Charisma save vs your religion check, on fail they gain the following depending on their remaining wounds, increasing the threshold by 1 for every crit rolled:', '- 8 wounds or fewer: blinded for 1 minute', '- 5 wounds or fewer: blinded and feared for 10 minutes', '- 3 wounds or fewer: killed instantly', 'Regardless of the outcome, any undead, demon, or celestial targeted by this spell takes 3 wound dice in damge and are blinded for 1 minute.', 'Add a proficient die to your roll for every level cast above 7th.'] },
        "light-of-divinity": { stat: "cha", prof: "divine", level: 8, ap: "10 AP", range: "10", duration: "concentration, 5 minutes", dmg: [0, 2], lroll: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['A blinding light shines down centered on a point in range. The light covers a 5x5 tile area, covering it in sunlight. You may choose any number of creatures inside the light to be uneffected, all other creatures must make a Charisma save vs your spellcasting. On fail the creatures are pushed to the closest unoccupied space outside of the light and take 2 wound die in damage.', 'Creatures inside the light are considered to be on a different plane of existence, and any attack made through the the light fails. A creature can attempt to force their way into the light, making a Charisma save vs your spellcasting. On success they enter the light as normal, otherwise they are burned by the light, taking 2 wound dice.', 'Add 1 superior die and the area becomes 7x7 at 9th level.'] },
        "restoration": { stat: "cha", prof: "divine", level: 8, ap: "10 AP", range: "5", duration: "instant", dmg: [0, 0], lroll: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["You restore a creature's body, ending negative effects on them and healing mortal wounds. Make a spellcasting roll, the target creature restores wounds equal to the rolls successes. Any conditions aflicting the creature are removed if they came from a spell of 5th level or below. In addition, you may heal a Lesser or Greater wound for every crit rolled.", 'Add 2 superior dice to your roll when casting at 9th level.'] },
        "avatar": { stat: "cha", prof: "divine", level: 9, ap: "1 turn", range: "Self", duration: "concentration, 10 minutes.", dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ['You channel your divine magic to become an avatar of your deity. Make a spellcasting roll against 3 terrible dice, On success, you heal a wound for each success. Starting on your next turn you become an embodiment of divine wrath, gaining the following effects:', '- You gain a flying speed equal to your movespeed.', '- You gain Resistance 1 to all damage.', '- You have expertise in everything.', '- You add 2 superior dice to all saving throws.'] }
        
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
                else if (command === 'spell') {
                    spell(msgFrom, params);
                }
                else if (command === 'mana') {
                    var mana = parseInt(params[0]);
                    var manaAttr = getAttr("mana", 0);
                    manaAttr.set("current", manaAttr.get("current") - mana);
                    var msg = '<rolltemplate class="sheet-rolltemplate-CustomRoll"><div style="background-color: #ffffff; border: 1px solid; padding: 2px; width: 218px;">' +
                        '<div style="font-size: 0.9em"><span style="font-weight:bold">Cast: </span>Spent ' + mana + ' mana</div>' +
                        '</div></rolltemplate>';
                        sendChat(msgFrom, "/direct " + msg);
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

        getDefaultMods = function () {
            return {
                bonus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            };
        },

        getMods = function (param) {
            var modObj = {
                bonus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            };
            if (param.substring(0, 1) === 'b') {
                var vals = param.substring(1).split('-');
                for (var i = 0; i < vals.length; i++) {
                    if (vals[i].length < 2) {
                        continue;
                    }
                    var sub1 = vals[i].substring(0, 1), sub2 = vals[i].substring(0, 2);
                    if (sub2 === 'sd') {
                        modObj.bonus[5] += parseInt(vals[i].substring(2));
                    }else if (sub1 === 's' || sub1 === 'y') {
                        modObj.bonus[0] += parseInt(vals[i].substring(1));
                    } else if (sub2 === 'pr') {
                        modObj.bonus[4] += parseInt(vals[i].substring(2));
                    } else if (sub2 === 'gw') {
                        modObj.bonus[7] += parseInt(vals[i].substring(2));
                    } else if (sub1 === 'p' || sub1 === 'g') {
                        modObj.bonus[1] += parseInt(vals[i].substring(1));
                    } else if (sub1 === 'n' || sub1 === 'w') {
                        modObj.bonus[2] += parseInt(vals[i].substring(1));
                    } else if (sub1 === 'b' || sub1 === 'r') {
                        modObj.bonus[3] += parseInt(vals[i].substring(1));
                    } else if (sub1 === 't') {
                        modObj.bonus[4] += parseInt(vals[i].substring(1));
                    } else if (sub1 === 'd') {
                        modObj.bonus[6] += parseInt(vals[i].substring(1));
                    } else if (sub1 === 'w') {
                        modObj.bonus[8] += parseInt(vals[i].substring(1));
                    } else if (sub1 === 'h') {
                        modObj.bonus[9] += parseInt(vals[i].substring(1));
                    }
                }
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

            var modObj = getDefaultMods();
            modObj.hex = hex;

            return roll(dice, modObj)
        },

        skillRoll = function (params) {
            var modObj = params.length > 2 ? getMods(params[2]) : getDefaultMods();
            modObj.hex = character ? parseInt(getAttr("hex", 0).get("current")) : 0;
            var statVal = parseInt(params[0]);
            var statProf = parseInt(params[1]);
            var poison = character ? parseInt(getAttr("poison", 0).get("current")) : 0;
            var fear = character ? parseInt(getAttr("fear", 0).get("current")) : 0;

            var dice = getAttrDice(statVal, statProf);
            dice[4] += poison;
            dice[3] += fear;

            return roll(dice, modObj);
        },

        customRoll = function (params) {
            var modObj = params.length > 5 ? getMods(params[5]) : getDefaultMods();
            modObj.hex = character ? parseInt(getAttr("hex", 0).get("current")) : 0;

            var diceVals = [parseInt(params[0]), parseInt(params[1]), parseInt(params[2]), parseInt(params[3]), parseInt(params[4]), 0, 0, 0, 0, 0];

            return roll(diceVals, modObj);
        },

        attack = function (params) {
            var modObj = params.length > 5 ? getMods(params[5]) : getDefaultMods();
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

            var modObj = params.length > 5 ? getMods(params[5]) : getDefaultMods();
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
            var modObj = params.length > 2 ? getMods(params[2]) : getDefaultMods();
            modObj.hex = character ? parseInt(getAttr("hex", 0).get("current")) : 0;

            return roll(diceVals, modObj);
        },

        hero = function (__params) {
            var modObj = getDefaultMods();
            modObj.hex = 0;

            return roll([0, 0, 0, 0, 0, 0, 0, 0, 0, 1], modObj);
        },

        wound = function (params) {
            var modObj = params.length > 2 ? getMods(params[2]) : getDefaultMods();
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

            if (rolls === undefined) {
                return;
            }
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
            if (lastRolls === undefined) {
                return;
            }
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
            var hasRoll = false;
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
                    hasRoll = true;
                    params = opStr[1].split(' ');
                    templateObj[opStr[0]] = handleRoll(params);
                } else {
                    templateObj[opStr[0]] = opStr[1];
                }
            }

            var msg = makeTemplate(templateObj, hasRoll);
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
                msg += '<div style="font-size: 0.9em; display: inline-block"><a href="!rr" style="background-color: transparent; display: inline-block; color: black; border: 0.5px solid">Reroll Selected</a></div>';
            }
            if (values.mana) {
                var mana = getAttr("mana", 0).get("current");
                msg += '<div style="font-size: 0.9em; display: inline-block"><a href="!mana ' + values.mana + '" style="background-color: transparent; display: inline-block; color: black; border: 0.5px solid">Cast (' + mana + '/' + values.mana + ')</a></div>';
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
                if (diceVals[i] + modObj.bonus[i] > 0) {
                    msg += "<span>";
                    for (var t = 0; t < diceVals[i] + modObj.bonus[i]; t++) {
                        rollResult.r.push(false);
                        var rollVal = randomInteger(6) - 1;
                        rollResult.v.push(rollVal);
                        if (modObj.hex > 0 && (i == 0 || i == 1)) {
                            rollResult.d.push(2);
                            msg += "<a href='!srr " + rollHistory.length + " " + diceCount + "' style='" + templateBtn + "'>" +
                                "<img src='" + allDice[2].roll[rollVal] + "' style='background-color:" + allDice[2].clr + "; border: none;'>" +
                                "</a>";
                            modObj.hex--;
                        }else if (modObj.hex > 0 && (i == 5 || i == 6)) {
                            rollResult.d.push(10);
                            msg += "<a href='!srr " + rollHistory.length + " " + diceCount + "' style='" + templateBtn + "'>" +
                                "<img src='" + allDice[10].roll[rollVal] + "' style='background-color:" + allDice[10].clr + "; border: none;'>" +
                                "</a>";
                            modObj.hex--;
                        }
                        else {
                            rollResult.d.push(i);
                            successes += allDice[i].val[rollVal];
                            crits += allDice[i].crit[rollVal];
                            msg += "<a href='!srr " + rollHistory.length + " " + diceCount + "' style='" + templateBtn + "'>" +
                                "<img src='" + allDice[i].roll[rollVal] + "' style='background-color:" + allDice[i].clr + "; border: none;'>" +
                                "</a>";
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

        spell = function (msgFrom, params) {
            var values = {};
            if (spellInfo[params[0]] === undefined) {
                values.name = params[0];
                values.effect = "Spell not listed. Either it's not coded or spelled incorrectly.";

                var msg = makeTemplate(values);
                sendChat(msgFrom, "/direct " + msg);
                return;
            }

            var info = spellInfo[params[0]];
            var modObj = getMods(params[params.length - 1]);
            var dmg = [info.dmg[0], info.dmg[1]];
            var level = parseInt(params[1]);
            var levelDiff = level - info.level;
            for (var i = 0; i < 7; i++) {
                modObj.bonus[i] += info.lroll[i] * levelDiff;
            }
            dmg[0] += info.lroll[7] * levelDiff + modObj.bonus[7];
            dmg[1] += info.lroll[8] * levelDiff + modObj.bonus[8];
            modObj.bonus[7] = 0;
            modObj.bonus[8] = 0;

            if (level < info.level) {
                values.name = params[0];
                values.effect = "Did you enter the right level? Spell needs a minimum of " + info.level + ", entered " + level;

                var msg = makeTemplate(values);
                sendChat(msgFrom, "/direct " + msg);
                return;
            }

            //rebuild bonus dice to pass into skill roll
            var prefix = ['y', 'g', 'w', 'r', 'pr', 'sd', 'd', 'gw', 'w', 'h'];
            var bonus = "b";
            var addDash = false;
            for (var i = 0; i < modObj.bonus.length; i++) {
                if (modObj.bonus[i] > 0) {
                    if (addDash === true) {
                        bonus += "-";
                    } else {
                        addDash = true;
                    }
                    bonus += prefix[i] + modObj.bonus[i];
                }
            }

            values.name = params[0];
            values.description = "Lv" + level + ", " + info.ap + ", Range " + info.range + ", " + info.duration;
            if (info.dmgType !== undefined) {
                values.description += ', ' + info.dmgType;
            }
            values.effect = "";
            for (var i = 0; i < info.txt.length; i++) {
                values.effect += info.txt[i] + (i !== info.txt.length - 1 ? "<br/><br/>" : "");
            }
            var manaPerLevel = [0, 1, 2, 3, 4, 6, 8, 10, 13, 16, 20];
            level = Math.min(10, Math.max(0, level));
            values.mana = manaPerLevel[level];

            values.rollSpell = skillRoll([getAttr(info.stat, "0").get("current"), getAttr(info.prof, "0").get("current"), bonus]);
            if (dmg[0] > 0 || dmg[1] > 0) {
                values.rollDmg = wound([dmg[0].toString(), dmg[1].toString()]);
            }

            var msg = makeTemplate(values);
            sendChat(msgFrom, "/direct " + msg);
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