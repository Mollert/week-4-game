
var gems = ["assets/images/coal_black.jpg", "assets/images/gem_blue.jpg", "assets/images/gem_bronze.jpg", "assets/images/gem_rose.jpg", "assets/images/gem_deeppurple.jpg", "assets/images/gem_green.jpg", "assets/images/gem_lightpurple.jpg", "assets/images/gem_pink.jpg", "assets/images/gem_seagreen.jpg", "assets/images/gem_topaz.jpg", "assets/images/gem_yellow.jpg", "assets/images/gem_skyblue.jpg"];
var matchNumber = 0;
var runningTotal = 0;
var win = 0;
var loss = 0;

function getMatchNumber() {
	matchNumber = (Math.floor(Math.random() * 101) + 18);
}

function getGemAndNumber() {
	gemAndNumber = [];
    for (i = 0; i < 4; i++) {		
		var user = (Math.floor(Math.random() * 11) + 1);
		if (i === 1) {
			while (user === gemAndNumber[0]) {
				var user = (Math.floor(Math.random() * 11) + 1);
			}
		}
		if (i === 2) {
			while (user === gemAndNumber[0] || user === gemAndNumber[1]) {
				var user = (Math.floor(Math.random() * 11) + 1);
			}
		}
		if (i === 3) {
			while (user === gemAndNumber[0] || user === gemAndNumber[1] || user === gemAndNumber[2]) {
				var user = (Math.floor(Math.random() * 11) + 1);
			}
		}
		gemAndNumber.push(user)
	}
}

getMatchNumber();
getGemAndNumber();

function newGemAndNumber() {
	$("#firstGem").attr("src", gems[gemAndNumber[0]-1]);
	$("#firstGem").val(gemAndNumber[0]);
	$("#secondGem").attr("src", gems[gemAndNumber[1]-1]);
	$("#secondGem").val(gemAndNumber[1]);
	$("#thirdGem").attr("src", gems[gemAndNumber[2]-1]);
	$("#thirdGem").val(gemAndNumber[2]);
	$("#fourthGem").attr("src", gems[gemAndNumber[3]-1]);
	$("#fourthGem").val(gemAndNumber[3]);
}

newGemAndNumber();

$("#match-number").html(matchNumber);

$("#wins").html(win);

$("#losses").html(loss);

$("#firstGem").on("click", function() {
	if (matchNumber <= runningTotal) {
		preventDefault();
	}
	$(this).val();
	runningTotal = runningTotal + parseInt(this.value);
	keepScore();
});
$("#secondGem").on("click", function() {
	if (matchNumber <= runningTotal) {
		preventDefault();
	}	$(this).val();
	runningTotal = runningTotal + parseInt(this.value);
	keepScore();
});
 $("#thirdGem").on("click", function() {
 	if (matchNumber <= runningTotal) {
		preventDefault();
	}
	$(this).val();
	runningTotal = runningTotal + parseInt(this.value);
	keepScore();
});
 $("#fourthGem").on("click", function() {
 	if (matchNumber <= runningTotal) {
		preventDefault();
	}
	$(this).val();
	runningTotal = runningTotal + parseInt(this.value);
	keepScore();
});

function keepScore() {
	$("#running-total").html(runningTotal);
	if (matchNumber === runningTotal) {
 		win = win + 1;
 		$("#wins").html(win);
 	}
	else if (matchNumber < runningTotal) {
 		loss = loss + 1;
 		$("#losses").html(loss);
	}
 }

 $(".button-start").on("click", function() {
	getGemAndNumber();
 	newGemAndNumber();
 	getMatchNumber();
	$("#match-number").html(matchNumber);
 	runningTotal = 0;
 	$("#running-total").html(runningTotal);
	win = 0;
 	$("#wins").html(win);
 	loss = 0;
 	$("#losses").html(loss);
 });

  $(".button-reset").on("click", function() {
	getGemAndNumber();
 	newGemAndNumber();
 	getMatchNumber();
	$("#match-number").html(matchNumber);
 	runningTotal = 0;
 	$("#running-total").html(runningTotal);
 });


 