//make sure we don't execute any script before the document is fully loaded
$(document).ready(function(){
	console.log("quiz app is ready!");

// init
var idx = 0;
var progressIdx = 0;
var currentQuestion = questions[idx]; 

// setting up radial progress chart
var div1=d3.select(document.getElementById('div1'));
var rp1 = radialProgress(document.getElementById('div1'))
.label("Progress")
.diameter(150)
.value(idx)
.render();

// load question
function loadQuestion() {
	// clear existing question choices
	$('#question-list li').remove();
	$('#question-title').text(currentQuestion.title);
	//
	for (var i = currentQuestion.choices.length - 1; i >= 0; i--) {
		var radioBtn = $('<li><input type="radio" name="question-rdbtn" value="'+i+'"/>'+currentQuestion.choices[i]+'</li>');
		$('#question-list').append(radioBtn);
	}
}

// start quiz
$('#start-button').click(function(){
	$('.intro-section').hide();
	$('.main-section').show();
	loadQuestion();
})

// check answer
$('#submit-button').click(function(){
	// increment indices
	idx = idx + 1;
	progressIdx = progressIdx + 10;
	var currentAnswer = $('input[name=question-rdbtn]:checked').val();
	if (currentQuestion.checkAnswer(currentAnswer)) {
		// update icon color
		var trueList = $('<li><i class="fa fa-thumbs-o-up"></i></li>');
		$('#result-list').append(trueList);
	}else {
		var falseList = $('<li><i class="fa fa-thumbs-o-down"></i></li>');
		$('#result-list').append(falseList);
	}

		// update radial progress
		rp1.value(progressIdx).render();

		// update current question
		currentQuestion = questions[idx];
		loadQuestion();
	})
})