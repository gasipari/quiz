// Questions build
function Question(title,choices,answer) {
	this.title = title;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.checkAnswer = function(question,answer) {
	if (question.answer == answer) {
		return true;
	};
	return false;
};

var questions = [];

var q1 = new Question('What is the capital of Germany?',['Paris','Madrid','Berlin'],3);
questions.push(q1);