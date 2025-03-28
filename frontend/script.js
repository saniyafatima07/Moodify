document.addEventListener('DOMContentLoaded', () => {
    const contentDisplay = document.getElementById('contentDisplay');
    const jokeBtn = document.getElementById('jokeBtn');
    const quotesBtn = document.getElementById('quotesBtn'); // Make sure this ID is correct!

    // Emoji icon elements
    const happyIcon = document.getElementById('happyIcon');
    const sadIcon = document.getElementById('sadIcon');
    const angryIcon = document.getElementById('angryIcon');

    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "What do you call a fake noodle? An impasta!",
        "Why did the math book look so sad? Because it had too many problems.",
        "I'm on a seafood diet. I see food, and I eat it!",
        "Why don't eggs tell jokes? They'd crack each other up!",
        "What do you call a bear with no teeth? A gummy bear!",
        "Why did the coffee file a police report? Because it got mugged!",
        "What do you call a boomerang that doesn't come back? A stick!"
    ];

    const quotes = [  
        "Your heart is the size of an ocean. Go find yourself in its hidden depths. - Rumi",
        "Thinking is the capital, Enterprise is the way, Hard Work is the solution. - Abdul Kalam",
        "If You Can’t Make It Good, At Least Make It Look Good. - Bill Gates",
        "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing. - Rumi",
        "It is bad for a young man to sin; but it is worse for an old man to sin. - Abu Bakr (R.A)",
        "If You Are Out To Describe The Truth, Leave Elegance To The Tailor. - Albert Einstein",
        "O man, you are busy working for the world, and the world is busy trying to turn you out. - Abu Bakr (R.A)"
    ];

    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // Joke Button Event Listener
    jokeBtn.addEventListener('click', () => {
        const joke = getRandomItem(jokes);
        contentDisplay.innerHTML = `<p>${joke}</p>`;
    });

    // **Quotes Button Event Listener (this was missing!)**
    quotesBtn.addEventListener('click', () => {
        const quote = getRandomItem(quotes);
        contentDisplay.innerHTML = `<p>${quote}</p>`;
    });

    // Emoji Icon Event Listeners
    happyIcon.addEventListener('click', () => {
        contentDisplay.innerHTML = `<h2>Happy Mood 😀</h2><p>Keep spreading positivity and joy!</p>`;
    });

    sadIcon.addEventListener('click', () => {
        contentDisplay.innerHTML = `<h2>Feeling Down 😢</h2><p>It's okay to not be okay. Take care of yourself.</p>`;
    });

    angryIcon.addEventListener('click', () => {
        contentDisplay.innerHTML = `<h2>Angry Moments 😠</h2><p>Take a deep breath. This too shall pass.</p>`;
    });
});
