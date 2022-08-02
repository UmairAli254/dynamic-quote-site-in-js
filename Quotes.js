"use strict";

let url = "https://type.fit/api/quotes";
url = "Quotes.json";
const quote = document.getElementById("quote");
const author = document.querySelector("#author");
const btn = document.getElementById("btn");

function showQuotes() {
    fetch(url).then(response => response.json()).then(data => {
        // data = JSON.parse(data);//I don't know why I'm getting the data in JavaScript Object form without parsing.
        let num = Math.floor(Math.random() * 1643);
        quote.innerText = data[num].text;

        data[num].author != null ? author.innerText = `- ${data[num].author}` : author.innerText = "- Unknown";

    }).catch((err) => {
        console.log("Error ", err);
    })

}

showQuotes();
btn.addEventListener("click", showQuotes);