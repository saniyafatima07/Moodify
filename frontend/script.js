document.addEventListener("DOMContentLoaded", () => {
    const artistBtn = document.getElementById("artistBtn");
    const contentDisplay = document.getElementById("contentDisplay");
    const jokeBtn = document.getElementById("jokeBtn");
    const quotesBtn = document.getElementById("quotesBtn");
    const happyIcon = document.getElementById("happyIcon");
    const sadIcon = document.getElementById("sadIcon");
    const angryIcon = document.getElementById("angryIcon");
    const musicBtn = document.getElementById("musicBtn");

    const artists = ["Adele", "Ed Sheeran", "Coldplay", "BTS", "Taylor Swift", "Imagine Dragons", "Drake", "Billie Eilish", "Shawn Mendes", "The Weeknd"];

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

    if (jokeBtn && contentDisplay) {
        jokeBtn.addEventListener("click", () => {
            contentDisplay.innerHTML = `<p>${getRandomItem(jokes)}</p>`;
        });
    }

    if (quotesBtn && contentDisplay) {
        quotesBtn.addEventListener("click", () => {
            contentDisplay.innerHTML = `<p>${getRandomItem(quotes)}</p>`;
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        const musicBtn = document.getElementById("musicBtn");
        const contentDisplay = document.getElementById("contentDisplay");

        const artists = ["Adele", "Ed Sheeran", "Coldplay", "BTS", "Taylor Swift", "Imagine Dragons", "Drake", "Billie Eilish", "Shawn Mendes", "The Weeknd"];

        function getRandomItem(array) {
            return array[Math.floor(Math.random() * array.length)];
        }

        if (musicBtn && contentDisplay) {
            musicBtn.addEventListener("click", async () => {
                const artistName = getRandomItem(artists);
                contentDisplay.innerHTML = `<p>Fetching song for ${artistName}...</p>`;

                try {
                    const response = await fetch(`http://localhost:3000/artist/${artistName}`);
                    const artistData = await response.json();

                    if (artistData && artistData.url) {
                        contentDisplay.innerHTML = `
                            <h2>Now Playing: ${artistName}</h2>
                            <p><a href="${artistData.url}" target="_blank">More about ${artistName}</a></p>
                            <audio controls autoplay>
                                <source src="${artistData.url}" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                        `;
                    } else {
                        contentDisplay.innerHTML = `<p>No song available for ${artistName}.</p>`;
                    }
                } catch (error) {
                    console.error("Error fetching song:", error);
                    contentDisplay.innerHTML = "<p>Error playing song. Try again later.</p>";
                }
            });
        }
    });


    if (happyIcon && contentDisplay) {
        happyIcon.addEventListener("click", () => {
            contentDisplay.innerHTML = `<h2>Happy Mood 😀</h2><p>Keep spreading positivity and joy!</p>`;
        });
    }

    if (sadIcon && contentDisplay) {
        sadIcon.addEventListener("click", () => {
            contentDisplay.innerHTML = `<h2>Feeling Down 😢</h2><p>It's okay to not be okay. Take care of yourself.</p>`;
        });
    }

    if (angryIcon && contentDisplay) {
        angryIcon.addEventListener("click", () => {
            contentDisplay.innerHTML = `<h2>Angry Moments 😠</h2><p>Take a deep breath. This too shall pass.</p>`;
        });
    }
});
