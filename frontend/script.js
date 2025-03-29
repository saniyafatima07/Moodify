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
        "What do you call a boomerang that doesn't come back? A stick!",
        "Did you hear about the submarine industry? It really took a dive...",
        "Did you hear about the scientist who was lab partners with a pot of boiling water? He had a very esteemed colleague.",
        "Did you hear that the police have a warrant out on a midget psychic ripping people off? It reads \"Small medium at large.\"",
        "Did you hear the joke about the wandering nun? She was a roman catholic.",
        "Did you hear the news? FedEx and UPS are merging. They’re going to go by the name Fed-Up from now on.",
        "Did you hear the one about the guy with the broken hearing aid? Neither did he.",
        "Did you know crocodiles could grow up to 15 feet? But most just have 4.",
        "Did you know that protons have mass? I didn't even know they were catholic.",
        "Did you know you should always take an extra pair of pants golfing? Just in case you get a hole in one.",
        "Do I enjoy making courthouse puns? Guilty.",
        "Do you know where you can get chicken broth in bulk? The stock market.",
        "Do you want a brief explanation of what an acorn is? In a nutshell, it's an oak tree.",
        "Ever wondered why bees hum? It's because they don't know the words.",
        "Have you ever heard of a music group called Cellophane? They mostly wrap.",
        "Have you heard of the band 1023MB? They haven't got a gig yet.",
        "Have you heard the rumor going around about butter? Never mind, I shouldn't spread it.",
        "How are false teeth like stars? They come out at night!",
        "How can you tell a vampire has a cold? They start coffin.",
        "How come a man driving a train got struck by lightning? He was a good conductor.",
        "How come the stadium got hot after the game? Because all of the fans left.",
        "How did Darth Vader know what Luke was getting for Christmas? He felt his presents.",
        "How did the hipster burn the roof of his mouth? He ate the pizza before it was cool.",
        "How do hens stay fit? They always egg-cercise!",
        "How do locomotives know where they're going? Lots of training.",
        "How do the trees get on the internet? They log on.",
        "How do you find Will Smith in the snow? Look for fresh prints.",
        "How do you fix a broken pizza? With tomato paste.",
        "How do you fix a damaged jack-o-lantern? You use a pumpkin patch.",
        "How do you get a baby alien to sleep? You rocket.",
        "How do you get two whales in a car? Start in England and drive West."
    ];

    const quotes = [
        "Your heart is the size of an ocean. Go find yourself in its hidden depths. - Rumi",
        "Thinking is the capital, Enterprise is the way, Hard Work is the solution. - Abdul Kalam",
        "If You Can't Make It Good, At Least Make It Look Good. - Bill Gates",
        "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing. - Rumi",
        "It is bad for a young man to sin; but it is worse for an old man to sin. - Abu Bakr (R.A)",
        "If You Are Out To Describe The Truth, Leave Elegance To The Tailor. - Albert Einstein",
        "O man, you are busy working for the world, and the world is busy trying to turn you out. - Abu Bakr (R.A)",

        "The less of the World, the freer you live. - Umar ibn Al-Khattāb (R.A)",
        "Respond to every call that excites your spirit. - Rumi",
        "The Way To Get Started Is To Quit Talking And Begin Doing. - Walt Disney",
        "God Doesn'T Require Us To Succeed, He Only Requires That You Try. - Mother Teresa",
        "Speak any language, Turkish, Greek, Persian, Arabic, but always speak with love. - Rumi",
        "Happiness comes towards those which believe in him. - Ali ibn Abi Talib (R.A)",
        "Knowledge is of two kinds: that which is absorbed and that which is heard. And that which is heard does not profit if it is not absorbed. - Ali ibn Abi Talib (R.A)",
        "When I am silent, I have thunder hidden inside. - Rumi",
        "Technological Progress Is Like An Axe In The Hands Of A Pathological Criminal. - Albert Einstein",
        "No One Would Choose A Friendless Existence On Condition Of Having All The Other Things In The World. - Aristotle",
        "Life is a gamble. You can get hurt, but people die in plane crashes, lose their arms and legs in car accidents; people die every day. Same with fighters: some die, some get hurt, some go on. You just don't let yourself believe it will happen to you. - Muhammad Ali",
        "The End Of Life Is To Be Like God, And The Soul Following God Will Be Like Him. - Socrates",
        "Let us sacrifice our today so that our children can have a better tomorrow. - Abdul Kalam",
        "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it. - Rumi",
        "In every religion there is love, yet love has no religion. - Rumi",
        "Everything in the universe is within you. Ask all from yourself. - Rumi",
        "I'm not a handsome guy, but I can give my hand to someone who needs help. Beauty is in the heart, not in the face. - Abdul Kalam",
        "What Do I Wear In Bed? Why, Chanel No. 5, Of Course. - Marilyn Monroe",
        "A Good Head And A Good Heart Are Always A Formidable Combination. - Nelson Mandela"


    ];

    const riddles = [
        { question: "What has to be broken before you can use it?", answer: "An egg" },
        { question: "I'm tall when I'm young, and I'm short when I'm old. What am I?", answer: "A candle" },
        { question: "What month of the year has 28 days?", answer: "All of them" },
        { question: "What is full of holes but still holds water?", answer: "A sponge" },
        { question: "The more of this you take, the more you leave behind. What is it?", answer: "Footsteps" },
        { question: "The person who makes it, sells it. The person who buys it never uses it. The person who uses it never knows they are using it. What is it?", answer: "A coffin" },
        { question: "What can travel around the world while staying in the same spot?", answer: "A stamp" },
        { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "The letter M" },
        { question: "I have keys but no locks. I have space but no room. You can enter but you can’t go outside. What am I?", answer: "A keyboard" },
        { question: "What has hands but can’t clap?", answer: "A clock" },
        { question: "What has a head, a tail, is brown, and has no legs?", answer: "A penny" },
        { question: "I have branches, but no fruit, trunk, or leaves. What am I?", answer: "A bank" },
        { question: "What begins with T, ends with T, and has T in it?", answer: "A teapot" },
        { question: "The more you take from me, the bigger I get. What am I?", answer: "A hole" },
        { question: "What has an eye but cannot see?", answer: "A needle" },
        { question: "Forward I am heavy, but backward I am not. What am I?", answer: "A ton" }
        { question: "What can you catch but not throw?", answer: "A cold" },
        { question: "What has many keys but can’t open a single lock?", answer: "A piano" },
        { question: "What runs all around a backyard, yet never moves?", answer: "A fence" },
        { question: "What has words but never speaks?", answer: "A book" },
        { question: "I am an odd number. Take away one letter, and I become even. What am I?", answer: "Seven" },
        { question: "What has ears but can’t hear?", answer: "A cornfield" },
        { question: "If two’s company, and three’s a crowd, what are four and five?", answer: "Nine" }
    ];

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
            const joke = getRandomItem(jokes);
            contentDisplay.innerHTML = `<p>${joke}</p>`;
        });
    }

    if (quotesBtn) {
        quotesBtn.addEventListener('click', function () {
            const quote = getRandomItem(quotes);
            contentDisplay.innerHTML = `<p>${quote}</p>`;
        });
    }

    if (riddleBtn) {
        riddleBtn.addEventListener('click', function () {
            const randomRiddle = getRandomItem(riddles);
            contentDisplay.innerHTML = `<h3>Riddle:</h3><p>${randomRiddle.question}</p>`;
            answerText.textContent = randomRiddle.answer;
            answerText.classList.add("blurred");
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
            contentDisplay.innerHTML = `<h2>Happy Mood 😀</h2><p>Keep spreading positivity and joy!</p>`;
        });
    }

    if (sadIcon) {
        sadIcon.addEventListener('click', function () {
            contentDisplay.innerHTML = `<h2>Feeling Down 😢</h2><p>It's okay to not be okay. Take care of yourself.</p>`;
        });
    }

    if (angryIcon) {
        angryIcon.addEventListener('click', function () {
            contentDisplay.innerHTML = `<h2>Angry Moments 😠</h2><p>Take a deep breath. This too shall pass.</p>`;
        });
    }

    // Log to console that everything is loaded
    console.log("Moodify extension loaded successfully!");
});
