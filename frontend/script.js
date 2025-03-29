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
        "What do you call a boomerang that doesn't come back? A stick!",
        "What did the fish say when it hit the wall? Dam",
        "What do you call a belt made out of watches?A waist of time",
        "Why can't bicycles stand on their own?They are two tired",
        "How does a train eat?It goes chew, chew",
         "What kind of shoes does a thief wear?Sneakers",
         "What's the best time to go to the dentist?Tooth hurty",
         "Knock knock.Never mind. It's pointless.",
         "Knock knock.No, cows go moo.",
         "What's the best thing about a Boolean?Even if you're wrong, you're only off by a bit.",
         "What's the object-oriented way to become wealthy?Inheritance.",
         "Did you hear about the two silk worms in a race?It ended in a tie",
        "What do you call a laughing motorcycle?A Yamahahahaha.", 
        "Never take advice from electrons.They are always negative.",
        "Can a kangaroo jump higher than the Empire State Building?Of course. The Empire State Building can't jump.",
        "Can February march?No, but April may.",
        "Can I watch the TV?Yes, but don’t turn it on.",
        "Did you hear about the bread factory burning down?They say the business is toast.",
        "Did you hear about the chameleon who couldn't change color?They had a reptile dysfunction.",
        
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
            "How do you get two whales in a car? Start in England and drive West.",
            "How do you know if there’s an elephant under your bed? Your head hits the ceiling!",
            "How do you make a hankie dance? Put a little boogie in it.",
            "How good are you at Power Point? I Excel at it.",
            "How do you organize a space party? You planet.",
            "How do you steal a coat? You jacket.",
            "How do you tell the difference between a crocodile and an alligator? You will see one later and one in a while.",
            "How does a dyslexic poet write? Inverse.",
            "How does a French skeleton say hello? Bone-jour.",
            "How does a penguin build it’s house? Igloos it together.",
            "How does a scientist freshen their breath? With experi-mints!",
            "How does the moon cut his hair? Eclipse it.",
            "How many apples grow on a tree? All of them!",
            "How many bones are in the human hand? A handful of them.",
            "How many hipsters does it take to change a lightbulb? Oh, it's a really obscure number. You've probably never heard of it.",
            "How many kids with ADD does it take to change a lightbulb? Let's go ride bikes!",
            "How many optometrists does it take to change a light bulb? 1 or 2? 1... or 2?",
            "How many seconds are in a year? 12. January 2nd, February 2nd, March 2nd, April 2nd... etc.",
            "How many tickles does it take to tickle an octopus? Ten-tickles!",
            "How much does a hipster weigh? An instagram.",
            "How was the snow globe feeling after the storm? A little shaken.",
            "Is the pool safe for diving? It deep ends.",
            "Is there a hole in your shoe? No… Then how’d you get your foot in it?",
            "What did the spaghetti say to the other spaghetti? Pasta la vista, baby!",
            "What’s 50 Cent’s name in Zimbabwe? 200 Dollars.",
            "Want to hear a chimney joke? Got stacks of em! First one's on the house.",
            "Want to hear a joke about construction? Nah, I'm still working on it.",
            "Want to hear my pizza joke? Never mind, it's too cheesy.",
            "What animal is always at a game of cricket? A bat.",
            "What are the strongest days of the week? Saturday and Sunday... the rest are weekdays.",
            "What biscuit does a short person like? Shortbread.",
            "What cheese can never be yours? Nacho cheese.",
            "What creature is smarter than a talking parrot? A spelling bee.",
            "What did celery say when he broke up with his girlfriend? She wasn't right for me, so I really don't carrot all.",
            "What did Michael Jackson name his denim store? Billy Jeans!",
            "What did one nut say as he chased another nut? I'm a cashew!",
            "What did one plate say to the other plate? Dinner is on me!",
            "What did one snowman say to the other snowman? Do you smell carrot?",
            "What did one wall say to the other wall? I'll meet you at the corner!",
            "What did Romans use to cut pizza before the rolling cutter was invented? Lil Caesars.",
            "What did the 0 say to the 8? Nice belt.",
            "What did the beaver say to the tree? It's been nice gnawing you.",
            "What did the big flower say to the littler flower? Hi, bud!",
            "What did the Buffalo say to his little boy when he dropped him off at school? Bison.",
            "What did the digital clock say to the grandfather clock? Look, no hands!",
            "What did the dog say to the two trees? Bark bark.",
            "What did the Dorito farmer say to the other Dorito farmer? Cool Ranch!",
            "What did the fish say when it swam into a wall? Damn!",
            "What did the grape do when he got stepped on? He let out a little wine.",
            "What did the judge say to the dentist? Do you swear to pull the tooth, the whole tooth and nothing but the tooth?",
            "What did the late tomato say to the early tomato? I’ll ketch up.",
            "What did the left eye say to the right eye? Between us, something smells!",
            "What did the mountain climber name his son? Cliff.",
            "What did the ocean say to the beach? Thanks for all the sediment.",
            "What did the ocean say to the shore? Nothing, it just waved.",
            "Why don't you find hippopotamuses hiding in trees? They're really good at it.",
            "What did the pirate say on his 80th birthday? Aye Matey!",
            "What did the Red light say to the Green light? Don't look at me I'm changing!",
            "What did the scarf say to the hat? You go on ahead, I am going to hang around a bit longer.",
            "What did the shy pebble wish for? That she was a little boulder.",
            "What did the traffic light say to the car as it passed? Don't look I'm changing!",
            "What did the Zen Buddist say to the hotdog vendor? Make me one with everything.",
            "What do birds give out on Halloween? Tweets.",
            "What do I look like? A JOKE MACHINE!?",
            "What do prisoners use to call each other? Cell phones.",
            "What do vegetarian zombies eat? Grrrrrainnnnnssss.",
            "What do you call a bear with no teeth? A gummy bear!",
            "What do you call a bee that lives in America? A USB.",
            "What do you call a boomerang that won't come back? A stick.",
            "What do you call a careful wolf? Aware wolf.",
            "What do you call a cow on a trampoline? A milk shake!",
            "What do you call a cow with two legs? Lean beef.",
            "What do you call a crowd of chess players bragging about their wins in a hotel lobby? Chess nuts boasting in an open foyer.",
            "What do you call a dad that has fallen through the ice? A Popsicle.",
            "What do you call a dictionary on drugs? High definition.",
            "What do you call a dog that can do magic tricks? A labracadabrador.",
            "What do you call a droid that takes the long way around? R2 detour."
          
          
    ];

    const quotes = [  
        "Your heart is the size of an ocean. Go find yourself in its hidden depths. - Rumi",
        "Thinking is the capital, Enterprise is the way, Hard Work is the solution. - Abdul Kalam",
        "If You Can’t Make It Good, At Least Make It Look Good. - Bill Gates",
        "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing. - Rumi",
        "It is bad for a young man to sin; but it is worse for an old man to sin. - Abu Bakr (R.A)",
        "If You Are Out To Describe The Truth, Leave Elegance To The Tailor. - Albert Einstein",
        "O man, you are busy working for the world, and the world is busy trying to turn you out. - Abu Bakr (R.A)",
        
            "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else. - Abdul Kalam",
            "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People. - Abraham Lincoln",
            "I Don'T Believe In Failure. It Is Not Failure If You Enjoyed The Process. - Oprah Winfrey",
            "Do not get elated at any victory, for all such victory is subject to the will of God. - Abu Bakr (R.A)",
            "Wear gratitude like a cloak and it will feed every corner of your life. - Rumi",
            "If you even dream of beating me you'd better wake up and apologize. - Muhammad Ali",
            "I Will Praise Any Man That Will Praise Me. - William Shakespeare",
            "One Of The Greatest Diseases Is To Be Nobody To Anybody. - Mother Teresa",
            "I'm so fast that last night I turned off the light switch in my hotel room and was in bed before the room was dark. - Muhammad Ali",
            "People Must Learn To Hate And If They Can Learn To Hate, They Can Be Taught To Love. - Nelson Mandela",
            "Everyone has been made for some particular work, and the desire for that work has been put in every heart. - Rumi",
            "The less of the World, the freer you live.",
            
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
