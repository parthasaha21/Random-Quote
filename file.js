const apiUrl ="https://api.gameofthronesquotes.xyz/v1/random";
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let quoteBtn = document.querySelector(".qut-btn");
let twitterBtn = document.querySelector(".twit-btn");


async function getQupte(url){
   let response = await fetch(url);
   let data = await response.json();
   console.log(data);
   quote.innerHTML = data.sentence;
   author.innerHTML = data.character.name;
}

quoteBtn.addEventListener("click",()=>{
    getQupte(apiUrl);
})

function twitte(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML , "Tweet Window", "width =600 , hight=300")
}

twitterBtn.addEventListener("click",()=>{
    twitte();
})
