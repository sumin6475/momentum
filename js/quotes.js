const quotes = [
  {
    quote: "Life is an experiment. The more experiments you make, the better.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    author: "Charles Darwin",
  },
  {
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    auther: "Will Durant",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "If I have seen further it is by standing on the shoulders of giants.",
    author: "Isaac Newton",
  },
  {
    quote: "Without deviation from the norm, progress is not possible.",
    author: "Frank Zappa",
  },
  {
    quote:
      "Success is stumbling from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote: "The measure of intelligence is the ability to change.",
    author: "Albert Einstein",
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
