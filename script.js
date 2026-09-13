const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteBtn = document.getElementById("quoteBtn");


async function getQuote() {

    try {

        quote.textContent = "Loading...";
        author.textContent = "";

        const response = await fetch(
            "https://dummyjson.com/quotes/random"
        );

        const data = await response.json();

        quote.textContent = `"${data.quote}"`;

        author.textContent = `— ${data.author}`;

    } 
    catch (error) {

        quote.textContent = "Sorry! Unable to fetch quote.";

        author.textContent = "";

        console.error("Error:", error);
    }
}


quoteBtn.addEventListener("click", getQuote);