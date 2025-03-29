document.addEventListener('DOMContentLoaded', function() {
    // Get all elements
    const contentDisplay = document.getElementById('contentDisplay');
    const jokeBtn = document.getElementById('jokeBtn');
    const quotesBtn = document.getElementById('quotesBtn');
    const riddleBtn = document.getElementById('riddleBtn');
    const challengeBtn = document.getElementById('challengeBtn');
    const riddleText = document.getElementById('riddleText');
    const answerText = document.getElementById('answerText');
    const happyIcon = document.getElementById('happyIcon');
    const sadIcon = document.getElementById('sadIcon');
    const angryIcon = document.getElementById('angryIcon');

    // Content arrays
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
        "If You Can't Make It Good, At Least Make It Look Good. - Bill Gates",
        "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing. - Rumi",
        "It is bad for a young man to sin; but it is worse for an old man to sin. - Abu Bakr (R.A)",
        "If You Are Out To Describe The Truth, Leave Elegance To The Tailor. - Albert Einstein",
        "O man, you are busy working for the world, and the world is busy trying to turn you out. - Abu Bakr (R.A)"
    ];

    const riddles = [
        { question: "What has to be broken before you can use it?", answer: "An egg" },
        { question: "I'm tall when I'm young, and I'm short when I'm old. What am I?", answer: "A candle" },
        { question: "What month of the year has 28 days?", answer: "All of them" },
        { question: "What is full of holes but still holds water?", answer: "A sponge" },
        { question: "The more of this you take, the more you leave behind. What is it?", answer: "Footsteps" }
    ];

    const musicLinks = [
        "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M",
        "https://open.spotify.com/playlist/37i9dQZF1DX7gteqUAT4Yj",
        "https://open.spotify.com/playlist/37i9dQZF1DX1s9coined1fliBy"
    ];

    // Helper function to get random item
    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // Event listeners
    if (jokeBtn) {
        jokeBtn.addEventListener('click', function() {
            const joke = getRandomItem(jokes);
            contentDisplay.innerHTML = `<p>${joke}</p>`;
        });
    }

    if (quotesBtn) {
        quotesBtn.addEventListener('click', function() {
            const quote = getRandomItem(quotes);
            contentDisplay.innerHTML = `<p>${quote}</p>`;
        });
    }

    if (riddleBtn) {
        riddleBtn.addEventListener('click', function() {
            const randomRiddle = getRandomItem(riddles);
            contentDisplay.innerHTML = `<h3>Riddle:</h3><p>${randomRiddle.question}</p>`;
            answerText.textContent = randomRiddle.answer;
            answerText.classList.add("blurred");
        });
    }

    if (answerText) {
        answerText.addEventListener("mouseover", function() {
            answerText.classList.remove("blurred");
        });

        answerText.addEventListener("mouseleave", function() {
            answerText.classList.add("blurred");
        });
    }

    if (challengeBtn) {
        challengeBtn.addEventListener('click', function() {
            const musicLink = getRandomItem(musicLinks);
            contentDisplay.innerHTML = `
                <h3>Music Recommendation</h3>
                <p>Click to open a mood-boosting playlist:</p>
                <a href="${musicLink}" target="_blank" style="color: var(--accent-color); text-decoration: underline;">Open Playlist</a>
            `;
        });
    }

    if (happyIcon) {
        happyIcon.addEventListener('click', function() {
            contentDisplay.innerHTML = `<h2>Happy Mood 😀</h2><p>Keep spreading positivity and joy!</p>`;
        });
    }

    if (sadIcon) {
        sadIcon.addEventListener('click', function() {
            contentDisplay.innerHTML = `<h2>Feeling Down 😢</h2><p>It's okay to not be okay. Take care of yourself.</p>`;
        });
    }

    if (angryIcon) {
        angryIcon.addEventListener('click', function() {
            contentDisplay.innerHTML = `<h2>Angry Moments 😠</h2><p>Take a deep breath. This too shall pass.</p>`;
        });
    }

    // Log to console that everything is loaded
    console.log("Moodify extension loaded successfully!");
});
