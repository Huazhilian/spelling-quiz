// Spelling Quiz Application

// Word lists by difficulty and category
const wordLists = {
    easy: {
        general: [
            { word: "apple", hint: "A common fruit that is red or green" },
            { word: "happy", hint: "Feeling joy or pleasure" },
            { word: "house", hint: "A building where people live" },
            { word: "water", hint: "A clear liquid that falls as rain" },
            { word: "friend", hint: "A person you like and enjoy spending time with" },
            { word: "school", hint: "A place where children go to learn" },
            { word: "family", hint: "A group of people who are related" },
            { word: "garden", hint: "An area where plants are grown" },
            { word: "summer", hint: "The warmest season of the year" },
            { word: "pencil", hint: "A tool used for writing or drawing" }
        ],
        animals: [
            { word: "dog", hint: "A common pet that barks" },
            { word: "cat", hint: "A small pet that meows" },
            { word: "bird", hint: "An animal with feathers that can fly" },
            { word: "fish", hint: "An animal that lives in water" },
            { word: "rabbit", hint: "A small animal with long ears" },
            { word: "horse", hint: "A large animal that people can ride" },
            { word: "tiger", hint: "A large wild cat with stripes" },
            { word: "snake", hint: "A long reptile with no legs" },
            { word: "frog", hint: "A small green animal that jumps and lives near water" },
            { word: "bear", hint: "A large wild animal with thick fur" }
        ],
        food: [
            { word: "bread", hint: "A basic food made from flour" },
            { word: "milk", hint: "A white drink that comes from cows" },
            { word: "pizza", hint: "A round food with cheese and toppings" },
            { word: "cake", hint: "A sweet dessert for celebrations" },
            { word: "soup", hint: "A liquid food often eaten with a spoon" },
            { word: "egg", hint: "A food that comes from chickens" },
            { word: "rice", hint: "Small white grains eaten as food" },
            { word: "meat", hint: "Food that comes from animals" },
            { word: "fruit", hint: "Sweet food that grows on trees or plants" },
            { word: "candy", hint: "Sweet treats that children love" }
        ]
    },
    medium: {
        general: [
            { word: "beautiful", hint: "Pleasing to the senses or mind" },
            { word: "knowledge", hint: "Information and skills acquired through experience" },
            { word: "adventure", hint: "An exciting or unusual experience" },
            { word: "important", hint: "Of great significance or value" },
            { word: "different", hint: "Not the same as another or each other" },
            { word: "question", hint: "A sentence worded to elicit information" },
            { word: "mountain", hint: "A large natural elevation of the earth's surface" },
            { word: "language", hint: "The method of human communication" },
            { word: "exercise", hint: "Activity requiring physical effort" },
            { word: "vacation", hint: "A period of time devoted to pleasure or rest" }
        ],
        science: [
            { word: "chemistry", hint: "The study of substances and their interactions" },
            { word: "biology", hint: "The study of living organisms" },
            { word: "physics", hint: "The study of matter, energy, and their interactions" },
            { word: "experiment", hint: "A scientific procedure to test a hypothesis" },
            { word: "molecule", hint: "A group of atoms bonded together" },
            { word: "telescope", hint: "An instrument used to view distant objects" },
            { word: "microscope", hint: "An instrument used to view very small objects" },
            { word: "scientist", hint: "A person who conducts scientific research" },
            { word: "laboratory", hint: "A place equipped for scientific experiments" },
            { word: "discovery", hint: "Finding something for the first time" }
        ],
        geography: [
            { word: "country", hint: "A nation with its own government" },
            { word: "continent", hint: "One of the main landmasses on Earth" },
            { word: "ocean", hint: "A very large expanse of sea" },
            { word: "climate", hint: "The weather conditions in an area" },
            { word: "island", hint: "A piece of land surrounded by water" },
            { word: "desert", hint: "A barren area with little precipitation" },
            { word: "volcano", hint: "A mountain that can erupt with lava" },
            { word: "capital", hint: "The city where a country's government is located" },
            { word: "equator", hint: "An imaginary line dividing Earth into Northern and Southern Hemispheres" },
            { word: "peninsula", hint: "A piece of land almost surrounded by water" }
        ]
    },
    hard: {
        general: [
            { word: "extraordinary", hint: "Very unusual or remarkable" },
            { word: "sophisticated", hint: "Developed to a high degree of complexity" },
            { word: "conscientious", hint: "Careful and thorough in one's work" },
            { word: "phenomenon", hint: "A fact or situation that is observed to exist" },
            { word: "exaggerate", hint: "To represent something as being larger or greater than it is" },
            { word: "necessary", hint: "Required to be done or present" },
            { word: "occasionally", hint: "At infrequent or irregular intervals" },
            { word: "particularly", hint: "To a higher degree than is usual" },
            { word: "immediately", hint: "At once; instantly" },
            { word: "pronunciation", hint: "The way in which a word is pronounced" }
        ],
        literature: [
            { word: "metaphor", hint: "A figure of speech comparing two unlike things" },
            { word: "protagonist", hint: "The main character in a story" },
            { word: "narrative", hint: "A spoken or written account of connected events" },
            { word: "alliteration", hint: "The occurrence of the same letter at the beginning of adjacent words" },
            { word: "personification", hint: "Attribution of human characteristics to non-human things" },
            { word: "symbolism", hint: "The use of symbols to represent ideas" },
            { word: "onomatopoeia", hint: "Words that imitate the sound they describe" },
            { word: "foreshadowing", hint: "A warning or indication of a future event in a story" },
            { word: "hyperbole", hint: "Exaggerated statements not meant to be taken literally" },
            { word: "irony", hint: "The expression of meaning using language that normally signifies the opposite" }
        ],
        medical: [
            { word: "diagnosis", hint: "The identification of an illness or disease" },
            { word: "pharmaceutical", hint: "Relating to medicinal drugs" },
            { word: "anesthesia", hint: "Loss of sensation induced for medical purposes" },
            { word: "psychiatry", hint: "The study and treatment of mental illness" },
            { word: "hemorrhage", hint: "An escape of blood from a ruptured blood vessel" },
            { word: "pneumonia", hint: "Inflammation of the lungs caused by infection" },
            { word: "rheumatism", hint: "Any disease marked by inflammation and pain in muscles or joints" },
            { word: "ophthalmology", hint: "The branch of medicine concerned with the eye" },
            { word: "cardiology", hint: "The branch of medicine relating to the heart" },
            { word: "orthopedic", hint: "Relating to the correction of deformities of bones or muscles" }
        ]
    }
};

// Audio accents available
const accents = [
    { name: "US English", code: "en-US" },
    { name: "British English", code: "en-GB" },
    { name: "Australian English", code: "en-AU" },
    { name: "Indian English", code: "en-IN" }
];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const scoreEl = document.getElementById('score');
const playBtn = document.getElementById('play-btn');
const hintBtn = document.getElementById('hint-btn');
const hintEl = document.getElementById('hint');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const finalScoreEl = document.getElementById('final-score');
const maxScoreEl = document.getElementById('max-score');
const accuracyEl = document.getElementById('accuracy');
const reviewListEl = document.getElementById('review-list');
const restartBtn = document.getElementById('restart-btn');

// Quiz state
let currentDifficulty = 'easy';
let currentCategory = 'general';
let currentAccent = accents[0];
let currentWords = [];
let currentWordIndex = 0;
let score = 0;
let missedWords = [];
let quizStartTime;
let wordStartTime;
let stats = {
    totalQuizzes: 0,
    totalWords: 0,
    correctWords: 0,
    averageAccuracy: 0,
    averageTime: 0,
    bestScore: 0
};

// Initialize the application
function init() {
    // Add event listeners
    startBtn.addEventListener('click', startQuiz);
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', () => selectDifficulty(btn.id));
    });
    playBtn.addEventListener('click', playCurrentWord);
    hintBtn.addEventListener('click', showHint);
    submitBtn.addEventListener('click', checkAnswer);
    answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkAnswer();
    });
    nextBtn.addEventListener('click', nextWord);
    restartBtn.addEventListener('click', resetQuiz);

    // Add category selector to start screen
    addCategorySelector();
    
    // Add accent selector to start screen
    addAccentSelector();
    
    // Load stats from localStorage if available
    loadStats();
    
    // Initialize speech synthesis
    if ('speechSynthesis' in window) {
        console.log('Speech synthesis supported');
    } else {
        console.log('Speech synthesis not supported');
        alert('Your browser does not support speech synthesis. Some features may not work.');
    }
}

// Add category selector to the start screen
function addCategorySelector() {
    const categorySelector = document.createElement('div');
    categorySelector.className = 'category-selector';
    categorySelector.innerHTML = `
        <h3>Select Category:</h3>
        <div class="category-buttons">
            <button id="general" class="category-btn selected">General</button>
            <button id="animals" class="category-btn">Animals</button>
            <button id="food" class="category-btn">Food</button>
            <button id="science" class="category-btn">Science</button>
            <button id="geography" class="category-btn">Geography</button>
            <button id="literature" class="category-btn">Literature</button>
            <button id="medical" class="category-btn">Medical</button>
        </div>
    `;
    
    // Insert after difficulty selector
    const difficultySelector = document.querySelector('.difficulty-selector');
    difficultySelector.parentNode.insertBefore(categorySelector, difficultySelector.nextSibling);
    
    // Add event listeners to category buttons
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => selectCategory(btn.id));
    });
}

// Add accent selector to the start screen
function addAccentSelector() {
    const accentSelector = document.createElement('div');
    accentSelector.className = 'accent-selector';
    accentSelector.innerHTML = `
        <h3>Select Accent:</h3>
        <div class="accent-buttons">
            ${accents.map((accent, index) => `
                <button id="accent-${index}" class="accent-btn ${index === 0 ? 'selected' : ''}">${accent.name}</button>
            `).join('')}
        </div>
    `;
    
    // Insert after category selector
    const categorySelector = document.querySelector('.category-selector');
    categorySelector.parentNode.insertBefore(accentSelector, categorySelector.nextSibling);
    
    // Add event listeners to accent buttons
    const accentBtns = document.querySelectorAll('.accent-btn');
    accentBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => selectAccent(index));
    });
}

// Select difficulty level
function selectDifficulty(difficulty) {
    currentDifficulty = difficulty;
    
    // Update UI
    difficultyBtns.forEach(btn => {
        btn.classList.remove('selected');
    });
    document.getElementById(difficulty).classList.add('selected');
    
    // Update available categories based on difficulty
    updateAvailableCategories();
}

// Update available categories based on selected difficulty
function updateAvailableCategories() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        const category = btn.id;
        if (wordLists[currentDifficulty][category]) {
            btn.disabled = false;
            btn.style.opacity = 1;
        } else {
            btn.disabled = true;
            btn.style.opacity = 0.5;
            if (category === currentCategory) {
                // If current category is not available in new difficulty, switch to general
                selectCategory('general');
            }
        }
    });
}

// Select category
function selectCategory(category) {
    currentCategory = category;
    
    // Update UI
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.classList.remove('selected');
    });
    document.getElementById(category).classList.add('selected');
}

// Select accent
function selectAccent(index) {
    currentAccent = accents[index];
    
    // Update UI
    const accentBtns = document.querySelectorAll('.accent-btn');
    accentBtns.forEach(btn => {
        btn.classList.remove('selected');
    });
    document.getElementById(`accent-${index}`).classList.add('selected');
}

// Start the quiz
// ... existing code ...

// Add this common words database right after your existing wordLists
const commonWordsDatabase = {
    easy: [
        { word: "time", hint: "What we measure with clocks" },
        { word: "year", hint: "365 days" },
        { word: "people", hint: "Human beings in general" },
        { word: "way", hint: "A method, style, or manner of doing something" },
        { word: "day", hint: "The time between sunrise and sunset" },
        { word: "man", hint: "An adult male human" },
        { word: "thing", hint: "An object or item" },
        { word: "woman", hint: "An adult female human" },
        { word: "life", hint: "The state of being alive" },
        { word: "child", hint: "A young human being" },
        { word: "world", hint: "The earth and all the people on it" },
        { word: "state", hint: "A nation or territory with its own government" },
        { word: "family", hint: "A group of related people" },
        { word: "student", hint: "A person who is studying" },
        { word: "book", hint: "Bound pages with writing or images" }
    ],
    medium: [
        { word: "government", hint: "The group of people with authority to govern a country" },
        { word: "system", hint: "A set of connected things working together" },
        { word: "program", hint: "A plan of activities or procedures" },
        { word: "question", hint: "A sentence worded to elicit information" },
        { word: "business", hint: "The practice of making money by selling goods or services" },
        { word: "company", hint: "A commercial business" },
        { word: "number", hint: "A mathematical value" },
        { word: "group", hint: "A number of people or things together" },
        { word: "problem", hint: "A matter that is difficult to deal with" },
        { word: "service", hint: "Help or work done for others" },
        { word: "experience", hint: "Knowledge or skill from doing something" },
        { word: "information", hint: "Facts provided about something" },
        { word: "education", hint: "The process of receiving instruction" },
        { word: "research", hint: "Systematic investigation to establish facts" },
        { word: "development", hint: "The process of growing or being developed" }
    ],
    hard: [
        { word: "environment", hint: "The surroundings in which a person, animal, or plant lives" },
        { word: "opportunity", hint: "A favorable time or circumstance" },
        { word: "administration", hint: "The management of public affairs" },
        { word: "responsibility", hint: "The state of being accountable for something" },
        { word: "significant", hint: "Sufficiently great or important" },
        { word: "particularly", hint: "To a higher degree than is usual" },
        { word: "organization", hint: "An organized group of people with a purpose" },
        { word: "immediately", hint: "At once; instantly" },
        { word: "consideration", hint: "Careful thought about something" },
        { word: "relationship", hint: "The way in which two or more people are connected" },
        { word: "extraordinary", hint: "Very unusual or remarkable" },
        { word: "sophisticated", hint: "Developed to a high degree of complexity" },
        { word: "conscientious", hint: "Careful and thorough in one's work" },
        { word: "phenomenon", hint: "A fact or situation that is observed to exist" },
        { word: "exaggerate", hint: "To represent something as being larger than it is" }
    ]
};

// Modify the startQuiz function to include common words
function startQuiz() {
    // Hide start screen, show quiz screen
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    // Get words for selected difficulty and category
    let selectedWords = [];
    
    // Get category-specific words if available
    if (wordLists[currentDifficulty][currentCategory]) {
        selectedWords = [...wordLists[currentDifficulty][currentCategory]];
    } else {
        // Fallback to general category if selected category is not available
        selectedWords = [...wordLists[currentDifficulty].general];
    }
    
    // Add common words from the database for the selected difficulty
    if (commonWordsDatabase[currentDifficulty]) {
        selectedWords = selectedWords.concat(commonWordsDatabase[currentDifficulty]);
    }
    
    // Shuffle words to get random order
    shuffleArray(selectedWords);
    
    // Limit to 10 words for the quiz
    currentWords = selectedWords.slice(0, 10);
    
    // Reset quiz state
    currentWordIndex = 0;
    score = 0;
    missedWords = [];
    quizStartTime = new Date();
    
    // Update UI
    totalQuestionsEl.textContent = currentWords.length;
    currentQuestionEl.textContent = currentWordIndex + 1;
    scoreEl.textContent = score;
    
    // Focus on play button
    playBtn.focus();
    
    // Start with first word
    prepareWord();
}

// Prepare the current word
function prepareWord() {
    // Reset UI
    answerInput.value = '';
    answerInput.disabled = false;
    submitBtn.disabled = false;
    feedbackEl.classList.add('hidden');
    nextBtn.classList.add('hidden');
    hintEl.classList.add('hidden');
    
    // Set hint
    hintEl.textContent = currentWords[currentWordIndex].hint;
    
    // Record start time for this word
    wordStartTime = new Date();
    
    // Auto-play the word
    setTimeout(playCurrentWord, 500);
    
    // Focus on answer input
    setTimeout(() => answerInput.focus(), 800);
}

// Play the current word using speech synthesis
function playCurrentWord() {
    if (!('speechSynthesis' in window)) return;
    
    const word = currentWords[currentWordIndex].word;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = currentAccent.code;
    utterance.rate = 0.8; // Slightly slower for clarity
    
    speechSynthesis.cancel(); // Cancel any ongoing speech
    speechSynthesis.speak(utterance);
}

// Show hint for the current word
function showHint() {
    hintEl.classList.remove('hidden');
}

// Check the user's answer
function checkAnswer() {
    if (answerInput.value.trim() === '') return;
    
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = currentWords[currentWordIndex].word.toLowerCase();
    const isCorrect = userAnswer === correctAnswer;
    
    // Disable input and submit button
    answerInput.disabled = true;
    submitBtn.disabled = true;
    
    // Show feedback
    feedbackEl.classList.remove('hidden');
    if (isCorrect) {
        feedbackEl.textContent = 'Correct! 🎉';
        feedbackEl.className = 'feedback correct';
        score++;
        scoreEl.textContent = score;
    } else {
        feedbackEl.textContent = `Incorrect. The correct spelling is "${correctAnswer}".`;
        feedbackEl.className = 'feedback incorrect';
        
        // Add to missed words
        missedWords.push({
            word: currentWords[currentWordIndex].word,
            userAnswer: userAnswer
        });
    }
    
    // Show next button
    nextBtn.classList.remove('hidden');
    nextBtn.focus();
}

// Move to the next word
function nextWord() {
    currentWordIndex++;
    
    if (currentWordIndex < currentWords.length) {
        // Update progress
        currentQuestionEl.textContent = currentWordIndex + 1;
        
        // Prepare next word
        prepareWord();
    } else {
        // End of quiz
        showResults();
    }
}

// Reset quiz to start screen
function resetQuiz() {
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
    
    // Reset input fields and clear any previous feedback
    answerInput.value = '';
    feedbackEl.classList.add('hidden');
    hintEl.classList.add('hidden');
    
    // Update statistics on the homepage to show latest results
    updateStatistics();
}

// Show quiz results
function showResults() {
    // Hide quiz screen, show results screen
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    // Calculate quiz time
    const quizEndTime = new Date();
    const quizTimeInSeconds = Math.floor((quizEndTime - quizStartTime) / 1000);
    
    // Calculate accuracy
    const accuracy = Math.round((score / currentWords.length) * 100);
    
    // Update stats
    stats.totalQuizzes++;
    stats.totalWords += currentWords.length;
    stats.correctWords += score;
    stats.averageAccuracy = Math.round((stats.correctWords / stats.totalWords) * 100);
    stats.averageTime = Math.round((stats.averageTime * (stats.totalQuizzes - 1) + quizTimeInSeconds) / stats.totalQuizzes);
    stats.bestScore = Math.max(stats.bestScore, score);
    
    // Save stats
    saveStats();
    
    // Save detailed quiz history
    saveQuizHistory(score, currentWords.length, quizTimeInSeconds, missedWords);
    
    // Update UI
    finalScoreEl.textContent = score;
    maxScoreEl.textContent = currentWords.length;
    accuracyEl.textContent = accuracy;
    
    // Add stats to results screen
    addStatsToResults(quizTimeInSeconds);
    
    // Show missed words for review
    showMissedWords();
    
    // Add auto-return to homepage after 10 seconds
    const autoReturnTimer = setTimeout(() => {
        resetQuiz();
    }, 10000); // 10 seconds
    
    // Clear the timer if user clicks restart button manually
    restartBtn.addEventListener('click', () => {
        clearTimeout(autoReturnTimer);
    }, { once: true });
}

// Improved function to save quiz history with more details
function saveQuizHistory(score, totalQuestions, timeInSeconds, missedWords) {
    // Get existing history or initialize empty array
    let quizHistory = JSON.parse(localStorage.getItem('quizHistory')) || [];
    
    // Create new quiz result entry with more details
    const quizResult = {
        date: new Date().toISOString(),
        difficulty: currentDifficulty,
        category: currentCategory,
        accent: currentAccent.name,
        score: score,
        totalQuestions: totalQuestions,
        accuracy: Math.round((score / totalQuestions) * 100),
        timeInSeconds: timeInSeconds,
        missedWords: missedWords.map(item => ({
            word: item.word,
            userAnswer: item.userAnswer
        }))
    };
    
    // Add to history (limit to last 50 quizzes to prevent localStorage overflow)
    quizHistory.push(quizResult);
    if (quizHistory.length > 50) {
        quizHistory = quizHistory.slice(-50);
    }
    
    // Save back to localStorage
    localStorage.setItem('quizHistory', JSON.stringify(quizHistory));
    
    // Update statistics on homepage
    updateStatistics();
}

// Enhanced function to update statistics on the homepage
function updateStatistics() {
    const quizHistory = JSON.parse(localStorage.getItem('quizHistory')) || [];
    
    // If no history, set default values
    if (quizHistory.length === 0) {
        document.getElementById('total-quizzes').textContent = '0';
        document.getElementById('average-score').textContent = '0%';
        document.getElementById('highest-score').textContent = '0%';
        document.getElementById('total-words').textContent = '0';
        return;
    }
    
    // Calculate more detailed statistics
    const totalQuizzes = quizHistory.length;
    
    let totalScore = 0;
    let highestScore = 0;
    let totalWordsAttempted = 0;
    let recentTrend = [];
    
    quizHistory.forEach(quiz => {
        totalScore += quiz.accuracy;
        highestScore = Math.max(highestScore, quiz.accuracy);
        totalWordsAttempted += quiz.totalQuestions;
        
        // Track last 5 quizzes for trend analysis
        if (quizHistory.length - quizHistory.indexOf(quiz) <= 5) {
            recentTrend.push(quiz.accuracy);
        }
    });
    
    const averageScore = Math.round(totalScore / totalQuizzes);
    
    // Update the DOM with statistics
    document.getElementById('total-quizzes').textContent = totalQuizzes;
    document.getElementById('average-score').textContent = averageScore + '%';
    document.getElementById('highest-score').textContent = highestScore + '%';
    document.getElementById('total-words').textContent = totalWordsAttempted;
    
    // You could add more statistics to the UI if desired
    // For example, showing improvement trend based on recentTrend array
}

// Initialize statistics when the page loads
document.addEventListener('DOMContentLoaded', function() {
    init();
    updateStatistics();
});

// Add stats to results screen
function addStatsToResults(quizTimeInSeconds) {
    // Create stats container if it doesn't exist
    let statsContainer = document.querySelector('.stats-container');
    if (!statsContainer) {
        statsContainer = document.createElement('div');
        statsContainer.className = 'stats-container';
        statsContainer.innerHTML = '<h3>Your Statistics:</h3>';
        
        const statsGrid = document.createElement('div');
        statsGrid.className = 'stats-grid';
        statsContainer.appendChild(statsGrid);
        
        // Insert before review container
        const reviewContainer = document.querySelector('.review-container');
        reviewContainer.parentNode.insertBefore(statsContainer, reviewContainer);
    }
    
    // Update stats grid
    const statsGrid = statsContainer.querySelector('.stats-grid');
    statsGrid.innerHTML = `
        <div class="stat-item">
            <div class="stat-value">${formatTime(quizTimeInSeconds)}</div>
            <div class="stat-label">Quiz Time</div>
        </div>
        <div class="stat-item">
            <div class="stat-value">${stats.totalQuizzes}</div>
            <div class="stat-label">Quizzes Taken</div>
        </div>
        <div class="stat-item">
            <div class="stat-value">${stats.bestScore}</div>
            <div class="stat-label">Best Score</div>
        </div>
        <div class="stat-item">
            <div class="stat-value">${stats.averageAccuracy}%</div>
            <div class="stat-label">Average Accuracy</div>
        </div>
    `;
}

// Format time in MM:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Show missed words for review
function showMissedWords() {
    reviewListEl.innerHTML = '';
    
    if (missedWords.length === 0) {
        reviewListEl.innerHTML = '<li>Perfect score! No words to review.</li>';
        return;
    }
    
    missedWords.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="word">${item.word}</span>
            <span class="user-answer">${item.userAnswer}</span>
            <span class="correct-answer">${item.word}</span>
            <button class="btn play-word-btn">🔊</button>
        `;
        reviewListEl.appendChild(li);
        
        // Add event listener to play button
        const playWordBtn = li.querySelector('.play-word-btn');
        playWordBtn.addEventListener('click', () => {
            playWord(item.word);
        });
    });
}

// Play a specific word
function playWord(word) {
    if (!('speechSynthesis' in window)) return;
    
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = currentAccent.code;
    utterance.rate = 0.8;
    
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}

// Load stats from localStorage
function loadStats() {
    const savedStats = localStorage.getItem('spellingQuizStats');
    if (savedStats) {
        stats = JSON.parse(savedStats);
    }
}

// Save stats to localStorage
function saveStats() {
    localStorage.setItem('spellingQuizStats', JSON.stringify(stats));
}

// Utility function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// This function is redundant with saveQuizHistory and can be removed
// The saveQuizHistory function already handles saving quiz results with more details

// This function is already defined above, so we're removing the duplicate

// Call this function when the page loads to display statistics
document.addEventListener('DOMContentLoaded', function() {
    updateStatistics();
    // Note: The main initialization is already handled in the init() function
});

// Note: The saveQuizResults function is redundant as we already have saveQuizHistory
// which handles saving quiz results with more details