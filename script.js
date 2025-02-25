document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: 'What is the capital of India?', answer: 'Delhi' },
        { question: 'Who is CEO of Tesla?', answer: 'Elon Musk' },
        { question: 'The iPhone was created by which company?', answer: 'Apple' },
        { question: 'How many Harry Potter books are there?', answer: '7' },
        { question: 'How many colors are there in a rainbow?', answer: '7' },
        { question: 'What is the largest mammal in the world?', answer: 'Blue Whale' },
        { question: 'What is the currency of Japan?', answer: 'Yen' },
        { question: 'What is the capital of Australia?', answer: 'Canberra' },
        { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
        { question: 'What is the smallest planet in our solar system?', answer: 'Mercury' },
        { question: 'What is the currency of China?', answer: 'Yuan' },
        { question: 'What is the capital of Brazil?', answer: 'Brasília' },
        { question: 'What is the currency of Russia?', answer: 'Ruble' },
        { question: 'What is the capital of Canada?', answer: 'Ottawa' },
        { question: 'What is the currency of South Korea?', answer: 'Won' },
        { question: 'What is the capital of South Africa?', answer: 'Pretoria' },
        { question: 'How many planets are there in our solar system?', answer: '8' },
        { question: 'Which country is known as the Land of the Rising Sun?', answer: 'Japan' },
        { question: 'What is 300 + 5789430?', answer: '5789730' },
        { question: 'What is 100 - 37?', answer: '63' }
    ];

    let currentCard = 0;
    let score = 0;
    const totalQuestions = flashcards.length;

    const flashcardElement = document.getElementById('flashcard');
    const frontElement = document.getElementById('question');
    const backElement = document.getElementById('answer');
    const answerInput = document.getElementById('answer-input');
    const submitAnswerBtn = document.getElementById('submit-answer');
    const flipCardBtn = document.getElementById('flip-card');
    const nextCardBtn = document.getElementById('next-card');
    const scoreDisplay = document.getElementById('score-display');
    const feedbackElement = document.getElementById('feedback');
    const finalScoreElement = document.getElementById('final-score');
    const finalScoreText = document.getElementById('final-score-text');
    const restartBtn = document.getElementById('restart');

    function displayCard() {
        if (currentCard < totalQuestions) {
            // Display the question on the front of the card
            frontElement.textContent = flashcards[currentCard].question;
            backElement.textContent = flashcards[currentCard].answer;
            answerInput.value = '';
            feedbackElement.textContent = '';
            flashcardElement.classList.remove('is-flipped');
            flipCardBtn.disabled = true; // Disable flip button until answer is submitted
            nextCardBtn.disabled = true; // Disable next button until answer is submitted
            scoreDisplay.textContent = `Score: ${score} / ${totalQuestions}`;
        } else {
            // Quiz completed
            flashcardElement.style.display = 'none';
            answerInput.style.display = 'none';
            submitAnswerBtn.style.display = 'none';
            flipCardBtn.style.display = 'none';
            nextCardBtn.style.display = 'none';
            finalScoreElement.style.display = 'block';
            finalScoreText.textContent = `Your Final Score: ${score} / ${totalQuestions}`;
        }
    }

    submitAnswerBtn.addEventListener('click', () => {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = flashcards[currentCard].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            score++;
            feedbackElement.textContent = 'Correct!';
            feedbackElement.className = 'correct';
        } else {
            feedbackElement.textContent = 'Wrong!';
            feedbackElement.className = 'wrong';
        }

        flipCardBtn.disabled = false; // Enable the flip button after submission
        nextCardBtn.disabled = false; // Enable the next button after submission
    });

    flipCardBtn.addEventListener('click', () => {
        flashcardElement.classList.toggle('is-flipped'); // Flip the card to show the answer
    });

    nextCardBtn.addEventListener('click', () => {
        currentCard++;
        displayCard(); // Move to the next card
    });

    restartBtn.addEventListener('click', () => {
        currentCard = 0;
        score = 0;
        flashcardElement.style.display = 'block';
        answerInput.style.display = 'block';
        submitAnswerBtn.style.display = 'block';
        flipCardBtn.style.display = 'block';
        nextCardBtn.style.display = 'block';
        finalScoreElement.style.display = 'none';
        displayCard(); // Reset the quiz
    });

    displayCard(); // Initialize the first card
});