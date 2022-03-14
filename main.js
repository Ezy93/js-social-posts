const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=34",
        "author": {
            "name": "Doriana Estebanera",
            "image": null
        },
        "likes": 65,
        "created": "2021-03-03"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=44",
        "author": {
            "name": "Luca Ciuffreda",
            "image": "https://unsplash.it/300/300?image=39",
        },
        "likes": 69,
        "created": "2021-04-01"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=54",
        "author": {
            "name": "Francesco Giordani",
            "image": null
        },
        "likes": 70,
        "created": "2021-01-03"
    },
    {
        "id":9,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=64",
        "author": {
            "name": "Giovanni paolo II",
            "image": "https://unsplash.it/300/300?image=49",
        },
        "likes": 56,
        "created": "2021-01-01"
    },
    {
        "id": 10,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=74",
        "author": {
            "name": "Roland crescimone",
            "image": "https://unsplash.it/300/300?image=59",
        },
        "likes": 87,
        "created": "2021-04-03"
    },
    {
        "id": 11,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=84",
        "author": {
            "name": "Luca Farinola",
            "image": "https://unsplash.it/300/300?image=69",
        },
        "likes": 102,
        "created": "2021-01-01"
    },
    {
        "id": 12,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=94",
        "author": {
            "name": "Bertuccia Cappuccino",
            "image": "https://unsplash.it/300/300?image=79",
        },
        "likes": 150,
        "created": "2020-04-03"
    },
    {
        "id": 13,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=104",
        "author": {
            "name": "Mariagrazia Troiano",
            "image": "https://unsplash.it/300/300?image=89",
        },
        "likes": 89,
        "created": "2021-12-03"
    },
    {
        "id": 14,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=14",
        "author": {
            "name": "Giovannino Di quarto",
            "image": "https://unsplash.it/300/300?image=99"
        },
        "likes": 117,
        "created": "2022-04-03"
    },
    {
        "id": 15,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=114",
        "author": {
            "name": "Esteban De la suerte",
            "image": "https://unsplash.it/300/300?image=109",
        },
        "likes": 502,
        "created": "2021-04-03"
    },
];

/* Descrizione */
/* Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
            id del post, numero progressivo da 1 a n nome autore, foto autore, data in formato americano (mm-gg-yyyy), testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
            Non è necessario creare date casuali, per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)


Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.


Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. 
            Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like. */

const postContainer = document.getElementById("container");
let likeButton = document.getElementsByClassName("like-button  js-like-button");
console.log(likeButton)
const idLikedPost = [];
console.table(idLikedPost);



posts.forEach((element , i) => {
    postContainer.innerHTML += `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">${element.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.content}</div>
            <div class="post__image">
                <img src=${element.media} alt="post image">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div> 
            </div>
    `
    

    setTimeout(() => {
        likeButton.item(i).addEventListener("click", function(){
            likeButton.item(i).classList.add("like-button--liked");
            const likeCounter = document.getElementById(`like-counter-${element.id}`)
            likeCounter.innerHTML = element.likes + 1;
            idLikedPost.push(element.id)
            console.clear()
            console.table(idLikedPost);
        })
        
    },250)
    
    
    
});


