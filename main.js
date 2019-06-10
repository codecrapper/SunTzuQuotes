import quoteArray from './quotes-data.js';

const quoteButton = document.getElementById('quote-button');
const quoteBox = document.getElementById('quote-box');
const tweetButton = document.getElementById('tweet-button');
const tweetLink = document.getElementById('tweet-link')

quoteButton.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * quoteArray.length)
    quoteBox.innerHTML = quoteArray[randomNumber]
})

tweetButton.addEventListener('click', () => {
    let tweetQuote = quoteBox.textContent
    tweetLink.href=`https://twitter.com/intent/tweet?text=${tweetQuote}%0A%0A+--+Sun+Tzu+via+the+CodeCrapper`
})

