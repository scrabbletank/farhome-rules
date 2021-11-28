import json

jsonSpells = json.load(open("spells\\spells.json"))

def parseFile(filePath, stat, prof):
    file = open(filePath).readlines()

    spellList = []
    curSpell = {}
    for line in file:
        line = line.rstrip()
        # This denotes the start of a spell.
        if line.startswith('#### '):
            if len(curSpell.items()) > 0:
                curSpell["stat"] = stat
                curSpell["prof"] = prof
                spellList.append(curSpell)
            curSpell = {}
        if line.startswith("#### "):
            curSpell["name"] = line[5:].lower().replace(' ', '-')
        elif line.startswith("- **Casting Time:**"):
            curSpell["ap"] = line[20:]
        elif line.startswith("- **Range:**"):
            curSpell["range"] = line[13:]
        elif line.startswith("- **Duration:**"):
            curSpell["duration"] = line[16:]
        elif line.startswith("- **Damage Type:**"):
            curSpell["dmgType"] = line[19:]
        elif line.startswith("*"):
            levelName = line[1:-1].upper()
            if levelName == "CANTRIP":
                curSpell["level"] = 0
            elif levelName == "1ST LEVEL":
                curSpell["level"] = 1
            elif levelName == "2ND LEVEL":
                curSpell["level"] = 2
            elif levelName == "3RD LEVEL":
                curSpell["level"] = 3
            elif levelName == "4TH LEVEL":
                curSpell["level"] = 4
            elif levelName == "5TH LEVEL":
                curSpell["level"] = 5
            elif levelName == "6TH LEVEL":
                curSpell["level"] = 6
            elif levelName == "7TH LEVEL":
                curSpell["level"] = 7
            elif levelName == "8TH LEVEL":
                curSpell["level"] = 8
            elif levelName == "9TH LEVEL":
                curSpell["level"] = 9
        elif len(line) > 0 and line.startswith("### ") == False:
            if "text" not in curSpell:
                curSpell["text"] = []
            curSpell["text"].append(line)

    curSpell["stat"] = stat
    curSpell["prof"] = prof
    spellList.append(curSpell)

    writeFile = open("output.txt", 'w')
    for spell in spellList:
        print(spell["name"])
        text = ('"' + spell["name"] + '": { stat: "' + spell["stat"] + '", prof: "' + spell["prof"] + '", level: ' + str(spell["level"]) +
               ', ap: "' + spell["ap"] + '", range: "' + spell["range"] + '", duration: "' + spell["duration"] + '"')
        if 'dmgType' in spell:
            text += ', dmgType: "' + spell['dmgType'] + '"'

        if spell["name"] in jsonSpells:
            text += ', dmg: ' + str(jsonSpells[spell['name']]['dmg']) + ', lroll: ' + str(jsonSpells[spell['name']]['lroll'])
        else:
            text += ', dmg: [0, 0], lroll: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]'
        if 'text' in spell:
            text += ', txt: ' + str(spell["text"])

        text += ' },'

        writeFile.write(text + '\n')
    
    writeFile.close()


# parseFile("spells\\arcane.txt", 'int', 'arcane')
parseFile("spells\\curse.txt", 'wil', 'curse')
# parseFile("spells\\divine.txt", 'cha', 'divine')