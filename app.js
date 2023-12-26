class Story {
    constructor(title, description, thumbnail, tags, chapters) {
        this.title = title
        this.description = description
        this.thumbnail = "thumbnails/" + thumbnail
        this.tags = tags
        this.chapters = chapters
    }
}

var vocabulary = localStorage.getItem("vocab") != undefined ? JSON.parse(localStorage.getItem("vocab")) : {}

var allStories = [
    new Story("Archives of the Uru", "The one from space. The one from earth. And the one from nothing at all. All Urus, beings of unimaginable power who hold everything in their hands. This is their story.", "aotuThumb.png", ["Fantasy", "Sci-fi"], [`   1957. The sky's but a [splotch|test|a|b] of dark navy blue splattered across the heavens. Clouds cover every inch of the atmospheric dome, the sun and moon but distant points far in outer space. But something - suddenly, something! - streaks across this dreary landscape. A bright, flaming ball of unrelenting light, a sense of energy that refuses to yield. Nowhere near craggy or small enough to be a meteor, but too small to be anything man-made. Of course, everyone saw something different. Some say they saw nothing but a glint in their eye, a trick played on them by a sun yet to come out to play. Others would [describe|use|time] it as little more than a shooting star seen far off in the distance. But among the dozens of deniers and disbelievers, there are always a few who do the contrary. Who believe. And they would tell you that someone, something, emerged from the polished stone as it screamed across the sky. They would tell you that when the stone hit the ground, it left neither a mark nor remains. That it simply exploded in a sad, pathetic little fizz on the ground. They would tell you that the fireball of 1957 was special. And for once, they would be right.`, `    Kaevin turns to the mirror, looks at the handsome figure that gazes back. He's dressed in a dapper suit and tie, the very image of wealth and success. Yet there's something different about this man. He stands a little too tall, blinks a little too rarely, has fingers a little too long. He slips on a pair of his signature gloves, slides on a pair of tinted sunglasses. There's nothing that can be done about his height, but no one's ever thought oddly about it. Sure, he's gotten lots of comments about how he could have played basketball or the like, but no one's ever been anywhere near the truth. And as long as that truth stays buried, he's fine with the occasional jab. 
    His shoes click against the floor as he walk out the door, softly shuts it behind him. The mansion behind him stands tall against the foggy woods that loom around it, the moonlight glinting off its polished windows. There's sharp angles and monotone grey everywhere, making the palatial structure look almost too industrial to be lived in. An engine roars to life somewhere in the depths of the woods, and Kaevin drives out in a car whose value is best measured in number of yearly salaries than proportions. There's a party somewhere waiting for him to arrive, but he takes a moment, as he always does, to look up at the sky for a moment. He takes his forefinger and lightly touches his cheek, then his forehead. Closes his eyes. A chilled breath escapes his mouth, making a small foggy spot on his windshield. Then his eyes are open, his hands on the wheel, the car silently gliding forward. The gates of the mansion creak open, and the car drives into the road.
    The party is, as expected, a quiet and discreet affair. Such is the manner of all things done in the upper social stratosphere, where every gathering is an opportunity for networking, not frolicking. Champagne falls in light streams over levitating fountains, suspended in the air with strong electromagnets and clever engineering. Platters swoop around the room, serving finger foods and shots. But to the man who just arrived, there's one person in the room. Just one, and the rest - all the murmuring socialites, the barely audible machines, the elegant laughs of slightly intoxicated gentlefolk - melts away. Jon Plainsberry, the man who eludes him. The final competitor to Kaevin's tech behemoth, Nexus. How a blustering man as undignified as Plainsberry has managed to resist all takeover attempts so far eludes him, but no matter. In a fit of uncharacteristic glee, Kaevin notes Plainsberry's nervous sheen as he looks around at the crowd. His company's stock is sliding, so far down that Nexus is well within the means to buy it out completely. Kaevin smirks at Plainsberry's flushed face and frantic eyes. Those eyes lock onto his, and Plainsberry's off, pushing past startled magnates and heirs as he rushes for the exit. Kaevin chuckles. There's no escape from this place, not when every door is sealed except for the one right behind him. Plainsberry tugs at the door, but it doesn't give. As expected. He turns around, but Kaevin's right there, leering down at him. They look at each other, Plainsberry's stout build even more pronounced in the face of his rival's towering height. They both chuckle, Plainsberry nervously and Kaevin victoriously. 
        "How's the company doing?"
        "It's... it's okay." 
        "I hear there's a bit of a rough patch." 
        "Yep, yep. A bit of a rough patch, but we'll get through it." 
    At that, Kaevin smiles. It's a devilish smile, wiley in its charms, but so very dangerous. Plainsberry flinches against the cold metal of the door, his heart beating loudly. Then comes the final strike, the blow of the sword. "I can help you get through it. A little investment, if you will." Plainsberry deflates, as if hearing the inevitable has made reality sink in. He looks up at his conqueror, the man who's offering a deal with so many strings attached you could sew a sweater. There's an aura of power around this man, as if no act, no event could reduce him to anything less that everything. He sags.
        "I'll take the investment. What equity?"
        "60 million for 60 percent. Seems fair."
         A scoff barely escapes Plainsberry's lips.
        "Fair? That's preposterous! I wouldn't sell for ten times that."
        "Ten times? 600 million then. But for 70 percent."
    Plainsberry glares at Kaevin, the hatred in his eyes so very evident. But there's nothing he can do, and he knows it. His company isn't his, with or without the investment. He's lost, and being sore about it helps nobody. He has workers to protect, employees to pay.
        "Fine. 600 million, 60 percent."
        "70 percent."
        "... 65."
        "70."
        "70."
    And at that, Kaevin pulls out a contract, neatly typed and expertly folded. Plainsberry gapes, his surprise evident. The gall of this man, to have a contract ready. It was as if he expected to win, as if he knew no other outcome. A pen, and a stamp. Two signatures. The contract is neatly folded, its creases crisp and precise, carefully placed back inside the briefcase. Kaevin smiles. It was always a good day to win. Always a good day to hear the whimpering of a man defeated, the vain whispers of the rich, the loud bang of a gun. A gun? Why... why was there a gun?`, `    A gun... why was there a gun?
    Kaevin's senses are suddenly alert, his vision tunneled and his hearing isolated. He hears the shallow breathing of the man in front of him, the panicked cries of all the people who surround him. Slowly, cautiously, he turns around. There's a man in a dark trench coat, his face practically swallowed by the gas mask that covers his features. His hand is in the air, and in his hand, a gun. He's shouting something, but the crowd rushing for the door behind Kaevin suddenly muffles all sound. The mass of people, realizing that the door is locked, cower against the wall, leaving Kaevin the only one left standing. The man fires a few more shots, bullet casings falling onto the floor. Kaevin looks around. He's facing the assailant as if he's in an old Western, his hand over a pistol. But he doesn't have a pistol. He doesn't have a cowboy hat or a stalk of grain to chew on either, but most importantly, he doesn't have a pistol. He's unarmed, untrained, and facing someone who'd probably have murderous intent in his eyes if you could see them. So carefully, he raises his hands above his head and lowers himself to the ground. -BANG- There's another shot, and squeaks of fear run through the crowd behind him. A body slumps over, some unrecognizable face. The crowd collectively exhales a sigh of relief, driven by some sadistic, twisted feeling of safety. -BANG- -BANG- -BANG- Three more bodies plop onto the ground, their perfectly ironed suits crumpling on contact with the hardwood floors. The man finally stops shooting and shouts something about pockets and wallets, but Kaevin's not listening. He's staring at the four corpses on the ground, blood pooling around them. He's staring at their lifeless eyes. Something flashes deep within him, and suddenly he's running. Running towards the man, towards the gun, towards that damn mask and its pitch black little lenses. -BANG- Bullets ricochet off of Kaevin's skin, some of them bending around his body, others just hitting it altogether and turning into flat pancakes.  The man in the trench coat gapes at the dark blur racing towards him, the blur grabbing his wrist and snapping it to the ground, the pistol falling from his hand. The blur pushing him to the ground with a fury he's never seen. The blur as it raises a fist and delivers a blow too strong to be human. The blur's the last thing he sees before the world goes black.
    Kaevin looks up from the body, feels the fearful eyes boring into him. He stands up, brushes his hands off, tries to maintain some picture of dignity. But dignity must hate him, because some primal urge makes him lean down and grab the trench coat off the man, slip it onto his own shoulders. Dignity must that him, because he turns around and stares right back at the eyes trembling at the sight of him, glares as if there's nothing in the world that could stop him. Dignity must really hate him, because he picks up the man's gun and shoots a few more bullets into the air. Suddenly, everyone's up and running, scrambling for the exit, leaving him alone with a cowering Plainsberry and four cold bodies. He mutters some obscenities under his breath, cursing himself. He should have held it in, he could've. Those cursed eyes, all glassy and dark, as if the light had been sucked out of them. Curse them all! Two decades of building an image, thrown down the drain by some feverish impulse. Curse it all.
    
    A few minutes later, the police arrive. Ambulances and sirens and every manner of emergency response, far too late to do anything. They find five bodies, four prominent businessmen and a John Doe with far too many holes in him to identify anything. The back door is ever so slightly ajar, as if someone had just left and couldn't be bothered to close their exit. The cameras are wiped, static obscuring any useful evidence, and none of the wait staff are around to say anything. Later, some of the more loose-lipped of the attendees would gossip about the man who saved them. They'd gossip about the man who'd seemed like an angel from heaven, come to save their lives. About the man who'd seemed like a demon from hell, claiming their lives as his to reap, and his alone. About the man who everyone knew - but no one seemed to remember.`])
]

var userStories = localStorage.getItem("yourStories") == undefined ? [] : localStorage.getItem("yourStories").split("/").map(x => parseInt(x))
const popup = document.getElementById("popup")
var currentBits = []
var currentStory = 0

function registerUserStories() {
    if (userStories.length > 0) {
        localStorage.setItem("yourStories", userStories.join("/"))
    } else {
        if (localStorage.getItem("yourStories") != undefined) {
            localStorage.removeItem("yourStories")
        }
    }
    document.getElementById("yourStories").innerHTML = ""
    for (let storyIndex of userStories) {
        let story = allStories[storyIndex]
        let listEl = document.createElement("li")
        let storBtn = document.createElement("button")
        storBtn.onclick = (e) => {
            if (userStories.includes(storyIndex)) {
                currentStory = storyIndex
                currentBits = []
                let allChapters = ""
                i = 1
                let allStrArrays = []
                for (let chapter of story.chapters) {
                    let tbr = [...chapter.matchAll(/\[([^\]]+)\]/g)]
                    let strArrayI = 0
                    for (let strArray of tbr) {
                        allStrArrays.push(strArray[1].split("|")[1])
                        chapter = chapter.replace(strArray[0], `<button class='replaceable' onclick='replaceableClicked(this, \"${strArray[1]}\", \"${strArrayI}\")'>${strArray[1].split("|")[0]}</button>`)
                        currentBits.push(0)
                        strArrayI++
                    }
                    allChapters += `<h2>Chapter ${i}</h2><pre>${chapter}</pre>`
                    i++
                }
                popup.innerHTML = `<div class="content">
                <div class="text">
                    ${allChapters}
                </div>
                <div class="questions" id='questions'>
                    <h2 id='questionsQuestion'>No term selected</h2>
                    <div class="choices" id='questionsChoices'>
                    </div>
                </div>
            </div>`
            if (localStorage.getItem(`story${currentStory}`) != undefined) {
                let bitI = 0
                for (bit of localStorage.getItem(`story${currentStory}`).split("/")) {
                    if (bit == "1") {
                        currentBits[bitI] = 1
                        let btn = document.getElementsByClassName("replaceable")[bitI]
                        console.log(document.getElementsByClassName("replaceable"))
                        let old = btn.innerText

                        let crct = allStrArrays[bitI]

                        btn.innerText = crct
                        btn.onmouseenter = (e) => {
                            btn.innerText = old
                        }
                        btn.onmouseleave = (e) => {
                            btn.innerText = crct
                        }

                        btn.style.backgroundColor = "black"
                        btn.style.color = "white"
                        btn.style.borderColor = "black"
                    }
                    bitI++
                }
            }
                popup.style.scale = "1 1"
                document.getElementById("invisTrig").hidden = false
            }
        }
        storBtn.className = "story"
        storBtn.innerHTML = `<img src="${story.thumbnail}">
        <div class="description">
            <h3>${story.title}</h3>
            <p>${story.description}</p>
            <ul>
                <li>${story.tags.join("</li><li>")}</li>
            </ul>
        </div>
        <button class='add' onclick='removeStory(\"${storyIndex}\")'>×</button>`
        listEl.appendChild(storBtn)
        document.getElementById("yourStories").appendChild(listEl)
    }
}
registerUserStories()

function registerAllStories() {
    document.getElementById("allStories").innerHTML = ""
    let sI = 0
    for (let story of allStories) {
        let listEl = document.createElement("li")
        let storBtn = document.createElement("button")
        let storyIndex = sI
        storBtn.onclick = (e) => {
            if (!userStories.includes(storyIndex)) {
                let allChapters = ""
                let chapter = story.chapters[0]
                let tbr = [...chapter.matchAll(/\[([^\]]+)\]/g)]
                for (let strArray of tbr) {
                    chapter = chapter.replace(strArray[0], `<button class='replaceable' onclick='replaceableClicked(this, \"${strArray[1]}\")'>${strArray[1].split("|")[0]}</button>`)
                }
                allChapters += `<h2>${story.title}: Preview</h2><pre>${chapter}</pre>`
                popup.innerHTML = `<div class="content">
                <div class="text">
                    ${allChapters}
                </div>
                <div class="questions" id='questions'>
                    <h2 id='questionsQuestion'>No term selected</h2>
                    <div class="choices" id='questionsChoices'>
                    </div>
                </div>
            </div>`
                popup.style.scale = "1 1"
                document.getElementById("invisTrig").hidden = false
            }
        }
        storBtn.className = "story"
        addButton = userStories.includes(storyIndex) ? "" : `<button class='add' onclick='addStory(\"${storyIndex}\")'>+</button>`
        storBtn.innerHTML = `<img src="${story.thumbnail}">
        <div class="description">
            <h3>${story.title}</h3>
            <p>${story.description}</p>
            <ul>
                <li>${story.tags.join("</li><li>")}</li>
            </ul>
        </div>
        ${addButton}`
        listEl.appendChild(storBtn)
        document.getElementById("allStories").appendChild(listEl)
        sI++
    }
}
registerAllStories()

function registerDict() {
    document.getElementById("dict").innerHTML = `<tr>
    <th>Korean</th>
    <th>English</th>
  </tr>`
    for (word of Object.keys(vocabulary)) {
        document.getElementById("dict").innerHTML += `<tr>
        <td>${word}</td>
        <td>${vocabulary[word]}</td>
      </tr>`
    }

    localStorage.setItem("vocab", JSON.stringify(vocabulary))
}
registerDict()

function updateChoice(btn, choice, choiceBtn) {
    let old = btn.innerText
    btn.innerText = choice
    btn.onmouseenter = (e) => {
        btn.innerText = old
    }
    btn.onmouseleave = (e) => {
        btn.innerText = choice
    }
    btn.style.backgroundColor = "black"
    btn.style.color = "white"
    btn.style.borderColor = "black"
    for (c of document.getElementById("questionsChoices").getElementsByClassName("choice")) {
        c.style.backgroundColor = "var(--incorrect)"
    }
    choiceBtn.style.backgroundColor = "var(--correct)"
    vocabulary[old] = choice
            
    registerDict()
}

function replaceableClicked(btn, str, index) {
    document.getElementById("questionsChoices").innerHTML = ""
    strSplit = str.split("|")
    choices = strSplit.slice(1)
    let correct = choices[0]
    document.getElementById("questionsQuestion").innerText = strSplit[0]
    function func(a, b) {  
        return 0.5 - Math.random();
    }
    choices = choices.sort(func)
    for (let choice of choices) {
        let choiceBtn = document.createElement("button")
        choiceBtn.innerText = choice
        choiceBtn.className = "choice"
        choiceBtn.onclick = (e) => {
            if (choice == correct) {
                updateChoice(btn, choice, choiceBtn)
                currentBits[index] = 1
                localStorage.setItem(`story${currentStory}`, currentBits.join("/"))
            } else {
                choiceBtn.style.backgroundColor = "var(--incorrect)"
            }
        }
        document.getElementById("questionsChoices").appendChild(choiceBtn)
    }
    let choiceI = 0
    for (let choice of choices) {
        choiceBtn = document.getElementsByClassName("choice")[choiceI]
        if (currentBits[index] == 1 && choice == correct) {
            updateChoice(btn, choice, choiceBtn)
        }
        choiceI++
    }
}

function dismissPopup() {
    popup.style.scale = "1 0"
    document.getElementById("invisTrig").hidden = true
}

function addStory(i) {
    userStories.push(parseInt(i))
    registerUserStories()
    registerAllStories()
}
function removeStory(i) {
    userStories.splice(userStories.findIndex((a) => {return a == i}), 1)
    registerUserStories()
    registerAllStories()
}