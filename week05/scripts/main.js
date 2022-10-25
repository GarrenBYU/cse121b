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

let book = document.querySelector('#book');
let chapter = document.querySelector('#chapter');
let verse = document.querySelector('#verse');

let scriptures = []

function output(array){
    array.forEach((scriptures) =>{
        let article = document.createElement('article');
        article.setAttribute('id', 'currentScripture')

        let volumeName = document.createElement('h3');
        article.setAttribute('id', 'currentBook')
        volumeName.textContent = scriptures.volume_title;

        let bookTitle = document.createElement('h4');
        article.setAttribute('id', 'currentTitle')
        bookTitle.textContent = scriptures.book_title;

        let chapterNumber = document.createElement('h4');
        article.setAttribute('id', 'currentChapter')
        chapterNumber.textContent = scriptures.chapter_number;

        let verseNumber = document.createElement('h4');
        article.setAttribute('id', 'currentVerse')
        verseNumber.textContent = scriptures.verse_number;

        let scriptureText = document.createElement('p');
        scriptureText.textContent = scriptures.scripture_text;

        article.appendChild(volumeName);
        article.appendChild(bookTitle);
        article.appendChild(chapterNumber);
        article.appendChild(verseNumber);
        article.appendChild(scriptureText);

        document.querySelector('#scriptures').appendChild(article);
    });
};

async function getScripture(url){
    const response = await fetch(url);

    if(response.ok){
        scriptures = await response.json();
        output(scriptures)
    }
}


let currentBook = document.querySelector('#currentTitle');
let currentChapter = document.querySelector('#currentChapter');
let currentVerse = document.querySelector('#currentVerse');

let scripturesKeep = []
let discard = []
function run(){
    getScripture('https://garrenbyu.github.io/cse121b/week05/Scriptures/lds-scriptures-2020.12.08/json/lds-scriptures-json.txt')
    scripturesLength = scriptures.length;
    while(scripturesLength !== 0){
        getScripture('https://garrenbyu.github.io/cse121b/week05/Scriptures/lds-scriptures-2020.12.08/json/lds-scriptures-json.txt')
        if(book === currentBook && chapter === currentChapter && verse === currentVerse){
            let element = scriptures.pop()
            scripturesKeep.push(element)
            scripturesLength = scripturesLength - 1;
        }
        discard = scriptures.pop()
        scripturesLength = scripturesLength - 1;
    }

}

document.querySelector('#scriptures').textContent = scripturesKeep;
let element_Id = document.getElementById('FindTheScripture');
element_Id.addEventListener('click', run);
