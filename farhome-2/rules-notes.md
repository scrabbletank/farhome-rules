## General Changes
- no more proficiencies, feats, or AP, everything is action based.
- Each player gets 2 Actions on their turn? Possibly gain 1 at level 10. Haste gives +1 action, slow/stun gives -1 action.
- Ability scores go up to 10 in each category.
- Dice calculus is slightly different. Old version of all white -> all green -> all yellow had wonky scaling. At 0 score your potential max is 5, at 5 score your potential max is 10, at 5 score + 5 proficiency your potential max is... stll 10.
- New dice calc upgrades a dice fully before moving onto next die. Dice based purely on ability score as proficiencies are gone. For example, at 1 score you roll 4W/1G, at 2 score you roll 4W/1Y, 3 is 3W/1G/1Y, 4 is 3W/2Y, etc. This way there is a more gradual increase in both potential max and criticals.
- Remove defense dice and just use normal dice. Armor gives an Armor score from 1-10, dice is calculated same way as ability scores.
- All feats/proficiencies replaced with actions. Each ability category has an array of actions, some are innate actions (meaning all players start with them) and the rest are chosen/improved each level.
- Ability score is now based soley on how many actions/upgrades you've chosen in a given category. For example, choosing 3 Strength actions would give you a strength of 3.
- On level up you now just choose a single action to learn/improve. Gain additional things at set levels, like HP/actions per round/etc.
- Actions span both combat and non-combat purposes. Some actions are encounter powers, you can only perform so many encounter powers each encounter.
- Do I turn casters into warlocks? Have an action under int/will/cha that unlocks that given spell tree, also have upgrades that give spell power. You can cast any number of cantrip spells, but all other spells cost spell power. When using spell power you can cast it at a level equal to your ability score? Seems busted unless numbers change, OR change magic completely to use no level and scale based on stat.
- Spells have a stat requirement to learn, then can scale effects based on total ability in that school. For example firebolt requires an ability score of 0 (cantrip) and deals 1/0 + 0/1 for every 2 intelligence you have.
- Use heavy/light wound dice for damage, add hits deal a minimum of 1 damage if attack exceeds by 2 or more, add DR to armor?
- Some actions are reactions and used when it's not your turn. No limit on total reactions, but each reaction can only be used once per round.
- Actions can only be used once per turn unless they have the _Repeatable_ tag
- Actions use a loose tagging system to determine effects. For example, actions with the _Dangerous_ tag can target allies, or _Area_ tag effect all creatures in an area.
- Add _Consequences_ to critical failures. These are usually negative effects that can crop up based on the action type that weren't explicitly stated beforehand.
- Encounter Powers come back after a short rest. Spell Power comes back after a long rest.
- Short rests are 10 minutes, long rests are 8 hours.

## Damage
There are two dice that determine damage, Heavy Wound dice and Light Wound dice. Damage in this system is written as two numbers separated by a slash, the first number representing Heavy Wound dice and the second representing Light Wound dice. For example, an attack that deals 1/2 would roll 1 Heavy Wound die and 2 Light Wound dice.

**Critical Hits:** Attacks that critically hit always add 0/1 to any damage it deals.

**Damage Reduction:** Some equipment, like shields, provide damage reduction (DR). Damage reduction reduces damage taken by a flat amount equal to the DR value. For example, a player with 1 DR that gets hit for 3 wounds would take 2 wounds of damage. Attacks can be reduced to 0 this way.

## Tags
Actions, spells, and other abilities can have tags. These tags determine how the action works.

#### Action
This ability takes an action to perform. In combat you may take 2 actions on your turn.

#### Reaction
This ability is a reaction. You may take any number of reactions a turn, but each reaction can only be used once per round.

#### Non-Combat
This ability can only be performed while out of combat.

#### Skill
This ability has different outcomes based on the result of the roll:

| Result   | Effect |
| :-----: | :-----: |
| Critical Success  | You get the 'best case' result |
| Success  | You get a conditional or partial benefit |
| Failure  | You learn the requirements or actions you can take to turn this into a success |
| Critical Failure  | A consequence is introduced |

#### Area
This ability targets an area. All valid targets in the area are considered hit by this ability.

#### Dangerous
Dangerous abilities can target allies as well as enemies.

#### Multi-Attack
This ability can target multiple creatures. This tag can stack, allowing you to target an additional creature in range for each instance of Multi-Attack. You roll one time for all attacks, with each target rolling their own contesting roll against your roll.

You may choose to target the same creature with multiple attacks. When targeting a creature multiple times you still only roll once, hitting an additional time for every 2 successes you have above their contested roll. For example, if you rolled 5 successes with an attack with Multi-Attack against a creatures 3 success Armor roll you would hit the creature twice.

#### Single Target
Single Target abilities can only target a single creature regardless of Multi-Attack or Area tags.

#### Spell
This ability requires you to spend a Spell Power. Generic Spell power can be used in place of a specific spell power, but not the other way around.

#### Innate
This ability is available to all characters and does not count towards your Attribute Score total.

#### Repeatable
This action can be taken multiple times a turn. By default actions that share a name can only be taken once per round.

#### Power
This ability requires you to spend an Encounter Power.

#### Daily
This ability can be used once per long rest.

#### Push
This ability causes forced movement on a creature or target. Forced movement in this way does not provoke opportunity attacks.

#### Craft
Crafting actions take 1 hour and usually require specific tools and resources. Some crafting actions have their own rules.

## Conditions
There are several conditions that can be inflicted on creatures, each with distinct effects.

##### Blind
A blinded creature loses the ability to see. While blind they add 2 terrible dice to all single target attacks, maneuvers, spells, and Dexterity saves.

##### Charm
a charmed creature treats the source of their charm as a close friend and ally. Charmed creatures may have additional effects depending on the source of the charm, such as obeying their commands, or are prevented from taking certain actions.

##### Dazed
Dazed creatures cannot take reactions.

##### Fear
A feared creature cannot willingly move closer to the source of the fear. While the source is within line of sight, they add 1 bad die to any rolls made.

##### Hex
When making a roll, a hexed creature removes a critical for every level of hex affecting them. If there are no criticals to remove in their roll, criticals are added to the opponents roll instead.

##### Incapacitated
An incapacitated creature takes no actions and automatically fails Strength and Dexterity saves. While incapacitated they grant combat advantage to adjacent attackers, and attacks and maneuvers that deal physical damage deal an extra wound die per critical against them.

##### Invisible
Invisible creatures cannot be perceived with normal sight, but still make noise. Single target attacks, spells, and maneuvers against an invisible creature add 2 terrible dice to their rolls.

##### Maim
You may reroll a wound die for every level of Maim you have.

##### Paralyzed
Paralyzed creatures cannot take actions that give them movement and take 1 less action each turn.

##### Poison
A poisoned creature adds a bad die to all rolls except Armor. If a poisoned creature is poisoned again it becomes Heavy Poison.

*Heavy Poison:* Heavily Poisoned creatures add a terrible die to all rolls ecept Armor.

##### Possession
A possessed creature is one that is under the direct control of another creature. They are unable to take actions themselves, instead all actions are dictated by the creature possessing them.

##### Prone
a prone creature grants combat advantage to any melee attacker. Ranged attacks against this creature add a terrible die to their roll.

##### Restrained
A restrained creature cannot move, loses any benefit from Multi-Attack, and automatically fails Dexterity saves. They lose the effects of a shield if wearing one.

##### Silenced
A silenced creature cannot speak and adds 2 terrible dice to spellcasting rolls.

##### Sleep
A sleeping creature is incapacitated for as long as they are sleeping. A sleeping creature wakes up after being hit by an attack, maneuver, or spell, another creature spends 5 AP waking them, or they hear a loud noise.

##### Slow
A slowed creature takes 1 less action each turn.

##### Strengthened
A Strengthened creature upgrades a Light Wound to a Heavy Wound for each Strengthened level.

##### Stunned
A stunned creature cannot take reactions or move, and takes a single action on their turn.

##### Weaken
a Weakened creature downgrades a Heavy Wound to a Light Wound for each Weakened level.

## Abilities/Attributes
- Split into 6 categories, 3 phys/3 mental: Strength, Dexterity, Stamina, Intelligence, Willpower, Spirit.

### Strength
- *Attack*: innate, repeatable, allows attacks with Strength based weapons.
  - [ ] Gives Multi-Attack tag (Can target an extra creature in range, or +Y on one creature?)
  - [ ] All STR attacks/maneuvers have Maim
- *Muscle*: innate, perform a feat of strength, such as move/lift a heavy object, smash an object, throw something far, etc.
  - [ ] *Unarmored Defense*: Your minimum armor rating is 1/2 your Strength.
- [ ] [ ] [ ] *Maneuver*: Can learn a Maneuver (repeatable up to 3 times)
  - [ ] Add +G to Maneuver rolls
  - [ ] Can use two different maneuvers each turn
- [ ] *Block*: Unlocks benefits from wearing shields. Reaction when hit, doubles effect from shield for one attack.
  - [ ] Reaction, Can use your shield with dex saves and gain 1 DR for the attack.
- [ ] *Leap*: Action, gain movement up to half your movespeed (rounded up) and allows you to jump a maximum of 2 + 1/2 STR tiles.
- [ ] *Attack* (Unarmed): unarmed attacks deal extra damage?
- [ ] *Intimidate*: Coerce a person through intimiation. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
  - [ ] *Intimidating Aura*: Intelligent creatures with a Willpower lower than your Strength add a bad die to their first action against you.
- [ ] *Armourer*: Non-combat action, can attempt to fix broken armor and weapons.
  - [ ] Can be used to give +1 Armor to a non-magic Armor.
- [ ] *Grapple*: Some kind of grapple rules, but better because it takes a whole action.

### Dexterity
- *Attack*: innate, repeatable, allows attacks with Dexterity based weapons.
  - [ ] Gives Multi-Attack tag.
  - [ ] All Dex attacks/maneuvers add 0/1 on a critical.
- *Move*: innate, repeatable, gain movement up to your movespeed.
  - [ ] Increases your movespeed by 2.
  - [ ] Prevents reactions based on movement.
  - [ ] Encounter Power, Ignore hazardous terrain for this movement.
- *Stealth*: innate, attempt to be quiet and move subtly. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
  - [ ] *Hide*: Action, attempt to hide from creatures
- [ ] [ ][ ] *Cunning Action*: Essentially dex maneuvers, repeatable up to 3 times.
  - [ ] You may shift 1 tile after taking a Cunning Action without provoking opportunity attacks.
- [ ] *Dodge*: Gives +1 to Armor if dex is higher than armor. Reaction when attacked, you may use Dex roll in place of Armor (gaining any magical effects of armor)
  - [ ] You may shift 1 tile when taking the Dodge action, ignoring opportunity attacks.
- [ ] *Pick Lock*: Attempt to break into a place or object. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
- [ ] *Steal*: Attempt to take a visibly displayed item from a non-hostile creature. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
  - [ ] *Grab*: Encounter Power, when critically hitting an adjacent creature you can take 1 visible, non-held item.
  - [ ] *Disarm*: Encounter Power, when critically hitting an adjacent creature you force them to drop a held item to an adjacent tile of their choosing.
- [ ] *Acrobatics*: Perform an acrobatic feat, such as swinging on a chandelier, walking on a tight rope, or dodging a trap. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'.
  - [ ] *Climb*: You can climb rough walls, such as cave walls or rough brickwork, with ease. You have no disadvantages to rolls when climbing.
  
### Stamina
- *Fortitude*: innate, reaction. Can be used to resist the physical effects of something, such as being pushed, resisting poison, enduring heat/cold. Success means it has no effect on you.
  - [ ] Encounter Power, can be used against elemental damage to give DR against it.
- [ ] *Endurance*: reaction to resist exhaustion from travel/activities/abilities
  - [ ] *Unstoppable*: Encounter Power, reaction, ignore a slow, blind, or weaken effect.
- [ ] *Concentration*: reaction to resist stun/spell concentration
  - [ ] *Split Mind*: Can concentrate on two effects at once. All concentration checks use terrible dice.
- [ ] *Armor Mastery*: Allows you to wear Armor with a rating 5 and above.
  - [ ] Removes Dexterity Penalties for Armor.
- [ ] *Defend*: action, increases your Armor by 2 until the start of your next turn.
  - [ ] Gain 1 DR with Armor rolls when using Defend.
- [ ] *Second Wind*: Daily Action, recover 0/1 wounds for every 2 stamina.
- [ ] [ ] [ ] *Health*: Increases max wounds by 1 and Healing Surges by 1.
  - [ ] Increases max wounds by 1 for every 2 stamina.
- [ ] *Exertion*: Encounter Power, Action does not spend an action this round.
  - [ ] [ ] Gain +1 Encounter Power.
- [ ] *Scavenge*: Harvest natural resources, find usable equipment/parts, extract valuables from an item.

### Intelligence
- *Investigate*: innate, investigate an object or creature in an attempt to deduce its purpose or true intent. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
  - [ ] When you succeed on Investigating a creature you learn of a lead to uncover a secret they have.
- [ ] *Recall*: history check, giving information about a place or creature, etc. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
- [ ] *Study*: Non-combat action, allows you to spend time studying a topic of your choosing. Guaranteed success if you have a book or expert on the topic available. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
- [ ] *Cast Spell*: allows you to learn and cast Evocation spells, gain 1 Evocation Spell Power.
  - [ ] [ ] Gain 1 Evocation Spell power.
  - [ ] *Elemental Affinity*: Choose an elemental damage type. Spells of that type have +1 Intelligence.
- [ ] *Cast Cantrip*: Encounter Power, you can cast an Evocation Cantrip level spell using an Encounter Power instead.
- [ ] *Detect Magic*: Attempt to sense magic in the immediate area. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
- [ ] *Translate*: translate text or speech in an unknown language. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
- [ ] *Enchantment*: allows you to enchant mundane items to make them magical. Magical items cannot be damaged through normal means. Costs 1 Spell Power (any)
- [ ] [ ] *Arcana*: Increases the number of prepared spells by 2.
- [ ] *Haggle*: haggle with a merchant, make a deal with a demon, or barter with a bandit. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'

### Willpower
- *Perceive*: innate, can use to scout an area or look for hidden things. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
  - [ ] *First Sight*: Allows you to see into ethereal plane.
  - [ ] *Low Light Vision*: You are exceptionally capable of seeing in dark places. You ignore all effects of dim light.
- [ ] *Cast Spell*: allows you to learn and cast Occult spells, gain 1 Occult Spell Power.
  - [ ] [ ] Gain 1 Occult Spell power.
  - [ ] Non-damaging Occult spells have +1 Willpower.
- [ ] *Cast Cantrip*: Encounter Power, you can cast an Occult Cantrip level spell using an Encounter Power instead.
- [ ] *Treat Injury*: revive a downed player or apply medicine to an injured player. Difficulty based on severity of injuries, amount healed based on medicine and roll.
  - [ ] Downed players are revived without being injured on a critical.
- [ ] *Track Nature*: Track a creature through the wilderness. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
  - [ ] When used in an area for the first time learn a true fact about area, such as inhabitants, flora, etc.
- [ ] *Portent*: Daily Power, reaction, when a creature you can see makes a roll, reveal you have seen this in a vision. You give that creature rerolls equal to 1/2 Willpower.
- [ ] *Prepare Spells*: Non-combat action, replace a prepared spell with another spell.
- [ ] [ ] *Danger Sense*: Choose an attribute. Your saving throws of that attribute have +1 if they are less than or equal to your Willpower.
- [ ] *Brew Potion*: Allows you to brew a potion from various ingredients.
  - [ ] Remove 1 challenge die when brewing with 2 or more ingredients.
- [ ] *Opportunity Attack*: Reaction, make a melee attack when a creature leaves your zone of control.

### Spirit
- *Persuade*: innate, can use when 'at odds' with non-hostile NPC. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
  - [ ] *Goad*: You can use this on hostile NPCs to provoke them into an action of your choosing.
  - [ ] *Charmer*: Succeeding will make a non-hostile NPC friendly towards you, offering up additional information, give a warning, or lend a hand in some way.
- [ ] *Cast Spell*: allows you to learn and cast Divine spells, gain 1 Divine Spell Power.
  - [ ] [ ] Gain 1 Divine Spell power.
  - [ ] Your Divine spells that target allies have +1 Spirit.
  - [ ] *Hymn*: Encounter Power, you may cast a Divine spell using 2 Actions instead of a Spell Power.
- [ ] *Cast Cantrip*: Encounter Power, you can cast an Divine Cantrip level spell using an Encounter Power instead.
  - [ ] You may cast _Close Wounds_ as a Cantrip.
- [ ] *Perform*: perform a dance, song, or music. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'.
  - [ ] Your performances uplift allies. Allies that hear the whole performance gain 1 Temporary wound for 1 hour.
- [ ] *Call Divinity*: attempt to read the divine weave and perform a minor miracle, such as healing the sick, exorcising a spirit, or ask a deity for guidance. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
  - [ ] *Purification*: Demons, Undead, and Fey add a bad die to their first action against you.
  - [ ] *Clarity*: Encounter Power, Reaction, ignore a non-damaging effect from a Demon, Undead, or Fey creature.
- [ ] *Lucky*: Encounter Power, Reaction, gain rerolls equal to 1/2 Spirit.
- [ ] *Resist*: Encounter Power, Reaction, resist a Possession, Charm, or Fear effect.

## Character Creation
- simplified as there is no set attributes or feats. Removing subspecies as there isn't as much distinction anymore.
- race gives base stats such as wounds, movespeed, spell power, encounter power, possible racial action?
- Players choose 3 actions from 3 different attributes, plus 1 from species attribute. (eg, starting at 4-1's or 2-1's/1-2)
- Start with 2 Healing Surges (0/3 wound dice)

### Leveling Up
- Each level players can choose a new Action or Upgrade.
- Gain extra wound every 5 levels?

### Species

#### Human
- generic guy
- *Wounds*: 4
- *Movespeed*: 6
- *Spell Power*: 0
- *Encounter Power*: 3
- *Attribute*: Any

#### Elf
- pointy ear tall man
- *Wounds*: 3
- *Movespeed*: 7
- *Spell Power*: 1
- *Encounter Power*: 2
- *Attribute*: Dex/Int

#### Dwarf
- shortstack
- *Wounds*: 5
- *Movespeed*: 5
- *Spell Power*: 0
- *Encounter Power*: 3
- *Attribute*: Str/Con

#### Tlani
- black/white goblin
- *Wounds*: 3
- *Movespeed*: 6
- *Spell Power*: 1
- *Encounter Power*: 3
- *Attribute*: Dex/Will

#### Lizardfolk
- big dino man
- *Wounds*: 4
- *Movespeed*: 6
- *Spell Power*: 0
- *Encounter Power*: 4
- *Attribute*: Str/Spi

## Example Gear

### Armors

| Armor                                          | Armor Rating | Dex/Spell Penalty |
| :--------------------------------------------- | :-----: |  :---------------: |
| *Light*                                        |         |          |
| Padded                 |   1   |       none        |
| Leather       |   2    |       none        |
| *Medium*                                       |         |          |
| Hide                   |   3   |     none     |
| Chain Shirt |   4   |     1 bad die     |
| Scalemail |   5   |     1 bad die     |
| *Heavy*                                        |         |          |
| Half Plate     |   6   |  1 terrible die   |
| Full Plate             |   8   |  2 terrible die   |
| *Shield*                                       |         |          |
| Buckler                |  +1 Reroll   |       none        |
| Shield                 |  +1 Phys DR   |     1 bad die     |

## Example Spells

### Evocation Spells

#### Firebolt
*Cantrip*

- **Range:** 8
- **Damage Type:** fire

Blast a creature you can see with a bolt of fire. Make a spellcasting roll against the creature's Armor. On success, the creature takes 1/0 adding 0/1 for every 2 Intelligence and critical rolled.

#### Combust
*Cantrip*

- **Range:** 4
- **Duration:** 1 minute
- **Damage Type:** fire
- **Tags:** _Multi-Attack_

Cause a creature or object to burst into flames. You gain Multi-Attack for every 2 Intelligence. Creatures make a Dexterity save against your Intelligence roll. On failure they ignite, taking 0/2 in fire damage now and at the end of each of their turns. They or another creature can spend an action to put out the fire. Non-flammable objects and creatures dowse themselves after the duration.

#### Conjure Illusion
*Cantrip*

- **Range:** 16
- **Duration:** 10 minutes
- **Tags:** _Concentration_

You create one or more illusory images. The images can emit light and make noise but do not have a physical form. A creature that touches the illusion knows it's an illusion. You can create a 1x1 tile illusion for each Intelligence, or make one large illusion with an area equal to your Intelligence. 

Creatures attempting to percieve the illusion make a Willpower save against your Intelligence. On success they see through the illusion.

#### Arc
*Cantrip*

- **Range:** 4
- **Damage Type:** lightning
- **Tags:** _Multi-Attack_, _Dangerous_

Lightning sparks from your hands, grounding itself through nearby creatures. Make an Intelligence roll, targeting the closest creatures; For every 2 successes you target an additional creature. Creatures make a Stamina save against your roll, taking 0/1 in lightning damage, adding 0/1 for every 3 Intelligence.

#### Arcane Blasts
*1st level*

- **Range:** 20
- **Damage Type:** force
- **Tags:** _Multi-Attack_

Fire a volley of force blasts against creatures within range. The blasts travel around corners and obstacles, homing in on their targets and ignoring cover. Make an Intelligence roll against the creatures Strength save. On hit they take 1/1 in force damage, adding 0/1 for every 3 Intelligence. Gain Multi-Attack for every 3 Willpower.

#### Thunderclap
*1st level*

- **Range:** self
- **Damage Type:** thunder
- **Tags:** _Dangerous_, _Area_

A wave of thunder roars around you, hitting all creatures within 1/2 Intelligence. Make a spellcasting roll against the creatures Armor. On success the creatures take 1/1 in thunder damage, being pushed away 1 tile for every critical. Creatures take an additional 0/1 when colliding with an object for every tile moved.


#### Poison Fog
*1st level*

- **Range:** self
- **Duration:** 1 minute
- **Damage Type:** poison
- **Tags:** _Dangerous_, _Area_

Conjure a slow moving poison fog. Targeting an adjacent tile create a 3 tile wide and 2 + Intelligence tile long poisonous fog. Creatures in the fog and any that end their turn there make a Stamina save against your Intelligence. On fail they take 0/3 in poison damage and are Poisoned for 1 minute.

#### Sword Burst
*1st level*

- **Range:** self
- **Duration:** 10 minutes
- **Damage Type:** force
- **Tags:** _Concentration_

Conjure phantom images of your weapon that move with you. Make an Intelligence roll creating a phantom image for every 2 successes. When you make an attack you may choose any number of phantom images to attack with you. On hit they add 1/0 in force damage per image used. At the start of each of your turns if you have less images than when casting the spell a new phantom image forms.

#### Slow
*2nd level*

- **Range:** 8
- **Duration:** 1 hour
- **Tags:** _Concentration_

Slow down a creature you can see. Make an Intelligence roll against the creatures Stamina. On success the creature gains Slow. Gain Multi-Attack for every 3 Intelligence.


#### Hoarfrost
*2nd level*

- **Range:** touch
- **Duration:** 1 minute
- **Damage Type:** cold
- **Tags:** _Dangerous_, _Area_

Breathe out a frigid blast, freezing creatures in an arc. The blast hits all creatures in a 3x3 tile arc, extending by 1 for every Spirit. Creatures make a Stamina save against your Intelligence. On failure their bodies are covered in Hoarfrost. While covered in Hoarfrost the next time the creature moves or is hit by an attack causes the Hoarfrost to shatter dealing 0/3 in cold damage, adding 1/0 for every 4 Intelligence.


#### Fireball
*3rd level*

- **Range:** 16
- **Damage Type:** fire
- **Tags:** _Dangerous_, _Area_

Hurl a ball of fire that explodes at a point in range. The fireball explodes in a 3x3 tile area, increasing by 1 for every 2 Intelligence. Creatures in the fireball make an Armor save against your Intelligence. On hit they take 2/0 in fire damage, adding 0/1 for every 2 Intelligence.

#### Flight
*3rd level*

- **Range:** 8
- **Duration:** 1 hour
- **Tags:** _Concentration_

Enchant a creature with flight, allowing them to fly through the air and hover in place. You may target one creature, adding an additional target for every 3 Willpower. Make a Intelligence roll, creatures gain a flying speed equal to your successes.

#### Phantasmal Spear
*3rd level*

- **Range:** 12
- **Damage Type:** force

Summon a phantasmal spear that launches towards a target you can see. The creature makes a Strength save against your Intelligence. On hit, they take 2/0 in force damage, adding 1/0 for every 3 Intelligence.


#### Multiply
*4th level*

- **Range:** self
- **Duration:** 1 hour
- **Tags:** _Concentration_

Magically duplicate yourself, creating identical versions of you. Make an Intelligence roll, you may create a duplicate for every 3 successes. Duplicates share all of your attributes, stats, and effects. Any effect that one duplicate gains, such as being Stunned or Poisoned, applies to all duplicates. You share the same pool of wounds with all your duplicates.

Each Duplicate counts as a new creature, having their own initiative and turn during combat. For each action you take after your initial turn, you add a bad die to all subsequent rolls. This resets at the beginning of each round.

### Occult Spells

#### Hex
*Cantrip*

- **Range:** 8
- **Duration:** 10 minutes

Place a hex on a number of creatures you can see. You may target 1 + 1/2 Willpower creatures. Creatures make a Willpower save against your spellcasting. On fail they gain Hex, increasing its level for every critical rolled.

#### Ghoulish Claws
*Cantrip*

- **Range:** Touch
- **Damage Type:** poison

Your hands elongate, becoming deadly poisonous claws. Slash at a creature, making a Willpower roll against their Armor. On hit you deal 0/3 in poison damage, inflicting Paralyze for 1 round on a critical. Gain Multi-Attack for every 5 Willpower.

#### Life Sense
*Cantrip*

- **Range:** 12
- **Duration:** 10 minutes

Detect the rough locations of living creatures. Make a Willpower roll, for every success your detection radius increases by 10 tiles. Barriers, such as walls made from wood or stone divide this radius by half, and metal barriers by 10. Detected creatures locations are given in a 10x10 area, and you only get an estimate of their total number when many creatures are together.

You may instead focus your senses on a 3x3 tile in range. Creatures make a Spirit save against your Willpower roll. On failure you can see and sense them for the duration, losing any benefit from hiding or invisibility against you.

#### Quicken
*1st level*

- **Range:** 4
- **Duration:** 10 minutes

Enchant a group of creatures to quicken their movement. You may target a creature you can see for every 2 Spirit. Make a Willpower roll, creatures gain 1/2 of your successes in Move Speed.

#### Web
*1st level*

- **Range:** 16
- **Duration:** 10 minutes
- **Tags:** _Dangerous_, _Area_

Create a mass of webs. The webs cover only the ground unless supported by at least 2 walls, otherwise they cover up to the height of the walls. The webs cover a 2x2 area, increasing by 1 for every 2 Willpower.

Creatures that enter it for the first time or end their turn there make a Dexterity save against your Willpower roll. On fail they are restrained until they or a creature spend an action cutting themselves free.

#### Sleep
*1st level*

- **Range:** 12
- **Duration:** 10 minutes
- **Tags:** _Dangerous_, _Multi-Attack_

Attempt to put a group of creatures into a magical sleep. Targeting a 6x6 tile area centered on a point in range you can see, make an Intelligence roll. Starting from the lowest health creature and working your way to the highest repeat this effect for each Multi-Attack: if the creature has less wounds than successes in your roll they fall asleep. This spell gains Multi-Attack for every 2 Intelligence.

Creatures will wake up if they take damage or another creature uses an action to wake them.

#### Chilling Mist
*1st level*

- **Range:** 20
- **Duration:** 10 minutes
- **Damage Type:** cold
- - **Tags:** _Dangerous_, _Area_

Create a heavy, slow moving mist that drains the heat from living creatures. The mist covers an area equal to your Willpower, flowing around cover, through doors, and down hills. The mist is thick enough to obscure vision, with creatures able to see no more than 5 tiles through the mist.

When a creature enters the mist for the first time or ends their turn there they make a Stamina save against your Willpower. On failure they take 1/0 in cold damage, adding 1/0 for every 5 Willpower. Undead creatures or creatures who succeed their save are immune to its effects.

#### Howling Whirlwind
*2nd Level*

- **Range:** 16
- **Duration:** 10 minutes
- **Damage Type:** bludgeoning
- **Tags:** _Dangerous_, _Area_, _Concentration_, _Push_

You create a spiraling mass of wind covering a 3x3 tile area on a tile you can see. You make 1 Whirlwind, adding 1 for every 4 Willpower you have. Any creature that enters the wind for the first time this round or ends their turn there makes a Strength save against your Willpower roll. On Failure they are pushed back 2 tiles and take 1/1 in bludgeoning damage, adding 0/1 for every 4 Intelligence.

For the duration, starting on your next turn you may move the whirlwinds up to 3 tiles once per turn as a free action.

#### Corpse Explosion
*2nd Level*

- **Range:** 8
- **Damage Type:** death
- **Tags:** _Dangerous_, _Area_

Cause a corpse to explode, sending shards of bone in an area. Targeting a corpse in range; the attack hits all adjacent creatures, increasing its reach by 1 for every 3 Willpower. Creatures take 0/2 damage from small creatures, 1/1 from medium, and 2/0 from large or bigger creatures. In addition you add 0/1 damage for every 3 Willpower.

#### Binding
*2nd Level*

- **Range:** 8
- **Duration:** 10 minutes
- **Tags:** _Concentration_

Attempt to bind a creature you can see in ethereal chains. Creatures make a Strength or Dexterity save against your Willpower roll. On failure they are bound by the chains. While bound the creature is considered to be Paralyzed and cannot magically move or teleport. Creatures can spend an action to try to break the chains, making the same roll and freeing themselves on success.

#### Command
*2nd Level*

- **Range:** N/A
- **Duration:** 1 hour

Exert your will over a living creature that can hear you. You may target creatures equal to your Willpower. Creatures make a Willpower save against your Willpower roll. On failure they are Charmed for the duration. You may give them a command no longer than a sentence. Charmed creatures will obey the command if they can reasonably complete it and does not cause them obvious harm. The Charm ends if the creature takes damage.

#### Blindness
*3rd level*

- **Range:** 8
- **Duration:** 10 minutes
- **Tags:** _Concentration_

Blind a creature you can see. This gains Multi-Attack for every 3 Willpower. Creatures make a Spirit save against your Willpower roll. On failure they gain Blind.

#### Rake
*3rd Level*

- **Range:** touch
- **Damage Type:** slashing
- **Tags:** _Dangerous_, _Area_

Swipe your hand, throwing a barrage of razor sharp rings that travel along the ground and flow under armor. The rings hit all creatures in a 3x3 tile arc, extending by 1 for every Willpower. Creatures make a Dexterity save against your Willpower roll. On hit they take 1/1 in slashing damage, adding 1/0 for every 3 Willpower. This attack has no effect on flying creatures.


### Divine Spells

#### Holy Protection
*Cantrip*

- **Range:** 4
- **Duration:** 1 round

Enchant a creature you can see with holy protection. Make a Spirit roll, the creature gains a reroll with Armor rolls for every 2 Successes. Gain Multi-Attack for every 3 Spirit.

#### Radiant Light
*Cantrip*

- **Range:** 8
- **Damage Type:** holy
- **Tags:** _Area_

A beam of radiant light envelops a 2x2 tile area in range. All creatures of your choosing make a Spirit save against your Spirit roll. On failure they take 1/1 in holy damage, adding 0/1 for every 5 Intelligence. The area increases by 1 for every 3 Spirit.

#### Remedy
*Cantrip*

- **Range:** 4
- **Duration:** 1 minute

Ease a creatures wounds and lift their burdens. This spell gains Multi-Attack for every 2 Willpower. Make a Spirit roll, injured creatures gain a Temporary Wound for every 2 successes. These temporary wounds cannot exceed the creatures maximum wounds and last for 1 hour. Creatures also ignore the effects of exhaustion for 1 minute.

#### Bramble
*1st level*

- **Range:** 16
- **Damage Type:** piercing
- **Tags:** _Dangerous_, _Area_

Cause several 2x2 tile patches of brambles to grow at target points you can see. The brambles count as Hazardous terrain, and creatures take 0/1 piercing damage for every tile moved. Brambles can be cut away if a creature spends an action, removing the entire 2x2 patch.

Make a Spirit roll. You create a bramble patch for every 2 successes.

#### Close Wounds
*1st Level*

- **Range:** touch

Heal a creatures wounds. Make a spellcasting roll, healing 1 wound for every 3 successes. Creatures heal an additional 0/1 for every 2 Spirit.

#### Smite
*1st level*

- **Range:** touch
- **Damage Type:** holy

Touch a creature, smiting them with holy power. Creatures make a Spirit save against your Spirit roll. On hit they take 0/2 in holy damage, adding 0/1 for every 2 Spirit. Upgrade all dice against Undead or Demons.

#### Symbol of Light
*1st Level*

- **Range:** touch
- **Damage Type:** holy
- **Tags:** _Area_

Create a holy symbol that emits blinding light. The light extends 1 tile out from you for every Spirit. The light dispels magical darkness, or ends their effects for 1 minute if it has a permanent cause.

Creatures of your choosing make a Stamina save against your Spirit. On failure they are blind until the end of their next turn. Ethereal creatures or creatures sensitive to light take 1/0 in holy damage, adding 0/1 for every 2 Spirit.

#### Gust
*2nd level*

- **Range:** touch
- **Duration:** 1 minute
- **Damage Type:** bludgeoning
- **Tags:** _Dangerous_, _Area_, _Push_

Summon a strong, continuous blast of wind. The gust is 3 tiles wide and extends 2 tiles for every Spirit. When creating the gust all creatures in the area make a Strength save against your Spirit. On failure they are blown back 2 tiles, adding a tile for every critical. On colliding with another creature or object they take 0/1 in bludgeoning damage for every tile pushed.

Any creature trying to move against the wind spends an additional tile of movement, with the cost increasing by 1 for every 4 Spirit.

#### Symbol of Protection
*2nd Level*

- **Range:** 4
- **Duration:** 10 minutes

Create a holy symbol that protects a creature from harm. You may target an additional creature for every 2 Willpower. Make a Spirit roll, the symbol protects them for a number of attacks equal to your successes. While the symbol holds creatures add a Yellow die to all armor rolls.

#### Wall of Faith
*2nd level*

- **Range:** 4
- **Duration:** 1 minute

Channel your faith to form a protective 2x2 tile wall. The wall is 1 inch thick and intercepts all attacks made through it. When an attack is made against the wall or passes through it make a Spirit roll against the attack roll, blocking the hit on a success and taking the hits damage on a failure.

The wall has wounds equal to your Spirit.

#### Inner Fire
*3rd level*

- **Range:** 4
- **Duration:** N/A
- **Tags:** _Concentration_

Empower a creatures inner spirit. This gains Multi-Attack for every 2 Willpower. Make a Spirit roll, Inner fire lasts 1 round for every success. Creatures effected by Inner Fire can use a power without spending an Encounter Power once per turn.

#### Fall
*3rd level*

- **Range:** 16
- **Duration:** 1 minute
- **Damage Type:** bludgeoning
- **Tags:** _Dangerous_, _Area_, _Push_

Targeting a point in range you can see, force all creatures to plummet to the ground. Target a 4x4 tile area, increasing by 1 for every 2 Intelligence. Creatures make a Strength save against your Spirit roll. On failure creatures plummet to the ground. Creatures already on the ground are knocked prone while flying creatures fall up to 5 tiles, taking 1/2 in bludgeoning damage if they hit the ground. Creatures that fail their roll cannot fly for the duration.

## Example Maneuver

#### Charging Strike

- **Weapon:** any melee Strength weapon
- **Range:** 1/2 Movespeed
- **Tags:** _Single Target_

Cannot use while adjacent to a hostile creature. Move up to half your movespeed making a deadly attack. Make a normal weapon attack, adding 1/0 damage.

#### Wide Swing

- **Weapon:** any melee Strength weapon
- **Range:** melee
- **Tags:** _Dangerous_, _Area_

Make a wide attack hitting all creatures in your zone of control. Creatures make an Armor roll against your weapon attack.

#### Daze

- **Weapon:** any melee Strength weapon
- **Range:** Melee
- **Tags:** _Single Target_

Attack an adjacent creature your size or smaller with the blunt side of your weapon. Make a weapon attack inflicting daze on hit. On a critical they are knocked prone.

#### Armor Break

- **Weapon:** any bludgeoning Strength weapon
- **Range:** melee
- **Tags:** _Single Target_

Make a heavy strike against a creatures armor. Make a weapon attack, on hit they take 0/1 in buldgeoning damage and you may choose to damage their shield or armor. Damaged shields do not provide any benefit and damaged armor has -2 to its Armor Rating. Damage is permanent with mundane equipment, lasting only a minute if they are magical.

#### Leaping Slam

- **Weapon:** any two-handed Strength weapon
- **Range:** melee
- **Tags:** _Dangerous_, _Area_

You jump up to half of your Strength score, landing with a crushing attack. Make a weapon attack, hitting all adjacent creatures. On hit they take weapon damage and you may choose to push them back 1 tile.

## Example Cunning Action

#### Backstab

- **Weapon:** any melee Dexterity weapon
- **Range:** melee
- **Tags:** _Single Target_

Move to the back of the creature, attacking them from behind. Make a normal weapon attack, gaining Maim 3 for the attack. Targets lose the benefit of a shield for this attack.

#### Take Down

- **Weapon:** any melee Dexterity weapon
- **Range:** 2
- **Tags:** _Single Target_

Climb a creature larger than you and try to sink your weapon into a weak point. You may move up to 2 tiles, climbing the creature as you make your attack. On hit you upgrade 2 wound dice.

You cling to the creature until they hit you with an attack or you willingly release the creature. While clinging to the creature you have expertise on Armor rolls against this creature.

#### Flurry

- **Weapon:** any melee Dexterity weapon
- **Range:** melee
- **Tags:** _Multi-Attack_

Attack in a wild flurry. Make a weapon attack, adding a bad die to the roll. The attack has Multi-Attack 2.

#### Magic Arrow

- **Weapon:** any ranged Dexterity weapon
- **Range:** weapon range
- **Tags:** _Dangerous_, _Area_, _Power_

Infuse an arrow with magic causing it to turn ethereal, piercing all targets in a line. The arrow hits all creatures in a line equal to the weapons range. Creatures make a Strength save against your weapon attack. On hit they take 1/1 in force damage. Magical ammunition can be used, giving the attack the effects of that ammunition.

#### Volley

- **Weapon:** any ranged Dexterity weapon
- **Range:** weapon range
- **Tags:** _Multi-Attack_

Shoot a volley of arrows at multiple creatures. Make a weapon attack, gaining Multi-Attack 2 for the attack. Each additional attack must target a different creature.