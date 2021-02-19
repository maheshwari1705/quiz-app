import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Parliamentary Government” is also known as....',
			answerOptions: [
				{ answerText: 'Cabinet Government', isCorrect: false },
				{ answerText: 'Responsible Government', isCorrect: false },
				{ answerText: 'Westminster forms of government', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'Which of the following characteristics is not related to Parliamentary Government?',
			answerOptions: [
				{ answerText: 'Resolution of lower house', isCorrect: false },
				{ answerText: 'Collective liability', isCorrect: false },
				{ answerText: 'Leadership of the Prime Minister', isCorrect: false },
				{ answerText: 'Single Executive', isCorrect: true },
			],
		},
		{
			questionText: ' Which of the following is not the merit of the Presidential System?',
			answerOptions: [
				{ answerText: ' Permanent Government', isCorrect: false },
				{ answerText: 'Confirmation in policies', isCorrect: false },
				{ answerText: 'Limited Representation', isCorrect: true },
				{ answerText: 'Government by experts', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is a demerit of the Parliamentary System?',
			answerOptions: [
				{ answerText: 'Compressed representation1', isCorrect: false },
				{ answerText: 'Uncertainty of policies', isCorrect: false },
				{ answerText: 'Temporary Government', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'Who was the founder of the Theosophical Society in india and started the home Rule League?',
			answerOptions: [
				{answerText: 'Annie Besant', isCorrect: true },
				{answerText: 'Acharya Narendra Dev', isCorrect: false},
				{answerText: 'Lal-Bal-Pal', isCorrect: false},
				{answerText: 'None of the above', isCorrect: false},
			],
		},
		{
			questionText: 'Who among the following known as Pocket Hercules?',
			answerOptions:[
				{answerText: 'Mike Tyson', isCorrect: false},
				{answerText: 'Manohar Aich', isCorrect: true},
				{answerText: 'Manotosh Roy', isCorrect: false},
				{answerText: 'Muhammad Ali', isCorrect: false},
			],
		},
		{
			questionText: 'The first Women External Affair Minister of india Was :',
			answerOptions:[
				{answerText: 'Sushma Swaraj', isCorrect: false},
				{answerText: 'Jayalalitha', isCorrect: false},
				{answerText: 'Pratibha Patil', isCorrect: false},
				{answerText:'Indira Gandhi', isCorrect: true},
			],
		},
		{
			questionText: 'Who is currently (2016) the Vice President of india?',
			answerOptions:[
				{answerText: 'Ms.Pratibha Patil', isCorrect: false },
				{answerText:'Mohammad Hamid Ansari', isCorrect: true },
				{answerText:'Bhairon Singh Shekhawat', isCorrect: false},
				{answerText:'Krishan Kant', isCorrect: false },
			],
		},
		{
			questionText: 'Who was the 1st Prime Minister of india?',
			answerOptions:[
				{ answerText: 'Pandit Jawaharlal Nehru', isCorrect: true},
				{ answerText: 'Lal Bahadur Shastri', isCorrect: false},
				{ answerText: 'Gulzar Lal Nanda', isCorrect: false},
				{ answerText: 'None of the Above', isCorrect: false},

			],
		},
		{ 
			questionText: 'Who became the first women to reach the summit of Mount Everest, and the first women to ascend all seven Summits by climbing the highest peak on every continent?',
			answerOptions:[
				{ answerText: 'Junko Tabel', isCorrect: true},
				{ answerText: 'Bachendri Pal', isCorrect: false},
				{ answerText: 'Santosh yadav', isCorrect: false},
				{ answerText: 'Premlata Agarwal', isCorrect: false},

			],
		},


	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}