# Farhome v2.1

## Table of Contents
[Introduction](#Introduction)
- [How to Play](#How-to-Play)
- [Custom Dice](#Custom-Dice)
- [Calculating a Roll](#Calculating-a-Roll)
  - [Types of Rolls](#Types-of-Rolls)
  - [Attack](#Attack)
  - [Defense](#Defense)
  - [Attribute Saves](#Attribute-Saves)
  - [Spellcasting](#Spellcasting)
  - [Skill Challenge](#Skill-Challenge)
- [Wounds](#Wounds)
- [Death Saves](#Death-Saves)
- [Action Points](#Action-Points)
- [Maneuvers](#Maneuvers)
- [Combat Advantage](#Combat-Advantage)
- [Attributes](#Attributes)

[Proficiency](#Proficiency)
- [Skills](#Skills)
- [Tools](#Tools)
- [Attribute Saves](#Attribute-Saves-1)
- [Spell Schools](#Spell-Schools)
- [Weapons](#Weapons)

[Spells](#Spells)
- [Spellbooks](#Spellbooks)
- [Spell Slots](#Spell-Slots)
- [Preparing Spells](#Preparing-Spells)
- [Casting Spells](#Casting-Spells)
- [Concentration](#Concentration)
- [Cantrips](#Cantrips)
- [Spell Slots](#Spellbooks)

[Creating a Character](#Creating-a-Character)
- [Starting Equipment](#Starting-Equipment)
- [Leveling Up](#Leveling-Up)
- [Earning Experience](#Earning-Experience)

[Combat](#Combat)
- [On your Turn](#On-your-Turn)
- [The Gameboard](#The-Gameboard)

[Resting](#Combat)
- [Short Rest](#Short-Rest)
- [Long Rest](#Long-Rest)
- [Exhaustion](#Exhaustion)

[Conditions](#Conditions)

[Magic Items](#Magic-Items)
- [Attunement](#Attunement)
- [Magic Weapons](#Magic-Weapons)
- [Magic Armor](#Magic-Armor)
- [Identifying Magic Items](#Identifying-Magic-Items)
- [Gaining Attributes through Items](#Gaining-Attributes-through-Items)

[Terms](#Terms)

## Appendices
[Races](#Races)

[Spells](#Spells-1)
- [Arcane](#Arcane)
- [Curse](#Curse)
- [Divine](#Divine)

[Maneuvers](#Maneuvers)

[Feats](#Feats)
- [Backgrounds](#Backgrounds)
- [Basic](#Basic)
- [Journeyman](#Journeyman)
- [Advanced](#Advanced)

[Items](#Items)
- [Consumables](#Consumables)
- [Mundane Gear](#Mundane-Gear)
- [Wounds](#Wounds)
- [Tools](#Tools)
  - [Lockpicks](#Lockpicks)
  - [Repair Kit](#Repair-Kit)
  - [Apothecary Set](#Apothecary-Set)
  - [Enchanters Tools](#Enchanters-Tools)
  - [Scribing Tools](#Scribing-Tools)


## Introduction

Farhome is a homebrew tabletop RPG system set in a fantasy world of magic, monsters, and adventures. You and a group of friends play in a shared storytelling experience, each creating a character to experience the world through. Your guide through this world is taken on by another player called the Dungeon Master (or Game Master). Together you might explore an ancient ruin, defend a village from monsters, or fight a dragon.

### How to Play

Farhome is a game about roleplaying and that means, well, playing a role. And while that may sound vague, at it's core roleplaying is about deciding which actions your character wishes to take and how your character responds to actions taken by others. To some this might be done by speaking in character, some describe what their character does, and others will say which action they want to take. The important thing while playing a role is that these choices come from Baranor the barbarian and not Steve the accountant.

Your guide through all of this is the Dungeon Master. They're in charge of everything in the world that isn't the players, from the forest or towns you explore, to the people you interact with, and to the dangerous monsters you fight. Their job is to present to you the world so that your characters can make decisions. The role of the DM boils down to presenting the world to the players, listening to what actions they players wish to take, and then presenting the outcome of those actions. 

What actions you take and the world they are taken in are limited only by your imagination, although there is more structure here than just make-believe. This book contains a multitude of rules (more guidelines really) that give structure and consistency to your adventures. Still, there are cases where the outcome is uncertain, for example does your attack hit the monster, are you able to climb this cliff, or evade the town guards. In these cases you roll dice to determine wether you succeed or fail.

### Custom Dice

Farhome uses a set of custom dice to determine outcomes. There are 8 types of 6-sided dice, each with their own layout of successes or failures. With most dice rolls you roll a number of dice determined by your characters skills or abilities and a number of challenge dice added by the DM depending on how difficult the task is. Rolling more successes than failures means your action succeeded, while a tie or worse means your action failed. Sometimes your roll may be in opposition to another characters roll, in which case success goes to whoever has the most successes.

Some dice have special symbols on them for Criticalical Successes and Criticalical Failures. By default these are counted as 2 success or 2 failures, but in some cases may give different results. Defense dice work similarly to the other dice, having defense symbols instead of successes. Finally wound dice are used to determine damage, healing, or in some cases chance.

#### Legend
- CS -- Criticalical Success
- S -- Success
- F -- Fail
- CF -- Criticalical Fail
- D -- Defend
- CD -- Criticalical Defend
- W -- Wound

#### Dice Values
| Die | 1 | 2 | 3 | 4 | 5 | 6 |
|:----:|:--:|:--:|:--:|:--:|:--:|:--|
| Superior  | CS | Sx2 | S | S| S | _ |
| Proficient  | CS | S | S | S | _ | _ |
| Normal | S | S | S | _ | _ | F |
| Bad | _ | _ | F | F | F | CF |
| Terrible | _ | F | F | F | Fx2 | CF |
| Defense | CD | D | D | _ | _ | _ |
| Superior Defense | CD | Dx2 | D | D | _ | _ |
| Wound | W | W | W | _ | _ | _ |

### Calculating a Roll
When calculating your roll, regardless of type, you always add up your own dice first. Success and failures of the same type cancel each other out, Failures nullify Success, and Criticalical Failure nullify Criticalical Success. Add up the remaining successes, counting Criticalical Success as two successes.

At this stage process any modifiers from abilities, skills or features that effect your roll. For example, you would process the Hex condition here, nullifying a remaining critical. If you do not have at least 1 success at this point the roll is considered a fail.

Comparing rolls follows the same rules: Opponents remaining successes nullify your successes, and their criticals nullify your criticals. Finally, if you have 1 or more successes the roll is a success. Ties favor the defender if there is one, or the most neutral action.

#### Types of Rolls
The minimum number of dice you can roll is 1 normal die, or 1 defense die for defense rolls. Most rolls use an attribute, adding a normal dice for each point in the attribute. Attributes that are negative add bad dice instead. For example, making a roll that uses Strength you would roll 1 + your Strength score in dice.

##### Attack
Add normal dice equal to 1 + your Strength or Dexterity, depending on what attribute the weapon making the attack. If you are proficient with this weapon you improve a number of normal dice to proficient dice equal to your proficiency modifier.

This roll is contested by your opponents Defense, negating your remaining Success and Critical Success by their Defends and Critical Defends.

As an example, lets say you attack a goblin with your sword. You have 3 Strength, so you roll a total of 4 dice. You are compitent with your sword, having 2 proficiency points with it so you replace 2 of your dice with proficiency dice. Your total roll comes to 2 proficiency dice and 2 normal dice.

While you roll your 4 dice, the goblin gets to roll his defense, in this case rolling 2 normal defense dice. You roll and come up with 3 successes and 1 failure, giving you 2 total successes. The goblin rolls and comes up with 1 defense. After comparing each others rolls you see you have more successes then the goblin has defense, meaning your attack hits.

##### Defense
When your character gets attacked by a weapon or spell you may need to make a Defense roll. Defense determines how hard you are to hit and uses your armor instead of any attribute. Defense dice have no failures, but in some cases you will need to add other dice to the roll, in these cases treat and success as a defend and failure as removing a defend.

Lets run through an example. Lets say a necromancer has cast _Curse of Fragility_ on you and succeeded, adding 1 bad die to all Defense rolls. One of his skeletons makes an attack against you. Normally you would roll 1 superior defense and 2 defense dice, but because you are cursed you add 1 bad die to the roll. You make your roll getting 1 critical defend and 1 defend, but the bad die rolled a critical failure. The critical failure cancels out the critical defend, leaving you with 1 defend.

The skeleton rolls its attack, getting 2 succeses. The skeletons 2 successes beat your 1 defend, landing it's attack.

##### Attribute Saves
Attribute saves are made when you need to make a roll that doesn't fall under any particular skills. Normally this is done in response to an attack or spell that calls for you to make a save, but these can also be from your DM in some cases, for example trying to remember certain facts could be an Intelligence save.

Each attribute has it's own saving throw proficiency. When making a roll you follow the normal rules, improving dice equal to your proficiency. These rolls are usually done in contest to another roll, or the DM may ask you to add dice as you would in a skill challenge.

As an example, let's say a wizard cast _Call Lightning_ on you, requiring you to make a Dexterity save. You have 2 Dexterity score and 1 proficiency in Dexterity saves, so you roll 1 proficiency and 2 normal dice. In this case your Dexterity save is contested by the wizard's spellcasting roll. You make your roll and end with 2 successes, while the wizard rolls 3 succeses and 1 failure. After the wizard adds up his roll his 2 successes match your 2 successes from your Dexterity save. Since you and the wizard tied, the victory goes to the defender and his spell misses you.

##### Spellcasting
There are 3 types of spells in Farhome: Arcane, Curse, and Divine. Each spell type uses a different attribute and has a different proficiency. When a spell asks you to make a spellcasting roll you use the attribute and proficiency associated with that spell type.

For example, you want to cast _Fireball_ on a group of orcs. _Fireball_ is an arcane spell and so uses Intelligence and your arcane proficiency. You have 3 Intelligence and 2 arcane proficiency, so you roll 2 proficiency and 2 normal dice. In this case the spell hits multiple orcs, so each orc makes their own Dexterity save against your spellcasting roll. You make your roll once, comparing it to each of the orc's rolls. You end up rolling a critical success and 2 successes, giving you 4 total successes in your roll. Some of the orcs rolled poorly and take the full effect of your spell, while some rolled better and passed the save.

Lets look at one orc in particular, he rolled a critical success and 1 failure on his Dexterity save, totalling 1 success. You compare your roll to his, and since the orc also rolled a critical success it cancels out your critical success. Your 4 successes still beat it's 1, but you do not deal extra damage to this orc from your critical.

##### Skill Challenge
Skill Challenges are almost never made in contest, and instead the DM will ask you to add dice depending on how challenging a task you are trying to accomplish. Each skill has its own proficiency and uses one of your attributes to determine dice. For example, an athletics check will use your Strength score while an acrobatics check will use your Dexterity score. Both athletics and acrobatics have their own proficiencies as well.

The outcome in these rolls isn't always a strict pass or fail, depending on the DM they may give a bonus if you roll a critical success or something bad may happen if you roll a critical fail.

Let's look at an example. You are trying to sneak past some guards and the DM asks you to make a Stealth check. You have 4 Dexterity, but only 1 proficiency in Stealth so you roll 1 proficiency and 4 normal dice. The DM also gives you 2 bad and 1 terrible die as a challenge as the guards are alert and looking for trespassers. You make your roll, getting 3 successes on your dice, but 2 critical failures giving you a total of 1 failure. Because you had 2 critical failures and no critical successes the DM rules that in addition to being spotted you tripped over a stone, falling to the ground prone.

##### Helping in Skill Challenges
In some cases you may want to help someone with an action, such as trying to push a boulder or search a room. When helping every participant rolls the same skill check contested by a single challenge roll. The highest roll among the participants is used, adding a success for every crit rolled by others.

##### Challenge Difficulty Dice
| Difficulty | 1 | 2 | 3 | 4 | 5 |
|:----:|:--|:--|:--|:--|:--|
| Simple  | _ | _ | _ | _ | _ |
| Easy  | B | _ | _ | _ | _ |
| Average | B | B | _ | _ | _ |
| Hard | B | B | T | _ | _ |
| Difficult | B | B | T | T | _ |
| Impossible | B | B | T | T | T |

### Wounds

Wounds are used to determine how hard a character is to kill, the more wounds you have the more durable your character. Wounds are lost when you are hit by attacks, spells, or traps and are restored by taking rests or through certain spells.

Some abilities or effects inflict Lesser or Greater wounds. These do not deal damage, but do leave lasting effects. Lesser wounds can be cured through magic, or heal naturally over a long rest. Greater wounds can be difficult to cure by magic and do not heal naturally.

### Death Saves

When a character takes enough damage to drop them to 0 wounds or below they become unconscious and start making death saves. While unconscious in this way you gain temporary wounds equal to half your total wounds rounded up. At the start of each of your turns you roll a wound die, losing 1 of your temporary wounds if the die rolls a wound. If you lose all of your temporary wounds your character dies.

Death saves aren't the only way you can lose temporary wounds, creatures can still make attacks against you and any melee attacks that hit you deal full damage regardless of the wound dice rolled. Likewise, allies can attempt to bring you back with healing spells, potions, or by stabilizing you. While in this state healing effects restore any lost temporary wounds first before restoring your wounds. If this brings you 1 wound or above you regain consciousness and no longer make death saves.

You can attempt to stabilize a character by making a medicine check. The check takes 10 AP and you must be beside the downed character to make it. Roll a medicine check, adding a Terrible die for every temporary wound the character is missing. On success the character is stabilized, on fail the character restores a temporary wound for every crit success in your medicine check. A stabilized players's wounds are set to 1 and they no longer make death saving throws, gaining consciousness after 10 minutes.

### Action Points

Action Points (AP) are used during combat as a way of tracking how much you can get done during your turn. Action Points are refilled at the start of your turn and are spent taking actions, such as moving, attacking, or casting spells. Any unspent Action Points can be spent on reactions even when it's not your turn. Reactions are triggered by specific actions, for example opportunity attacks can only be made when a creature tries to leave your zone of control. At the start of your next turn you lose any unspent Action Points from the previous turn.

### Maneuvers

Maneuvers are special abilities that can be learned by your character. They can be learned by anyone, but most maneuvers require a weapon to be used. Using a maneuver is the same as taking any other action during your turn, however they have the following restrictions:

- You may only use one maneuver per turn, reaction maneuvers excluded.
- You cannot use the same maneuver on two consecutive turns in a row.

Additionally, most maneuvers have weapon or level requirements, or can only be used in specific situations, such as when an ally is attacked. The level requirement for maneuvers shows 2 levels, the first being the level you need to learn the maneuver and the second being it's enhanced level. When your character reaches the maneuver's enhanced level it gains the effects described in the 'enhanced' textblock.

### Healing Surge

Healing surges are used to heal wounds your character has suffered during a short or long rest. Your character starts with healing surges equal to your stamina score (minimum of 1) and gains an extra healing surge every 5 levels. When spending a healing surge you roll 3 wound dice, healing for the number of wounds rolled. You can spend any number of healing surges during a short or long rest. After each long rest you regain up to 3 of your spent healing surges.

### Combat Advantage

Some abilities may impose combat advantage against you or an enemy. Someone who grants combat advantage are easier to hit, giving anyone who makes an attack or spell attack against the creature an extra superior die to their roll.

### Attributes
Your characters aptitude is represented by 6 core attributes: Strength, Dexterity, Stamina, Intelligence, Willpower, Charisma. Each attribute governs a number of skills in addition to the following:

#### Strength
Each point of Strength adds a die to your melee attacks.

#### Dexterity
Each point of Dexterity adds a die to your ranged attacks and melee weapons with the _finesse_ property

#### Stamina
Each point of Stamina increases your max wounds by 1.

#### Intelligence
Each point of Intelligence adds a die to your Arcane spellcasting rolls.

#### Willpower
Each point of Willpower adds a die to your Curse spellcasting rolls.

#### Charisma
Each point of Charisma adds a die to your Divine spellcasting rolls.

## Proficiency
Proficiency is a measure of how capable your character is at a given skill or task. Every skill, weapon type, spell school, tool, and attribute save have their own proficiency values which can be increased as your character grows. With the exception of spell schools or attribute saves, there is no limit on how many skills you can be proficient in.

When making a roll for something you are proficient in, you replace a normal die with a proficient die for every point of proficiency. If you have no normal dice to improve this way the remaining proficiency has no effect. If you have expertise in a skill you add superior dice instead of proficient.


### Skills

Skills represent how good your character is at completing different tasks and actions. Each skill has an associated attribute, and each skill has it's own proficiency modifier. There are no restrictions for which skills a player can add proficiency for.

##### Skill Table
|  |  |
|:----:|:----:|
| *Strength* |  |
|  | Athletics |
|  | Intimidation |
| *Dexterity* |  |
|  | Acrobatics |
|  | Lockpicking |
|  | Stealth |
|  | Sleight of Hand |
| *Stamina* |  |
|  | Exhaustion |
|  | Survival |
| *Intelligence* |  |
|  | Arcana |
|  | Investigation |
|  | Lore |
|  | Medicine |
| *Willpower* |  |
|  | Animal Handling |
|  | Insight |
|  | Nature |
|  | Perception |
| *Charisma* |  |
|  | Conversation |
|  | Diplomacy |
|  | Performance |
|  | Religion |

### Tools

To use tools, you need to have at least 1 proficiency in the tool skill. Their full use is shown in the Appendix.

| Tool | Attribute |
|:----:|:-------------|
| Repair Kit | Strength |
| Apothecary Set  | Willpower |
| Enchanters Tools | Intelligence |

### Attribute Saves

Each core attribute has an associated attribute save. Attribute saves are a measure of how resistant your character is to specific spells or effects. For example, someone trying to shove you would make a roll against your Strength save, or dodging a trap would roll against your Dexterity save.

You can only add proficiency to attribute saves you have learned through creating your character and leveling up.

### Spell Schools

There are 3 schools of magic: Arcane, Curse, and Divine. Each school uses its own proficiency, and can only be learned through feats or during character creation.

### Weapons

Weapons are split between simple and martial weapons. Simple weapons can be used by anyone and don't use their own proficiency modifier. Instead you use the relevant martial proficiency. When using a martial weapon that you don't have proficiency with you add 1 terrible die to the attack roll.

Weapon proficiencies are split between 4 categories: One Handed, Two Handed, Ranged, and Unarmed.

## Spells

Spells are split into 3 schools: Arcane, Curse, and Divine. Each school handles a different type of spell and uses a different attribute for its spellcasting. Arcane spells use the elements and raw power to defeat their foes, using Intelligence for its attribute. Curse spells disable and debuff their targets and uses Willpower. Divine spells center around healing and buffing targets and uses Charisma.

To cast a spell you must have a codex containing the spell you want to cast, have the spell prepared, and have a spell slot with a high enough level to cast the spell.

### Spellbooks

Very few creatures are able to innately cast magic. Almost everyone must prepare spells they've written into a spellbook, or Codex. There is no limit on the school, level, or type of spell you can hold in your Codex. New spells can be added to your Codex by copying from spell scrolls or a codex. This process is destructive, and destroys the scroll or codex after a spell is copied.

##### Variant Rule - Spells from Codexes
In some games spells may be limited, or codecies a rare occurance. With this variant when copying a spell from a codex, instead of destroying the codex you make an Arcana check against 2 bad dice. On success codex is not destroyed. Regardless a spell can only be copied once.

### Spell Slots

Casting spells of 1st level and above takes a toll on the caster, a character can only cast so many of these spells before needing to rest. To cast a spell you need a spell slot with a level equal to or greater than the spells level. Once a spell slot is used you cannot use that spell slot again until you complete a rest.

### Preparing Spells

Before you can cast a spell from your Codex you must prepare it. Every long rest you can prepare 5 spells, adding 3 for every point of Intelligence you have. Having negative Intelligence does not reduce the number of spells you can prepare.

Once prepared spells are castable until the next day, even without your Codex. The spells fade from your memory over the next long rest unless you prepare them again.

### Casting Spells

Each spell has either an AP cost or a time given as its casting time. There is no limit to the number of spells you can cast a turn, as long as you have the AP to do so. Casting a spell that lists a time instead of AP can still be used in combat, but requires the casting time worth of full turns. For example casting a spell with a cast time of 1 minute requires 3 full turns to cast.

All spells, including cantrips, can be cast at a higher level if you have a spell slot available. Casting spells this way give additional effects listed in the spell.

### Concentration

Some spells require concentration to maintain. You may only concentrate on a single spell at a time, casting a new spell with concentration will end the effects of the previous spell.

When you take damage while concentrating on a spell you must pass a Stamina save or the spell ends, adding 1 terrible die, plus a terrible die for every wound taken from the attack.

### Cantrips

Cantrips are spells that do not require a spell slot to cast, but must still be prepared like the rest of your spells. For casting at a higher level, cantrips are considered level 0 spells and gain benefits when even a 1st level spell slot is used to cast it.

### Variant Rule - Misfires

While anyone can cast any spell they have a spell slot for, trying to cast a spell beyond your abilities can lead to a misfire. When casting a spell beyond your ability, either normally or through upcasting a different spell, you add 2 terrible die to the spellcasting roll for every rank beyond your ability. If you do not have any remaining successes before contesting with another roll the spell misfires. Roll on the misfire chart to determine the effect.

##### Ability Ranks
| Attribute | Spell Levels |
|:----:|:-------------|
| 1  | 1-2 |
| 2  | 3-4 |
| 3 | 5-6 |
| 4 | 7-8 |
| 5 | 9 |


##### Misfire Chart

Roll 2 bad dice, counting the successes.

| Roll | Misfire |
|:----:|:-------------|
| -4  | Lesser Wound: Mana leak. Every time you take at least 1 wound you lose your lowest spell slot available. Lasts until cured with Lesser Restoration or you take a Long Rest. |
| -3 | Your spell backfires, roll a wound die for every remaining failure from your spellcasting roll, taking a wound for every wound rolled. |
| -2 | Wild magic fills the area around you, you and all creatures within 3 tiles add 1 terrible die to their next roll |
| -1 | Your flow of magic is interrupted, you add 1 terrible die to all spellcasting rolls for the next minute |
| 0 | Minor backlash. You take 1 wound of Force damage |
| 1-2 | The magic fades, but no harm comes from it. |


## Creating a Character
Farhome has no classes or archtypes beyond the background feats you choose. Every player is free to create their character as they wish.

To begin, choose a race for your character. The race determines your starting wounds, how far you can move or sprint, as well as your starting stat bonuses. Each race has a unique feat that all of people their race share. Choose a background feat for your character. These feats can only be gained during character creation and determine what kind of skills or abilities your character has learned.

Next, assign your attribute scores. You start with a -1 to all attribute scores, applying any bonuses from your race, and finally adding 9 points split across your attributes. Increasing an attribute score above 3 costs 2 points, and no attribute can be above 5.

Choose an attribute save, gaining 1 proficiency for that save. In addition you gain 4 proficiency points to spend on any skill, save, or abiltiy you are capable of.

Finally, choose 2 of the following bonuses.

#### Starting Bonuses
- Gain proficiency in an attribute saving throw
- Gain proficiency in a magic type
- Gain 4 proficiency points
- Learn 1 Feat
- Learn a maneuver and gain 2 proficiency with a weapon type
- Increase your max wounds by 1
- Gain 3 level 1 spell slots

##### Variant Rule - Rolling for Attributes
Instead of using the rules above for attributes, your group may decide to roll your scores. For each attribute roll 1 Superior, 3 Normal, and 1 Terrible die, adding up the total successes. The minimum score for an attribute is -2, with any rolls below that counting as -2 for the roll.

### Starting Equipment.
Depending on your background you may start with additional gear. All players start with an adventuring kit containing a bedroll, 10 days of rations, a fire starter and 50ft of rope. In addition you start with 50 gold which you can spend on gear or upgrades. Any unspent gold becomes your characters starting money.

| Cost | Upgrade |
|:----:|:-------------|
| 5g  | Buy any simple weapon. |
| 10g | Cantrip or Level 1 Spell |
| 10g | Basic Healing Potion |
| 10g | Buckler |
| 15g | Padded or Studded armor. |
| 15g | any martial weapon. |
| 20g | Upgrading armor to the next type |

### Leveling Up

When you earn 1000 experience your character levels up. Each level you gain 2 proficiency points and choose one of the following bonuses:

- Gain up to 4 spell slots*
- Gain 4 proficiency points
- Gain a Feat
- Learn a Maneuver
- Increase your max wounds by 1

##### Spell Slots
The sum total of spell slots gained each level cannot exceed twice your Spell level, and each spell slot cannot exceed your Spell level. 

For example, a 2nd level player has a spell level of 1, and so can gain 2 level 1 spell slots. A 4th level character can get 2 2nd level spell slots, or 1 2nd level and 2 1st, or 4 1st level spell slots.

| Player Level | Spell Level | Player Level | Spell Level |
|:----:|:----:|:----:|:----:|
| 1st  | 1st | 15th | 6th |
| 3rd  | 2nd | 18th | 7th |
| 6th | 3rd | 21st | 8th |
| 9th | 4th | 24th | 9th |
| 12th | 5th | 27th | 10th |


#### Attribute Score increase
Starting at level 3, every 3 levels you can increase an attribute by 1.

#### Action Points
You gain an Action Point at levels 10 and 20.

#### Additional Saving Throw
You gain proficiency in a saving throw at level 12.

### Earning Experience
Players earn experience after every encounter based on the difficulty of the encounter. Ideally characters should be leveling up once every 3-6 encounters. Experience is earned based on how difficult it is for the players to overcome the encounter, not by how much experience an individual monster gives.


##### Encounters
| Difficulty | Experience | CR level |
|:----:|:-------------:|:-------------:|
| Easy  | 100 | 75% Party Level |
| Average  | 100-250 | Party Level |
| Hard | 250-500 | 125% Party Level |


## Combat

Combat is broken down into rounds where every combatant gets a turn. Turn order is handled by each characters initiative roll. Each round lasts ~20 seconds in in-game time.



#### Initiative

When combat starts every player rolls for initiative. By default, you roll 5 normal dice, improving 1 to proficient dice for every point of dexterity you have, with negative dex converting die to bad die.

You add a flat success/fail modifier depending on the circumstances. Surprised creatures start with 3 failures. Unarmored creatures get 1 success, light armor gets none, medium armor gets 1 failure, and heavy armoy gets 2 failures. These values can be changed by feats or skills, and other dice may be added.

### On your turn

Each turn your action points are refilled. You can spend any amount of AP on your turn, and any unused AP can be used on reactions during the rest of the round. You gain no benefit for any unspent AP when your turn comes again.

#### Attack (5 AP)
Make a single weapon attack against a target creature. The actual damage, range, and effects of an attack depend on the individual weapon. Unarmed attacks use Strength and use a wound die to determine if the attack deals damage.

To make an attack you must succeed an attack roll vs the targets defense. You roll normal dice equal to your Strength/Dexterity, depending on what attribute the weapon uses. If you are proficient, improve a number of normal dice to proficient dice equal to your proficiency. If you have more successes vs the targets defense you hit. Draws are in favor of the defender.

##### Grapple
Instead of making an attack you can attempt to grapple a creatrure. Make an atheletics check against a creatures Strength or Dexterity save, their choice. On success the creature is grappled. While grappling a creature your move and sprint speed are reduced to 1 and cannot be increased, however the grappled creature is dragged with you.

You may end a grapple at any time. A grappled creature can attempt to free themselves on their turn in place of taking the attack action. To free yourself, you must pass a Strength save against the grapplers Atheletics.

#### Defend (5 AP)
Until your next turn, you improve your defense dice to superior defense dice equal to your dexterity, with a minimum of 1, or 2 with a shield.

#### Move (3 AP, once per turn)
You may move up to your move speed in tiles. Some terrain may cost more than 1 tile's worth of movespeed. Movement does not have be done all at once, you can split your movement as many times as you want.

#### Sprint (2 AP, can only be used after move, once per turn)
You may move up to your sprint speed + dexterity in tiles.

#### Reaction Attack (2 AP)
When a creature tries to leave your zone of control (the 5 adjacent tiles in front of your character, making a U shape) you may make a reaction attack against them. You cannot use maneuvers (unless the maneuver says it can be used as a reaction) and the attack uses the default Attack rules.

#### Off-hand Attack (2 AP, can only be used after attack, once per turn)
When dual wielding, as long as you have made a single 'Attack' action, you may make an attack with your offhand weapon. This attack is identical to the 'Attack' action, except you do not get any bonus from proficiency.

#### Use (2 AP)
The default for using an item, drinking a potion, activating a magic item, or interacting with an object (eg: pulling a switch). Some magic items will give their own AP costs, using those instead. You can only use one potion each turn.

##### Variant Rule: Using potions on others
You can use potions on willing or downed creatures by spending 5 AP instead of 2. Normal potion rules still apply.

#### Spell (Varying AP)
There is no limit to the number of spells you can cast, as long as you have enough AP to cast them. Most spells will require you to make a Spellcasting roll. These use normal dice equal to the spells spellcasting attribute: either Intelligence, Willpower, or Charisma. If you are proficient in that spell type, improve a number of normal dice to proficient dice equal to your proficiency modifier.


#### Maneuver (Varying AP)
Maneuvers have a variety of triggers, but unless otherwise stated must be used on your turn. Each turn you can use a single maneuver, after which that maneuver can't be used the next turn. You can still use a different maneuver the next turn.

### The Gameboard
Many DM's will represent their world with a gameboard, with every tile on the board representing a 5 ft square in the world. Usually only a single creature can occupy 1 tile at a time. Some creatures can occupy more or than one tile. All abilities, spells and feats in Farhome uses tiles to determine distance.

##### Creature Size
| Size | Tile's Occupied |
|:----:|:-------------|
| Tiny  | 1/4th |
| Small  | 1 |
| Medium | 1 |
| Large | 2x2 |
| Huge | 3x3 |
| Gargantuant | 4x4+ |

#### Zone of Control
A creatures zone of control is used to determine what other creatures they are locked in combat and which tiles count as flanking. By default a creatures zone of controls are the 5 adjacent tiles centered in the direction the creature is facing. If a creature is facing north, his zone of control is the west, north-west, north, north-east, and east tiles. Some abilities and weapons, such as _Reach_ increase a creatures zone of control.

A creature that attempts to leave another creatures zone of control is open to opportunity attacks.

#### Flanking
When a creature is attacked from a tile that is not in their zone of control it is considered a flanking attack. Flanking gives no bonus in and of itself, but some abilities and feats grant bonuses for flanking.

##### Variant Rule: Combat Advantage From Flanking
With this rule attacking a creature from behind grants Combat Advantage for the attack. This effects both player attacks and attacks from NPCs.

#### Darkness
Most creatures are unable to see in the dark, and take various penalities to all rolls made against creatures or targets in the dark. For example, a guard trying to spot a thief in the dark will take penalties, but a thief in the dark attacking a guard holding a torch will not.

Creatures in dim light add 1 bad die to all rolls, while creatures in total darkness add 2 terrible dice.

#### Cover
Creatures hiding behind objects and terrain gain bonus defense dice depending on how much cover the objects provide. For example, a fence or bush might provide quarter cover, a fallen tree or brick fence would provide half, and an upturned table or door would provide 3 quarters cover.

| Cover | Bonus |
|:----:|:-------------|
| Quarter  | +1 Superior Defense die |
| Half  | +2 Superior Defense dice |
| 3 Quarters | +3 Superior Defense dice |
| Full | Untargetable |

## Resting
During the adventuring day you will sometimes need to take a rest to recover health and abilities. There are two types of rests: Short rests which take an hour and Long rests which take 8. Each day you can have at most two short rests and one long rest. Any more more rests then that have no effect.

### Short Rest

Short rests require an hour of uninterrupted rest to complete. During a short rest you may spend any number of healing surges to restore lost wounds. 

Spellcasters restore up to 1/3rd of their level, rounded up, in spell slots. You may restore any number of spell slots this way as long as the sum level is not greater than 1/3rd of your level.

### Long Rest

Long rests require 8 hours of rest, with at most 2 hours of non-strenuous activity, such as keeping watch, preparing spells, brewing potions, etc. You automatically recover 1 wound and 3 healing surges over a long rest, and you may spend any number of healing surges to restore wounds.

Spellcasters restore up to their level in spell slots. You may restore any number of spell slots this way as long as the sum level is not greater than your level. In addition you may prepare new spells for the day.

### Exhaustion
All adventurers need to rest from time to time, trying to do too much in a day can leave you exhausted. You can gain exhaustion from many places, from travelling too long, not taking rests, spells, or abilities. At 6 levels of exhaustion you drop dead.

A normal travelling day is 8 hours. For every 2 hours you travel past 8 you must make an exhaustion roll. At 10 hours, you make a roll against 2 Bad dice, on fail you gain a level of exhaustion and can't travel further. The difficulty of this roll increases by 1 terrible die each roll past the 1st.

If you go more than 24 hours without taking a long rest you must make an exhaustion save vs 2 bad dice and 1 terrible die. You make this check every 24 hours without a long rest.

##### Exhaustion Levels
| Level | Proficiency | Max Wounds | Sprint
|:----:|:----:|:----:|:-------------|
| 1  | -1 | 0 | Yes |
| 2  | -1 | -1 | Yes |
| 3 | -2 | -2 | No |
| 4 | -2 | -3 | No |
| 5 | -3 | -4 | No |

## Conditions
There are a number of conditions creatures can be subjected to, each with different effects. Some conditions have a level associated with them to determine how extreme that condition is. For example, Poison normally adds a terrible die to your attack rolls and saving throws, where Poison 2 and Poison 3 adds 2 and 3 terrible die respectively.

##### Blind
A blinded creature loses the ability to see. While blind they add 2 Terrible die to all attack, spellcasting, and dexterity saving throws. They cannot make reactions.

##### Dazed
A dazed creature cannot take the Sprint or Reaction actions and grant combat advantage to attackers.

##### Fear
a feared creature cannot willingly move closer to the source of the fear. While the source is within line of sight, they add 1 bad die to any rolls made.

##### Grapple
A grappled creature cannot move and adds 2 bad die to dexterity saving throws, and grants combat advantage to attackers, except for the grappler.

##### Hex
A Hexxed creature ignores the first critical for all rolls. Criticals ignored this way count as rolling a blank side, eg: do not trigger critical effects or give successes. Each level of Hex ignores an extra critical.

##### Incapacitated
An incapacitated creature takes no actions and automatically fails Strength and Dexterity saving throws.

##### Paralyzed
A paralyzed creature automatically fail dexterity saving throws. When taking any Action they must first roll a Wound die. If the result is a wound they do not take the action and lose the AP spent.

##### Poison
A poisoned creature adds a terrible die to all attacks, saving throws, and ability checks, adding a terrible die for every level of poison. Only the highest level poison takes effect, eg: someone who has Poison and Poison 2 only adds 2 terrible die instead of 3.

##### Prone
a prone creature grants combat advantage to any melee attacker. Ranged attacks against this creature add 2 bad dice to their roll.

##### Restrained
A restrained creature cannot move and adds 2 bad die to dexterity saving throws and attack rolls. They lose the effects of a shield if wearing one and grant combat advantage to attackers.

##### Slowed
A slowed creature's Move and Sprint speeds are reduced by 1. Each level of slow reduces the value by 1, to a minimum of 1.

##### Stagger
A staggered creature adds 2 bad dice to dexterity ability checks and saving throws. In addition they are unable to take reactions.

##### Stunned
A stunned creature cannot move or take actions, and automatically fail Strength and Dexterity saving throws. Attackers gain combat advantage against this target.

##### Weaken
When a weakened creature hits with any attack or maneuver, all guaranteed wounds are replaced with Wound dice, dealing a wound only if the die rolls a wound.

## Magic Items

Magic items give a variety of effects and bonuses. Only some magic items require attunement, and each character can only attune with 3 magic items at a time. While you can carry multiple magic items of the same type, you can only get the benefit of one of them. For example, you cannot get the benefit of a _Cloak of Shadows_ as well as a _Cloak of Waterbreathing_.

### Attunement

Some powerful magic items require attunement to use. To attune to a magic item you must spend a long rest with the item. If you are already attuned to 3 magic items you must choose which item to lose attunement to when attuning to a new item.


### Magic Weapons

Magic weapons usually come with a bonus modifier, from +1 to +3. When making attack rolls with these weapons you add a superior die for every bonus modifier.

### Magic Armor

Magic armors can come with bonus modifiers from +1 to +3. When making defense rolls with this armor you add a superior defense die for every bonus modifier.
<br></br>
Shields cannot have bonus modifiers, but can have additional effects.

### Identifying Magic Items

Magic items can be identified by a successful Lore challenge. Each character can only attempt a lore roll once, if you fail then you must either cast _Identify_ on the item or take it to someone who can appraise it.

You can still use magic items without identifying them, but its bonuses will be unknown to you.

### Gaining Attributes through Items

Some magic items grant bonuses to your attributes. While there is no limit on how much this can increase an attribute, you cannot benefit from two items that give bonuses to the same attribute, instead taking only the larger one.

For example, using a _Cloak of Agility_ granting +1 Dexterity and a _Belt of Elvenkind_ granting +2 Dexterity will only give you +2 to your Dexterity attribute. You still benefit from the remaining bonuses on those items.

## Terms

##### Finesse
This weapon can use either Strength or Dexterity for attack rolls.

##### Reach
This weapon can make attacks 1 tile further, and their zone of control extends an additional tile.

##### Loading
This weapon can only be used to attack once per turn.

##### Range
This weapon can attack at range. Attacks further than the first number add 1 terrible die to the roll, and cannot attack farther than the 2nd.

##### Thrown
This weapon is thrown when used as a ranged weapon

##### Versatile
This weapon can be used with two hands, using the two-handed proficiency. When used this way roll additional wound dice equal to the Versatile level.

##### Two-Handed
This weapon requires both hands to use, and cannot be used with a shield.

##### Resistance
You reduce the number of wounds dealt by the level of resistance. For example, _Fire Resistance 1_ reduces all wounds taken from fire damage by 1.

##### Vulnerable
You increase the number of wounds dealt by the level of vulernability. For example, _Bludgeoning Vulnerability 1_ increases the wounds taken by bludgeoning attacks by 1. If the attack can do damage, but didn't (due to rolling wound die) a Vulnerable creature still takes 1 additional damage.



## Races

### Elves

___
#### High Elf
- **Starting Wounds:** 3
- **Move/Sprint:** 5/2
- **Attribute Bonuses:** +1 Dexterity, +1 Intelligence, -1 Strength

##### Innate Magic

You may learn a single cantrip, this cantrip does not require a codex to cast. On a short rest you recover an additional level worth of spell slots.

___
#### Wood Elf
- **Starting Wounds:** 3
- **Move/Sprint:** 5/3
- **Attribute Bonuses:** +1 Dexterity, +1 Willpower, -1 Intelligence

##### Hunter

You gain 1 proficiency with either a bow or a spear, and gain a maneuver that uses that weapon.

___
#### Star Elf
- **Starting Wounds:** 3
- **Move/Sprint:** 5/2
- **Attribute Bonuses:** +1 Dexterity, +1 Charisma, -1 Stamina

##### Fey Blood

You gain 2 superior dice when making a save against a charm, possession, or fear effect.

### Goblinoid

___
#### Half-Orc
- **Starting Wounds:** 4
- **Move/Sprint:** 4/1
- **Attribute Bonuses:** +1 Strength, +1 Stamina, -1 Charisma

##### Resilience

When making death saving throws you may reroll the die, taking the new result. If you pass 3 rounds in a row without failing a death save you become stablized.

___
#### Twili (Night Goblin)
- **Starting Wounds:** 2
- **Move/Sprint:** 4/3
- **Attribute Bonuses:** +1 Dexterity, +1 Intelligence, -1 Willpower

##### Hidden

As long as you are not the only ally in a creatures zone of control, you count as flanking the target. You can reroll 1 die when making Sleight of Hand and Stealth challenges.






### Humanoid

___
#### Human
- **Starting Wounds:** 3
- **Move/Sprint:** 4/2
- **Attribute Bonuses:** +1 to Any

##### Adaptable

You choose 3 bonuses when creating your character instead of 2.

___
#### Half-elf
- **Starting Wounds:** 3
- **Move/Sprint:** 5/2
- **Attribute Bonuses:** +1 to Dexterity

##### Innate Reflexes

You gain expertise in your starting attribute save.

___
#### Fallen
- **Starting Wounds:** 3
- **Move/Sprint:** 4/2
- **Attribute Bonuses:** +1 Charisma, +1 Willpower, -1 Strength

##### Devil Blood

You take no penalities when in dim light, and only add 1 bad die in total darkness. While not in sunlight you can reroll 1 die when making Charisma skill challenges.

### Dwarf

___
#### Hill Dwarf
- **Starting Wounds:** 4
- **Move/Sprint:** 4/1
- **Attribute Bonuses:** +1 Willpower, +1 Stamina, -1 Dexterity

##### Craftsdwarf

During a long rest you may enhance a piece of mundane gear, giving it +1 until the next day. At level 10 you can enhance two pieces of gear.

___
#### Mountain Dwarf
- **Starting Wounds:** 4
- **Move/Sprint:** 4/1
- **Attribute Bonuses:** +1 Strength, +1 Stamina, -1 Dexterity

##### Hearty

Your max wounds is increased by 1. Additionally you regain 1 extra wound during a long rest.


### Lizardmen

___
#### Lizardfolk
- **Starting Wounds:** 4
- **Move/Sprint:** 4/2
- **Attribute Bonuses:** +1 Strength, +1 Dexterity, -1 Intelligence

##### Claw and Fang

You gain 1 proficiency in unarmed combat and roll 2 wound dice when attacking unarmed.

___
#### Dragonnewt
- **Starting Wounds:** 3
- **Move/Sprint:** 4/3
- **Attribute Bonus:** +1 Dexterity, +1 Willpower, -1 Charisma

##### Limited Flight

You can maintain flight for a limited time. On your turn, you may take flight using your movement. If you fly this way you must touch the ground by the end of your next turn or plummet from the sky. You cannot fly again until the start of your next turn.

## Spells
### Arcane

#### Spells By Level

##### Cantrip
- [Cold Snap](#Cold-Snap)
- [Firebolt](#Firebolt)
- [Message](#Message)
- [Minor Image](#Minor-Image)
- [Static Shock](#Static-Shock)
- [Thundering Blow](#Thundering-Blow)

##### First
- [Arcane Blasts](#Arcane-Blasts)
- [Arcane Key](#Arcane-Key)
- [Beam of Fire](#Beam-of-Fire)
- [Call Lightning](#Call-Lightning)
- [Chilling Ray](#Chilling-Ray)
- [Detect Magic](#Detect-Magic)
- [Identify](#Identify)
- [Magic Sight](#Magic-Sight)
- [Poison Trap](#Poison-Trap)
- [Ray of Sickness](#Ray-of-Sickness)
- [Sword Burst](#Sword-Burst)
- [Thunderclap](#Thunderclap)

##### Second
- [Barrier](#Barrier)
- [Combust](#Combust)
- [Dispel Magic](#Dispel-Magic)
- [Elemental Shell](#Elemental-Shell)
- [Flurry](#Flurry)
- [Imprint](#Imprint)
- [Magic Weapon](#Magic-Weapon)
- [Misty Step](#Misty-Step)
- [Resilient Shield](#Resilient-Shield)

##### Third
- [Animate Guardian](#Animate-Guardian)
- [Chain Lightning](#Chain-Lightning)
- [Counter Spell](#Counter-Spell)
- [Far Sight](#Far-Sight)
- [Fireball](#Fireball)
- [Flight](#Flight)
- [Phantasmal Blades](#Phantasmal-Blades)
- [Telepathic Bond](#Telepathic-Bond)

##### Fourth
- [Conjure Elemental](#Conjure-Elemental)
- [Fire Shell](#Fire-Shell)
- [Ice Lance](#Ice-Lance)
- [Lightning Bolt](#Lightning-Bolt)
- [Nondetection](#Nondetection)
- [Orb of Acid](#Orb-of-Acid)
- [Passwall](#Passwall)
- [Starfall](#Starfall)

##### Fifth
- [Illusory Space](#Illusory-Space)
- [Open Warren](#Open-Warren)
- [Wall of Fire](#Wall-of-Fire)
- [Ward Area](#Ward-Area)

##### Sixth
- [Anti-Magic Field](#Anti-Magic-Field)
- [Conjuration](#Conjuration)
- [Earthquake](#Earthquake)
- [Evocation](#Evocation)
- [Forcewave](#Forcewave)

##### Seventh
- [Call Storm](#Call-Storm)
- [Power Word: Fire](#Power-Word-Fire)
- [Power Word: Ice](#Power-Word-Ice)
- [Power Word: Lightning](#Power-Word-Lightning)
- [Project Image](#Project-Image)

##### Eigth
- [Invulnerability](#Invulnerability)
- [Slow Time](#Slow-Time)
- [Stablize Warren](#Stablize-Warren)

##### Ninth
- [Armageddon](#Armageddon)

___
#### Cold Snap
*Cantrip*
- **Casting Time:** 5 AP
- **Range:** 1
- **Duration:** instant
- **Damage Type:** Cold

Sap the heat from a target. Make a spellcasting roll vs the targets stamina. On hit the target takes a wound. For every crit roll you the target gains a level of Slow until the end of their next turn.

Add a proficiency die for every level above cantrip.

___
#### Firebolt
*Cantrip*
- **Casting Time:** 6 AP
- **Range:** 8
- **Duration:** instant
- **Damage Type:** Fire

Blast a target with a bolt of fire. Make a spellcasting roll vs the targets defense. On hit the target takes a wound, adding a wound die on crit.

Add a wound die for every level above cantrip.

___
#### Message
*Cantrip*
- **Casting Time:** 2 AP
- **Range:** 10+
- **Duration:** instant

You attempt to send a telepathic message to a target you know. Make a spellcasting roll, adding a bad die for every 10 tiles you want the spell to travel, with a minimum of 1 bad die. On success the message is successfully broadcast. You know if the target recieved the message or not.

Add a proficiency die for every level above cantrip.

___
#### Minor Image
*Cantrip*
- **Casting Time:** 4 AP
- **Range:** 10
- **Duration:** 5 minutes

You create a small, soundless illusory image no larger than 1 tile at a point within range. The image has no physical presence and objects pass through it as if it wasn't there. Any creature attempting to see through the illusion must make a perception check against your spellcasting, seeing the illusion for what it is on success. A creature that touches or passes through the illusion automatically passes this check.

Add a proficiency die for every level above cantrip.

___
#### Static Shock
*Cantrip*
- **Casting Time:** 6 AP
- **Range:** 3
- **Duration:** instant
- **Damage Type:** Lightning

Charge the air around the target. Make a spellcasting roll vs the targets Dexterity. On success the target takes a wound. If you roll a crit the spell bounces to a creature adjacent to the target, making a new roll for the new target. This spell ends when you do not roll a crit or you run out of targets. This cannot effect the same target twice.

Add a proficiency die for every level above cantrip.

___
#### Thundering Blow
*Cantrip*
- **Casting Time:** 5 AP
- **Range:** Touch
- **Duration:** instant
- **Damage Type:** Thunder

conjure a rolling thunder to blast a target away. Make a spellcasting roll vs the targets Strength. On hit, roll a wound die and the target is pushed back 1 tile and is staggered until the end of their next turn, being pushed an additional tile for every crit. If the target is unable to move, either due to another creature or obstacle, roll a wound die for every tile remaining.

Add a proficiency die for every level above cantrip.


___
#### Arcane Blasts
*1st Level*
- **Casting Time:** 6-8 AP
- **Range:** 5
- **Duration:** instant
- **Damage Type:** Arcane

You shoot an unblockable projectile at a target within range. You may spend up to 8 AP casting this spell, adding a projectile for each additional point spent and rolling a wound die for every projectile.

Add a projectile (and wound die) for every level above the first.

___
#### Arcane Key
*1st Level*
- **Casting Time:** 1 minute
- **Range:** Touch
- **Duration:** instant

Magically force a lock to open. Make a lockpicking roll, using your spellcasting roll instead of your lockpicking skill. On success the lock is opened. This spell can open magical locks.

Add a proficiency die for every level above 1st.

___
#### Beam of Fire
*1st Level*
- **Casting Time:** 7 AP
- **Range:** Self
- **Duration:** instant
- **Damage Type:** Fire

A blast of fire shoots from your hands, hitting all creatures in a 3x1 beam. Make a spellcasting roll vs the targets dexterity. On hit the target takes a wound, if you crit the targets take another wound.

The beam length increases by 1 per level and you add a proficiency die for every level above 1st

___
#### Call Lightning
*1st Level*
- **Casting Time:** 7 (5) AP
- **Range:** 10
- **Duration:** instant
- **Damage Type:** Lightning

Call a bolt of lightning to strike a nearby target. The target makes a Dexterity save vs your spellcasting. On hit they take 1 wound, plus 2 wound dice in damage, and are paralyzed until the end of their next turn on crit. If cast in rainy conditions this spell only costs 5 AP.

Add a proficiency die for every level above first.

___
#### Chilling Ray
*1st Level*
- **Casting Time:** 6 AP
- **Range:** 5
- **Duration:** instant
- **Damage Type:** Cold

You shoot a chilling beam at up to 3 targets in range. Make a spellcasting roll vs the targets Stamina. On hit, the target takes 1 wound die and gains Slow 1, or Slow 2 on crit.

Add a proficiency die for every level above 1st.

___
#### Detect Magic
*1st Level*
- **Casting Time:** 6 AP
- **Range:** 10
- **Duration:** instant

Target a 10x10 area, making a spellcasting roll against 2 bad die. On success you can see a faint outline over any magical effect in the area. For each crit you are able to determine the school of a given magic effect and a rough idea of the magic's purpose.

Add a proficiency die for every level above the 1st.

___
#### Identify
*1st Level*
- **Casting Time:** 1 minute
- **Range:** Touch
- **Duration:** concentration, 10 minutes

Attempt to learn the secrets of a magical item or trinket. When attempting to identify an item, use your spellcasting instead of your Lore skill to make the roll.

Add a proficiency die for every level above 1st

___
#### Magic Sight
*1st Level*
- **Casting Time:** 10 AP
- **Range:** Self
- **Duration:** concentration, 10 minutes

Create an invisible floating eye, visible only to those who can see the etheral plane or have cast _Detect Magic_. You can see, but not hear, everything the eye can see in addition to your normal senses. You can command the eye to move, moving 5 tiles each turn. If the eye moves more than 10 tiles away from you, you must make a spellcasting roll against 2 Bad die, repeating this roll every minute. On fail the spell ends. The eye cannot move through solid objects, but can fit through holes as small as 1 inch.

If the eye is able to fully spot a creature behind cover, they gain 1 less bonus die from cover against your attacks.

Add a proficiency die for every level above 1st.

___
#### Poison Trap
*1st Level*
- **Casting Time:** 7 AP
- **Range:** 5
- **Duration:** 1 minute
- **Damage Type:** Poison

Choose 3 connected tiles in range. When a creature starts their turn or enters a tile for the first time they must make a constitution save vs your spellcasting. On a fail they take 1 wound. On a crit the target is poisoned until the end of their next turn. These tiles count as difficult terrain, and last for 1 minute.

Add a tile for every level above first.

___
#### Ray of Sickness
*1st Level*
- **Casting Time:** 5 AP
- **Range:** 7
- **Duration:** instant

Make a spellcasting roll vs a targets stamina. On success the target gains Poison 1 for the next 10 minutes, gaining a level for every crit.

Add a target for every level above 1st.

___
#### Sword Burst
*1st Level*
- **Casting Time:** 3 AP
- **Range:** Self
- **Duration:** 1 minute.
- **Damage Type:** Arcane

Magically enchant your weapon to fire a burst of energy with your next attack. You gain _Reach 1_ for the duration of the spell. Any physical damage you deal with your attack is converted to Arcane damage. On hit, add a wound die to the damage roll. For every crit rolled in your attack change a wound die from your damage roll to a guaranteed wound. After making your attack the spell ends.

Your reach increases by 1 for every level above the 1st.

___
#### Thunderclap
*1st Level*
- **Casting Time:** 5 AP
- **Range:** Self
- **Duration:** instant
- **Damage Type:** Thunder

A wave of force slams the ground around you, hitting all creatures adjacent to you. Make a spellcasting roll vs the targets defense. On hit the target takes a wound, and on a crit the target is pushed away 1 tile from you. If an object or creature prevents them from moving they instead take a wound.

Add a proficiency die for every level above first.



___
#### Barrier
*2nd Level*
- **Casting Time:** 2 AP
- **Range:** Self
- **Duration:** instant

As a reaction you quickly pull up magical defenses, protecting you and all creatures adjacent to yourself. You and all effected creatures can add 2 superior dice against the incoming spell. If the spell does not require a save (such as _Arcane Blasts_), roll the 2 superior dice vs the casters spellcasting roll. On a success the spell has no effect.

Increase the range of protection by 1 for every level above the first.

___
#### Combust
*2nd Level*
- **Casting Time:** 7 AP
- **Range:** 10
- **Duration:** 1 minute
- **Damage Type:** Fire

Cause up to 2 creatures in range to burst into flames. Targets makes a Dexterity save vs your spellcasting, on a fail they ignite in flames. At the start of their turn they take 1 wound. On their turn they may spend 5 AP rolling on the ground to extinguish the fire, leaving them prone.


Add a target for every level above 2nd.

___
#### Dispel Magic
*2nd Level*
- **Casting Time:** 5 AP
- **Range:** 5
- **Duration:** instant

You attempt to dispel a magical effect targeting a creature or area. Make a spellcasting roll vs 1 proficient die per level of spell you are trying to dispel. If the effect you are trying to break is actively being concentrated on by another creature make a spellcasting roll vs the creatures concentration instead. On success the magical effect ends. If targeting an effect caused by an object, such as a magic item or animated armor, they regain their magical effects after 10 minutes.

You may target an additional effect for every level past 2nd.

___
#### Elemental Shell
*2nd Level*
- **Casting Time:** 5 AP
- **Range:** Self
- **Duration:** 10 minutes

Create an energy barrier around yourself. Choose a damage type: fire, cold, lightning, thunder, poison. Make a spellcasting roll, gaining Resistance 1 to that damage type, increasing the resistance by 1 for every crit rolled.

Add a proficiency die for every level above 2nd.

___
#### Flurry
*2nd Level*
- **Casting Time:** 7 AP
- **Range:** Touch
- **Duration:** instant
- **Damage Type:** Cold

You conjure a flurry of ice shards in a 3x3 area. Each creature must make a Stamina save vs your spellcasting modifier. On fail they take 2 wound die, gaining 1 level of Slow for the next minute on crit.

Increase the number of wounds and level of slow by 1 for every level above 2nd.

___
#### Imprint
*2nd Level*
- **Casting Time:** up to 5 minutes
- **Range:** Self
- **Duration:** concentration, 5 minutes

Attempt to record your senses to an object, allowing a creature to replay your recording by holding the object and speaking a command word. Make a spellcasting roll, adding a superior die if a gemstone worth at least 50g is used. Depending on your successes the quality of the recording will change:

- **0-1**: There is no sound, and the visuals are too blurry to make out faces, but you can make out the type of area you are in.
- **2-3**: You can determine each creatures race, but not face. You get a good idea of the area (in a cellar/building, number of trees, important PoI's such as a rock or pillar). You can hear if people are talking, but cannot make out words.
- **3-5**: You can make out a creatures race and identify them if you have seen them before. You can hear enough to make out individual words when spoken, although there are occasional gaps.
- **6+**: The recording is exact, with the user seeing and hearing exactly as the caster saw.

The recording is permanent, unless a command word is spoken to end the spell or _Dispel Magic_ is cast on it. A creature under _Nondetection_ appears as a blurry patch and their voice is unrecognizable regardless of the quality of recording.

Add a proficiency die for every level above 2nd.

___
#### Magic Weapon
*2nd Level*
- **Casting Time:** 10 AP
- **Range:** 5
- **Duration:** concentration, 1 hour.

Temporarily enchant a weapon with magic. Target up to 5 weapons, adding 1 terrible die to your spelclasting roll for each weapon targeted. On success the weapons are considered +1 magic weapons. If you lose or drop concentration before the hour is finished the weapons retain the magic for 1 minute before fading completely.

Add a proficiency die for every level above 2nd.

___
#### Misty Step
*2nd Level*
- **Casting Time:** 3 AP
- **Range:** 5/10
- **Duration:** instant

Teleport to a unoccupied point you can see in range. Make a spellcasting roll, adding 2 bad die if you attempt to teleport more than 5 tiles, with a max range of 10. On success you teleport to that position, preventing any opportunity attacks or attacks that trigger on entering someones zone of control.

Add a proficiency die for every level above 2nd.

___
#### Resilient Shield
*2nd Level*
- **Casting Time:** 4 AP
- **Range:** Self
- **Duration:** concentration, 10 minutes

On your turn, or as a reaction, you create a dampening shield around yourself. While the shield holds you gain Resistance 1 to all physical damage. Make a spellcasting roll, the shield can take 3 hits before shattering, adding a hit for each crit rolled. While the spell is active you cannot take the move or sprint actions, but movement effects do not break the spell.

Add a proficiency die for every level above 2nd.







___
#### Animate Guardian
*3rd Level*
- **Casting Time:** 8 AP
- **Range:** Touch
- **Duration:** 1 hour

You attempt to animate a simple object made of plant, wood, stone, or metal no more than 1 tile in size. If the object is part of a larger construction (a stone wall, a dirt mound, etc) you add 1 terrible die to your roll as you try to force it free.


Make a spellcasting roll adding a terrible die if the target is metal, on success you create a golem out of the object. The golem has 3 wounds and acts on your turn. It can take a move action to move 4 tiles and can make a single attack. The golem's attack uses 3 dice, improing one die for every success and adding a die for every crit. After the duration or if the caster is incapacitated the golem reverts to inanimate material.

Add a proficient die for every level above 3rd. At 5th level you may target a 2x2 area, and at 7th a 3x3 area.

___
#### Chain Lightning
*3rd Level*
- **Casting Time:** 7 AP
- **Range:** 5
- **Duration:** instant
- **Damage Type:** Lightning

A burst of lightning that bounces from target to target. The Lightning bounces from your target to a creature of your choice within 3 tiles of the target, bouncing this way up to 2 times. The lightning cannot bounce to the same creature twice and must bounce to a creature if able. Each creature hit by the lightning must make a Dexterity save vs your spellcasting, on hit they take 1 wound in damage, plus a wound die for every crit rolled in your spellcasting roll.

The number of bounces increases by 1 and you add a proficient die to your spellcasting roll for every level above 3rd.

___
#### Counter Spell
*3rd Level*
- **Casting Time:** 2 AP
- **Range:** 5
- **Duration:** instant

Attempt to counter the flow of magic. As a reaction make a spellcasting roll vs the targets Intelligence, adding a terrible/superior die for every level this spell is below/above the target spell. On success the spell is countered.

___
#### Far Sight
*3rd Level*
- **Casting Time:** 10 AP
- **Range:** 1 mile
- **Duration:** concentration, 10 minutes

See far into the distance, bending your sight around obstacles. Choose a location in range, making a spellcasting roll against 2 Terrible die, or 3 if the location is unfamiliar to you. On success you can see the target location as long as it is not complete incased, for example you would be able to see the happenings in a town, but not inside buildings. You can see the location as if you were present there, but cannot make out sounds. At any time you may change the target of your sight, requiring a minute to reorient yourself.

Add a proficient die for every level above 3rd.

___
#### Fireball
*3rd Level*
- **Casting Time:** 8 AP
- **Range:** 10
- **Duration:** instant
- **Damage Type:** Fire

shoot a ball of fire centered at a target location you can see. The fireball explodes on impact, hitting all creatures in a 5x5 area. Creatures must make a Dexterity save vs your spellcasting, taking 1 wound on success. On failure they take 2 wounds, plus a wound die on crit.

Add a wound die for every level above 3rd.

___
#### Flight
*3rd Level*
- **Casting Time:** 7 AP
- **Range:** 5
- **Duration:** concentration, 1 hour

Gain magical flight, allowing you to float through the air. Target up to 5 willing creatures, adding a Terrible die to the spellcasting roll for each creature targeted. On success all targeted creatures gain a flying speed equal to their movement speeds.

Add a proficient die for every level above 3rd.

___
#### Phantasmal Blades
*3rd Level*
- **Casting Time:** 7 AP
- **Range:** 10
- **Duration:** instant
- **Damage Type:** Force

Launch a series of arcane swords at a target. Roll a spellcasting roll vs targets defense. The target removes 1 die from his defense roll for every crit rolled in spellcasting. On success deal 3 wounds.

Add a wound and proficiency die for every level past 3rd.

___
#### Telepathic Bond
*3rd Level*
- **Casting Time:** 1 minute
- **Range:** 5
- **Duration:** 1 hour

You form a telepathic connection with up to 5 willing creatures. Make a spellcasting roll, adding a bad die for every creature targeted. On success all creatures may communicate telepathically with each other over any distance, as long as they remain on the same plane. Creatures communicating this way understand each other even if they do not speak the same language.

Add a proficient die for each level above the 3rd.





___
#### Conjure Elemental
*4th Level*
- **Casting Time:** 7 AP
- **Range:** 5
- **Duration:** instant
- **Damage Type:** Poison

You conjure an elemental construct at a target location. You can create an air, water, earth, or fire elemental. Make a spellcasting roll against 2 Terrible dice, on success you conjure an elemental with wounds equal to your spellcasting roll. The elemental is a medium creature, becoming a large creature if it has 5 wounds or more. The elemental uses your spellcasting roll for attacks and has Resistance 2 against its own element.

The elemental gains 1 max AP for every level cast above 4th.
___
> ## Elemental
> ___
> - **Armor** 0/3
> - **Wounds** \*/*
> - **Speed** 3/3
> - **AP** 10
>___
>|STR|DEX|STA|INT|WIL|CHA|
>|:---:|:---:|:---:|:---:|:---:|:---:|
>|1/3|1/2|0/3|0/0|0/1|0/0|
>___
> - **Resistance:** 2 against their element
> - **Elemental Affinity:** Each elemental gains a different bonus. *Fire:* melee attacks deal an extra wound die on crit. *Earth:* gain 1 defense die. *Air:* gain a flying speed equal to their movement speed. *Water:* gains 1 to their move and sprint speeds.
> ### Actions
> - ***Attack.*** *All* 5 AP, melee, Make a spellcasting roll against target's defense, dealing 1 wound + 1 wound die in damage based on it's element.
> - ***Firebolt.*** *Fire Only* 5 AP, range 10, Make a spellcasting roll against a target's defense, dealing 1 wound in fire damage, plus 1 wound die on crit.
> - ***Harden.*** *Earth Only* 3 AP, Improve all defense dice to superior defense dice.
> - ***Gust.*** *Air Only* 7 AP, Creates a torrent of wind in a direction away from the elemental. The gust is 3 tiles wide and 7 tiles long and lasts until the start of the elementals next turn. All creatures moving into the wind use an extra tile of movement for each tile moved. All ranged attacks moving into the wind add 1 terrible dice to their attack.
> - ***Freeze*** *Water Only* 5 AP, melee, Attempt to freeze a creature in place, make a spellcasting roll against the targets Dexterity, dealing 1 wound in cold damage and restraining them until the start of your next turn on crit.

___
#### Fire Shell
*4th Level*
- **Casting Time:** 6 AP
- **Range:** Self
- **Duration:** concentration, 10 minutes
- **Damage Type:** Fire

A shell of fire surrounds your body. For the duration you add 1 defense die to your defense rolls against ranged attacks, incinerating the projectile on successful defense rolls. When a creature adjacent to you makes a melee attack against you, they must make a dexterity save vs your spellcasting. On fail, they take 1 wound die in fire damage, or 2 wound die on crit. The damage from Fire Shell happens before the attack lands, if the creature is killed their attack deals no damage.

Add a proficient die for every level above the 4th.

___
#### Ice Lance
*4th Level*
- **Casting Time:** 8 AP
- **Range:** Touch
- **Duration:** 10 minutes
- **Damage Type:** Cold

You create 3 spears of solid ice that last for 10 minutes. For the duration you may replace your normal weapon attack with an Ice Lance, using your Arcane spellcasting for the attack roll. The Lance is a Two-handed weapon with Reach, and deals 1 + 1 wound die in cold damage. Instead you may throw the lance at a target creature within 10 tiles. Make a spellcasting roll vs the creatures Defense, dealing 1 wound + 2 wound dice on hit and giving a level of Slow for every crit rolled. All adjacent creatures take 1 wound, and Slow 1 if you crit. The spell ends after 10 minutes or all spears have been thrown.

You can make one attack, melee or thrown, when casting this spell.

You create an additional lance for every level above 4th.

___
#### Lightning Bolt
*4th Level*
- **Casting Time:** 8 AP
- **Range:** Self
- **Duration:** instant
- **Damage Type:** Lightning

Fire a bolt of lightning, hitting all creatures in a 15 tile line. The lightning ricochets off walls and solid objects. All creatures must make a Dexterity save vs your spellcasting. On fail, they take 3 wound dice, plus a wound die for every crit.

Add a proficient die for every level above the 4th.

___
#### Nondetection
*4th Level*
- **Casting Time:** 10 AP
- **Range:** Touch
- **Duration:** 24 hours

For the duration of the spell a creature is undetectable by most forms of magic. Any spell of 4th level or below that grants sight does not see this creature, and locate spells of a similar level fail to find them. When using spells of 5th level or higher, such as _Scrying_, roll 4 superior die against the spellcasting roll, staying undetectable on success.

You may target an additional creature for every level above the 4th.

___
#### Orb of Acid
*4th Level*
- **Casting Time:** 7 AP
- **Range:** 10
- **Duration:** instant
- **Damage Type:** Poison

You conjure an orb of vitriolic acid, launching it at a target in range. On impact the orb explodes in a splash of acid, hitting all creatures in a 2 tile radius star pattern. Creatures must make a Dexterity save vs your spellcasting modifier, on fail they take 3 wound die in damage and their armor breaks on crit, lowering its modifier by 1.

Regardless of outcome acid covers the floor for the next minute. Any creature that starts their turn, or takes a move or sprint action on the acid take 1 wound die in damage.

The radius of the blast increases by 1 for every level above 4th.

___
#### Passwall
*4th Level*
- **Casting Time:** 1 minute
- **Range:** Touch
- **Duration:** 1 hour

You attempt to mold a passage into a surface made of wood, stone, earth or other inorganic material creating a doorway up to 2x2 tiles in size. The passage can be at most 4 tiles deep, if there is no exit on the other side the spell automatically fails. Make a spellcasting roll, adding a terrible die for every 2 tiles of distance the passage creates. On success the passage is created.

Add a proficiency die and increase the maximum depth by 2 tiles for every level cast above 4th. At 7th level and above you may cast this on metal surfaces as well.

___
#### Starfall
*4th Level*
- **Casting Time:** 9 AP
- **Range:** 25
- **Duration:** 1 minute
- **Damage Type:** Force

Summon magical star shards to fall over a target area. You cover a 9x9 tile area centered on a point in range. For the duration, any creature that starts their turn in the area rolls a wound die. On wound, a star falls into them and they must make a Dexterity save against your spellcasting, taking a wound on fail and adding a wound die on crit.

Increase the area by 2 and duration by 1 turn for every level cast above 4th.







___
#### Illusory Space
*5th Level*
- **Casting Time:** 10 AP
- **Range:** 20
- **Duration:** concentration, 1 Hour

You create an illusory landscape covering a 10x10x10 tile area. The illusion can change the look, smell, sounds and temperature of the area. All effects happen in the creatures mind and have no effect on the creature themselves. The illusion covers the landscape, you may extend the illusion up to 6 inches from a surface with no ill effects, creatures will believe they are interacting with the illusion.



You may cast the illusion over a cliff or gap, for example creating a bridge over a a ravine. A creature falling from your illusion makes a Willpower save vs your spellcasting, on fail they rationalize a reason for the outcome. Similarly you may create an illusion of something inside the space (eg: creating an illusion of a tower in a flat meadow), with the creature making a Willpower save when attempting to interact with it.

A creature attempting to perceive the illusion must make a perception check against your spellcasting, on success they see the illusion for what it is.

For every level above 5th you may extend the illusory space by another 10x10x10 area.

___
#### Open Warren
*5th Level*
- **Casting Time:** 9 AP
- **Range:** 5
- **Duration:** 1 minute, concentration

Rip open a hole in this plane, leading to a Warren. You can hold the warren open for one minute, after which the gate closes. 

While inside the warren, every hour of travel is equivalent to 8 on the material plane. Every hour you must make a spellcasting roll against 1 terrible die. On failure you are ejected from the Warren, randomly placed within 20 miles of your position. For every roll made, add a terrible die. You gain no benefits from short or long rests while inside a warren. You may end the spell at any time, opening a gate back to the material plane.

You do not start making spellcasting rolls to stay inside the warren for an additional hour for every level cast above the 5th.

___
#### Wall of Fire
*5th Level*
- **Casting Time:** 8 AP
- **Range:** 10
- **Duration:** instant
- **Damage Type:** Fire

A great wall of fire, 7 tiles wide and 3 tiles high, errupts from the ground. Any creature that starts their turn in or enters the wall for the first time must make a defense roll vs your spellcasting. On hit they take 3 wound die in damage, and are ignited for 1 minute on a crit. Any ranged weapon or spell attack made through the wall adds 2 bad die to the attack, being incinerated by the wall if the attack misses.

Add a wound die for every level above the 5th.

___
#### Ward Area
*5th Level*
- **Casting Time:** 10 minutes
- **Range:** 5
- **Duration:** 24 hours

You crystalize the weave of magic around an area no larger than 100 tiles, securing it from outsiders. You may choose any or all of the following effects:

- Sound cannot pass through the warded area, preventing sounds from entering or leaving.
- The barrier becomes opaque preventing vision, looking like a dense cloud from the outside.
- Magical sensors, such as those created by _Magic Sight_, cannot pass through or be created inside the barrier.
- Divination magic targeting a creature inside the barrier automatically fail.
- Teleportation by any means is prevented inside the barrier.
- Planar travel is prevented inside the barrier.

Make a spellcasting roll adding a bad die for every effect chosen. On success the barrier is created over the target area.

The number of tiles effected increases by 100 for every level cast above 5th.





___
#### Anti-Magic Field
*6th Level*
- **Casting Time:** 9 AP
- **Range:** 10
- **Duration:** concentration, 10 minutes

Attempt to stablize an area against magic. Choose a point within range making a spellcasting roll against 2 terrible die, on success a 5x5 anti-magic field is created centered on that point. For the duration, any spell passing through it or targeted inside it must have more successes than your spellcasting roll or else the spell has no effect. 

If a spell entering the field does not require a roll it must make one following the rules above.

The area increases by 2 for each level above 6th.

___
#### Conjuration
*6th Level*
- **Casting Time:** 10 minutes
- **Range:** Touch
- **Duration:** 1 day

You conjure or reshape material into a form of your choosing. The material can be made of organic or inorganic material, such as leather, food, stone, or iron as long as you have seen the material before. Conjuring precious metals and materials, such as gemstones, gold, or diamonds will be brittle, crumbling after 10 minutes. The object cannot be magical in nature, such as a magic sword, potion, or scroll, and must be simple, no more complex than a crossbow. For example, you may be able to conjure a door with hinges, a cart with wheels, or a chest but would not be able conjure a clock.

On casting the spell make a spellcasting roll vs 3 bad dice, on success you conjure an object or objects up to 4 tiles in size, or 1/4th that size when conjuring items made of stone or metal.

The amount you can conjure doubles with each level above 6th; up to 8 tiles at 7th level, 16 tiles at 8th level, and 32 tiles at 9th level.

___
#### Earthquake
*6th Level*
- **Casting Time:** 10 AP
- **Range:** 30
- **Duration:** concentration, 10 minutes
- **Damage Type:** Bludgeoning

You cause the ground to shake and tear, collapsing buildings and toppling trees in a 15x15 area centered on a point in range. Now, and at the start of each of your turns each creature in the area must make a Dexterity save vs your spellcasting, on fail they take 1 wound die in damage and are knocked prone. The strength of the earthquake causes all tiles in the area to become difficult terrain. Structures made of wood, trees, and other objects fall apart over the duration. Structures made of stone collapse after the full 10 minutes.

The range and area of the spell increases by 5 and wound dice increases by 1 for each level above 6th.

___
#### Evocation
*6th Level*
- **Casting Time:** 7 AP
- **Range:** Self
- **Duration:** concentration, 10 minutes

You tap in to the latent mana in your surroundings, empowering your spells. Make a spellcasting roll against 4 Terrible dice, on success you have expertise for all spellcasting rolls for the duration. Holding this connection is both mentally and physically exhausting. Should the spell end due to losing concentration you take 1 level of exhaustion, or 2 levels if you critically fail the concentration check.

Add a proficiency die for every level above 6th.

___
#### Forcewave
*6th Level*
- **Casting Time:** 8 AP
- **Range:** Touch
- **Duration:** instant
- **Damage Type:** Force

Harness your magic and unleash a destructive wave of force. A blast of force 3 tiles wide and 12 tiles long erupts from your hands. All creatures in the blast must make a Strength save vs your spellcasting. On fail they take 5 wound dice in damage and are thrown back half the distance of the wave, on success they take 2 wound dice and are pushed back 1 tile. Objects and structures in the waves path are destroyed, leaving difficult terrain. 

The length of the wave increases by 2 and wound dice increases by 1 for each level above 6th.





___
#### Call Storm
*7th Level*
- **Casting Time:** 10 AP
- **Range:** 20
- **Duration:** concentration, 10 minutes
- **Damage Type:** Lightning, Thunder

You summon storm clouds overhead in a 20 tile radius. For the duration the area is covered in light rainfall and strong winds. On casting this spell, or by spending 4 AP on following turns, you may activate one of the following effects:

- **Gale winds:** The winds blow in a direction of your choosing, covering the area of the storm. All creautres in range must make a Strength save or be pushed back 2 tiles, and are knocked prone on crit. Until the start of your next turn moving into the wind counts as difficult terrain and ranged attacks made into the wind add a terrible die to the roll.

- **Downpour:** Torrential rainfall covers the area, extinguishing fires and greatly reducing visibility. A creature attempting to see through the rain and mists must make a perception check against your spellcasting. On fail they cannot see further than 3 tiles.

- **Thunderstrike:** Call town a thundering bolt of lightning at a target creature. The creature makes a Dexterity save vs your spellcasting, on fail taking 3 wound dice in lightning damage. In addition, all creatures within 2 tiles of the target must make a Stamina save or take 2 wound dice in thunder damage, being knocked prone on crit.

Add a proficiency die for every level above 7th.

___
#### Power Word: Fire
*7th Level*
- **Casting Time:** 9 AP
- **Range:** Self
- **Duration:** 5 minutes
- **Damage Type:** Fire

You speak a word of power as fire races across your body. Until the spell ends, you gain the following benefits:

- You gain Fire Resistance 3.
- Any creature that moves adjacent to you,begins their turn there or makes a melee attack against you are burned by the fire and take 1 wound die in damage.
- You may spend 5 AP to unleash a cone of fire infront of you. The cone extends 3 tiles out and 3 tiles wide, all creatures hit by the fire must make a Dexterity save vs your spellcasting. On fail they take 3 wound dice in damage.

Only a single Power Word can be active at once, casting another Power Word spell ends another Power Word spell you control.

The damage from both sources increases by 1 wound die for every level above 7th.

___
#### Power Word: Ice
*7th Level*
- **Casting Time:** 9 AP
- **Range:** Self
- **Duration:** 5 minutes
- **Damage Type:** Cold

You speak a word of power as ice rimes across your body. Until the spell ends, you gain the following benefits:

- You gain Cold Resistance 3.
- Any creature that moves within 2 tiles of you, or starts their turn there must make a Stamina save vs your spellcasting. On fail they gain Slow 1, or Slow 2 if you crit.
- You may spend 5 AP to freeze a target within 5 tiles solid. A targeted creature must make a Stamina save vs your spellcasting. On fail they take 3 wound dice in damage, and on crit are frozen in ice until the end of their next turn. While frozen they gain Resistance 2 to physical damage and are incapacitated.

Only a single Power Word can be active at once, casting another Power Word spell ends another Power Word spell you control.

The range of both effects increase by 1 for every level above 7th.

___
#### Power Word: Lightning
*7th Level*
- **Casting Time:** 9 AP
- **Range:** Self
- **Duration:** 5 minutes
- **Damage Type:** Lightning

You speak a word of power as ice rimes across your body. Until the spell ends, you gain the following benefits:

- You gain Lightning Resistance 3.
- As a reaction or on your turn you may spend 2 AP to teleport to an unoccupied tile within 3 tiles of your position.
- You may spend 5 AP to fire a lightning bolt against a target creature within 10 tiles of you. Make a spellcasting roll vs the targets Dexterity, on success they take 1 wound, plus 1 wound die for every crit rolled. If the target is wearing or holding metal reroll any blank wound die.

Only a single Power Word can be active at once, casting another Power Word spell ends another Power Word spell you control.

Add a proficient die to your roll for every level above 7th.

___
#### Project Image
*7th Level*
- **Casting Time:** 5 AP
- **Range:** 5
- **Duration:** concentration, 1 hour

You create a perfect image of a willing creature. Make a spellcasting roll against 2 terrible die, on success an illusory copy of the creature appears next to the target creature. The illusion can interact with its surroundings and has temporary wounds equal to the number of successes in your spellcasting roll. A creature can make a perception check against your spellcasting to perceive the image as an illusion.

The image looks identical to the creature it's based on, copying all clothes, armor, or weapons they are carrying. Any magical items are copied in appearance only, for example a magical sword will look magical but not have any of the properties of the original sword. The image does not need food, water, or air and any non-damaging spell targeting it fails. The image rolls defense equal to the gear the image is wearing, minus any magic properties. Only the appearance and items of a creature are copied, the image does not gain any of its features or abilities.

For the duration of the spell you may choose to perceive through your senses or the image's senses. You may control the image as you would your own body; moving, interacting, and speaking as the image. When casting spells you may choose the image to be the source of the spell, and you may make attacks using the image, using your spellcasting roll for the attack. The image cannot be healed or repaired, once drops to 0 temporary wounds the spell ends. The image is destroyed when entering a zone similar to that of _Anti-Magic Field_.

The duration increases to 8 hours at 8th level, and 1 day at 9th level.

___
#### Invulnerability
*8th Level*
- **Casting Time:** 9 AP
- **Range:** self
- **Duration:** concentration, 1 minute

You cover yourself in a layer of force, warding yourself from harm. Make a spellcasting roll against 2 terible dice. On success you gain Resistance 1 to all damage, increasing it by 1 for every crit rolled.

The duration increases to 2 minutes at 9th level.

___
#### Slow Time
*8th Level*
- **Casting Time:** 10 AP
- **Range:** 5
- **Duration:** concentration, 1 minute

Slow time, causing others to freeze in place. Choose up to 5 creatures, yourself included, and make a spellcasting roll adding 2 terrible dice for each creature added. On success these creatures are able to freely move, while all other creatures experience time at a rate 100 times slower.

While time is slowed, all objects and terrain not held are frozen, unable to move. Interacting with another creature, such as attacking or casting a spell on them ends the effects of _Slow Time_ for the attacker, resolving the action once the spell ends.

At the start each of the casters turn they must make an exhaustion check against 2 terrible dice, gaining 1 level of exhaustion and ending the spell on fail.

Add 2 superior dice to the spellcasting roll at 9th level.

___
#### Stablize Warren
*8th Level*
- **Casting Time:** 10 minutes
- **Range:** self
- **Duration:** 24 hours

You stablize a Warren existing in the space between worlds. Make a spellcasting roll, adding 5 Terrible dice. On success you create a Warren with a name of your choosing. Any creature that knows the name can travel to your warren with the _Open Warren_ spell.

The warren is accessible from the plane it was created on, but you may connect your warren to any plane you have been before. You may choose the atmosphere, terrain, and weather inside the warren. While the Warren is stablized you automatically succeed spellcasting rolls while travelling through this Warren with the _Open Warren_ spell. After the duration the warren begins to decay and you lose any benefits for travelling this warren.

Repeating this spell every day for a week will stablize the Warren for 1 year.

When cast at 9th level the duration increases to 1 year, and casting every day for a week stablizes the warren for 77 years.

___
#### Armageddon
*9th Level*
- **Casting Time:** 10 AP
- **Range:** 90 tiles
- **Duration:** 1 turn
- **Damage Type:** Bludgeoning/Fire

You attempt to bring forth the ruinous powers of armageddon. Make a spellcasting roll, conjuring up to 3 meteors and adding 3 terrible dice to your roll for each meteor conjured. On success, choose a tile in range for each meteor. At the start of your next turn the meteors impact the ground dealing 5 wound dice in bludgeoning damage and 5 wound dice in fire damage to all creatures within 10 tiles of the impact. A creature in range of multiple meteors instead adds 2 wound dice to both damage types for each additional meteor. Buildings take full damage regardless of roll.

On fail the magic grounds itself through you, dealing 1 wound die in force damage for every failure in your spellcasting roll to you and every adjacent creature.

### Curse

#### Spells By Level

##### Cantrip
- [Eldritch Blast](#Eldritch-Blast)
- [Levitate](#Levitate)
- [Life Sense](#Life-Sense)
- [Trickery](#Trickery)
- [Witchcraft](#Witchcraft)

##### First
- [Black Tendrils](#Black-Tendrils)
- [Charming Guise](#Charming-Guise)
- [Concealment](#Concealment)
- [Crow of Magthera](#Crow-of-Magthera)
- [Curse of Misfortune](#Curse-of-Misfortune)
- [Firefly Swarm](#Firefly-Swarm)
- [Ghoulish Claws](#Ghoulish-Claws)
- [Hex](#Hex)
- [Hex Bolt](#Hex-Bolt)
- [Occult Whispers](#Occult-Whispers)
- [Quicken](#Quicken)
- [Sleep](#Sleep)
- [Weal](#Weal)

##### Second
- [Betrayal](#Betrayal)
- [Bewitched Arrow](#Bewitched-Arrow)
- [Binding](#Binding)
- [Cloud of Teeth](#Cloud-of-Teeth)
- [Command](#Command)
- [Corpse Explosion](#Corpse-Explosion)
- [Curse of Fragility](#Curse-of-Fragility)
- [Curse of Suffering](#Curse-of-Suffering)
- [Dark Sight](#Dark-Sight)
- [Dull Intellect](#Dull-Intellect)
- [Howling Whirlwind](#Howling-Whirlwind)
- [Mass Web](#Mass-Web)
- [Silent Passage](#Silent-Passage)

##### Third
- [Apathy](#Apathy)
- [Curse of Weakness](#Curse-of-Weakness)
- [Enlarge/Reduce](#Enlarge/Reduce)
- [False Aura](#False-Aura)
- [Fearful Presence](#Fearful-Presence)
- [Frog Morph](#Frog-Morph)
- [Inflict Wound](#Inflict-Wound)
- [Shape Change](#Shape-Change)
- [Shifting Image](#Shifting-Image)
- [Shroud of Darkness](#Shroud-of-Darkness)

##### Fourth
- [Curse of Slowness](#Curse-of-Slowness)
- [Gloom](#Gloom)
- [Haste](#Haste)
- [Instigate](#Instigate)
- [Mass Hex](#Mass-Hex)
- [Paralytic Cloud](#Paralytic-Cloud)
- [Raise Dead](#Raise-Dead)
- [Void Lure](#Void-Lure)
- [Invisibility](#Invisibility)

##### Fifth
- [Curse of Pain](#Curse-of-Pain)
- [Heart Grip](#Heart-Grip)
- [Mind Break](#Mind-Break)
- [Suggestion](#Suggestion)
- [True Sight](#True-Sight)

##### Sixth
- [Curse of Fear](#Curse-of-Fear)
- [Isolation](#Isolation)

##### Seventh
- [Curse of Obedience](#Curse-of-Obedience)
- [Gravity Well](#Gravity-Well)

##### Eigth
- [Control](#Control)
- [Curse of Death](#Curse-of-Death)

##### Ninth
- [Power Word: Kill](#Power-Word-Kill)
- [Seal](#Seal)

___
#### Eldritch Blast
*Cantrip, Requires Chosen*
- **Casting Time:** 5 AP
- **Range:** 8
- **Duration:** instant
- **Damage Type:** Force

Blast a target with eldritch force. Make a spellcasting roll vs the targets Strength. On success they take 1 wound, adding a wound die on crit.

Add a proficiency die to your spellcasting roll for every level above cantrip.

___
#### Levitate
*Cantrip*
- **Casting Time:** 5 AP
- **Range:** 5
- **Duration:** concentration, 5 minutes

You magically levitate an object or creature weighing less than 25 lbs. If the target is an unwilling creature you must make a spellcasting roll against thir Strength save. On success, each turn you may move the target 3 tiles upwards or downwards. This movement does not provoke opportunity attacks, and does not move them with enough force to damage them, but can force them prone (against the ceiling or floor).

If the target is an unwilling creature they make the save again at the end of their turn, freeing themselves from your levitation on success. If the target is in the air when the spell ends it drops to the ground normally. If the target becomes heavier than the spell can carry (for example a creature standing ontop of a levitating slab) the spell ends.

The maximum weight doubles for every level above cantrip.

___
#### Life Sense
*Cantrip*
- **Casting Time:** 5 AP
- **Range:** 10
- **Duration:** 1 minute

targeting a 3x3 cube, all living creatures give off the glow of life. Creatures must make a Willpower save vs your spellcasting. On a fail a dim light outlines their body. Any attacks against this creature can change a normal die for a proficiency die.

Add a proficiency die to your spellcasting roll for every level above cantrip.

___
#### Trickery
*Cantrip*
- **Casting Time:** 2 AP
- **Range:** 3
- **Duration:** instant

When you or an ally is targeted by an attack or maneuver, you can use a reaction to distract the attacker, adding 1 bad die to their attack roll.

Add a bad die for every level above cantrip.

___
#### Witchcraft
*Cantrip*
- **Casting Time:** 3 AP
- **Range:** 5
- **Duration:** 1 minute

You conjure up a display of witchcraft, displaying one of the following effects:

- give yourself a minor alteration to your look, for example changing your eye color, causing harmless steam or smoke to rise off your body, creating a dim halo around your head, etc.
- Enhance your voice to reach 3 times as far
- Cause harmless tremors and vibrations in the earth around you
- Cause objects to harmlessly move
- Change the brightness or color of fire, cause it to flicker, etc.
- Create an instantaneous sound at a location.

A creature trying to see through these illusions must succeed on a perception check vs your spellcasting.

Add 1 proficient die for every level above cantrip.





___
#### Black Tendrils
*1st Level*
- **Casting Time:** 7 AP
- **Range:** 5
- **Duration:** 10 minutes, requires a free hand

Black tendrils erupt from your hand to bind a target. The target must make a Dexterity save vs your spellcasting. On fail, the target is grappled, or restrained on a crit. The Tendrils require a free hand to grasp, or else the target is freed. On each of your move and sprint actions you may pull or slide the grappled target 1 tile. The grappled creature can attempt to break free, but makes their Strength save vs your spellcasting roll instead. Any ability or effect that would cause them to move more than 5 tiles away from you uses your spellcasting roll for the save instead of the normal roll. If the target moves more than 5 tiles away from you the tendrils break and the spell ends.

Add a proficiency die for every level above the 1st.

___
#### Charming Guise
*1st Level*
- **Casting Time:** 7 AP
- **Range:** 10
- **Duration:** 1 hour

You take on a charming persona, attempting to charm up to 5 creatures in range. Make a spellcasting roll against the targets Willpower, adding 1 bad die for every creature targeted. If the creature is hostile to you it adds 2 superior die to the roll. On success, the targets are charmed by you for the duration. Charmed creatures treat you as a friendly aquaintance. The charm ends if they take any damage, or if you act in a harmful way towards them. After the spell ends the target knows it was charmed.

Add a proficiency die for every level above the 1st.

___
#### Concealment
*1st Level*
- **Casting Time:** 10 AP
- **Range:** 5
- **Duration:** concentration, 10 mintues

A dull sheen covers your body, hiding your presence. Target up to 5 creatures and make a spellcasting roll, adding 1 Terrible die for every creature targeted. On success you are concealed for the duration. Strangers passing you on the street have trouble remembering you, not being able to recall details such as race, gender, or appearance. As long as you are undetected by a creature, you gain 1 superior die for all stealth checks against that creature, adding a superior die for every crit rolled. Concealment ends after taking a hostile action against another creature.

Add a proficiency die for every level above the 1st.

___
#### Crow of Magthera
*1st Level*
- **Casting Time:** 6 AP
- **Range:** 10
- **Duration:** instant
- **Damage Type:** Death

You summon a crow with obsidian feathers capable of cutting through flesh and armor. The target makes a Dexterity sav vs your spellcasting, on fail they take 1 wound in damage. On crit their armor is reduced by 1 die, lasting until repair. Armor that no longer provides a defense bonus is destroyed.

Add a proficiency die for every level above the 1st.

___
#### Curse of Misfortune
*1st Level*
- **Casting Time:** 6 AP
- **Range:** 5
- **Duration:** 1 day

Curse a creature with misfortune. They must make a willpower save vs your spellcasting. On fail, the creature adds a bad die to all saving throws for the next day. If you crit they add a terrible die instead. The curse can be removed through lesser restoration.

You may target an additional person for every level above the 1st.

___
#### Firefly Swarm
*1st Level*
- **Casting Time:** 7 AP
- **Range:** 7
- **Duration:** 1 minute
- **Damage Type:** Fire

You summon a swarm of burning flies at a target tile in range. The flies attach themselves to nearby creatures, igniting themselves and burning the target. When a creature enters the swarm or begins their turn there, they make a Stamina save vs your spellcasting, taking 1 wound of fire damage on fail. Any invisible creatures hit by this lose their invisibility if it came from a spell, or becomes visible for 1 minute otherwise. There are enough fireflies to burn 3 times, after which the swarm disappears.

The area increases by 1 and the number of burns increase by 1 for every level above 1st.

___
#### Ghoulish Claws
*1st Level*
- **Casting Time:** 5 AP
- **Range:** 1
- **Duration:** 1 minute
- **Damage Type:** Poison

Your hands elongate becoming deadly claws. When casting this ability, and for the duration of the spell you may make an attack against a target in range. Make a spellcasting roll against the targets Defense, on hit they take 3 wound dice in poison damage, paralyzing the target on crit until the end of their next turn.

The duration increases by 1 minute for every level above 1st.

___
#### Hex
*1st Level*
- **Casting Time:** 5 AP
- **Range:** 5
- **Duration:** instant

Hex a target. Make a spellcasting roll vs the targets Willpower. On success they gain Hex for 10 minutes, adding a level for every crit rolled.

Add a proficiency die to your spellcasting roll for every level above 1st.

___
#### Hex Bolt
*1st Level*
- **Casting Time:** 7 AP
- **Range:** 5
- **Duration:** 1 minute
- **Damage Type:** Pyschic

Fire a bolt of pyschic force at a target. If the target is not Hexxed add 1 bad die to your roll. Make a spellcasting roll against the targets Willpower. On success deal 1 wound, rolling a wound die if the target is also Hexxed. On crit, the target gains Hex, or increases their level of Hex for 1 minute. For the next minute, once per turn you may spend 2 AP to make an attack against the same target or move it to another target within 30 ft.

Add a proficiency die for every level above the 1st.

___
#### Occult Whispers
*1st Level*
- **Casting Time:** 5 AP
- **Range:** 5
- **Duration:** instant
- **Damage Type:** Pyschic

You whisper eldritch words into a creatures mind, causing it to panic. Make a spellcasting roll against the targets Willpower. On success the creature takes 1 wound of pyschic damage, and must spend its AP fleeing from you on crit. The creature, if able, moves 1 tile per remaining AP up to their movespeed, avoiding dangerous terrain if possible.

Regardless of if the spell hits the creature is distracted by the whispers and cannot make opportunity attacks against you this turn.

Add a proficiency die for every level above 1st.

___
#### Quicken
*1st Level*
- **Casting Time:** 7 AP
- **Range:** 3
- **Duration:** concentration, 10 minutes

Target up to 5 creatures. Make a spellcasting roll, adding a bad die for every creature you target. On success, the move action costs 2 less AP. In addition, for every crit the targets movespeed is increased by 1

Add a proficiency die for every level above the 1st.

___
#### Sleep
*1st Level*
- **Casting Time:** 7 AP
- **Range:** 10
- **Duration:** 1 hour

You attempt to put a group of living creatures to sleep. Target a 4x4 tile area and make a spellcasting roll with 2 additional superior dice. Starting with the creature with the lowest current wounds, subtract their remaining wounds from your successes. If you have 0 or more successes remaining they fall asleep for the duration. Continue this until there are no more creatures or you have no more successes remaining. Creatures that are hostile towards you, or have magic resistance double the number of successes needed to sleep that creature.

The creatures wake up after the duration, or if they take damage, or if another creature uses 5 AP to wake them.

Add 2 superior die for each level above 1st.

___
#### Weal
*1st Level*
- **Casting Time:** 1 minute
- **Range:** 5
- **Duration:** 4 hours

Take a moment to study your surroundings, watching for signs of the future. This can come in many forms: the smell of a forest, the pattern of dust, the movement of clouds in the sky. Make a spellcasting roll, targeting up to 5 creatures and adding Terrible die to the roll for each. On success each creature chooses an action and rolls a superior die. For the duration the next time the creature takes this action they add the value of the die to their roll.

Add a proficienct die to the spellcasting roll for every level above 1st.






___
#### Betrayal
*2nd Level*
- **Casting Time:** 8 AP
- **Range:** 5
- **Duration:** concentration, 10 minutes

Fill a targets mind with rage, forcing it to lash out against its surroundings. Make a spellcasting roll vs the targets Willpower. On success the target loses all remaining AP and makes a single attack against a random target within range. For every crit rolled the target improves a die for all attack rolls for the duration. On each of this creatures turns they must either attack a random target in range or move towards the closest creature. Each time this creature takes damage they make a willpower save against 2 bad die, adding a superior die for every wound taken.

Add a proficiency die for every level above the 2nd.

___
#### Bewitched Arrow
*2nd Level*
- **Casting Time:** 1 minute
- **Range:** Touch
- **Duration:** 1 day
- **Damage Type:** Death

You conjure a number of deadly, black thorn arrows. Make a spellcasting roll to conjure up to 5 arrows, adding a bad die for every arrow conjoured. These arrows count as +1 ammunition and can be thrown instead of fired from a bow. When thrown they use your spellcasting modifier for the attack and have a range of 10.


On hit these arrows explode in a star pattern with 1 radius dealing 2 wound dice in death damage and inflicting blind until the end of the targets next turn. All other creatures in the blast must make a Stamina check against the arrows attack roll, taking 1 wound die in death damage and gaining blind until the end of their next turn.

You conjure an additional arrow for every level above 2nd.

___
#### Binding
*2nd Level*
- **Casting Time:** 7 AP
- **Range:** 10
- **Duration:** concentration, 10 minutes

Shimmering chains bind a creature in range. Make a spellcasting roll against the creatures Dexterity, adding 2 bad die to the roll if the creature is Large or bigger. On success the creature is restrained for the duration. At the start of each of their turns they can make a Strength save vs your spellcasting, breaking the chains on success.

You can target an additional creature for every level above 2nd.

___
#### Cloud of Teeth
*2nd Level*
- **Casting Time:** 6 AP
- **Range:** Self
- **Duration:** concentration, 10 minutes
- **Damage Type:** Piercing

You create a swirling cloud of teeth around yourself. These teeth fill gaps in your armor, if you roll 4 or less defense die add a defense die, otherwise improve 1 defense die. The cloud extends to all adjacent tiles, any creature entering it for the first time or starting their turn there must make a defense save vs your spellcasting. On hit they take a wound and gain Slow 1.

The tiles effected increases by 1 in all directions for each level cast above the 2nd.

___
#### Command
*2nd Level*
- **Casting Time:** 7 AP
- **Range:** 10
- **Duration:** 8 Hours

You attempt to force a creature to obey a given command or simple task. This spell automatically fails if the creature cannot be charmed, does not speak your language, or would harm the creature. The command can be no more than one sentence, and must be reasonable. For example, commanding a commoner to kill a dragon or hurt their friends will fail, but asking a peasant to buy you a drink will work.

Make a spellcasting roll against the targets Willpower, on success they must complete the command to the best of their abilities. The spell ends when they have completed their task or they take damage. Creatures don't immediately know they have been commanded, but do remember their actions.

Add a proficiency die for every level cast above 2nd.

___
#### Corpse Explosion
*2nd Level*
- **Casting Time:** 7 AP
- **Range:** 10
- **Duration:** instant
- **Damage Type:** Death

You cause a Large or smaller corpse to explode, shooting sharp shards of bone to adjacent creatures. Medium and smaller creatures explode in a 1 radius star, while Large creatures explode in a 2 radius star. All creatures caught in the blast must make a Stamina save vs your spellcasting. On hit they take 1 wound and are poisoned for 1 minute, adding an wound die to the damage on crit.

You may target an additional corpse for each level cast above the 2nd.

___
#### Curse of Fragility
*2nd Level*
- **Casting Time:** 6 AP
- **Range:** 5
- **Duration:** 1 day

Curse a creature with fragility. They must make a willpower save vs your spellcasting. On a fail the creature adds a bad die to all defense rolls for the next day. If you crit they add a terrible die instead. The curse can be removed by remove curse.

You may target an additional person for every level above the 2nd.

___
#### Curse of Suffering
*2nd Level*
- **Casting Time:** 6 AP
- **Range:** 5
- **Duration:** 1 day

Curse a creature, extending their suffering. They must make a willpower save vs your spellcasting. On a fail any negative condition affecting the creature lasts an additional turn. If you crit, any time they gain Hex, Slow, or Poison they gain an additional level.

You may target an additional person for every level above the 2nd.

___
#### Dark Sight
*2nd Level*
- **Casting Time:** 1 minute
- **Range:** 5
- **Duration:** 1 hour

Magically enhance a creatures vision, giving it the ability to see in the dark. Target up to 5 creatures, adding a bad die to your spellcasting roll for every creature added. On success they gain dark vision.

Add a proficiency die for every level above the 2nd.

___
#### Dull Intellect
*2nd Level*
- **Casting Time:** 6 AP
- **Range:** 5
- **Duration:** concentration, 10 minutes

Attempt to cloud a targets mind. The creature makes a Willpower save vs your spellcasting. On a fail the creature adds a bad die to all spellcasting rolls. For each crit, use a terrible die instead.

The number of bad or terrible dice increases by 1 for every level above the 2nd.

___
#### Howling Whirlwind
*2nd Level*
- **Casting Time:** 7 AP
- **Range:** 10
- **Duration:** 1 minute

You create a spiraling mass of wind on a tile in range. Any creature that moves adjacent to the Whirlwind must make a Strength save vs your spellcasting, on fail they are pushed back 2 tiles stopping if a creature or object is in the way. If they stop this way they take 1 wound in damage. Any mundane projectile firing over or adjacent to the whirlwind must roll a wound die, missing on wound.

For the duration starting on the next turn, you may move the Whirlwind up to 2 tiles once per turn.

Add a proficiency die for every level cast above 2nd.

___
#### Mass Web
*2nd Level*
- **Casting Time:** 6 AP
- **Range:** 10
- **Duration:** 1 minute

You create a mass of webs in a 3x3 area. All creatures inside the web or on the first time they enter must make a Dexterity save vs your spellcasting, on fail they are grappled, or restrained on crit. A creature effected by your Webs can be freed by making a successful attack against 3 defense dice. Any creature in range is capable of making this attack.

The webs are extremely flammable, and ignite after taking 1 wound of fire damage. Any creature caught in the web takes 1 wound of fire damage and is freed. After the duration the webs remain but lose their stickiness, becoming difficult terrain until cleared.

Add a proficiency die for every level cast above 2nd.

___
#### Silent Passage
*2nd Level*
- **Casting Time:** 1 minute
- **Range:** 5
- **Duration:** concentration, 1 Hour

You emanate an aura of silence around yourself. Make a spellcasting roll against 2 Terrible die, on success each creature within range of you adds the total successes to any sound based stealth check. While the spell is active creatures in range do not leave tracks, and anything less than a shout cannot be heard outside of your aura.

Add a proficiency die for every level cast above 2nd.






___
#### Apathy
*3rd Level*
- **Casting Time:** 7 AP
- **Range:** 5
- **Duration:** concentration, 10 minutes

Use your willpower to supress a creatures natural abilties. The target must make a willpower save, on fail you choose either Strength or Dexterity, the creature loses 2 to their proficiency modifier for all skills, saving throws, and weapon attacks using that attribute. Each crit further decreases the proficiency by 1. A creature with negative proficiency improves normal dice to bad dice instead of proficient dice.

Add a proficiency die for every level above 3rd.

___
#### Curse of Weakness
*3rd Level*
- **Casting Time:** 6 AP
- **Range:** 5
- **Duration:** 1 day

Curse a creature with weakness. They must make a willpower save vs your spellcasting. On a fail, They are Weakened. On a crit the creature cannot inflict Lesser or Greater wounds.

You may target an additional person for every level above the 3rd.

___
#### Enlarge/Reduce
*3rd Level*
- **Casting Time:** 6 AP
- **Range:** 5
- **Duration:** concentration, 10 minutes

Change a creatures size, either doubling or reducing by half. When targeting an unwilling creature, they must make a Stamina save vs your spellcasting. On fail, you choose if they are Enlarged or Reduced for the duration. Does not work on creatures Larger Huge.

- Enlarge: Your body doubles in all proportions, increasing your size by 1 level. You add 1 superior die to all strength skills and saves, and 1 terrible die to all dexterity skills and saves. Attacks you make deal an additional wound in damage.
- Reduce: Your body halfs in all proportions, decreasing your size by 1 level. You add 1 terrible die to all strength skills and saves, and 1 superior die to all dexterity skills and saves. Attacks you make replace all wounds dealt with wound dice.

You may target an additional creature for every level cast above 3rd. All targets must either be Enlarged or Reduced.

___
#### False Aura
*3rd Level*
- **Casting Time:** 10 AP
- **Range:** Touch
- **Duration:** 24 hours

You change the aura of a creature or object, changing how it appears to magical effects, such as _Detect Magic_ or _Identify_. Target up to 5 creatures or objects, adding a bad die to the spellcasting roll for every target. On success, you may do any of the following:

You can cause a mundane object to appear magical, a magical object appear mundane, or change it's magical aura to belong to a different school. For example, you could cause an arcane effect to appear as divine when seen by _Detect Magic_. You can change how a creature appears to different spells, such as disguising an Undead creature as a Human for the effects of _Concencrate Ground_. You may change how their race, type, or size appears to spells.

If you cast this spell on a creature or object with the same effect every day for 30 days the aura becomes permanent, lasting until dispelled.

The spell lasts an additional 24 hours for every level cast above 3rd.

___
#### Fearful Presence
*3rd Level*
- **Casting Time:** 7 AP
- **Range:** 15
- **Duration:** 1 minute

You assume a horrifying visage, fearing up to 5 creatures in range that can see you. Make a spellcasting roll, adding 1 bad die for every creature targeted after the first against the targets Willpower. On success the creatures are Feared with you as the source. The fear wears off if they can break line of sight of you. Each time they take damage they can make a Willpower save vs your spellcasting, ending the effect on success.

Add a proficiency die for every level above 3rd.

___
#### Frog Morph
*3rd Level*
- **Casting Time:** 7 AP
- **Range:** 5
- **Duration:** 1 minute

Attempt to turn a creature into a harmless frog. Make a spellcasting roll against the targets Stamina, adding 1 terrible dice to your roll for every size larger than medium. On success the creature turns into a harmless frog for the duration. Items they are wearing are transformed with them, but anything they were holding drops to the ground.

The creature spends its turns hopping around, moving a single tile in a random direction. The Frog has 1 wound and 1 Defense die. If reduced to 0 wounds the spell ends and the creature reverts to their old form keeping the damage dealt.

You may target an additional creature for every level above 3rd. If you try to cast this on multiple creatures larger than medium, sum the terrible dice across all creatures.

___
#### Inflict Wound
*3rd Level*
- **Casting Time:** 6 AP
- **Range:** Touch
- **Duration:** instant
- **Damage Type:** Death

Scar the creature with death magic. Make a spellcasting roll against the targets defense. On hit, roll 1 wound + 2 wound dice, adding a wound die for every crit rolled. If this deals at least 3 wounds the target gains a random Lesser Wound, or a random Greater Wound if it deals 5 or more.

Add a wound die for every level above the 3rd.

___
#### Shapechange
*3rd Level*
- **Casting Time:** 7 AP
- **Range:** Self
- **Duration:** 1 hour

You transform your body, turning into a dangerous beast. The creature must have a CR of 5 or lower and must be one you have seen before. While in this shape your max wounds become the max wounds of the creature and you take the Strength, Dexterity, and Stamina attributes, keeping your Intelligence, Willpower, and Charisma. 

Make a spellcasting roll, your max wounds are increased by 1 for every crit rolled. If you are reduced to 0 wounds while in this form the spell ends, you take 2 wounds of damage and are incapacitated until the end of your next turn from the strain.

Add a proficiency die and increase the CR by 1 for every level above 3rd.

___
#### Shifting Image
*3rd Level*
- **Casting Time:** 7 AP
- **Range:** Self
- **Duration:** concentration, 10 minutes

Your form blurs as several illusory projections of yourself hide your true position. You create 3 illusions. Any time you would be attacked by a single target spell or attack the attacker must roll a perception check against your spellcasting. On fail, the attack misses, destroying one of the illusions. The spell ends once all illusions have been destroyed.

Add a proficiency die for every level above 3rd.

___
#### Shroud of Darkness
*3rd Level*
- **Casting Time:** 5 AP
- **Range:** 10
- **Duration:** concentration, 10 minutes

You shroud a 4x4 area in a consuming darkness, extinguishing mundane light. Make a spellcasting roll. Attacks, maneuvers, or spell made on targets inside the darkness, or coming from inside the darkness add 1 terrible die to their roll, plus 1 terrible die for every crit rolled in your spellcasting.

Add a proficiency die for every level above 3rd. In addition, the darkness size increases by 1 (5x5 at 4th lvl, 6x6 at 5th, etc).









___
#### Curse of Slowness
*4th Level*
- **Casting Time:** 6 AP
- **Range:** 5
- **Duration:** 1 day

Curse a creature with an unnatural slowness. They must make a willpower save vs your spellcasting. On a fail all actions they take costs 1 additional AP. On a crit they instead cost 2 additional AP.

You may target an additional person for every level above the 4th.

___
#### Gloom
*4th Level*
- **Casting Time:** 7 AP
- **Range:** 10
- **Duration:** concentration, 10 minutes

Inflict an area with supernatural gloom. Choose a point you can see within range, making a spellcasting roll. Every success increases the raidus of the gloom by 2. Every undead creature inside the gloom adds 1 superior die to all rolls. Mundane lights only give light in adjacent tiles and magical light covers half as far. For the duration, undead heal 1 wound at the start of their turns and all healing effects on living creatures are reduced by 1.

Add a proficiency die for every level above the 4th.

___
#### Haste
*4th Level*
- **Casting Time:** 9 AP
- **Range:** 5
- **Duration:** concentration, 10 minutes

Enhance the speed of up to 3 creatures. Make a spellcasting roll, adding a terrible die for every creature targeted. On success, all creatures gain 3 to their move and sprint speeds, 4 to their max AP, and gain 2 superior dice to their Dexterity saves. When the spell ends all creatures make an exhaustion roll vs 2 bad dice and 1 terrible die, gaining 1 level of exhaustion on fail.

Add a proficiency die for every level above the 4th.

___
#### Instigate
*4th Level*
- **Casting Time:** 8 AP
- **Range:** 10
- **Duration:** 10 minutes

You incite a crowd or group of creatures to violence. All creatures in a 7x7 tile area centered on a point in range must make a Willpower save vs your spellcasting modifier. On fail, non-hostile creatures begin to act violently, turning into an angry mob. The mob will provoke others, destroy or vandalize nearby buildings, carts, or other objects, and may attack others. Hostile creatures effected by this spell lose any organization they have and may ignore orders by others, instead becoming reckless. 

A creature effected by this spell makes another save every time they are hit, making a Willpower roll vs 1 bad die, plus a bad die for every crit rolled in your spellcasting roll.

Add a proficiency die for every level above the 4th.

___
#### Mass Hex
*4th Level*
- **Casting Time:** 9 AP
- **Range:** 10
- **Duration:** instant

You target a 4x4 area bestowing all creatures with a potent hex. All creatures must make a Willpower save vs your spellcasting roll. On fail, they gain 1 level of Hex, increasing by 1 for every crit rolled.

Increase the area by 1 for every level above 4th.

___
#### Paralytic Cloud
*4th Level*
- **Casting Time:** 7 AP
- **Range:** 10
- **Duration:** 1 minute

Create a 5x5 cloud of toxic spores. Any creature that starts their turn there or enters the cloud for the first time must make a Stamina save or be paralyzed until the end of their next turn. On crit the target is paralized for the next minute.

Add a proficiency die for every level above the 4th.

___
#### Raise Dead
*4th Level*
- **Casting Time:** 10 AP
- **Range:** 2
- **Duration:** 1 day

Attempt to raise a dead creature as a zombie, or take control of a zombie without an owner. You can target up to 4 medium sized corpses, adding a terrible die to the spellcasting roll for each corpse. You can target a Large sized corpse, adding 2 terrible die and taking up 2 of the 4 corpse maximum. On success, medium corpses are raised as Zombies and large corpses raised as Zombie Ogres. They act on your turn and are under your control for 1 day, at which point they turn to mindless zombies.

The maximum targets increases by 1, and you add a superior die to your roll for every level above the 4th.

___
#### Void Lure
*4th Level*
- **Casting Time:** 9 AP
- **Range:** 10
- **Duration:** instant

Attempt to break the barrier between this plane and the void. Make a spellcasting roll against 2 Terrible die, adding a terrible die for each successful cast of _Void Lure_ in this location the past day. On success a random Outsider heeds your call and is summoned to the target location. The creature must be of CR 8 or lower with the creature determined by the DM. After summoning roll a wound die, on success the creature is friendly towards you for the next minute, otherwise the creature follows it's own whims.

Add a proficiency die for every level above 4th.

___
#### Invisibility
*4th Level*
- **Casting Time:** 10 AP
- **Range:** touch
- **Duration:** concentration, 1 hour

Turn yourself or another creature or object invisible. Make a spellcasting roll against 2 terrible dice. On success the target becomes completely invisible while standing still. Moving causes a barely noticable shimmer to the target. Creatures can make a perception check against your spellcasting to see a moving creature, spotting them on success. Attacks against an invisible creature add 2 terrible dice to their attack rolls.

Add a proficiency die for every level above the 4th.






___
#### Curse of Pain
*5th Level*
- **Casting Time:** 6 AP
- **Range:** 5
- **Duration:** 1 day

Curse a creature with pain. Make a spellcasting roll vs the creatures Willpower. On success the creature takes an additional wound die every time they take damage, or a full wound on crit.

You may target an additional person for every level above the 5th.

___
#### Heart Grip
*5th Level*
- **Casting Time:** 9 AP
- **Range:** 7
- **Duration:** instant
- **Damage Type:** Death

Reach out to a creature you can see and stop their heart. The target creature makes a Stamina save against your spellcasting roll, adding a Superior die if they have at least half their wounds, otherwise adding a Terrible die. On fail they take 4 wound die in damage and all healing they recieve is half as effective until they take a long rest. On crit they are stunned until the end of their next turn. Casting this on a creature already under the effects of _Heart Grip_ has no effect.

Add a proficiency die for every level above the 5th.

___
#### Mind Break
*5th Level*
- **Casting Time:** 8 AP
- **Range:** 10
- **Duration:** instant
- **Damage Type:** Psychic

Can only be cast against a creature that can look into your eyes. You make a telepathic link to the target, using your will to shatter their mind. The target makes a Willpower save vs your spellcasting. On fail, roll a wound die for every remaining success from your spellcasting roll. If you deal at least 1 damage the target is dazed for the next minute.

Add a proficiency die for every level above 5th.

___
#### Suggestion
*5nd Level*
- **Casting Time:** 10 AP
- **Range:** 15
- **Duration:** 24 Hours

You attempt to influence a group of people, suggesting a course or activity. You may target as many creatures in range as you want, adding a Terrible die for every 5 creatures targeted. The creatures must be able to understand you and be able to hear you.

Make a spellcasting roll against the creatures Willpower. On success you may give the creatures a 1 or 2 sentence command for them to follow. The command may have a condition to it, such as help the next dwarf they see. If they are unable to meet the conditions before the spell ends the command is ignored. 

Creatures that are immune to charm are immune to this spell. The command must be something the creature can reasonably accomplish and cannot be obviously harmful to the creature. The spell ends if the creature has completed their task or they take a wound in damage.

Add a proficiency die for every level cast above 5th.

___
#### True Sight
*5th Level*
- **Casting Time:** 5 AP
- **Range:** Self
- **Duration:** 1 Hour

Enhance your vision, seeing through illusions and invisiblity, seeing things for how they really are. Make a spellcasting roll against 2 bad die, on success you gain True sight out to 15 tiles, even seeing into the etheral plane.

The duration increases by 1 hour for every level above 5th.






___
#### Curse of Fear
*6th Level*
- **Casting Time:** 6 AP
- **Range:** 5
- **Duration:** 1 day

Curse a creature with unnatural fear. Make a spellcasting roll vs the creatures Willpower. On success the creature gains Fear as long as there is a hostile creature within 10 tiles, or all creatures on crit. A creature gains no benefits from resting while under this curse.

You may target an additional person for every level above the 6th.

___
#### Isolation
*6th Level*
- **Casting Time:** 8 AP
- **Range:** 10
- **Duration:** concentration, 10 minutes

You sever the connections surrounding the target creature, leaving them utterly isolated. Make a spellcasting roll vs their Willpower, on success the creature loses any spells, abilities, or enchantments effecting them that did not come from their own magic. While isolated, magic that is not their own cannot reach them, they cannot be detected with magical means and they cannot be contacted through telepathy. Any powers given from a deity or other being cannot be used while isolated.

Add a proficiency die for every level above 6th.







___
#### Curse of Obedience
*7th Level*
- **Casting Time:** 7 AP
- **Range:** 5
- **Duration:** 1 day

Curse a creature to obey your every command. Make a spellcasting roll against the targets Willpower, on success the creature must follow your commands to the best of their ability. You cannot command the target to hurt itself or take an action that would obviously bring harm to the target (eg: telling them to jump off a cliff), however they must obey commands if harm is possible but not assured (eg: telling them to defend you).

You may target an additional person for every level above the 6th.

___
#### Gravity Well
*7th Level*
- **Casting Time:** 9 AP
- **Range:** 10
- **Duration:** concentration, 1 minute
- **Damage Type:** Bludgeoning

You create a crushing gravity well at a target point. Choose a 5x5 area at a position centered inside your range. All lose objects are flung towards the center, destroying mundane items. All creatures that enter the gravity well or start their turns there must make a Strength save vs your spellcasting. On fail they are flung into the center tile, taking 3 wound die in damage. On success their move and sprint speeds are reduced to 1, and cannot be improved. Creatures in the center take 1 wound at the start of their turn as they are crushed by the gravity well.

The radius of the gravity well increases by 1 and you add 1 wound die to each source of damage for every level cast above 7th.





___
#### Control
*8th Level*
- **Casting Time:** 10 AP
- **Range:** 10
- **Duration:** concentration, 10 minutes

You overpower a creatures mind, taking control of it. Make a spellcasting roll against the targets Willpower, on success you possess the creature, sensing through the creatures senses and taking actions for the creature. For the duration you become incapacitated, taking actions for the creature during the creatures turn. Taking damage as the creature causes you to make concentration checks as if you took the damage yourself. If the creature dies while you are still in control of it you take 3 wounds of pyschic damage from the strain of dying.

Add a superior die to your spellcasting roll for every level above 8th.

___
#### Curse of Death
*8th Level*
- **Casting Time:** 7 AP
- **Range:** 5
- **Duration:** 1 day

Curse a creature with sudden mortality. They must make a willpower save vs your spellcasting. On a fail, if their health drops below 7 wounds they instantly die. The death threshold increases by 1 wound for every crit rolled.

You may target an additional creature for every level above 8th.





___
#### Power Word: Kill
*9th Level*
- **Casting Time:** 11 AP
- **Range:** 10
- **Duration:** instant

Speak a word and command a creature to die. Make a spellcasting roll, adding 2 Terrible dice to the roll. If the target creature has less wounds than you have successes the creature instantly dies.

___
#### Seal
*9th Level*
- **Casting Time:** 10+ AP
- **Range:** touch
- **Duration:** 1 year

Seal a creature, binding their body and spirit to a location and preventing them from influencing their surroundings. Make a spellcasting roll against the targets Willpower, adding 4 terrible dice if the creature has half or more of its wounds. On success the creature is incased in a material based on your surroundings and is considered incapacitiated. 

While sealed, the creature cannot take damage, does not need to breathe or eat, and does not age. The creature cannot be communicated with through any means and any telepathic or magical link between this creature and others is severed. Should the material sealing the creature be damaged the DM decides what actions are allowed by the sealed creature. Destroying the material ends the effects of this spell and returns the creature to the point it was sealed.

You may choose to spend a minute casting this spell instead. If you do so the seal lasts for 10 years instead of 1. Casting this spell on a sealed creature refreshes the seal, repairing any damage and extends the duration to 1 year if less than a year remains.



### Divine

#### Spells By Level

##### Cantrip
- [Guidance](#Guidance)
- [Holy Protection](#Holy-Protection)
- [Light](#Light)
- [Radiant Light](#Radiant-Light)
- [Spare From Death](#Spare-From-Death)
- [Vine Whip](#Vine-Whip)

##### First
- [Animal Messenger](#Animal-Messenger)
- [Bonfire](#Bonfire)
- [Bramble](#Bramble)
- [Chilling Fog](#Chilling-Fog)
- [Close Wounds](#Close-Wounds)
- [Healing Word](#Healing-Word)
- [Holy Weapon](#Holy-Weapon)
- [Solar Flash](#Solar-Flash)
- [Tremor](#Tremor)

##### Second
- [Cleanse](#Cleanse)
- [Consecrate Ground](#Consecrate-Ground)
- [Enhance Ability](#Enhance-Ability)
- [Gust](#Gust)
- [Seed of Renewal](#Seed-of-Renewal)
- [Shield of Faith](#Shield-of-Faith)
- [Treate Injury](#Treate-Injury)
- [Wall of Faith](#Wall-of-Faith)
- [Winds of Battle](#Winds-of-Battle)

##### Third
- [Beacon](#Beacon)
- [Break Curse](#Break-Curse)
- [Cure](#Cure)
- [Demonic Skull](#Demonic-Skull)
- [Detect Creatures](#Detect-Creatures)
- [Revive](#Revive)
- [Spirit Animal](#Spirit-Animal)
- [Summoning](#Summoning)
- [Travelers Protection](#Travelers-Protection)
- [Turn Undead](#Turn-Undead)

##### Fourth
- [Bind Creature](#Bind-Creature)
- [Commune With Nature](#Commune-With-Nature)
- [Destroy Monstrosity](#Destroy-Monstrosity)
- [Petrify](#Petrify)
- [Purify Spirit](#Purify-Spirit)
- [Regeneration](#Regeneration)
- [Shape Stone](#Shape-Stone)
- [Summon Demon](#Summon-Demon)
- [Ward From Death](#Ward-From-Death)

##### Fifth
- [Awaken Soul](#Awaken-Soul)
- [Radiance](#Radiance)
- [Resurrect](#Resurrect)
- [Spirit Warriors](#Spirit-Warriors)

##### Sixth
- [Exorcism](#Exorcism)
- [Power Word: Harm](#Power-Word-Harm)
- [Power Word: Heal](#Power-Word-Heal)
- [Sanctuary](#Sanctuary)

##### Seventh
- [Divine Word](#Divine-Word)

##### Eigth
- [Light of Divinity](#Light-of-Divinity)
- [Restoration](#Restoration)

##### Ninth
- [Avatar](#Avatar)

___
#### Guidance
*Cantrip*
- **Casting Time:** 3 AP
- **Range:** 2
- **Duration:** 1 minute

Target up to 5 creatures. Make a spellcasting roll, adding a bad die for every creature targeted. On a success, the creature can add a proficiency die to their next attack roll or damage-dealing spell roll. On crit they add a superiority die instead.

Add a proficiency die for every level above cantrip.

___
#### Holy Protection
*Cantrip*
- **Casting Time:** 4 AP
- **Range:** 2
- **Duration:** 1 minute

Target up to 5 creatures. Make a spellcasting roll, adding a bad die for every creature targeted. On success, The next die to roll a crit against this creature is ignored.

Add a proficiency die for every level above cantrip.

___
#### Light
*Cantrip*
- **Casting Time:** 6 AP
- **Range:** Touch
- **Duration:** concentration, 10 minutes.

You cause a small object no larger than a fist to emit a bright light. You may control the intensity of the light, from 1 emitting 1 tile of dim light up to 3 tiles of bright light and 3 tiles of dim light. You may double the lights intensity, doubling the lights range but must make a concentration check each turn to maintain this effect. While intensifying the light, any creatures that are sensitive to bright light add 1 terrible die to their attack rolls while in this spells bright light.

When this light enters magical darkness you must make a spellcasting roll vs the spellcasting roll of the effect that created the darkness. You add a superior or terrible die for every level above or below this light spell is compared to the darkness. On success the darkness is dispelled, and on fail this spell ends.

The range of both the maximum bright and dim light increases by 1 tile for every level above cantrip. At level 5 and above this light is considered sunlight.

___
#### Radiant Light
*Cantrip*
- **Casting Time:** 6 AP
- **Range:** 5
- **Duration:** instant
- **Damage Type:** Holy

A ray of radiant light blasts a target creature in range. The creature makes a dexterity save vs your spellcasting. On a fail they take 1 wound, or 2 wounds if they are undead.

Add a target for every level above cantrip.

___
#### Spare From Death
*Cantrip*
- **Casting Time:** 4 AP
- **Range:** Touch
- **Duration:** instant

Magically slow the heart and prevent blood loss. Make a Medicine check using your spellcasting for the roll, adding a bad die for every temporary wound missing. On success the target is stabilized and will regain consciousness in 10 minutes.

Add a superior die for every level above cantrip.

___
#### Vine Whip
*Cantrip*
- **Casting Time:** 5 AP
- **Range:** 5 (10)
- **Duration:** instant

Magically influence a plant to attack or grapple a nearby creature. Choose a location in range to grow a plant, or take control of a small or larger plant within 10 tiles. The plant grows a bramble whip it can use to attack creatures in melee range. You may use the plant to make an attack or grapple roll, using your spellcasting roll for the attack. On hit they take 1 wound die in damage, or 1 wound on crit.

The plant lasts for 1 minute after which it returns to its original shape.

Add a wound die for every level above cantrip.





___
#### Animal Messenger
*1st Level*
- **Casting Time:** 1 minute
- **Range:** Touch
- **Duration:** 1 day

You attempt to summon a small beast to deliver a message for you. Make a spellcasting roll against 2 Terrible dice in an urban environment, or 2 Bad dice elsewhere. On success you summon a small beast local to the area, with the beast having wings on crit. You can give the beast a message up to 1 minute long and a description of who to deliver the message to. The beast will give the message to the first creature it finds that matches the description, and may have trouble with overly complex messages.

On delivering the message the recipeint is able to give a 1 minute message in return. If the beast is unable to find a creature matching that description or unable to return the response within the spells duration the beast reverts back to a normal animal and the message is lost.

The duration increases by 1 day for each level above the 1st.

___
#### Bonfire
*1st Level*
- **Casting Time:** 1 minute
- **Range:** Touch
- **Duration:** 8 hours

You create a magical soothing bonfire. The bonfire takes a single tile of space, emits bright light for 5 tiles, and dim light for an additional 5. Target up to 5 creatures and make a spellcasting roll, adding a bad die for every creature targeted. These creatures heal an additional wound during their long rest and recover 1 point of exhaustion.

Add a proficient die for every level above the 1st.


___
#### Bramble
*1st Level*
- **Casting Time:** 7 AP
- **Range:** 7
- **Duration:** 5 minutes

A growth of razor sharp bramble appears at a target location. Choose a point in range, summoning bramble in a 3x3 square centered on that point. The bramble counts as difficult terrain. The bramble is flammable and a tile will burn away after taking 1 wound of fire damage.

Any creature attempting to take a move or sprint action through the bramble must make a Dexterity save vs your spellcasting. On fail they take 1 wound die, with their movement ending on a crit. A creature makes this save only once per move or sprint action.

The area increases by 1 for every level above 1st.

___
#### Chilling Fog
*1st Level*
- **Casting Time:** 6 AP
- **Range:** 10
- **Duration:** 1 minute.

A chilling fog appears in a 3x3 area at a target location. Make a spellcasting roll, all creatures gain slow equal to the number of crits rolled, with a minimum of 1. All creatures inisde the fog gain fire resistance 1.

The diameter of the cube increases by 1 for every level above 1st.

___
#### Close Wound
*1st Level*
- **Casting Time:** 5 AP
- **Range:** Touch
- **Duration:** instant

Mend a creature's wounds. Make a spellcasting roll, healing a single wound and adding a wound die for every crit rolled.

Add a Wound die for every level above the 1st.

___
#### Healing Word
*1st Level*
- **Casting Time:** 4 AP
- **Range:** 5
- **Duration:** instant

Send healing energy to a single target. Make a spellcasting roll, adding 2 terrible die. On success, roll a wound die for every success rolled, healing for the total wounds rolled.

Add a normal die for every level above the 1st.

___
#### Holy Weapon
*1st Level*
- **Casting Time:** 4 AP
- **Range:** Self
- **Duration:** concentration, 1 minute.
- **Damage Type:** Holy

Enchant your weapon with holy power. For the next minute you may use your divine spellcasting in place of attack rolls you make. Your attacks add an additional wound die to the damage, or 3 if the target is undead.

Duration increases by 1 minute for every level cast above 1st.

___
#### Solar Flash
*1st Level*
- **Casting Time:** 8 AP
- **Range:** Touch
- **Duration:** instant

Shine blinding light in a cone infront of you. A cone of light 3 tiles long shines from you. Each creature must make a Stamina save vs your spellcasting, on fail they are blinded until the end of their next turn. If the creature is sensitive to daylight or bright light they also take 1 wound in Holy damage.

The the length of the cone increases by 1 for every level above 1st.

___
#### Tremor
*1st Level*
- **Casting Time:** 7 AP
- **Range:** Self
- **Duration:** instant

You cause the earth around you to tremor. All creatures within 2 tiles of you must make a Strength save vs your spellcasting. On fail the creature takes 1 wound die in damage, getting knocked prone on crit. If the ground in the area is loose earth or stone it becomes difficult terrain until cleared.

The the effected tiles extends by 1 in all directions for every level above 1st.





___
#### Cleanse
*2nd Level*
- **Casting Time:** 3 AP
- **Range:** 3
- **Duration:** instant

Attempt to remove negative effects from a target. You may choose any number of conditions this spell can remove, adding a bad die to your spellcasting roll for each condition, and a bad die for every condition level above 1. On success, those conditions are removed from the target. Cleans can remove Slow, Poison, Hex, Daze, Stun, Blind, and Fear.

Add a proficiency die for every level above the 1st.

___
#### Consecrate Ground
*2nd level*
- **Casting Time:** 10 AP
- **Range:** Self
- **Duration:** concentration, 10 minutes
- **Damage Type:** Holy

Mark a 3x3 area centered on yourself, purifying the ground. Any undead or monstrosity attempting to enter the consecrated ground must make a Charisma save vs your spellcasting. On fail they cannot willingly enter. Any undead inside the consecrated ground takes 1 wound at the start of their turn. Allies inside the zone gain 1 proficiency on all saving throws. You may move normally, however leaving the area ends the spell. If the spell lasts for the full 10 minutes the area remains consecrated for 1 day.

The area increases by 2 for every level cast above 2nd (5x5 at 3rd level, 7x7 at 4th, etc).

___
#### Enhance Ability
*2nd Level*
- **Casting Time:** 5 AP
- **Range:** 3
- **Duration:** concentration, 1 hour

Target up to 5 creatures. Make a spellcasting roll adding 1 terrible die, plus a terrible die for every creature targeted. On success the creatures gain +1 to a single attribute for the duration of the spell. They also gain +1 to their proficiency modifier in that attributes saving throw for every crit rolled.

Add a proficiency die for every level above the 1st.

___
#### Gust
*2nd level*
- **Casting Time:** 7 AP
- **Range:** Touch
- **Duration:** concentration, 1 minute
- **Damage Type:** Bludgeoning

You cause strong winds to blow in a direction, 10 tiles long by 2 tiles wide. Each creature in the line must make a Strength save vs your spellcasting, on fail they are blown back 1 tile, plus an additional tile for every crit rolled. If they are unable to move due to a wall or obstacle they instead take 1 wound die in damage. Any creature moving against the direction of the wind must spend two tiles of movement for every tile moved. You may spend 2 AP to reverse the direction of the wind.

Add a proficiency die for every level cast above 2nd.

___
#### Seed of Renewal
*2nd level*
- **Casting Time:** 1 minute
- **Range:** Touch
- **Duration:** 10 minutes

Putting a seed into the ground, sprout a rejuvenating bush, bearing fruit. You may add up to 5 uses of this bush, adding a bad die to the spellcasting roll for every use added. If used during a short or long rest the creature can spend a free healing surge. Users may also purge a single source of poison or disease, unless the effect comes from a spell cast at a higher level than _Seed of Renewal_.

The bush can be used an additonal time for every level cast above 2nd.

___
#### Shield of Faith
*2nd Level*
- **Casting Time:** 5 AP
- **Range:** 3
- **Duration:** concentration, 10 minutes

Protect a creature with a holy aura. Target up to 5 creatures. Make a spellcasting roll, adding a terrible die for every creature targeted. On success, target creatures gain 1 defense die, or a superior defense die on crit.

Add a proficiency die for every level above the 2nd.

___
#### Treat Injury
*2nd Level*
- **Casting Time:** 1 minute
- **Range:** Touch
- **Duration:** instant

Try to restore a targets body. You may attempt to remove as many lesser and greater wounds as you wish. Make a spellcasting roll, adding a bad die for every lesser wound and 2 terrible die for every greater wound. On a success the effects of these wounds are removed.

Add a proficiency die for every level above the 2nd.

___
#### Wall of Faith
*2nd level*
- **Casting Time:** 7 (3) AP
- **Range:** 5
- **Duration:** 1 turn

Channel your faith to form a protective wall. Make a religion roll vs 2 bad die, on success you create a shimmering wall 4 tiles wide and 4 tiles tall. The wall is seethrough and blocks creatures and projectiles from passing through it. This spell can be cast as a reaction for 3 AP, using 2 terrible dice instead.

Add a proficiency die for every level cast above 2nd.

___
#### Winds of Battle
*2nd level*
- **Casting Time:** 4 AP
- **Range:** 5
- **Duration:** 1 minute

A flurry of wind surrounds up to 5 willing creatures. Make a spellcasting roll, adding a terrible die for each creature targeted. On success creatures can move freely without taking opportunity attacks as the wind wards off foes. On crit the winds guide the creatures attacks, allowing them to reroll 1 die in their attack rolls for each crit in your spellcasting roll.

The winds last for the duration, or until the creature is hit by an attack.

Add a proficiency die for every level cast above 2nd.






___
#### Beacon
*3rd level*
- **Casting Time:** 6 AP
- **Range:** 5
- **Duration:** concentration, 10 minutes

You project your aura to a group of creatures, protecting them from harm. Target up to 5 creatures, adding a terrible die to your spellcasting roll for every target. On success, any time a target would need to make a Willpower save they may use your Divine spellcasting instead. In addition, creatures making death saving throws may reroll their wound die, taking either result.

Add a proficient die to your roll for every level cast above 3rd.

___
#### Break Curse
*3rd level*
- **Casting Time:** 10 AP
- **Range:** Touch
- **Duration:** instant

You attempt to remove a curse from a creature. Make a spellcasting roll, adding a superior or terrible die to your spellcasting roll for ever level above or bellow this spell is compared to the curse affecting the creature. On success the curse ends for the creature.

___
#### Cure
*3rd level*
- **Casting Time:** 10 AP
- **Range:** Touch
- **Duration:** instant

You draw poison and disease from up to 5 target creatures, purifying their bodies. Make a spellcasting roll, adding a terrible die for every creature targeted, on success you end any poison effecting them and cure one disease.

Add a proficiency die for every level above 3rd.

___
#### Demonic Skull
*3rd level*
- **Casting Time:** 8 AP
- **Range:** 5
- **Duration:** 1 minute
- **Damage Type:** Fire

You create a Flaming skull at position in range. When summoned, and again at the start of each of your turns the skull breathes fire at all creatures in its zone of control. Each creature must make a Dexterity save vs your spellcasting, on fail taking 1 wound. On your turn you may spend 3 AP to command the skull to move up to 5 tiles and change its facing. If the skull moves more than 10 tiles from you the spell ends.

Add a proficient die to your roll for every level cast above 3rd.

___
#### Detect Creatures
*3rd level*
- **Casting Time:** 10 AP
- **Range:** 1 mile
- **Duration:** concentration, 10 minutes

You attempt to detect the location of a type of creature in range. Choose one of the following: _Beast, Goblinoid, Humanoid, Fey, Monstrosity, Undead, Elemental, Fiend, Celestial_, or _Outsider_. Make a spellcasting roll, adding dice depending on the table below. On success you know the rough direction of creatures of that type, as well as a rough estimate of the strength of the strongest creature. You can detect their location for the duration or until you dismiss the spell.

The range increases by 1 mile for every level above 3rd.

| Accuracy | Dice Modifier |
|:----:|:-------------|
| groups of 10+, within 1000 ft.  | 2B |
| groups of 5-10, within 500 ft.  | 2B/1T |
| groups of 2-5, within 100 ft. | 2B/2T |
| groups of 1, within 10 ft. | 2B/3T |

___
#### Revive
*3rd Level*
- **Casting Time:** 10 AP
- **Range:** Touch
- **Duration:** instant

Attempt to bring back a creature that has died in the past 10 minutes. Make a spellcasting roll, adding 2 terrible die plus a terrible die for every time this creature has died. On success the target is brought back to life with 1 wound. For the next 3 days they take a -1 to all attributes.

Add a proficiency die to the roll for every level above the 3rd.

___
#### Spirit Animal
*3rd level*
- **Casting Time:** 10 minutes
- **Range:** Self
- **Duration:** 3 days

Attempt to commune with local nature spirits, gaining one as your guide. Make a spellcasting roll, adding 2 terrible dice to the roll, or 3 if casting this outside of a forest, plains, or swamp. On success you gain an spirit companion of your choosing. You may summon or dismiss the spirit for 5 AP. Each spirit has their own wounds, and if killed the spell ends. Spending a minute in concentration you may look through your spirit animals eyes, while doing so you gain the senses of the animal and lose your own.

- Elk: While within 10 tiles you gain +3 proficiency to athletics challenges and your movespeed increases by 1.
- Rabbit: While on your person, gives you +1 proficiency to Dexterity saves and Acrobatics challenges. The rabbit cannot be targeted while on your person.
- Bear: Your max wounds increase by 1.
- Snake: +1 proficiency to Intelligence saves and you cannot be charmed.
- Eagle: +3 to perception proficiency. The eagle has a flying speed of 5/5.
- Wolf: +3 to diplomacy proficiency. When helping or being helped by an ally, you may reroll 3 dice.

Add a proficient die to your roll for every level cast above 3rd.

___
#### Summoning
*3rd level*
- **Casting Time:** 10 AP
- **Range:** Touch
- **Duration:** instant

You attempt to summon a willing creature to your location. Make a spellcasting roll, adding dice according to the table below. On a success the creature is summoned to the location you touch. The creature gets a glimpse of the area they are being summoned to when the spell is cast.

You may instead cast this into a small object or trinket using the 'Passing Aquaintance' difficulty. Successfully casting this every day for 10 days makes the spell permanent. Anyone holding the object and speaking the command word is teleported to the casting location. For the spell to take hold it must be cast each day in the same place with the same target location.

Add a proficiency die for every level cast above 3rd.

##### Summoning Difficulty
| Familiarity | Difficult |
|:----:|:-------------|
| Second hand description or unknown name  | 4 Terrible Die |
| Passing Aquaintance  | 2 Terrible Die, 1 Bad Die |
| Casual Friendship | 1 Terrible Die, 1 Bad Die |
| Intimate Knowledgge | 1 Bad Die |
| More than 200 miles away | + 1 Terrible Die |

___
#### Traveler's Protection
*3rd level*
- **Casting Time:** 3 minutes
- **Range:** 3
- **Duration:** 8 hours

A protective ward for the journey ahead. Target up to 5 creatures, adding a bad die for every creature targeted. On success the targets maximum Wounds increase by 1. A creature can only be under the effects of one source of _Traveler's Protection_.

Add a proficient die for every level above 3rd.

___
#### Turn Undead
*3rd Level*
- **Casting Time:** 6 AP
- **Range:** Self
- **Duration:** 1 minute
- **Damage Type:** Holy

A blast of holy light emits from your symbol. All undead within 10 ft must make a charisma save vs your spellcasting. On fail, they take 2 wounds and are turned. On a success they take 1 wound instead.

Add a wound die for every level above the 3rd. Each wound rolled deals an additional wound if the target fails it's save.








___
#### Bind Creature
*4th level*
- **Casting Time:** 6 AP
- **Range:** 5
- **Duration:** concentration, 1 hour.

Bind a creature to this plane of existance. The target must make a Willpower save vs your spellcasting. On fail, the creature is bound for the duration. While bound they are unable to leave this plane through any means, nor can they magically teleport or enter the etheral plane. On crit, the target gains Slow 1 for the duration.

Add a proficiency die for every level cast above 4th.

___
#### Commune with Nature
*4th level*
- **Casting Time:** 10 minutes
- **Range:** Self
- **Duration:** instant

You spend time in medidation, listening to the land itself. Covering a radius 3 miles out from your location you may learn any number of things, adding a Bad die to the roll for each:

- General lay of the land and bodies of water.
- Prevalent plants, creatures, or minerals
- Presence of fey, elemental, celestial, undead, or demonic entities, and an estimate of their strength
- General location and understanding of influence from other planes
- General location of any structures, cave systems, or traces of people (such as a campsite).

Add a superior die for every level cast above the 4th.

___
#### Destroy Monstrosity
*4th level*
- **Casting Time:** 8 AP
- **Range:** 10
- **Duration:** instant
- **Damage Type:** Holy

Channel holy energy to destroy a creature living against the natural law. targeting an undead or monstrosity, make a spellcasting roll vs their stamina. On success they take 7 wounds. On fail, roll 7 wound die instead. Regardless of success, the target gains Slow equal to the number of crits you rolled.

The number of wounds dealt increases by 1 for every level above 4th.

___
#### Petrify
*4th level*
- **Casting Time:** 8 AP
- **Range:** 5
- **Duration:** instant

Choose a target in range you can see that is capable of looking at you. The target must make a Stamina save vs your spellcasting. If they succeed they are paralized until the end of their next turn and make no more saving throws. On fail they are paralized for 1 minute. While they are paralized they must make a Stamina save against your spellcasting, on fail turning into stone. 

Add a proficiency die to the roll for every level above the 4th.

___
#### Purify Spirit
*4th level*
- **Casting Time:** 8 AP
- **Range:** 5
- **Duration:** instant

Attempt to purify a hostile spirit, returning it into a neutral or friendly state. Target a Celestial, Fey, or Elemental, they must make a Charisma save vs your spellcasting. If they have less than half of their wounds remaining, add 2 superior dice to your roll. On fail, they are no longer hostile to you or your allies, but not necessarily helpful. They remain this way for 24 hours unless you or an ally takes a hostile action against them.

Add a proficiency die for every level cast above 4th.

___
#### Regeneration
*4th level*
- **Casting Time:** 8 AP
- **Range:** 5
- **Duration:** 1 minute

Fill a creature with healing energy, causing their wounds to close over time. For the duration, on the start of the creatures turn they heal 1 wound and remove the effects of 1 lesser wound.

Regeneration lasts an additional turn for every level above the 4th.

___
#### Shape Stone
*4th level*
- **Casting Time:** 8 AP
- **Range:** Touch
- **Duration:** 1 hour

Attempt to shape stone to a suitable form. Make a spellcasting roll against 2 bad die, on success an area of stone no larger than 1 tile takes the form of your chosing. The stone can have multiple parts, but cannot be more complex than a door. You can shape the stone into anything following these contraints, such as a weapon, an idol, or a chair. This can be used to seal a door shut or create a passage way through a wall as long as the wall is no more than 1 tile thick. After the spell ends the stone returns to its original shape.

You can increase the tiles effected by 1 for each level cast above 4th. The tiles must be adjacent.

___
#### Summon Demon
*4th level*
- **Casting Time:** 10 AP
- **Range:** 5
- **Duration:** instant

You attempt to call forth a demon from the abyss. Choose a target location in range, making a spellcasting roll vs 2 terrible die. On success a group of demons (determined by the DM) whose combined CR is 8 or lower appear in the target location. The demons make a Willpower save vs your Willpower, on fail the demons obey you for the next hour, after which they revert to their default behavior. Each casting of _Summon Demon_ in this location over the past day increases the difficulty by 1 terrible die.

The maxium CR increases by 2 for every level cast above 4th.

___
#### Ward From Death
*4th level*
- **Casting Time:** 1 minute
- **Range:** 5
- **Duration:** 8 hours

Prevent a fatal blow from killing a creature. Target up to 5 creatures, adding 2 terrible die to your spellcasting roll for each creature. The next attack or spell that would either take them down to 0 wounds or instantly kill them instead leaves them at 1 wound. Once triggered the spell ends on the creature.

Add a proficiency die to the roll for every level above the 4th.






___
#### Awaken Soul
*5th level*
- **Casting Time:** 10 minutes
- **Range:** Touch
- **Duration:** 7 days*

Attempt to awaken a plant or creature with an intelligence of -1 or less. Make a spellcasting roll vs 3 terrible dice, on success you weave a soul into their body. Their intelligence is set to 1 and are able to communicate in a language you speak. Plants awakend this way gain the ability to move and speak, and gain human like senses. The creature is charmed by you for 7 days and acts as your guardian. After 7 days the charm ends and the creature can choose if they remain friendly, based on your actions.

Add a superior die for every level cast above the 5th. In addition, the length of charm increases to 14 days at 6th level, 30 days at 7th level, 180 days at 8th level, and a year and a day at 9th level.

___
#### Radiance
*5th level*
- **Casting Time:** 10 AP
- **Range:** Self
- **Duration:** concentration, 10 minutes
- **Damage Type:** Holy

A holy light eminates bright light in 3 tiles and dim light a further 3. Any undead, demon, or monstrosity starting their turn inside or entering it for the first time must make a Stamina save vs your spellcasting. On fail they take 1 wound and are blind until the end of their next turn. Any creature making an attack roll against you add 1 terrible die to their roll. You and any creatures you choose inside the light add 1 superior die to all saving throws.

The radius of the bright light increases by 1 for every level above 5th.

___
#### Resurrect
*5th level*
- **Casting Time:** 10 AP
- **Range:** Touch
- **Duration:** instant

Attempt to bring back a creature that has died in the past week. A majority of the creature must be present, and this spell restores missing body parts. Make a spellcasting roll, adding 2 bad die plus a terrible die for every time this creature has died in the past year. On success the target is brought back to life with 1 wound, plus a wound for every crit you rolled.

Add a proficiency die to the roll for every level above the 5th.

___
#### Spirit Warriors
*5th level*
- **Casting Time:** 10 AP
- **Range:** 3
- **Duration:** 10 minutes

You call upon the fighting spirit of nearby dead creatures. Target any number of corpses within range with corpses of undead, monstrosities, or constructs being untargetable. Make a spellcasting roll adding a terrible die for every corpse targeted, on succes spirits of the creature rise from their bodies to defend you.

The spirits have the same attributes and proficiencies they had in life, but lose any maneuvers, abilities, or spells. Each spirit has 2 wounds and Resistance 2 for all physical damage from non-silvered weapons. The warriors act immediately after the summoners turn and obey simple commands. The spirits vanish after the duration or when exposed to direct sunlight. Corpses that have had their spirits from this spell cannot be raised again.

Add a proficiency die for every level above 5th.






___
#### Exorcism
*6th level*
- **Casting Time:** 8 AP
- **Range:** Touch
- **Duration:** instant

You attempt to exorcise an undead, fiend, fey, or celestial creature, returning them to their home plane. This spell has no effect if the creature is on it's home plane of existence. The target makes a Charisma save vs your spellcasting, adding 2 superior dice if they are not under any conditions. On fail the creature is banished to their home plane, ending any posession or effects this creature was maintaining.

Add a proficiency die to the roll for every level above the 6th.

___
#### Power Word: Harm
*6th level*
- **Casting Time:** 9 AP
- **Range:** 10
- **Duration:** instant
- **Damage Type:** Holy

Channel your divine wrath at a target creature, burning their body with holy might. Make a spellcasting roll vs the targets Stamina, on success the target takes 6 wounds, plus a wound die for every crit rolled. On fail the target takes 6 wound die in damage instead. Damage dealt from this spell reduces the targets maximum wounds an equal amount, recovering 1 max wound every day. casting _Heal_ on a creature removes this effect.

This deals an additional wound for every level above the 6th.

___
#### Power Word: Heal
*6th level*
- **Casting Time:** 9 AP
- **Range:** Touch
- **Duration:** instant

Restore a creatures form, healing mortal wounds. Make a spellcasting roll, a creature restores 5 wounds, plus a wound for every crit rolled. They may also remove the effects of a single Lesser or Greater wound. A creature can only be healed by this spell once per long rest, unable to withstand the strain of repeated casts.		

This heals an additional wound for every level above the 6th.

___
#### Sanctuary
*6th level*
- **Casting Time:** 7 AP
- **Range:** Touch
- **Duration:** 1 turn

You speak a word and open a rift to a location dedicated to your deity, such as a temple or altar on the same plane as you. A rift opens in an unoccupied space adjacent to you remaining open until the end of your next turn. Any creature you allow can enter the rift before it closes.

Once the rift closes you must make a spellcasting roll against 3 terrible dice, on success you appear at the location. On fail you appear in a random location within 20 miles of your target. Regardless of result the travel time takes 1 minute.

Add a proficiency die to the roll for every level above the 6th.



___
#### Divine Word
*7th level*
- **Casting Time:** 9 AP
- **Range:** 5
- **Duration:** instant
- **Damage Type:** Holy

You invoke the name of your deity to smite any creatures in range that can hear you. All creatures targeted must make a Charisma save vs your religion check, on fail they gain the following depending on their remaining wounds, increasing the threshold by 1 for every crit rolled:

- 8 wounds or fewer: blinded for 1 minute
- 5 wounds or fewer: blinded and feared for 10 minutes
- 3 wounds or fewer: killed instantly

Regardless of the outcome, an undead, demon, or celestial targeted by this spell takes 3 wounds and is blinded for 1 minute.

Add a proficient die to your roll for every level cast above 7th.




___
#### Light of Divinity
*8th level*
- **Casting Time:** 10 AP
- **Range:** 10
- **Duration:** concentration, 5 minutes

A blinding light shines down centered on a point in range. The light covers a 5x5 tile area, covering it in sunlight. You may choose any number of creatures inside the light to be uneffected, all other creatures must make a Charisma save vs your spellcasting. On fail the creatures are pushed to the closest unoccupied space outside of the light and take 2 wound die in damage.

Creatures inside the light are considered to be on a different plane of existance, and any attack made through the the light fails. A creature can attempt to force their way into the light, making a Charisma save vs your spellcasting. On success they enter the light as normal, otherwise they are burned by the light, taking 2 wound dice.

Add 1 superior die and the area becomes 7x7 at 9th level.

___
#### Restoration
*8th level*
- **Casting Time:** 10 AP
- **Range:** 5
- **Duration:** instant

You restore a creature's body, ending negative effects on them and healing mortal wounds. Make a spellcasting roll, the target creature restores wounds equal to the rolls successes. Any conditions aflicting the creature are removed if they came from a spell of 5th level or below. In addition, you may heal a Lesser or Greater wound for every crit rolled.

Add 2 superior dice to your roll when casting at 9th level.




___
#### Avatar
*9th level*
- **Casting Time:** 1 turn
- **Range:** Self
- **Duration:** concentration, 10 minutes.

You channel your divine magic to become an avatar of your deity. Make a spellcasting roll against 3 terrible dice, On success, you heal a wound for each success. Starting on your next turn you become an embodiment of divine wrath, gaining the following effects:

- You gain a flying speed equal to your movespeed.
- You gain Resistance 1 to all damage.
- All proficiencies improve normal dice to superior dice.
- You add 2 superior dice to all saving throws.

## Maneuvers

___
#### Hamstring
- **AP Cost:** 5/4
- **Weapon:** Any
- **Range:** Melee
- **Level Required:** 1/7

Make a melee attack against a target, adding 1 proficiency die. On hit deal normal weapon damage. If you crit the target takes a Lesser Wound: The target gains Slow 1, lasts until the target takes a long rest.

***Enhanced:*** Add a wound die to your attack roll, and the target gains Slow 2 instead.


___
#### Armor Break
- **AP Cost:** 5/4
- **Weapon:** Bludgeoning
- **Range:** Melee
- **Level Required:** 3/11

Make a melee attack against a target, adding 1 proficiency die. On hit deal normal weapon damage. If you crit the target's armor provides 1 fewer die until repaired.

***Enhanced:*** Add a superiority die instead of a procient die.

___
#### Cleave
- **AP Cost:** 5/4
- **Weapon:** Two-Handed weapon
- **Range:** Melee
- **Level Required:** 1/7

You may target creatures equal to your Strength. Targets must be inside your zone of control. Make a melee weapon attack against all targets, adding a bad die to the roll. On hit, targets take 1 wound die in damage.

***Enhanced:*** You no longer add a bad die to the roll, on hit targets take a wound instead of rolling a wound die.


___
#### Sweeping Strike
- **AP Cost:** 5/4
- **Weapon:** Polearm
- **Range:** 2
- **Level Required:** 1/5

Make a melee attack against a target, adding 1 proficiency die. On hit deal normal weapon damage. On crit the target is knocked prone.

***Enhanced:*** Add a wound die to your attack roll.

___
#### Spear Wall
- **AP Cost:** 2
- **Weapon:** Polearm
- **Range:** 2
- **Level Required:** 1/7

As a reaction you can make an attack against any target moving in range of you. On hit the targets move action ends. On crit the target is pushed back 1 tile.

***Enhanced:*** Add a superior die to the attack roll.




___
#### Protector
- **AP Cost:** 1
- **Weapon:** Shield
- **Range:** 1
- **Level Required:** 1/7

When an ally adjacent to you is targeted by an attack you can spend 1 AP to add your shields defense dice to their roll.

***Enhanced:*** If the attack is successfully blocked, you may make a reaction attack against the attacker if you are in range and have AP.

___
#### Headbutt
- **AP Cost:** 3/2
- **Weapon:** N/A
- **Range:** Melee
- **Level Required:** 1/7

After making a successful melee attack against the target you may attempt to headbutt them. Make a Stamina roll against their Stamina, the loser is staggered until the end of their next turn.

***Enhanced:*** You may upgrade one die in your Stamina roll. Roll a wound die, dealing the result to the losing creature.


___
#### Aimed Shot
- **AP Cost:** 5-8/4-8
- **Weapon:** Ranged Weapon
- **Range:** min 15 ft
- **Level Required:** 1/7

Make a ranged attack against a target, adding a proficiency die for each AP spent above 5.


***Enhanced:*** Roll up to 3 wound die with your attack, one for each crit made in the attack roll.



___
#### Target Weakness
- **AP Cost:** 5/4
- **Weapon:** Ranged Weapon
- **Range:** any
- **Level Required:** 5/14

Make a ranged attack against a target, adding up to 5 wound die. For each wound die added, add a terrible die to your roll.

***Enhanced:*** On a crit, the target takes a random Lesser wound.

___
#### Pinning Shot
- **AP Cost:** 6/5
- **Weapon:** Ranged Weapon
- **Range:** any
- **Level Required:** 3/10

Make a ranged attack against a target, adding a proficiency die to the roll. On hit they take normal weapon damage, and on crit they are pinned. a Pinned creature has a move and sprint speed of 0, and may spend 2 AP on their turn to remove this effect.


***Enhanced:*** Add a superior die instead of a proficiency die.



___
#### Hail of Arrows
- **AP Cost:** 8/7
- **Weapon:** Ranged weapon without _Loading_
- **Range:** any
- **Level Required:** 6/15

Choose a point within range of your bow, targeting all creatures on or adjacent to that tile. Make a ranged attack against the targets, adding 1 bad die to your roll. On hit they take 1 wound die in damage.


***Enhanced:*** You no longer add a bad die to your roll, deals 1 wound instead of 1 wound die.


___
#### Sneak Attack
- **AP Cost:** 6/5
- **Weapon:** Any 1 handed weapon
- **Range:** Melee
- **Level Required:** 1/8

Can only be used when flanking a target. Make a melee attack against the target, using superior dice instead of proficient dice for your proficiency. On hit deal normal weapon damage, plus a wound die for every crit.

***Enhanced:*** Can be used every turn instead of every other turn.


___
#### Wild Attack
- **AP Cost:** 5/4
- **Weapon:** Any Slashing weapon
- **Range:** Melee
- **Level Required:** 1/7

Make a wild attack against a target, adding 1 proficiency die to your attack roll. Before rolling the attack roll a wound die, on a wound the attack targets a different target in range. If no other target is available the attack misses. On hit you deal an additional wound die in damage.

***Enhanced:*** Add a superior die instead of a proficient die. If you deal 3 or more wounds with this attack the target gains a random Lesser Wound.

___
#### Deflect
- **AP Cost:** 2/1(3)
- **Weapon:** N/A
- **Range:** Melee
- **Level Required:** 3/11

Can only be used when the target of a ranged weapon attack. Instead of making a defense roll against the attack, make a sleight of hand roll instead. On success you catch the projectile, taking no damage.

***Enhanced:*** After catching the projectile you may spend 2 AP to fire the projectile back, as long as you have a ranged weapon that can fire the projectile. Add 1 proficiency die to the roll.




___
#### Inspiring Words
- **AP Cost:** 3/3
- **Weapon:** N/A
- **Range:** 6
- **Level Required:** 1/9

You give words of encouragement to another creature. Make a performance roll, adding 1 bad die to the check. On success the target creature can add a superior die to any roll they make for the next 10 minutes.

***Enhanced:*** You can target up to 3 creatures, adding a bad die for each creature past the 1st.


___
#### Daze
- **AP Cost:** 5/4
- **Weapon:** Bludgeoning
- **Range:** Melee
- **Level Required:** 1/7

Make a normal weapon attack against a target, adding a proficient die to the roll. On crit the target is dazed until the end of their next turn.

***Enhanced:*** Add a superior die instead of a proficient die. The target is dazed for 1 minute on crit.


___
#### Press the Attack
- **AP Cost:** 5/4
- **Weapon:** Any
- **Range:** Melee
- **Level Required:** 3/12

Strike into the target, attempting to push them back. Make a normal weapon attack, adding a proficient die to the roll. On hit the target is pushed back 1 tile and you move to occupy their space. On crit the target is staggered until the end of their next turn.

***Enhanced:*** Add a wound die to the roll. If you make 2 critical successes, the target is knocked prone instead of staggered.

___
#### Push Opportunity
- **AP Cost:** 5/4
- **Weapon:** Any
- **Range:** Melee
- **Level Required:** 5/15

Take advantage of a situation. Can only be used against a target that has a condition or is granting combat advantage. Make a normal weapon attack, adding a superior die to the roll. You deal an extra wound die on crit.

***Enhanced:*** Add 2 superior dice to your attack roll.




___
#### Suplex
- **AP Cost:** 5/4
- **Weapon:** Unarmed
- **Range:** Melee
- **Level Required:** 1/8

Can only be used against a grappled target. Make an unarmed attack against the targets Strength save. On hit you slam the grappled creature into the tile behind you, knocking them prone and dealing normal unarmed damage. On crit the target is dazed until the end of their next turn. This ends the grapple on the target.

***Enhanced:*** Wound die you roll count as wounds instead.

___
#### 7 Hand Strike
- **AP Cost:** 8/6
- **Weapon:** Unarmed
- **Range:** Melee
- **Level Required:** 9/15

Hit the target with a series of quick strikes. Make an unarmed attack against a target, adding a superior die. On hit, roll 5 wound dice. Add your wounds and crit successes, if it is 5 or more the target is stunned until the end of their next turn.

***Enhanced:*** You add 2 superior die to the attack, and you can target a creature up to 2 tiles away, moving yourself to an unoccupied adjacent tile for the attack.


___
#### Steel Tempest
- **AP Cost:** 9/8
- **Weapon:** Sword
- **Range:** 2
- **Level Required:** 11/22

Make a normal weapon attack against up to 5 creatures in range, adding 1 terrible die to the roll. On hit you deal your weapon's wounds to the creature.

***Enhanced:*** If you manage to hit 5 creatures, they grant combat advantage until the start of your next turn.


___
#### Puncture
- **AP Cost:** 5/4
- **Weapon:** One-Handed Slashing or Piercing
- **Range:** Melee
- **Level Required:** 3/15

Only usable against a target that rolls 4 or more defense dice. Slide your blade between the joints of their armor, stabbing your weapon home. Make an normal weapon attack against a target. The target can only roll defense dice equal to their Dexterity. On hit deal normal weapon damage, adding a wound die on crit.

***Enhanced:*** The targets superior defense dice are replaced with normal defence dice. On crit, the target takes a random lesser wound instead of adding a wound die.




___
#### Smite
- **AP Cost:** 6/5
- **Weapon:** Melee Weapon
- **Range:** Melee
- **Level Required:** 3/12

Empower your weapon with holy might. This attack consumes up to a 2nd level spell slot. Make a normal weapon attack, using your divine spellcasting proficiency instead of your weapon proficiency, adding a proficient die to the roll. On hit, the target takes normal weapon damage, plus 1 wound die per spell level used in holy damage. If the target is undead, they take wounds instead. On crit, if the target is undead they are turned for 1 minute.

***Enhanced:*** Add a superior die instead of a proficient die to your attack roll, you may use up to 4th level spell slots.

___
#### Savage Leap
- **AP Cost:** 5/4
- **Weapon:** Any
- **Range:** 2
- **Level Required:** 1/9

Only usable if you are not adjacent to any hostile creature. You make a running leap at a target, jumping 2 tiles towards the target and making a normal weapon attack. This leap passes over difficult terrain and half cover as long as there is space for you to do so. On hit you deal an additional wound die in damage, and on crit you stagger the target until the end of their next turn.

***Enhanced:*** Add a proficient die to the attack roll.

___
#### Shield Slam
- **AP Cost:** 3/2
- **Weapon:** Shield
- **Range:** Melee
- **Level Required:** 1/12

Make an attack with your shield, knocking the target off balance. Make a normal weapon attack. On hit the target takes 1 wound if you used a shield, or 1 wound die with a buckler. On crit the target is staggered until the end of their next turn.

***Enhanced:*** Add a proficient die to the attack roll and the target is staggered regardless of crit.

___
#### Magic Arrow
- **AP Cost:** 7/5
- **Weapon:** Ranged
- **Range:** Weapon Range
- **Level Required:** 4/16

You channel magic into your weapon, empowering the next attack and consuming a spell slot. Make a weapon attack against a target adding 1 proficient die to the roll, on hit the target takes normal damage. Regardless of the outcome the arrow turns to energy and pierces through, hitting 2 tiles directly behind the target. Any creatures hit must make a defense roll vs your attack, taking a wound on hit. The arrow pierces 1 tile further per spell level consumed.

***Enhanced:*** On crit, deal an additional wound die to all targets.

___
#### Careful Advance
- **AP Cost:** 5/4
- **Weapon:** Melee
- **Range:** Weapon Range
- **Level Required:** 2/9

You carefully study your opponents movements, making a calculated attack. Make a normal weapon attack adding 1 proficient die, rerolling up 3 dice and keeping the new roll. Any crits rolled do not count as crits, but still count as 2 successes. If the attack hits you may shift 1 tile in any direction, preventing opportunity attacks from the creature hit.

***Enhanced:*** Add a superior die instead of a proficient die, you may reroll up to 5 dice instead of 3.

___
#### Raise Shield
- **AP Cost:** 3/3
- **Weapon:** Shield
- **Range:** N/A
- **Level Required:** 1/12

Used in place of your movement action, you raise your shield to defend against arrows. As long as you don't sprint you gain 1 Resistance to physical damage dealt by ranged attacks.

***Enhanced:*** While your shield is raised you can reroll 1 die when making a defense roll.

#### Volley
___
- **AP Cost:** 9/7
- **Weapon:** Ranged
- **Range:** Weapon Range
- **Level Required:** 9/17

Shoot a volley of arrows at 3 adjacent targets. Make a ranged weapon attack against each one, adding 1 Terrible die to the attack rolls. On hit you deal normal weapon damage.

***Enhanced:*** Add a Bad die instead of a Terrible die.

___
#### Disarm
- **AP Cost:** 6/5
- **Weapon:** Unarmed
- **Range:** Melee
- **Level Required:** 7/15

You attempt to disarm an opponent, forcing them to drop their weapon. The target makes a Defense or Dexterity save against your unarmed attack, on hit their weapon falls to the ground, landing in an adjacent tile of your chosing. A creature standing on that tile can spend 2 AP retrieving the weapon.

***Enhanced:*** On crit the target is also staggered until the end of their turn.

## Feats
### Backgrounds

#### Magician's Apprentice
You gain proficiency in Arcane spells. You gain 2 level 1 spell slot and start with a codex containing 4 cantrip or level 1 spells of your choosing. You gain 1 proficiency in Arcana and Lore.

#### Coven Witch
You gain proficiency in Curse spells. You gain 2 level 1 spell slot and start with a codex containing 4 cantrip or level 1 spells of your choosing. You gain 1 proficiency Nature and apothecary tools.

#### Priest
You gain proficiency in Divine spells. You gain 2 level 1 spell slot and start with a codex containing 4 cantrip or level 1 spells of your choosing. You gain 1 proficiency in Religion and Medicine.

#### Soldier
You learn 1 maneuver you meet the requirements for and gain proficiency in 3 martial weapons. You may also choose one of the following trainings:
- Shield Master: When attacked, you may spend 1 AP to reroll an attackers die, taking the new value.
- Weapon Expert: Choose a weapon type, when making attacks with this weapon improve 1 proficient die to a superior die.
- Defensive Stance: You may spend 1 AP reroll 1 defense die when making a defense roll
- Ranger: + 2 to your attack range before penalities, and you take no penalties from attacking when someone is in your zone of control.
You begin with Hide Armor, and 3 weapons you are proficient in.


#### Noble
You start with double starting gold and gain proficiency in a martial weapon. Your skill in trade and court proceedings allows you to improve 1 proficient die to a superior die for all charisma skills. You gain 5 proficiency points to spend among skills. You start with Padded armor and 1 martial weapon of your choice.

#### Ranger
Your time hunting and wandering through the wilderness has honed your skills. You gain 1 proficency with a ranged weapon, Nature, Survival and Animal Handling and your Move speed increases by 1 tile. In addition, you can improve 1 die to a superior die for initiative, Nature, Survival, and Animal Handling rolls. You start with Studded armor and 1 weapon of your choice.

#### Street Urchin
You gain 1 proficiency in Sleight of Hand, Stealth and Lockpicking and have expertise in those skills. Using the Hide action takes 1 less AP. You start with a simple weapon of your choice.

#### Order Initiate
You gain proficiency in Divine spells and a martial weapon. You have a Codex with two cantrips. Your devotion to your order gives you an unnatural ability to seek out evil. You have expertise in Insight, and gain 1 proficiency in Diplomacy and Religion. In addition, you add a superiority die for Willpower and Charisma skill challenges against evil creatures (or good creatures if you belong to an evil Order).

You start with Scalemail Armor and a martial weapon of your choice.

#### Pit Fighter
Either by circumstance or choice, your time in the pits has honed your senses in battle. You gain 1 proficiency in Unarmed fighting and 2 proficiency points for any martial weapons. While wearing light or no armor your sprint speed is increased by 1. When attacked by a creature inside your zone of control you may improve one defense die to a superior defense die.

#### Chosen
You are beholden to a greater power, either by choice or folly. For better or worse they have given you some of their power. Each time you level up you choose a spell at or below your spell level. Once per rest you may cast that spell without needing to prepare it or expend a spell slot, adding 1 superior die to the spellcasting roll. Spells cast this way are cast at your highest spell level.

You gain 1 proficiency with Lore, Religion, and Survival.

#### Enchanter
You have learned the trade of an enchanter, allowing you to empower mundane items. You gain 1 proficiency in Lore, Arcana, and Diplomacy, and Enchanting tools. Enchantments cost half as much when done by yourself, and you may use 2 pieces of enchanted gear instead of 1. You start with 2 level 1 spell slots.


#### Disciple
You have trained under masters, learning to perfect your mind and body. When creating your character you gain proficiency in 2 attribute saving throws each time you take that perk. In addition you gain 2 proficiency in a single martial weapon and +1 proficiency in 2 skills of your choosing based on Strength, Dexterity, or Stamina.

___
### Basic

#### Expertise
Choose 2 skill proficiencies, Dice rolls using these skills improve normal dice to superior dice instead of proficient dice.

#### Duelist
You gain a mastery of one handed weapons. When attacking with a one handed weapon your first weapon proficiency improvement uses a superior die. If you hold nothing in your off hand all your weapon proficiency uses superior die.

#### Lucky
When you make a roll, you may reroll up to your charisma worth of dice. This can be used twice, after which you must take a long rest to regain this feat.

#### Durable
When taking damage from any source you may reroll 1 wound die, taking the new value.

#### Hunter
Choose an enemy type: goblinoid, beast, humanoid, giant, dragon, fey, demon, undead, outsider, monstrosity. Attacks, maneuvers, spellcasting and skill checks against this creature type gain 1 superior die.

#### Armor Expert
You reduce the penalties of wearing armor to 1 Bad die for medium armor and 1 Terrible die for Heavy armor. When making a defense roll you ignore the first crit rolled against you. The crit still counts as 2 successes but does not trigger critical hit effects.

#### Quick Healing
You gain 4 Healing Surges instead of 3 each long rest. When rolling Healing Surges, roll 4 wound dice instead of 3.

#### Alert
You take no penalty to surprise and you add 1 superior die to initiative rolls.

#### Agile
As long as you aren't wearing armor, you roll defense die equal to your dexterity level.

#### Wizard
You gain proficiency in Arcane spells.

#### Witch
You gain proficiency in Curse spells.

#### Priest
You gain proficiency in Divine spells.

#### Battle Mage
If you cast a cantrip or 1st level spell, your next basic attack costs 2 less AP. The spell level increase to 2 at 7th level, and 3 at 15th level.

#### Flurry of Blows
After an unarmed attack, if you have nothing in your offhand you may take the Off-Hand attack action, making two unarmed attacks instead of one, each rolling a single wound for damage.

#### Wrestler
When grappling a creature you gain 2 superior dice when making Strength rolls to move or shove a creature.

#### Longcaster
Spells with a range of 5 tiles or more gain +3 range. Spell attacks against creatures in cover grant them one less defense die.

#### Attuned Spirit
You resonate particularly well with magic items. You may attune to 4 items at one time, instead of 3. If an item your attuned to grants you a bonus to your attributes, you gain an equal bonus to that attributes saving throw.

___
### Journeyman

#### Fast Attacks
*Requires 1 Dexterity*

Reduces the cost of basic attacks by 1 AP.

#### Brutal Strikes
*Requires 2 Strength, 5th Level*

When you crit with an attack, add an extra wound die.

#### Second Wind
*Requires 1 Stamina*

While in combat you may spend 3 AP on your turn to use a Healing Surge. This can be used once per rest.

#### Battering Ram
*Requires 2 Stamina*

If you move at least 2 tiles before making an attack or maneuver, add an extra wound die for the damage.

#### Charmer
*Requires 2 Conversation proficiency*
When rolling a Conversation challenge against a non-hostile creature you add a superior die to the roll. On a crit the creature treats you as a friend for the next day.

#### Keeper of Lore
*Requires proficiency with Lore*
You add 2 superior dice when rolling a Lore challenge to identify a magic item. On crit you know if an item is cursed or not.

#### Linguist
*Requires 2 Intelligence*

You learn a new language of your choosing. When making a translation check add 2 superior die to the roll.

#### Quickened Spellcasting
*Requires proficiency with a spell type*

Reduces the cost of spells by 1 AP.

#### Enduring Concentration
*Requires 2 Stamina*

You may add 1 superior die to your Concentration rolls.

#### Unlocked Potential
*Requires Chosen, 10th Level*

Your ability to manipulate your patron's powers allows you to learn a 2nd spell, following the same rules as _Chosen_. In addition you may cast up to 2 spells this way before needing to rest.

#### Elder Sight
*Requires Chosen, 2 Willpower*

You permanently get the benefits of the spell _Dark Sight_, and gain 1 proficiency in perception.

#### One with Shadows
*Requires Chosen, proficiency in Stealth*

While not in direct sunlight you have expertise in stealth. While in dim light or darkness you can spend 5 AP to become invisible. The invisibilty ends when you move or take an action.


#### Beast Speech
*Requires Chosen, proficiency in Conversation*

You can speak with animals and cast _Animal Messenger_ at 1st level without a codex and without spending a spell slot.


#### Action Surge
*Requires 5th level*

At any time you may use Action Surge to regain 7 AP. After using this feat, you must take a short or long rest before you can use it again.

#### Signature Move
*Requires 10th level*

Choose a maneuver you know with a Level requirement of 7 or lower. This maneuver can be used every turn, and you add 1 superior die to the roll.

#### Overwatch
*Requires proficiency in Perception, 12th Level*

Once per turn, when a creature takes a movement action towards you, you can spend 2 AP to make a ranged weapon attack as a reaction as long as the creature is in range.

#### Blessed Healing
*Requires proficiency with Divine spells*

The target of your heals gains an extra superior die on their next attack or saving throw.

#### Helping Hand
*Requires proficiency with Divine spells*

When casting buffing spells, add a superior dice to the roll if you are not one of the targets.

#### Overcharge
*Requires Proficiency with Arcane spells, 6th Level*

When casting an Arcane spell that deals at least 1 wound you may overcharge it, causing it to deal an additional wound on hit. Add a terrible die to your spellcasting roll, if you have 0 or fewer successes before the roll is contested the spell misfires.

If used again before a long rest, add a terrible die for every time this has been used between long rests.

#### Elemental Affinity
*Requires proficiency with Arcane spells, 3 Intelligence*

Your mastery of magic has enhanced your abilities with a given element. Choose fire, cold, lightning, thunder, or poison. Spells you cast of this element ignore 1 level of resistance and you add 1 superior die to those spells spellcasting roll. In addition you gain 1 superior die when making saving throws against spells with that damage type.

#### Evasion
*Requires Agile, 3 Dexterity*

When targeted by a non-single target attack, maneuver, or spell you may spend up to your Dexterity in AP, moving 1 tile per AP spent. This movement does not trigger opportunity attacks and if you take no effect from the ability if you are able to leave its area of effect.

#### Defensive Duelist
*Requires proficiency with a Martial Weapon*

When you make a melee attack against a creature with a weapon you are proficient in, they cannot make opportunity attacks against you until the start of your next turn, regardless of the outcome of the attack. In addition, you add 1 superior defense die to opportunity attacks made while taking the move action, but not sprinting.

#### Twinned Spell
*Requires Proficiency with Arcane spells, 15th Level*

When casting an Arcane spell you may cast a second copy of the spell, using another spell slot but costing no additional AP. The spells must have different targets, and creatures can only be affected by one of the two spells when their area of effect overlap. You use a single spellcasting roll for both spells, adding 2 terrible die to your roll.

#### Potent Curses
*Requires Witch or Coven Witch, 3 Willpower*

Curses you cast last for 7 days instead of 1. If you only target a single creature with a curse, add a superior die to the spellcasting roll.


#### Powerful Enchantments
*Requires proficiency with Enchanters Tools*

You add 1 superior die when making Enchantment rolls. Enchantments you make last 7 days.

#### Mana Font
*Requires 2 Intelligence*

While in combat you may spend 3 AP to restore spell slots with a combined level equal to 1/3rd of your level, rounded up. After use, cannot be used again until taking a rest.

#### Arcane Forge
*Requires proficiency with Enchanters Tools*

If you enchant an item with the same property every day for 7 days the effect becomes permanent, becoming a magic item.

#### Effecient Brewing
*Requires proficiency with Apothecary Set*

When using your Apothecary set you can add an additional ingredient from any of the required ingredients. If you do you create two potions on success instead of one.

#### Keen Reflexes
*Requires level 12*

You gain expertise in 2 saving throws.

#### Poison Resistance
*Requires 2 Stamina*

You gain Resistance 1 against poison damage. At the end of each of your turns if you are Poisoned reduce the level of Poison by 1.

#### Danger Sense
*Requires proficiency in Perception, 10th Level*

When making a saving throw against an attack, damaging spell, or effect you can see you gain 1 superior die to your roll.

#### Sticky Hands
*Requires proficiency in Sleight of Hands*

When in combat you can attempt to steal an item from your opponent. The item has to be visible and not being held. Using 5 AP you make a Sleight of Hand roll against the targets Dexterity or Defense, on success you take the item.

#### Hiden in Plain Sight
*Requires proficiency in Stealth*

Your ability to sneak allows you to hide even in combat. When partially obscured you can spend 5 AP to make a Hide action. Make a stealth roll against the creatures perception. On success you hide from the creature. The creature is still aware of you but cannot find you.

#### Actor
*Requires proficiency in Performance*

You are able to impersonate voices you have heard before, reducing the skill challenge for these rolls. When making conversation or diplomacy checks you can use your performance instead.

#### Beast Whisperer
*Requires proficiency in Animal Handling*

You gain expertise in Animal Handling. Your skill with animals allows you to pacify even hostile beasts. You can spend your turn attempting to calm the beast, making an animal handling roll. On success the creature is no longer hostile.

You can make an animal handling roll against a beast that hasn't been hostile towards you in an attempt to befriend it. On a crit the beast will defend you while in its habitat.

#### Book of Hymns
*Requires proficiency in Religion*

In addition to the spells you normally prepare, you may prepare Divine spells equal to your Charisma score.

#### Exertion
*Requires 10th level*

As long as you have at least 1 AP remaining you can take an an action costing 5 AP or less. After taking the action make an exhaustion roll, adding 1 bad die for every AP you overspent, gaining 1 level of exhaustion on fail.

#### Siphon Energy
*Requires proficiency with Curse spells, 3 Willpower, 15th Level*

You are able to siphon the fading life off enemies to create a temporary shield. When you kill an enemy using Death damage you gain 1 temporary wound lasting 24 hours. You may gain up to half your max wounds in temporary wounds this way.

#### Perfect Defense
*Requires 4 Strength, 15th level*

You have perfected your defenses, allowing you to withstand almost any attack. While holding a shield or wearing heavy armor you may spend 1 AP to gain Resistance 1 against physical damage.

#### Divine Healing
*Requires proficiency with Divine spells, 3 Charisma, 15th level*

Your are able to mend even the most fatal of wounds. When casting a healing spell you add 1 wound die to the heal. Casting a healing spell on an unconscious ally always restores the maximum wounds possible.

#### Careful Scribing
*Requires proficiency with Scribing Tools*

When copying spells from a Codex you can instead use your scribing tools to create a spell scroll. Doing so costs a single enchanting supply regardless of spell level, but ignores all other costs for creating spell scrolls. For each spell you want to remove from the Codex and turn into a scroll make a inscription roll against that spell levels difficulty. On success you create a spell scroll for that spell, with failure destroying the codex.

#### Runesmith
*Requires proficiency with Scribing Tools, 1 Dexterity*

When inscribing a rune you may add 1 Bad die to the challenge roll, on success you create two runes instead of one.

### Advanced

#### Iron Grip
*Requires Brutal Strikes, 3 Strength*

You can wield a Two-Handed weapon as if it was One-Handed, using either One or Two-Handed proficiency for the attack. You cannot dual wield while holding a Two-Handed weapon, but you can equip a shield.

#### Quick Attacks
*Requires Fast Attacks, 3 Dexterity, 10th Level*

Reduces the cost of basic attacks by 1 AP.

#### Split Mind
*Requires Enduring Concentration, 3 Intelligence*

You can concentrate on 2 separate spells at once, as long as these spells have different targets. Persistent effects, such as _Shroud of Darkness_ have no targets, and creatures inside the spells area do not count as already targeted for Split Mind.

#### Lay on Hands
*Requires Blessed Healing, 3 Charisma*

You have a natural gift for healing, and are able to channel healing magic without the aid of a Codex. You may spend 5 AP to heal a single wound from a creature you touch. This can be used up to your Charisma score, after which you must take a long rest to regain this feat.

#### Jinx
*Requires Potent Curses, 4 Willpower*

You may affect the same creature with two different curses, instead of one. You gain 1 superior die to your saving throw when you are the target of a curse.

#### Indomitable
*Requires Durable, 3 Stamina, 12th Level*

When taking lethal damage, as long as the total damage is less than or equal to your Stamina you are left with 1 wound, with the excess reducing your Stamina directly. Stamina lost in this way is returned after a long rest.

#### Armor Mastery
*Requires Armor Expert, 3 Strength, 10th Level*

You take no penalties from wearing armor. When making a defense roll you may reroll 1 defense die, taking the new value.

#### Eldritch Force
*Requires Chosen, 1 Intelligence, 8th Level*

When casting Eldritch blast you may target 2 creatures.

#### Durable Runes
*Requires Runesmith, 10th Level*

Runes you make are resistant to breaking. When one of your runes is activated roll a wound die, the rune is not consumed on a blank.

## Items
### Consumables

#### Health Potion
A vial filled with a blood red liquid. On use they heal 1 wound plus 2 wound dice. Health Potions come in different potencies, adding additional wound dice equal to their modifier.

| Modifier | Total Wound Dice |
|:----:|:-------------|
| 0  | 2 |
| +1  | 3 |
| +3 | 5 |
| +5 | 7 |
| +7 | 9 |


#### Bandage
Can be used during a short or long rest. You may reroll any of the wound dice when rolling Healing Surges during this rest.

#### Fire Kit
Contains kindling, wood, and equipment to easily start a campfire. Can be used to pass a survival check when building a fire.

#### Ammunition
A standard quiver can hold 25 arrows or bolts. Arrows add 1 wound die to the attack, while bolts only deal the base crossbow damage.

#### Poison
A vial of poison, enough to coat a weapon for 3 attacks or 10 arrowheads. Poisons have modifiers to determine their strength, ranging from +0 to +3. Being successfully hit by an attack with a poisoned weapon you must make a Stamina save or suffer the effects.

##### Poison Type
| Name | Save (B/T) | Effect |
|:----:|:----:|:-------------|
| Str  | 1/1+ | Your Strength is lowered by 1 + modifier for 1 hour. |
| Dex  | 1/1+ | Your Dexterity is lowered by 1 + modifier for 1 hour. |
| Sta | 1/1+ | Your Stamina is lowered by 1 + modifier for 1 hour. |
| Int | 1/1+ | Your Intelligence is lowered by 1 + modifier for 1 hour. |
| Wil | 1/1+ | Your Willpower is lowered by 1 + modifier for 1 hour. |
| Cha | 1/1+ | Your Charisma is lowered by 1 + modifier for 1 hour. |
| Poison | 0/1+ | They take an additional wound in poison damage and gain 1 + modifier levels of poisoned for 1 hour. |
| Toxin | 1/1+ | Roll 2 + modifier wound dice for the attack |
| Paralyzing | 1+/0 | creature is paralyzed for 10 minutes |
| Confounding | 1+/0 | creatures proficiency modifiers are reduced by 1 + modifier. Negative proficiencies 'improve' die to bad dice. |

___
### Mundane Gear

##### Weapons
| | Weapon | Modifiers | Damage | Type
|:----:|:----:|:----:|:----:|:----:|
| *Simple*  |  |  |  | |
| | Dagger  | Finesse | 1 | Piercing |
| | Club  |  | 1 wound die | Bludgeoning |
| | Spear | Reach | 1 | Piercing |
| | Crossbow | Loading | 1 | Piercing |
| *Martial*  |  |  |  | |
| | Javelin | Range 5/10, Thrown | 1 | Piercing |
| | Hatchet | Range 5/10, Thrown | 1 | Slashing |
| | Axe |  | 1 | Slashing |
| | Halberd | Versatile 1, Reach | 1 | Piercing |
| | Flail | Versatile 1 | 1 | Bludgeoning |
| | Mace |  | 1 | Bludgeoning |
| | Warhammer | Two-Handed | 1 + 1 wound die | Bludgeoning |
| | Sword | Finesse | 1 | Slashing |
| | Great Sword | Two-Handed | 1 + 1 wound die | Slashing |
| | Battle Axe | Two-Handed | 3 wound die | Slashing |
| | Bow | Range 15/25 | 1 + arrow damage | Piercing |
| | Arrow |  | 1 wound die | Piercing |

##### Armor

There are 3 different types of armor: Light, Medium, and Heavy. There is no proficiency required to wear armor, but different types give different penalties. Medium armor adds 2 Bad dice to all Dexterity saves, Stealth checks, and spellcasting rolls. Heavy armor adds 2 Terrible dice to all Dexterity saves, Sealth checks, and spellcasting rolls.

If you do not meet the Strength requirement for wearing your armor you add 1 terrible die to all attack, attribute saves and spellcasting rolls.

| | Armor | Defense | Strength | Dex/Spell Penalty
|:----:|:----:|:----:|:----:|:----:|
| *Light*  |  |  |  | |
|  | Padded | 0/2 | 0 | None |
|  | Leather, Studded | 1/1 | 0 | None |
| *Medium*  |  |  |  | |
|  | Hide | 1/2 | 1 | 2 Bad dice |
|  | Chain Shirt, Scalemail | 2/1 | 2 | 2 Bad dice |
| *Heavy*  |  |  |  | |
|  | Half Plate | 2/2 | 3 | 2 Terrible dice |
|  | Splint | 2/3 | 4 | 2 Terrible dice |
|  | Full Plate | 3/2 | 5 | 2 Terrible dice |
| *Shield*  |  |  |  | |
|  | Buckler | +0/1 | 1 | None |
|  | Shield | +1/0 | 3 | None |
 
</div>

<div class='wide'>

___
### Wounds

#### Lesser Wounds
Roll 3 terrible dice, adding the successes. For each critical, move up one level.
  
| | Roll | Wound | Effect |
|:----:|:----:|:----:|:----|
| | -9 | Bleeding | All blank wound die rolled against you are rerolled. |
| | -8 | Festering Wound | Your max wounds is reduced by 1. |
| | -7 | Winded | You have 1 less maximum AP. |
| | -6 | Sprained Wrist | Add a terrible die to all attack rolls made with your main-hand weapon. |
| | -5 | Minor Concussion | Add 1 bad die to spellcasting rolls, you must pass a concentration check every turn while concentrating. |
| | -4 | Bruised Leg | Your speed and sprint speed are reduced by 2, to a minimum of 1. |
| | -3 | Bruised Shoulder | Shields do not add defense dice and offhand attacks add 1 bad die to the attack roll. |
| | -2 | Face Wound | Add 2 bad dice to all Willpower and Charisma skill challenges. |
| | -1 | Exhaustion | You have 1 level of exhaustion. This exhaustion cannot be healed until you cure this wound. |
| | 0 | Numb | You have 1 less proficiency for all modifiers. |

#### Greater Wounds
Roll 3 terrible dice, adding the successes. For each critical, move up one level.
  
| | Roll | Wound | Effect |
|:----:|:----:|:----:|:----|
| | -9 | Deadly Infection | Your max wounds are reduced by 1. At the end of each Long rest your max wounds are reduced again. |
| | -8 | Broken Arm | You can only hold a One-Handed weapon or shield, not both. |
| | -7 | Punctured Chest | All wound dice count as a wound, regardless of result. |
| | -6 | Magic Tearing | Add bad dice to your spellcasting rolls equal to the spell slot's level. Spells Misfire if you fail your roll, regardless of ability. |
| | -5 | Torn Muscle | You are permanently Weakened. |
| | -4 | Collapsed Lung | Your stamina is reduced by 1, all conditions that last until the end of your turn last an extra turn. |
| | -3 | Broken Leg | You cannot sprint, and your move speed is reduced by 2. |
| | -2 | Sliced Eye | You have -3 proficiency to all Willpower skills. Ranged attacks or spells you make add 1 terrible die. |
| | -1 | Concussed | Your Intelligence is reduced by 1, if you finish your turn with 0 AP remaining you are Dazed until the end of your next turn. |
| | 0 | Torn Ligament | You add 2 bad dice to all dexterity saves. |

___
### Tools

#### Lockpicks

A set of tools for picking a variety of locks. Anyone can use a lockpicking set, but only people proficient in lockpicking get the bonuses. Lockpicks come in several rarities.

##### Lockpicks
| Type | Bonus |
|:----:|:-------------|
| Basic  | None |
| Expert  | Improves 1 proficient die to a superior die |
| Masterwork | Improves 3 proficient dice to superior dice |
| Skeleton Key | Adds 4 superior dice to a lockpicking roll. After making the roll, roll a terrible die. The skeleton key breaks on fail. |

___
#### Repair Kit
Any damage taken by your armor or weapons are permanent until repaired. An item that takes enough damage, magical or not is destroyed. A weapon that goes below a -2 modifier or armor that is reduced to a single die is destroyed and can no longer be repaired or used.

A damaged weapon adds 1 bad die for every negative modifier, or reduces the superior die given from a magic weapon. Damaged armor reduces the number of defense dice given by 1, or reduces the superior defense die given from magic armor.

You may attempt to repair a single piece of equipment over a long rest. Roll a Repair roll adding 2 bad and 1 terrible die. On success the gear is repaired by 1 level, or 2 on a critical. If you fail with a criticalical failure the gear instead loses a level. You may attempt to repair magical gear, adding a terrible die for every modifier on the item.
</div>


  
<div class='wide'>

___
#### Apothecary Set

A portable set of tools required to brew potions over a campfire. During a long rest you may attempt to brew a single potion or poison if you have the right ingredients, or you may search your surroundings for ingredients.

Based on your surroundings you you may make a normal Survival skill challenge, increasing or decreasing the difficulty based on how barren the wilderness is. Searching takes 1 hour. On success roll 2 superior dice, adding up their total successes, with criticals counting as 3 successes. You gain a number of ingredients equal to the successes in your survival check.

##### Wilderness Survival Rewards
| Area | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| Plains | Vitalflower | Skillwheat | Poison Nettle | Healroot | Healroot | None | None |
| Forest  | Lucky Leaf | Nightshade | Cleansebloom | Poison Nettle | Healroot | Healroot | None |
| Mountains | Buff Beetle | Cleansebloom | Skillwheat | Healroot | None | None | None |
| Desert | Scorpion Venom | Scorchroot | Dragonflower | Healroot | None | None | None |
| Swamp | Toxic Frog | Nightshade | Poison Nettle | Cleansebloom | Healroot | Healroot | None |
| Lake | Brainfish | Cleansebloom | Skillwheat | Healroot | Healroot | None | None |
  
</div>
  
#### Potions
  Each potion takes a set number of ingredients, with some potions being easier than others.

___
  ##### Healing Potion
- **Ingredients:** 2 Healroot
- **Roll:** 2 Bad dice

A basic healing potion. On use, heals 1 + 2 wound dice in health.

___
##### Potion of Vitality
- **Ingredients:** 2 Healroot, 1 Vitalflower
- **Roll:** 2 Bad dice

Increases your maximum wounds by 1 for 24 hours.

___
##### Cleansing Potion
- **Ingredients:** 2 Cleansebloom, 1 Healroot
- **Roll:** 2 Bad dice

Ends up to 2 of the following conditions: Dazed, Hex, Paralyzed, Weaken, Slowed. If the condition is level 3 or more, remove 2 levels instead. Conditions granted by wounds, curses, or persistent effects return at the start of your next turn.

___
##### Potion of Strength
- **Ingredients:** 2 Buff Beetle, 1 Skillwheat
- **Roll:** 2 Bad dice, 1 Terrible die

For the next hour, replace all wound die from weapon attacks with wounds.

___
##### Potion of Ability
- **Ingredients:** 2 Skillwheat, 1 Healroot
- **Roll:** 2 Bad dice, 1 Terrible die

When brewing this potion choose an attribute. On drinking, for the next 4 hours all skill proficiencies for that attribute are increased by 1.

___
##### Fortify Mind Potion
- **Ingredients:** 2 Brainfish, 1 Cleansebloom
- **Roll:** 2 Bad dice, 1 Terrible die

For the next 4 hours you gain 1 superior die when rolling concnetration saves.

___
##### Bracing Potion
- **Ingredients:** 1 Vitalflower, 1 Buff Beetle, 2 Cleansebloom
- **Roll:** 2 Bad dice, 2 Terrible die

For the next hour any time you take a condition roll a wound die instead, on a blank you are not effected by the condition.

___
##### Potion of Firebreathing
- **Ingredients:** 2 Dragonflower, 1 Scorchroot
- **Roll:** 2 Bad dice, 2 Terrible die

For the next 10 minutes, on your turn you may spend 7 AP to breath fire on all creatures in your zone of control. Each must make a Dexterity save vs 2 superior dice. On hit they take 1 wound of fire damage.

___
#### Poisons
Poisons are applied to weapons and must hit to be effective. Each poison vial has enough to coat a weapon for a single hit, or coat 4 arrow tips. Does not work with blunt weapons.


___
##### Nettle Fever
- **Ingredients:** 2 Poison Nettle
- **Roll:** 2 Bad dice

On hit inflicts Poison 1, or Poison 2 on critical. Lasts for 10 minutes.

___
##### Sapping Poison
- **Ingredients:** 2 Poison Nettle, 2 Skillwheat
- **Roll:** 2 Bad dice, 1 Terrible die

On hit, inflicts Poison 1 and reduces all proficiencies by 1 for 10 minutes.


___
##### Nightbleed Poison
- **Ingredients:** 2 Nightshade, 1 Poison Nettle
- **Roll:** 2 Bad dice, 1 Terrible die

On hit deals 1 wound die in poison damage, or 2 wound die on critical.

___
##### Paralyzing Poison
- **Ingredients:** 2 Nightshade, 1 Scorpion Venom
- **Roll:** 2 Bad dice, 2 Terrible die

on hit inflicts Paralyzed for 1 minute.


___
##### Deadly Toxins
- **Ingredients:** 1 Toxic Frog, 1 Nightshade, 1 Poison Nettle
- **Roll:** 2 Bad dice, 2 Terrible die

on hit inflicts Poison 3 for 10 minutes.
<div style='margin-top:100px'></div>



<div class='wide'>

___
#### Enchanters Tools
  During a long rest you may attempt to enchant a single piece of mundane gear. Enchanted gear lasts for 3 days and count as magical equipment for the duration. After the Ehcantment ends the gear returns to being mundane. To enchant a piece of gear you must have a spell slot available and enough enchanting supplies for the enchantment. Then you must pass the enchanting roll, with failure consuming the spell slot and supplies but not giving the enchantment. Most cities and towns will sell enchanting supplies.
  
  The enchanting roll uses your skill with your enchanters tools. You may spend additional spell slots of equal level or higher to add proficient die for each spell slot spent. Ammunition loses it's enchantment on hit, whether the effect is triggered or not.

  A creature can only use 1 piece of enchanted equipment at a time.
  
  ##### Enchantments
| | Name | Spell Slot | Supplies | Roll | Effect |
|:----:|:-----:|:-----:|:-----:|:-----:|:-------------|
| _Weapon_ | | | | | | 
| | Skillful | 1st | 1 |2B | You gain 1 proficiency with this weapon type. |
| | Brutality | 2nd | 3 |2B/1T | When you critical with this weapon, add an extra wound die to the damage. |
| | Hexblade | 2nd | 3 |2B/1T | When you critical with this weapon the target gains Hex 1 for 1 minute. |
| | Quickened | 3rd | 4 |2B/2T | The first attack made with this weapon each turn costs 1 less AP. |
| Armor | | | | | | 
| | Durable | 2nd | 4 |2B/2T | If a spell or effect targetting this armor would damage it, roll a wound die. On a blank the armor takes no damge. |
| | Lightened | 3rd | 4 |2B/2T | Heavy armor is treated as medium armor and medium armor is treated as light armor when calculating armor penalities and initiative |
| _Shield_ | | | | | | 
| | Lesser Block | 2nd | 2 |2B/1T | You may reroll 1 defense die when making defense rolls. |
| | Greater Block | 4th | 5 |2B/3T | You may reroll 2 defense die when making defense rolls. |
| _Ammunition_ | | | | | | 
| | Staggering | 1st | 1 |2B | On critical the target is staggered until the start of your next turn. Makes 3 ammunition |
| | Slowing | 1st | 1 |2B | On critical the target gains Slow 1 until the start of your next turn. Makes 3 ammunition |
| | Homing | 2nd | 2 |2B/1T | Creates 3 +1 magical ammunition. |
| | Slaying | 3rd | 2 |2B/3T | Choose a creature type. This arrow deals an extra 3 wounds against creatures of this type. |


  
</div>

___
#### Scribing Tools
A set of tools for writing spell scrolls and inscribing runes. During a long rest you may attempt to inscribe a single rune or spell scroll. Spell scrolls are written in a way such that anyone is able to learn it and add it to their codex. Runes are consumables that give a variety of one time effects, from enhancing one of your spells to creating a magical trap. Creating scrolls and wards requires spell slots and uses a mix of gemstones and enchanting supplies which can be found in most cities.

#### Inscribing Spell Scrolls
You can create a spell scroll for any spell in your codex that you are able to cast. Creating a spell scroll of 3rd level or lower can be done during a long rest, with spells of 4th level and higher taking 1 day of work for each level above 3rd. You must have a spell slot of the same level or higher available which is consumed in creating the scroll.

##### Spell Scrolls
| Level | Spell Slot | Gemstones | Supplies | Challenge Dice |
|:-----:|:-----:|:-----:|:-----:|:-------------|
| Cantrip | 1st | 10gp gemstone | 0 | 1B |
| 1st | 1st | 10gp gemstone | 1 | 1T |
| 2nd | 2nd | 25gp gemstone | 1 | 2T |
| 3rd | 3rd | 25gp gemstone | 2 | 3T |
| 4th | 4th | 50gp gemstone | 2 | 4T |
| 5th | 5th | 50gp gemstone | 3 | 5T |
| 6th | 6th | 100gp gemstone | 4 | 6T |
| 7th | 7th | 250gp gemstone | 5 | 7T |
| 8th | 8th | 500gp gemstone | 7 | 8T |
| 9th | 9th | 1000gp gemstone | 10 | 9T |

#### Inscribing Runes
You can inscribe a rune during a long rest or with 2 hours of downtime. To inscribe you need to have the required supplies and a spell slot of the same level or higher which is consumed in creating the rune. Runes are consumed on use, with some requiring a specific trigger to activate. Once triggered the rune is consumed regardless of the result. Unless otherwise stated, runes that agument spells require no AP to use while placing a rune takes 2 AP.

##### Runes
| Rune | Spell Slot | Gemstones | Supplies | Challenge Dice | Effect |
|:-----:|:-----:|:-----:|:-----:|:-----:|:-------------|
| Longcaster | 1st | 1 10gp gemstone | 0 | 1B | Doubles the range of a spell that does not have a range of self or touch. |
| Potency | 1st | - | 1 | 2B | The first success in your spellcasting roll counts as a crit in addition to its dice value. |
| Fire Ward | 2nd | - | 1 | 1B/1T | Once placed, the next creature to enter its tile makes a Dexterity save vs 2 Superior dice, taking 1 wound and 1 wound die in fire damage on fail. |
| Arc Ward | 2nd | - | 1 | 1B/1T | Once placed, the next creature to enter its tile makes a Stamina save vs 2 Superior dice, becoming Paralyzed for 1 minute on fail. |
| Expanding | 3rd | 1 25gp gemstone | 1 | 2T | Increases the area effected by a spell by 1. |
