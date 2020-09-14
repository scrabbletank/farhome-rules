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

    var spellInfo = {
        "cold-snap": { stat: "int", prof: "arcane", level: 0, ap: 5, range: 1, dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Sap the heat from a target. Make a spellcasting roll vs the targets stamina. On hit the target takes a wound. For every crit roll you the target gains a level of Slow until the end of their next turn.", "Add a proficiency die for every level above cantrip."] },
        "firebolt": { stat: "int", prof: "arcane", level: 0, ap: 6, range: 8, dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ["Blast a target with a bolt of fire. Make a spellcasting roll against the targets defense. On hit the target takes a wound, adding a wound die on crit.", "Add a wound die for every level above cantrip."] },
        "message": { stat: "int", prof: "arcane", level: 0, ap: 2, range: 10, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["You attempt to send a telepathic message to a target you know. Make a spellcasting roll, adding a bad die for every 10 tiles you want the spell to travel, with a minimum of 1 bad die. On success the message is successfully broadcast. You know if the target recieved the message or not.", "Add a proficiency die for every level above cantrip."] },
        "minor-image": { stat: "int", prof: "arcane", level: 0, ap: 4, range: 10, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["You create a small, soundless illusory image no larger than 1 tile at a point within range. The image has no physical presence and objects pass through it as if it wasn't there. Any creature attempting to see through the illusion must make a perception check against your spellcasting, seeing the illusion for what it is on success. A creature that touches or passes through the illusion automatically passes this check.", "Add a proficiency die for every level above cantrip."] },
        "static-shock": { stat: "int", prof: "arcane", level: 0, ap: 6, range: 3, dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Charge the air around the target. Make a spellcasting roll vs the targets Dexterity. On success the target takes a wound. If you roll a crit the spell bounces to a creature adjacent to the target, making a new roll for the new target. This spell ends when you do not roll a crit or you run out of targets. This cannot effect the same target twice.", "Add a proficiency die for every level above cantrip."] },
        "thundering-blow": { stat: "int", prof: "arcane", level: 0, ap: 5, range: 0, dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["conjure a rolling thunder to blast a target away. Make a spellcasting roll vs the targets Strength. On hit, roll a wound die and the target is pushed back 1 tile and is staggered until the end of their next turn, being pushed an additional tile for every crit. If the target is unable to move, either due to another creature or obstacle, roll a wound die for every tile remaining.", "Add a proficiency die for every level above cantrip."] },
        "arcane-blasts": { stat: "int", prof: "arcane", level: 1, ap: 8, range: 7, dmg: [0, 3], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ["You shoot a volley of 2 force blasts, sending a blast to any target in range. The blasts travel around corners and obstacles, homing in on their target. You may have all blasts target the same creature, or split the blasts between creatures. The target creatures make a Strength save vs your spellcasting roll. On fail they take 1 wound die for every blast aimed at them, upgrading a wound die to a wound for every crit rolled.", "Add a blast (and wound die) for every level above the first."] },
        "arcane-key": { stat: "int", prof: "arcane", level: 1, ap: 30, range: 0, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Magically force a lock to open. Make a lockpicking roll, using your spellcasting roll instead of your lockpicking skill. On success the lock is opened. This spell can open magical locks.", "Add a proficiency die for every level above 1st."] },
        "beam-of-fire": { stat: "int", prof: "arcane", level: 1, ap: 7, range: 0, dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 1, 0], txt: ["A blast of fire shoots from your hands, hitting all creatures in a 3x1 beam. Make a spellcasting roll vs the targets defense. On hit the target takes a wound, if you crit the targets take another wound.", "A blast of fire shoots from your hands, hitting all creatures in a 3x1 beam. Make a spellcasting roll vs the targets defense. On hit the target takes a wound, if you crit the targets take another wound."] },
        "call-lightning": { stat: "int", prof: "arcane", level: 1, ap: 7, range: 10, dmg: [1, 2], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Call a bolt of lightning to strike a nearby target. The target makes a Dexterity save vs your spellcasting. On hit they take 1 wound, plus 2 wound dice in damage, and are paralyzed until the end of their next turn on crit. If cast in rainy conditions this spell only costs 5 AP.", "Add a proficiency die for every level above first."] },
        "chilling-ray": { stat: "int", prof: "arcane", level: 1, ap: 6, range: 5, dmg: [0, 1], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["You shoot a chilling beam at up to 3 targets in range. Make a spellcasting roll vs the targets Stamina. On hit, the target takes 1 wound die and gains Slow 1, or Slow 2 on crit.", "Add a proficiency die for every level above 1st."] },
        "detect-magic": { stat: "int", prof: "arcane", level: 1, ap: 6, range: 10, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Target a 10x10 area, making a spellcasting roll against 2 bad die. On success you can see a faint outline over any magical effect in the area. For each crit you are able to determine the school of a given magic effect and a rough idea of the magic's purpose.", "Add a proficiency die for every level above the 1st."] },
        "identify": { stat: "int", prof: "arcane", level: 1, ap: 30, range: 0, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Attempt to learn the secrets of a magical item or trinket. When attempting to identify an item, use your spellcasting instead of your Lore skill to make the roll.", "Add a proficiency die for every level above 1st"] },
        "magic-sight": { stat: "int", prof: "arcane", level: 1, ap: 10, range: 0, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Create an invisible floating eye, visible only to those who can see the etheral plane or have cast Detect Magic. You can see, but not hear, everything the eye can see in addition to your normal senses. You can command the eye to move, moving 5 tiles each turn. If the eye moves more than 10 tiles away from you, you must make a spellcasting roll against 2 Bad die, repeating this roll every minute. On fail the spell ends. The eye cannot move through solid objects, but can fit through holes as small as 1 inch.", "If the eye is able to fully spot a creature behind cover, they gain 1 less bonus die from cover against your attacks.", "Add a proficiency die for every level above 1st."] },
        "poison-trap": { stat: "int", prof: "arcane", level: 1, ap: 7, range: 5, dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Choose 3 connected tiles in range. When a creature starts their turn or enters a tile for the first time they must make a Stamina save against your spellcasting. On a fail they take 1 wound. On a crit the target is poisoned until the end of their next turn. These tiles count as difficult terrain, and last for 1 minute.", "Add a tile for every level above first."] },
        "ray-of-sickness": { stat: "int", prof: "arcane", level: 1, ap: 5, range: 7, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Make a spellcasting roll vs a targets stamina. On success the target gains Poison 1 for the next 10 minutes, gaining a level for every crit.", "Add a target for every level above 1st."] },
        "sword-burst": { stat: "int", prof: "arcane", level: 1, ap: 3, range: 0, dmg: [0, 1], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ["Magically enchant your weapon to fire a burst of energy with your next attack. You gain Reach 1 for the duration of the spell. On your next attack the target makes a Strength save against your weapon attack roll. On fail, you connect with the attack, converting all physical damage to Force damage and adding an extra wound die to the damage roll. After you make the attack the spell ends.", "Your reach increases by 1 and you add a wound die to the damage for every level above the 1st."] },
        "thunderclap": { stat: "int", prof: "arcane", level: 1, ap: 5, range: 0, dmg: [1, 1], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["A wave of force slams the ground around you, hitting all creatures adjacent to you. Make a spellcasting roll vs the targets defense. On hit the target takes a wound and a wound die in damage and is staggered, and on a crit the target is pushed away 1 tile from you, taking an extra wound if an object or creature blocks their movement.", "Add a proficiency die for every level above first."] },
        "barrier": { stat: "int", prof: "arcane", level: 2, ap: 2, range: 0, dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["As a reaction you quickly pull up magical defenses, protecting you and all creatures adjacent to yourself. Make a spellcasting roll, you and all effected creatures add 1 superior die, adding an extra superior die for every crit, against the incoming spell. If the spell does not require a save, roll the superior dice against the casters spellcasting roll. On a success the spell has no effect.", "Increase the range of protection by 1 and add a proficiency die for every level above the first."] },
        "combust": { stat: "int", prof: "arcane", level: 2, ap: 7, range: 10, dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Cause up to 2 creatures in range to burst into flames. Targets makes a Dexterity save vs your spellcasting, on a fail they ignite in flames. At the start of their turn they take 1 wound. On their turn they may spend 5 AP rolling on the ground to extinguish the fire, leaving them prone.", "Add a target for every level above 2nd."] },
        "dispel-magic": { stat: "int", prof: "arcane", level: 2, ap: 5, range: 5, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["You attempt to dispel a magical effect targeting a creature or area. Make a spellcasting roll vs 1 proficient die per level of spell you are trying to dispel. If the effect you are trying to break is actively being concentrated on by another creature make a spellcasting roll vs the creatures concentration instead. On success the magical effect ends. If targeting an effect caused by an object, such as a magic item or animated armor, they regain their magical effects after 10 minutes.", "You may target an additional effect for every level past 2nd."] },
        "elemental-shell": { stat: "int", prof: "arcane", level: 2, ap: 5, range: 0, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Create an energy barrier around yourself. Choose a damage type: fire, cold, lightning, thunder, poison. Make a spellcasting roll, gaining Resistance 1 to that damage type, increasing the resistance by 1 for every crit rolled.", "Add a proficiency die for every level above 2nd."] },
        "flurry": { stat: "int", prof: "arcane", level: 2, ap: 7, range: 0, dmg: [0, 2], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ["You conjure a flurry of ice shards in a 3x3 area. Each creature must make a Stamina save vs your spellcasting modifier. On fail they take 2 wound die, gaining 1 level of Slow for the next minute on crit.", "Increase the number of wound dice and area by 1 for every level above 2nd."] },
        "imprint": { stat: "int", prof: "arcane", level: 2, ap: 0, range: 0, dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "magic-weapon": { stat: "int", prof: "arcane", level: 2, ap: 10, range: 5, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Temporarily enchant a weapon with magic. Target up to 5 weapons, adding 1 terrible die to your spelclasting roll for each weapon targeted. On success the weapons are considered +1 magic weapons. If you lose or drop concentration before the hour is finished the weapons retain the magic for 1 minute before fading completely.", "Add a proficiency die for every level above 2nd."] },
        "misty-step": { stat: "int", prof: "arcane", level: 2, ap: 3, range: 5, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Teleport to a unoccupied point you can see in range. Make a spellcasting roll, adding 2 bad die if you attempt to teleport more than 5 tiles, with a max range of 10. On success you teleport to that position, preventing any opportunity attacks or attacks that trigger on entering someones zone of control.", "Add a proficiency die for every level above 2nd."] },
        "resilient-shield": { stat: "int", prof: "arcane", level: 2, ap: 4, range: 0, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["On your turn, or as a reaction, you create a dampening shield around yourself. While the shield holds you gain Resistance 1 to all physical damage. Make a spellcasting roll, the shield can take 3 hits before shattering, adding a hit for each crit rolled. While the spell is active you cannot take the move or sprint actions, but movement effects do not break the spell.", "Add a proficiency die for every level above 2nd."] },
        "animate-guardian": { stat: "int", prof: "arcane", level: 3, ap: 10, range: 0, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["You attempt to animate a simple object made of plant, wood, stone, or metal no more than 1 tile in size. If the object is part of a larger construction (a stone wall, a dirt mound, etc) you add 1 terrible die to your roll as you try to force it free.", "Make a spellcasting roll adding 2 terrible dice or 4 terrible dice if the meterial is metal. On success you create a golem out of the object. The golem has 3 wounds and acts on your turn. It can take a move action to move 4 tiles and can make a single attack. The golem's attack uses 5 normal dice, improing one die for every success and adding a die for every crit. The creature deals 1 wound on hit, adding a wound die for every size increase. After the duration or if the caster is incapacitated the golem reverts to inanimate material. Golems made of metal have Resistance 1 to physical damage.", "Add a proficient die for every level above 3rd. At 5th level you may target a 2x2 area creating a golem with 5 wounds, and at 7th a 3x3 area creating a golem with 8 wounds and two attacks per turn."] },
        "chain-lightning": { stat: "int", prof: "arcane", level: 3, ap: 7, range: 5, dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["A burst of lightning that bounces from target to target. The Lightning bounces from your target to a creature of your choice within 3 tiles of the target, bouncing this way up to 2 times. The lightning cannot bounce to the same creature twice and must bounce to a creature if able. Each creature hit by the lightning must make a Dexterity save vs your spellcasting, on hit they take 1 wound in damage, plus a wound die for every crit rolled in your spellcasting roll.", "The number of bounces increases by 1 and you add a proficient die to your spellcasting roll for every level above 3rd."] },
        "counter-spell": { stat: "int", prof: "arcane", level: 3, ap: 2, range: 5, dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Attempt to counter the flow of magic. As a reaction make a spellcasting roll vs the targets Intelligence, adding a terrible/superior die for every level this spell is below/above the target spell. On success the spell is countered."] },
        "far-sight": { stat: "int", prof: "arcane", level: 3, ap: 10, range: 0, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["See far into the distance, bending your sight around obstacles. Choose a location in range, making a spellcasting roll against 2 Terrible die, or 3 if the location is unfamiliar to you. On success you can see the target location as long as it is not complete incased, for example you would be able to see the happenings in a town, but not inside buildings. You can see the location as if you were present there, but cannot make out sounds. At any time you may change the target of your sight, requiring a minute to reorient yourself.", "Add a proficient die for every level above 3rd."] },
        "fireball": { stat: "int", prof: "arcane", level: 3, ap: 8, range: 10, dmg: [2, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ["shoot a ball of fire centered at a target location you can see. The fireball explodes on impact, hitting all creatures in a 5x5 area. Creatures must make a Dexterity save vs your spellcasting, taking 1 wound on success. On failure they take 2 wounds, plus a wound die on crit.", "Add a wound die for every level above 3rd."] },
        "flight": { stat: "int", prof: "arcane", level: 3, ap: 7, range: 5, dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Gain magical flight, allowing you to float through the air. Target up to 5 willing creatures, adding a Terrible die to the spellcasting roll for each creature targeted. On success all targeted creatures gain a flying speed equal to their movement speeds.", "Add a proficient die for every level above 3rd."] },
        "phantasmal-blades": { stat: "int", level: 3, prof: "arcane", ap: 8, range: 10, dmg: [3, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 1, 0], txt: ["Launch a series of arcane swords at a target. The target makes a Strength save vs your spellcasting, taking 3 wounds on fail.", "Add a wound and proficiency die for every level past 3rd."] },

        "bleed": { stat: "wil", prof: "curse", level: 0, ap: 5, range: 5, dmg: [0, 1], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Targeting a creature in range you can see you cause their wounds to reopen. The creature makes a Stamina save against your spellcasting roll. On fail they take 1 wound die in damage, or 3 wound dice if they have missing wounds.", "You may target an extra creature for every level cast above cantrip."] },
        "eldritch-blast": { stat: "wil", prof: "curse", level: 0, ap: 5, range: 8, dmg: [1, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Blast a target with eldritch force. Make a spellcasting roll against the targets Strength. On success they take 1 wound, adding a wound die on crit.", "Add a proficiency die to your spellcasting roll for every level cast above cantrip."] },
        "levitate": { stat: "wil", prof: "curse", level: 0, ap: 5, range: 5, dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["You magically levitate an object or creature weighing less than 25 lbs. If the target is an unwilling creature you must make a spellcasting roll against thir Strength save. On success, each turn you may move the target 3 tiles upwards or downwards. This movement does not provoke opportunity attacks, and does not move them with enough force to damage them, but can force them prone (against the ceiling or floor).", "If the target is an unwilling creature they make the save again at the end of their turn, freeing themselves from your levitation on success. If the target is in the air when the spell ends it drops to the ground normally. If the target becomes heavier than the spell can carry (for example a creature standing ontop of a levitating slab) the spell ends.", "The maximum weight doubles for every level cast above cantrip."] },
        "life-sense": { stat: "wil", prof: "curse", level: 0, ap: 5, range: 10, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["targeting a 4x4 cube, all living creatures give off the glow of life. Creatures must make a Willpower save vs your spellcasting. On a fail a dim light outlines their body. Any attacks against this creature can change a normal die for a proficiency die.", "Add a proficiency die to your spellcasting roll for every level cast above cantrip."] },
        "trickery": { stat: "wil", prof: "curse", level: 0, ap: 5, range: 5, dmg: [0, 1], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: [] },


        "guidance": { stat: "cha", prof: "divine", level: 0, ap: 3, range: 2, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Target up to 5 creatures. Make a spellcasting roll, adding a bad die for every creature targeted. On a success, the creature can add a proficiency die to their next attack roll or damage-dealing spell roll. On crit they add a superiority die instead.", "Add a proficiency die for every level above cantrip."] },
        "holy-protection": { stat: "cha", prof: "divine", level: 0, ap: 4, range: 2, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Target up to 5 creatures. Make a spellcasting roll, adding a bad die for every creature targeted. On success, The next die to roll a crit against this creature is ignored.", "Add a proficiency die for every level above cantrip."] },
        "light": { stat: "cha", prof: "divine", level: 0, ap: 6, range: 5, dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["You cause a small object no larger than a fist to emit a bright light. You may control the intensity of the light, from 1 emitting 1 tile of dim light up to 3 tiles of bright light and 3 tiles of dim light. You may double the lights intensity, doubling the lights range but must make a concentration check each turn to maintain this effect. While intensifying the light, any creatures that are sensitive to bright light add 1 terrible die to their attack rolls while in this spells bright light.", "When this light enters magical darkness you must make a spellcasting roll vs the spellcasting roll of the effect that created the darkness. You add a superior or terrible die for every level above or below this light spell is compared to the darkness. On success the darkness is dispelled, and on fail this spell ends.", "The range of both the maximum bright and dim light increases by 1 tile for every level above cantrip. At level 5 and above this light is considered sunlight."] },
        "radiant-light": { stat: "cha", prof: "divine", level: 0, ap: 6, range: 5, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["A ray of radiant light blasts a target creature in range. The creature makes a dexterity save vs your spellcasting. On a fail they take 1 wound, or 2 wounds if they are undead.", "Add a target for every level above cantrip."] },
        "spare-from-death": { stat: "cha", prof: "divine", level: 0, ap: 4, range: 0, dmg: [0, 0], lroll: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Magically slow the heart and prevent blood loss. Make a Medicine check using your spellcasting for the roll, adding a bad die for every temporary wound missing. On success the target is stabilized and will regain consciousness in 10 minutes.", "Add a superior die for every level above cantrip."] },
        "vine-whip": { stat: "cha", prof: "divine", level: 0, ap: 5, range: 5, dmg: [0, 1], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ["Magically influence a plant to attack or grapple a nearby creature. Choose a location in range to grow a plant, or take control of a small or larger plant within 10 tiles. The plant grows a bramble whip it can use to attack creatures in melee range. You may use the plant to make an attack or grapple roll, using your spellcasting roll for the attack. On hit they take 1 wound die in damage, or 1 wound on crit.", "The plant lasts for 1 minute after which it returns to its original shape.", "Add a wound die for every level above cantrip."] },
        "animal-messenger": { stat: "cha", prof: "divine", level: 1, ap: 30, range: 0, dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["You attempt to summon a small beast to deliver a message for you. Make a spellcasting roll against 2 Terrible dice in an urban environment, or 2 Bad dice elsewhere. On success you summon a small beast local to the area, with the beast having wings on crit. You can give the beast a message up to 1 minute long and a description of who to deliver the message to. The beast will give the message to the first creature it finds that matches the description, and may have trouble with overly complex messages.", "On delivering the message the recipeint is able to give a 1 minute message in return. If the beast is unable to find a creature matching that description or unable to return the response within the spells duration the beast reverts back to a normal animal and the message is lost.", "The duration increases by 1 day for each level above the 1st."] },
        "bonfire": { stat: "cha", prof: "divine", level: 1, ap: 30, range: 0, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["You create a magical soothing bonfire. The bonfire takes a single tile of space, emits bright light for 5 tiles, and dim light for an additional 5. Target up to 5 creatures and make a spellcasting roll, adding a bad die for every creature targeted. These creatures heal an additional wound during their long rest and recover 1 point of exhaustion.", "Add a proficient die for every level above the 1st."] },
        "bramble": { stat: "cha", prof: "divine", level: 1, ap: 7, range: 7, dmg: [0, 1], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["A growth of razor sharp bramble appears at a target location. Choose a point in range, summoning bramble in a 3x3 square centered on that point. The bramble counts as difficult terrain. The bramble is flammable and a tile will burn away after taking 1 wound of fire damage.", "Any creature attempting to take a move or sprint action through the bramble must make a Dexterity save vs your spellcasting. On fail they take 1 wound die, with their movement ending on a crit. A creature makes this save only once per move or sprint action.", "The area increases by 1 for every level above 1st."] },
        "chilling-fog": { stat: "cha", prof: "divine", level: 1, ap: 6, range: 15, dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["A chilling fog appears in a 5x5 area at a target location. Make a spellcasting roll, all creatures gain slow equal to the number of crits rolled, with a minimum of 1. All creatures inisde the fog gain fire resistance 1. The fog heavily obscures the area.", "The size and range of the fog increase by 2 for every level above 1st."] },
        "close-wound": { stat: "cha", prof: "divine", level: 1, ap: 5, range: 0, dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], txt: ["Mend a creature's wounds. Make a spellcasting roll, healing a single wound and adding a wound for every crit rolled.", "Add a Wound die for every level above the 1st."] },
        "healing-word": { stat: "cha", prof: "divine", level: 1, ap: 4, range: 5, dmg: [0, 0], lroll: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], txt: ["Send healing energy to a single target. Make a spellcasting roll, adding 3 Bad dice. On success, roll a wound die for every success rolled, healing for the total wounds rolled.", "Add a normal die for every level above the 1st."] },
        "holy-weapon": { stat: "cha", prof: "divine", level: 1, ap: 4, range: 0, dmg: [0, 1], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Enchant your weapon with holy power. For the next minute you may use your divine spellcasting in place of attack rolls you make. Your attacks add an additional wound die to the damage, or 3 if the target is undead.", "Duration increases by 1 minute for every level cast above 1st."] },
        "solar-flash": { stat: "cha", prof: "divine", level: 1, ap: 6, range: 0, dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Shine blinding light in a cone infront of you. A cone of light 3 tiles long shines from you. Each creature must make a Stamina save vs your spellcasting, on fail they are blinded until the end of their next turn. If the creature is sensitive to daylight or bright light they also take 1 wound in Holy damage.", "The the length of the cone increases by 1 for every level above 1st."] },
        "tremor": { stat: "cha", prof: "divine", level: 1, ap: 7, range: 0, dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["You cause the earth around you to tremor. All creatures within 2 tiles of you must make a Strength save vs your spellcasting. On fail the creature takes 1 wound die in damage, getting knocked prone on crit. If the ground in the area is loose earth or stone it becomes difficult terrain until cleared.", "The the effected tiles extends by 1 in all directions for every level above 1st."] },
        "cleanse": { stat: "cha", prof: "divine", level: 2, ap: 3, range: 3, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Attempt to remove negative effects from a target. You may choose any number of conditions this spell can remove, adding a bad die to your spellcasting roll for each condition, and a bad die for every condition level above 1. On success, those conditions are removed from the target. Cleanse can remove Slow, Poison, Hex, Daze, Stun, Blind, and Fear.", "Add a proficiency die for every level above the 1st."] },
        "consecrate-ground": { stat: "cha", prof: "divine", level: 2, ap: 10, range: 0, dmg: [1, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Mark a 3x3 area centered on yourself, purifying the ground. Any undead or monstrosity attempting to enter the consecrated ground must make a Charisma save vs your spellcasting. On fail they cannot willingly enter. Any undead inside the consecrated ground takes 1 wound at the start of their turn. Allies inside the zone gain 1 proficiency on all saving throws. You may move normally, however leaving the area ends the spell. If the spell lasts for the full 10 minutes the area remains consecrated for 1 day.", "The area increases by 2 for every level cast above 2nd"] },
        "enhance-ability": { stat: "cha", prof: "divine", level: 2, ap: 5, range: 3, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Target up to 5 creatures. Make a spellcasting roll adding 1 terrible die, plus a terrible die for every creature targeted. On success the creatures gain +1 to a single attribute for the duration of the spell. They also gain +1 to their proficiency modifier in that attributes saving throw for every crit rolled.", "Add a proficiency die for every level above the 1st."] },
        "gust": { stat: "cha", prof: "divine", level: 2, ap: 7, range: 0, dmg: [0, 1], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["You cause strong winds to blow in a direction, 10 tiles long by 2 tiles wide. Each creature in the line must make a Strength save vs your spellcasting, on fail they are blown back 1 tile, plus an additional tile for every crit rolled. If they are unable to move due to a wall or obstacle they instead take 1 wound die in damage. Any creature moving against the direction of the wind must spend two tiles of movement for every tile moved. You may spend 2 AP to reverse the direction of the wind.", "Add a proficiency die for every level cast above 2nd."] },
        "seed-of-renewal": { stat: "cha", prof: "divine", level: 2, ap: 30, range: 0, dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Putting a seed into the ground, sprout a rejuvenating bush, bearing fruit. You may add up to 5 uses of this bush, adding a bad die to the spellcasting roll for every use added. If used during a short or long rest the creature can spend a free healing surge. Users may also purge a single source of poison or disease, unless the effect comes from a spell cast at a higher level than Seed of Renewal.", "The bush can be used an additonal time for every level cast above 2nd."] },
        "shield-of-faith": { stat: "cha", prof: "divine", level: 2, ap: 5, range: 3, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Protect a creature with a holy aura. Target up to 5 creatures. Make a spellcasting roll, adding a terrible die for every creature targeted. On success, target creatures gain 1 defense die, or a superior defense die on crit.", "Add a proficiency die for every level above the 2nd."] },
        "miss": { stat: "cha", prof: "divine", level: 2, ap: 5, range: 5, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "winds-of-battle": { stat: "cha", prof: "divine", level: 2, ap: 4, range: 5, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["A flurry of wind surrounds up to 5 willing creatures. Make a spellcasting roll, adding a terrible die for each creature targeted. On success creatures can move freely without taking opportunity attacks as the wind wards off foes. On crit the winds guide the creatures attacks, allowing them to reroll 1 die in their attack rolls for each crit in your spellcasting roll.", "The winds last for the duration, or until the creature is hit by an attack.", "Add a proficiency die for every level cast above 2nd."] },
        "more-missing": { stat: "cha", prof: "divine", level: 2, ap: 5, range: 5, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: [] },
        "spirit-animal": { stat: "cha", prof: "divine", level: 3, ap: 300, range: 0, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["Attempt to commune with local nature spirits, gaining one as your guide. Make a spellcasting roll, adding 2 terrible dice to the roll, or 3 if casting this outside of a forest, plains, or swamp. On success you gain an spirit companion of your choosing. You may summon or dismiss the spirit for 5 AP. Each spirit has their own wounds, and if killed the spell ends. Spending a minute in concentration you may look through your spirit animals eyes, while doing so you gain the senses of the animal and lose your own.", "Elk: While within 10 tiles you gain +3 proficiency to athletics challenges and your movespeed increases by 1. Rabbit: While on your person, gives you +1 proficiency to Dexterity saves and Acrobatics challenges. The rabbit cannot be targeted while on your person. Bear: Your max wounds increase by 1. Snake: +1 proficiency to Intelligence saves and you cannot be charmed. Eagle: +3 to perception proficiency. The eagle has a flying speed of 5/5. Wolf: +3 to diplomacy proficiency. When helping or being helped by an ally, you may reroll 3 dice.", "Add a proficient die to your roll for every level cast above 3rd."] },
        "traveler's-protection": { stat: "cha", prof: "divine", level: 3, ap: 90, range: 3, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: ["A protective ward for the journey ahead. Target up to 5 creatures, adding a bad die for every creature targeted. On success the targets maximum Wounds increase by 1. A creature can only be under the effects of one source of Traveler's Protection.", "Add a proficient die for every level above 3rd."] },
        "guidance": { stat: "cha", prof: "divine", level: 2, ap: 5, range: 5, dmg: [0, 0], lroll: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], txt: [] },
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
                    if (sub1 === 's' || sub1 === 'y') {
                        modObj.bonus[0] += parseInt(vals[i].substring(1));
                    } else if (sub1 === 'p' || sub1 === 'g') {
                        modObj.bonus[1] += parseInt(vals[i].substring(1));
                    } else if (sub1 === 'n' || sub1 === 'w') {
                        modObj.bonus[2] += parseInt(vals[i].substring(1));
                    } else if (sub1 === 'b' || sub1 === 'r') {
                        modObj.bonus[3] += parseInt(vals[i].substring(1));
                    } else if (sub1 === 't') {
                        modObj.bonus[4] += parseInt(vals[i].substring(1));
                    } else if (sub2 === 'pr') {
                        modObj.bonus[5] += parseInt(vals[i].substring(2));
                    } else if (sub2 === 'sd') {
                        modObj.bonus[6] += parseInt(vals[i].substring(2));
                    } else if (sub1 === 'd') {
                        modObj.bonus[7] += parseInt(vals[i].substring(1));
                    } else if (sub2 === 'gw') {
                        modObj.bonus[8] += parseInt(vals[i].substring(2));
                    } else if (sub1 === 'w') {
                        modObj.bonus[9] += parseInt(vals[i].substring(1));
                    } else if (sub1 === 'h') {
                        modObj.bonus[10] += parseInt(vals[i].substring(1));
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
                        rollResult.d.push(i);
                        rollResult.r.push(false);
                        var rollVal = randomInteger(6) - 1;
                        if (allDice[i].crit[rollVal] == 1 && modObj.hex > 0) {
                            rollResult.v.push(-1);
                            msg += "<span style='background-color:" + allDice[i].clr + "; border: 1px solid;'>Hex!</span>";
                            modObj.hex--;
                        }
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
            values.description = "Lv" + level + ", " + info.ap + "AP, " + (info.range != 0 ? "Range " + info.range : "Touch");
            values.effect = "";
            for (var i = 0; i < info.txt.length; i++) {
                values.effect += info.txt[i] + (i !== info.txt.length - 1 ? "<br/><br/>" : "");
            }
            var manaPerLevel = [0, 1, 2, 3, 4, 6, 8, 10, 13, 16, 20];
            level = min(10, max(0, level));
            values.mana = manaPerLevel(level);

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