const btn = document.getElementById("new");
const soundBtn = document.getElementById("soundBtb")
const Text = document.getElementById("text");
const Author = document.getElementById("author");
async function getRandomQuote() {
    try {
        btn.innerText = 'Loading quote ...';
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        if (response.ok) {
            const randomQuote = {
                text: data.content,
                author: data.author
            };
            Text.textContent = `"${randomQuote.text}"`;
            Author.textContent = `- ${randomQuote.author}`;
            btn.innerText = 'New Quote :)'
        } else {
            console.error(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    //const randomIndex = Math.floor(Math.random() * res.length);
}

function talk() {
    //web speech api
    let sony = new SpeechSynthesisUtterance(`${Text.innerText} ...by ${Author.innerText}`);
    speechSynthesis.speak(sony);
}

getRandomQuote()
talk()