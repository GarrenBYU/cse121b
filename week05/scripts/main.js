const d = new Date();

let y = ''

y = d.getFullYear()

document.querySelector('#year').textContent = y

let scriptures = []

function output(array){
    array.forEach((scriptures) =>{
        let article = document.createElement('article');
        article.setAttribute('id', 'currentVerse')

        let volumeName = document.createElement('h3');
        volumeName.textContent = scriptures.volume_title;

        let bookTitle = document.createElement('h4');
        bookTitle.textContent = scriptures.book_title;

        let chapterNumber = document.createElement('h4');
        chapterNumber.textContent = scriptures.chapter_number;

        let verseNumber = document.createElement('h4');
        verseNumber.textContent = scriptures.verse_number;

        article.appendChild(volumeName);
        article.appendChild(bookTitle);
        article.appendChild(chapterNumber);
        article.appendChild(verseNumber);

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

scriptures = (getScripture('https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/1?lang=eng&id=p1#p1'))

document.querySelector('#scriptures').textContent = scriptures;