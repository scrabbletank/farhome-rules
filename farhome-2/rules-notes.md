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
- Cantrips only get increased effect if spellpower is used, otherwise is just baseline damage.
- Use heavy/light wound dice for damage, add hits deal a minimum of 1 damage if attack exceeds by 2 or more, add DR to armor?
- Some actions are reactions and used when it's not your turn. No limit on total reactions, but each reaction can only be used once per round.
- Actions can only be used once per turn unless they have the _Repeatable_ tag
- Actions use a loose tagging system to determine effects. For example, actions with the _Dangerous_ tag can target allies, or _Area_ tag effect all creatures in an area.
- Add _Consequences_ to critical failures. These are usually negative effects that can crop up based on the action type that weren't explicitly stated beforehand.
- Encounter Powers come back after a short rest. Spell Power comes back after a long rest.
- Short rests are 10 minutes, long rests are 8 hours.

## Abilities/Attributes
- Split into 6 categories, 3 phys/3 mental: Strength, Dexterity, Stamina, Intelligence, Willpower, Charisma.

### Strength
- *Attack*: innate, repeatable, allows attacks with Strength based weapons.
  - [ ] Gives Multi-Attack tag (Can target an extra creature in range, or +Y on one creature?)
  - [ ] All STR attacks/maneuvers have Maim
- *Muscle*: innate, perform a feat of strength, such as move/lift a heavy object, smash an object, throw something far, etc.
- [ ] [ ] [ ] *Maneuver*: Can learn a Maneuver (repeatable up to 3 times)
  - [ ] Add +G to Maneuver rolls
  - [ ] Can use two different maneuvers each turn
- [ ] *Block*: Unlocks benefits from wearing shields (Phys DR). Reaction when hit, doubles DR from shield for one attack.
  - [ ] Reaction, Can use your shield with dex saves and gain 1 DR for the attack.
- [ ] *Leap*: Action, gain movement up to half your movespeed (rounded up) and allows you to jump a maximum of 2 + 1/2 STR tiles.
- [ ] *Attack* (Unarmed): unarmed attacks deal extra damage?
- [ ] *Intimidate*: Coerce a person through intimiation. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
  - [ ] *Intimidating Aura*: Intelligent creatuers with a Willpower lower than your Strength add a bad die to their first action against you.
- [ ] *Armourer*: Non-combat action, can attempt to fix broken armor and weapons.
  - [ ] Can be used to give +1 Armor to a non-magic Armor.

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
- [ ] *Pick Lock*: Attempt to break into a place or object. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
- [ ] *Steal*: Attempt to take a visibly displayed item from a non-hostile creature. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
  - [ ] *Grab*: Encounter Power, when critically hitting an adjacent creature you can take 1 visible, non-held item.
  - [ ] *Disarm*: Encounter Power, when critically hitting an adjacent creature you force them to drop a held item to an adjacent tile of their choosing.
- [ ] *Acrobatics*: Perform an acrobatic feat, such as swinging on a chandelier, walking on a tight rope, or dodging a trap. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'.
  - [ ] *Climb*: You can climb rough walls, such as cave walls or rough brickwork, with ease. You have no disadvantages to rolls for climbing.
  
### Stamina
- *Fortitude*: innate, reaction. Can be used to resist the physical effects of something, such as being pushed, resisting poison, enduring heat/cold. Success means it has no effect on you.
  - [ ] Encounter Power, can be used against elemental damage to give DR against it.
- [ ] *Endurance*: reaction to resist exhaustion from travel/activities/abilities
  - [ ] *Unstoppable*: Encounter Power, reaction, ignore a slow, blind, or weaken effect.
- [ ] *Concentration*: reaction to resist stun/spell concentration
  - [ ] *Split Mind*: Can concentrate on two effects at once. All concentration checks use terrible dice.
- [ ] *Armor Mastery*: Allows you to wear Armor with a rating 5 and above.
  - [ ] Removes Penalties for Heavy Armor.
- [ ] *Defend*: action, increases your Armor by 2 until the start of your next turn.
- [ ] *Second Wind*: Daily Action, recover 0/1 wounds for every 2 stamina.
- [ ] [ ] [ ] *Health*: Increases max wounds by 1 and hit dice by 1.
  - [ ] Increases max wounds by 1 for every 2 stamina.
- [ ] *Exertion*: Encounter Power, Action does not spend an action this round.
  - [ ] [ ] Gain +1 Encounter Power.

### Intelligence
- *Investigate*: innate, investigate an object or creature in an attempt to deduce its purpose or true intent. Critical success gives best case scenario, success gives conditional benefit, failure gives you requirements needed to turn this into success, crit fail adds 'consequence'
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


## Example Spells

#### Firebolt
*Cantrip*

- **Range:** 8
- **Duration:** instant
- **Damage Type:** fire

Blast a creature you can see with a bolt of fire. Make a spellcasting roll against the creature's defense. On success, the creature takes 1/0 adding 0/1 for every 2 Intelligence and critical rolled.


#### Thunderclap
*1st level*

- **Range:** self
- **Duration:** instant
- **Damage Type:** thunder
- **Tags:** _Dangerous_, _Area_

A wave of thunder roars around you, hitting all creatures within 1/2 Intelligence. Make a spellcasting roll against the creatures defense. On success the creatures take 1/1 in thunder damage, being pushed away 1 tile for every critical. Creatures take an additional 0/1 when colliding with an object for every tile moved.


## Example Maneuver

#### Charging Strike

- **Weapon:** any melee Strength weapon
- **Range:** 1/2 Movespeed

Cannot use while adjacent to a hostile creature. Move up to half your movespeed making a deadly attack. Make a normal weapon attack, adding 0/1 damage, or 1/0 damage on a critical.

## Example Cunning Action

#### Backstab

- **Weapon:** any melee Dexterity weapon
- **Range:** melee

Move to the back of the creature, attacking them from behind. Make a normal weapon attack, gaining Maim 3 for the attack. Targets lose the benefit of a shield for this attack.