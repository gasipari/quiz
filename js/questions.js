// Questions build
function Question(title,choices,answer) {
	this.title = title;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.checkAnswer = function(answer) {
	if (this.answer == answer) {
		return true;
	};
	return false;
};

var questions = [];

var q1 = new Question('What is the capital of Germany?',['Paris','Madrid','Berlin'],2);
questions.push(q1);

var q2 = new Question('What is the capital of France?',['Brussels','Paris','Tokyo'],1);
questions.push(q2);

var q3 = new Question('What is the capital of Rwanda?',['Kigali','Austin','Kampala'],0);
questions.push(q3);

var q4 = new Question('What is the capital of Argentina?',['Freetown','Santiago','Buenos Aires'],2);
questions.push(q4);

var q5 = new Question('What is the capital of South Korea?',['Beijing','Seoul','Pyongyang'],1);
questions.push(q5);