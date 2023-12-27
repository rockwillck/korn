class Story {
    constructor(title, description, thumbnail, tags, chapters) {
        this.title = title
        this.description = description
        this.thumbnail = "thumbnails/" + thumbnail
        this.tags = tags
        this.chapters = chapters
    }
}

const english = /^[a-zA-Z\s\.,'!?"-]*$/

var vocabulary = localStorage.getItem("vocab") != undefined ? JSON.parse(localStorage.getItem("vocab")) : {}

var allStories = [
    new Story("The Comfort Room",
          "The hideaway, the escape. The solution, and the source, of Edward Drynsdale's confusion. The Comfort Room.",
          "comfort.webp",
          ["dark", "psychological"],
          ["    Edward Drynsdale was confused. Confused about [삶 | life | love | family]. Confused about [사랑 | love | time | work]. Confused about [일 | work | family | promises]. But most of all, he was confused about [반복 | recurrence | randomness | nothingness]. That’s to say, he was confused as to why he [혼란스러웠다 | was confused | was tired | was cold]. He hadn’t hopped down any rabbit holes today - in fact, he hadn’t done [아무것도 | anything | work | his job]. And yet here he was, sitting in a cubicle, trying to get some [일 | work | lunch | task] done, and [비참하게 | miserably | happily | suddenly] failing. So [대신에 | instead | because | probably], his mind drifted - as it [종종 | often | never | rarely] did, for it was in his nature - to Halsey. Halsey, bathed in the [비싼 | expensive | cheap] scent of La Mer she couldn’t afford. Halsey, clinging to him like a [선인장 | cactus | scent | rabbit] to a hyena. Halsey, with her [푸른 | blue | big | brown] eyes and hazelnut [머리칼 | hair | arms | legs], waiting for him when he got [집 | home | out]. Halsey…"])

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
                let strArrayI = 0
                for (let chapter of story.chapters) {
                    let tbr = [...chapter.matchAll(/\[([^\]]+)\]/g)]
                    for (let strArray of tbr) {
                        allStrArrays.push(strArray[1].split("|")[1].trim())
                        chapter = chapter.replace(strArray[0], `<button class='replaceable' onclick='replaceableClicked(this, \"${strArray[1]}\", \"${strArrayI}\")'>${strArray[1].split("|")[0].trim()}</button>`)
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
                        updateBtn(btn, allStrArrays[bitI])
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
                    chapter = chapter.replace(strArray[0], `<button class='replaceable' onclick='replaceableClicked(this, \"${strArray[1]}\")' disabled>${strArray[1].split("|")[0].trim()}</button>`)
                }
                allChapters += `<h2>${story.title}: Preview</h2><pre>${chapter}</pre>`
                popup.innerHTML = `<div class="content">
                <div class="text">
                    ${allChapters}
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
        if (userStories.includes(storyIndex)) {
            storBtn.disabled = true
        }
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
        <td><a href="https://korean.dict.naver.com/koendict/#/search?query=${word}" target="_blank">${word}</a></td>
        <td>${vocabulary[word].filter(function (v, i, self) {return i == self.indexOf(v)}).join(" / ")}</td>
      </tr>`
    }

    localStorage.setItem("vocab", JSON.stringify(vocabulary))
}
registerDict()

function updateBtn(btn, choice) {
    let old = btn.innerText
    if (english.test(choice.trim())) {
        btn.innerText = choice.trim()
    }
    if (btn.style.backgroundColor != "black") {
        if (english.test(choice.trim())) {
            if (vocabulary[old] == undefined) {
                vocabulary[old] = []
            }
            vocabulary[old] = vocabulary[old].concat(choice.trim())
        } else {
            if (vocabulary[choice.trim()] == undefined) {
                vocabulary[choice.trim()] = []
            }
            vocabulary[choice.trim()] = vocabulary[choice.trim()].concat(old.trim())
        }
    }
    btn.style.backgroundColor = "black"
    btn.style.color = "white"
    btn.style.borderColor = "black"
}
function updateChoice(btn, choice, choiceBtn) {
    updateBtn(btn, choice)
    for (c of document.getElementById("questionsChoices").getElementsByClassName("choice")) {
        c.style.backgroundColor = "var(--incorrect)"
    }
    choiceBtn.style.backgroundColor = "var(--correct)"
            
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