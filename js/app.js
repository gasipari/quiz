//make sure we don't execute any script before the document is fully loaded
$(document).ready(function(){
	console.log("quiz app is ready!");



// start quiz
$('#start-button').click(function(){
	$('.intro-section').hide();
	$('.main-section').show();
	loadQuestions();
})



function loadQuestions() {
	console.log(questions);
	$('#question-title').text(questions[0].title);
	//
	for (var i = questions[0].choices.length - 1; i >= 0; i--) {
		var radioBtn = $('<li><input type="radio" name="rbtnCount" value="'+i+'"/>'+questions[0].choices[i]+'</li>');
		$('#question-list').append(radioBtn);
	}
}

//
var div1=d3.select(document.getElementById('div1'));

var rp1 = radialProgress(document.getElementById('div1'))
.label("Progress")
.diameter(150)
.value(78)
.render();

})