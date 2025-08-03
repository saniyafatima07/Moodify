document.addEventListener('DOMContentLoaded', function () {
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
    

    function clearRiddleAnswer() {
    if (answerText) {
        answerText.textContent = "";
        answerText.classList.remove("blurred");
    }
}

    

    const musicLinks = [
        "https://open.spotify.com",
        "https://open.spotify.com/playlist/37i9dQZF1DX7gteqUAT4Yj",
        "https://open.spotify.com/playlist/37i9dQZF1DX1s9coined1fliBy"
    ];

    // Helper function to get random item
    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // Event listeners
    if (jokeBtn) {
        jokeBtn.addEventListener('click', function () {
             clearRiddleAnswer();
            fetch("http://localhost:3000/joke")
            .then(response => response.json())
            .then(data => {
                contentDisplay.innerHTML = `<p>${data.jokes}</p>`;
            })
            .catch(err => {
                contentDisplay.innerHTML = `<p>Jokes are out for a vacation ... Why dont you join them !!</p>`;
                console.error(err);
            });
        });
    }

    if (quotesBtn) {
        quotesBtn.addEventListener('click', function () {
             clearRiddleAnswer();
           fetch("http://localhost:3000/quote")
            .then(response => response.json())
            .then(data => {
                contentDisplay.innerHTML = `<p>${data.quotes}</p>`;
            })
            .catch(err => {
                contentDisplay.innerHTML = `<p>Need inspiration??? ... Look at the world around you !!</p>`;
                console.error(err);
            });
        });
    }

    if (riddleBtn) {
        riddleBtn.addEventListener('click', function () {
            fetch("https://moodify-0403.onrender.com/")
                  .then(res => res.json())
                  .then(data => {
                      contentDisplay.innerHTML = `<h3>Riddle:</h3><p>${data.riddles.question}</p>`;
                      answerText.textContent = data.riddles.answer;
                      answerText.classList.add("blurred");
                  })
                  .catch(err => {
                      contentDisplay.innerHTML = `<p> Wanna test yourself?!Think about the endless questions you had when you were younger .. This is your chance ANSWER THEM !!!</p>`;
                      console.error(err);
                  });
        });
    }

    if (answerText) {
        answerText.addEventListener("mouseover", function () {
            answerText.classList.remove("blurred");
        });

        answerText.addEventListener("mouseleave", function () {
            answerText.classList.add("blurred");
        });
    }

    if (challengeBtn) {
        challengeBtn.addEventListener('click', function () {
             clearRiddleAnswer();
            const musicLink = getRandomItem(musicLinks);
            contentDisplay.innerHTML = `
                <h3>Music Recommendation</h3>
                <p>Click to open a mood-boosting playlist:</p>
                <a href="${musicLink}" target="_blank" style="color: var(--accent-color); text-decoration: underline;">Open Playlist</a>
            `;
        });
    }

    if (happyIcon) {
        happyIcon.addEventListener('click', function () {
             clearRiddleAnswer();
            contentDisplay.innerHTML = `<h2>Happy Mood 😀</h2><p>Keep spreading positivity and joy!</p>`;
        });
    }

    if (sadIcon) {
        sadIcon.addEventListener('click', function () {
             clearRiddleAnswer();
            contentDisplay.innerHTML = `<h2>Feeling Down 😢</h2><p>It's okay to not be okay. Take care of yourself.</p>`;
        });
    }

    if (angryIcon) {
        angryIcon.addEventListener('click', function () {
             clearRiddleAnswer();
            contentDisplay.innerHTML = `<h2>Angry Moments 😠</h2><p>Take a deep breath. This too shall pass.</p>`;
        });
    }
    // Log to console that everything is loaded
    console.log("Moodify extension loaded successfully!");
});
