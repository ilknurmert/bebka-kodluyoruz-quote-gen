// const getQuote = () => {
//   fetch(
//     "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/"
//   )
//     .then((response) => response.json())
//     .then(
//       (data) =>
//         (document.getElementById("displayQuote").innerHTML =
//           data.quotes[Math.floor(Math.random() * 101)].quote)
//     );
// };

const api = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
twitterLink = document.getElementById("twitterLink");



function getQuote() {
    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            const randomquote = newQuote(data);
            const cleanText = randomquote.quote.replace();
            quote.innerHTML = `${cleanText}`;
            author.innerHTML = ` ${randomquote.character}`;
            
        });
}

function newQuote(data){
    const randomNumber = Math.floor(Math.random() * data.length);
    return data[randomNumber];  
  }


function tweetQuote() {
    tweet = `https://twitter.com/intent/tweet?text=${ quote.innerHTML}-${author.innerHTML}`;
    window.open(tweet, '_blank')
}

btn.addEventListener("click", getQuote);
twitterLink.addEventListener("click", tweetQuote);
