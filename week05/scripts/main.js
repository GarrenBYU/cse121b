// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();


const d = new Date();

let y = ''

y = d.getFullYear()

document.querySelector('#year').textContent = y

let day = d.getDay();
if(day == 6){
    document.querySelector("#day").innerHTML = `Go to church it is Sunday!`
}
else{
    document.querySelector("#day").innerHTML = `Don't Forget To Study!`
}


let scriptures = []
function output(array){
    const book = document.getElementById('book').value;
    const chapter = document.querySelector('#chapter').value;
    const verse = document.querySelector('#verse').value;
    array.forEach((scripture) =>{
        let article = document.createElement('article');
        article.setAttribute('id', 'currentScripture')

        let volumeName = document.createElement('h3');
        article.setAttribute('id', 'currentBook')
        volumeName.textContent = scripture.volume_title;

        let bookTitle = document.createElement('h4');
        article.setAttribute('id', 'currentTitle')
        bookTitle.textContent = `${scripture.book_title} ${scripture.chapter_number}: ${scripture.verse_number}`;
        /*
        let chapterNumber = document.createElement('h4');
        article.setAttribute('id', 'currentChapter')
        chapterNumber.textContent = scripture.chapter_number;

        let verseNumber = document.createElement('h4');
        article.setAttribute('id', 'currentVerse')
        verseNumber.textContent = scripture.verse_number;
        */
        let scriptureText = document.createElement('p');
        scriptureText.textContent = scripture.scripture_text;

        if((book == scripture.book_title) && (Number(chapter) == scripture.chapter_number) && (Number(verse) == scripture.verse_number)){
            article.appendChild(volumeName);
            article.appendChild(bookTitle);
            article.appendChild(scriptureText);
        
            document.querySelector('#scriptures').appendChild(article);
            //document.querySelector("#currentTitle").innerHTML = `${bookTitle} ${chapterNumber}: ${verseNumber}`;
        }
    });
};

async function getScripture(url){
    const response = await fetch(url);

    if(response.ok){
        scriptures = await response.json();
        output(scriptures)
    }
}
/*
scriptures = getScripture('https://garrenbyu.github.io/cse121b/week05/Scriptures/lds-scriptures-2020.12.08/json/lds-scriptures-json.txt')
*/

/*
function reset(length){
    scripturesLength = length
    while(scripturesLength !== 0){
        let templeID = document.getElementById('currentScripture');
        templeID.remove()
        scripturesLength = scripturesLength - 1
    }
}
*/

/*
let scripturesKeep = []
let discard = []
function run(){
    scriptures = getScripture('https://garrenbyu.github.io/cse121b/week05/Scriptures/lds-scriptures-2020.12.08/json/lds-scriptures-json.txt')
    scripturesLength = scriptures.length;
    let numberCount = 0
    bookTitle = document.querySelector('#currentBook')
    chapterNumber = document.querySelector('#currentChapter')
    verseNumber = document.querySelector('#currentVerse')
    while(scripturesLength !== 0){
        if(book === bookTitle && chapter === chapterNumber && verse === verseNumber){
            let element = scriptures.pop()
            scripturesKeep.push(element)
            scripturesLength = scripturesLength - 1;
        }
        else{
            scriptures.remove;
            scripturesLength = scripturesLength - 1;
        }
    }

}
*/
let times = 1
scriptures = getScripture('https://garrenbyu.github.io/cse121b/week05/Scriptures/lds-scriptures-2020.12.08/json/lds-scriptures-json.txt')
function showBy(){
    //if(times !== 1){
    //    reset(scriptures.length)
    //}
    getScripture('https://garrenbyu.github.io/cse121b/week05/Scriptures/lds-scriptures-2020.12.08/json/lds-scriptures-json.txt')
    times = 0
}
let element_Id = document.getElementById('FindTheScripture');
element_Id.addEventListener('click', showBy);
