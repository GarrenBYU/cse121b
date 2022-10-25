const d = new Date();

let y = ''

y = d.getFullYear()

document.querySelector('#year').textContent = y

let scriptures = []

async function getScripture(url){
    const response = await fetch(url);

    if(response.ok){
        scriptures = await response.json();
        output(scriptures)
    }
}

scriptures = (getScripture('https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/1?lang=eng&id=p1#p1'))

function output(array){
    array.forEach((scriptures) =>{
        let article = document.createElement('article');
        article.setAttribute('id', 'currentVerse')

        let scripture = document.createElement('p');
        scripture.setAttribute ('src', scripture);
        scripture.setAttribute('alt', "it didnt work");

        article.appendChild(scripture);

        document.querySelector('#scriptures').appendChild(article);
    });
};



document.querySelector('#scriptures').textContent = scriptures;