// function chooses a box 1 or box 2, returns 1 or 2
function chooseBox(){
	var choice = Math.floor(Math.random() * 2) + 1;
	
	if(choice == 1){
		slide.boxNum = 1;
	} else {
		slide.boxNum = 2;
	}
}

/*
*   draw observation panel
*   @param slideNumber the number of this slide
*
*/
function drawObservationPanel(slideNumber){
    // generate display  
    var box1 = {boxNum: 1, number: randomNumberGenerator(), numberColour: randomColorGenerator(9), backgroundColor: randomColourGenerator(9)};
    var box2 = {boxNum: 2, number: randomNumberGenerator(), numberColour: randomColorGenerator(9), backgroundColor: randomColourGenerator(9)};
	var answer
    chooseBox();
	drawLeftBox();
    drawRightBox();
	drawSlideNumber(slideNumber);
	drawBoxNumber();
	
	// assigns the slide to the attributes of the chosen box
	if(slide.boxNum == 1){
		slide.number = box1.number;
		slide.numberColour = box1.numberColour;
		slide.backgroundColor = box1.backgroundColor;
	} else {
		slide.number = box2.number;
		slide.numberColour = box2.numberColour;
		slide.backgroundColor = box2.backgroundColor;
	}
	
	return slide;
}

// draws text at top of the canvas
function drawSlideNumber(current){
    // variables
	var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
	var text = "Slide " + current;
    
    // display
	ctx.fillStyle = "black";
	ctx.font = '50px arial';
    ctx.fontBaseline = 'bottom'
    ctx.fillText(text, width / 4, height / 6);
}

// draw text box numbers
function drawBoxNumber(){
    // variables
	var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    
    // display
	ctx.fillStyle = "black";
	ctx.font = '40px arial';
    ctx.fontBaseline = 'bottom'
    ctx.fillText("Box 1" , width / 8, height / 2.1);
	ctx.fillText("Box 2" , width / 1.7, height / 2.1);
}

// draws the left box
function drawLeftBox(){
    // variables
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    
    // display
    ctx.lineWidth = 3; 
    ctx.fillStyle = leftBoxColour;
    ctx.fillRect(width / 30, height / 2, width / 2.2, height / 2.2);
    
	// assigns attributes to box1
	box1.backgroundColor = leftBoxColour;
	
    leftFillText();
}

// draws the text in the left box
function leftFillText(){
    // variables
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var leftTextColour = getRandomColour(colours.length);
	var leftNumber = getRandomNumber();
    
    // check if the colour of the text is the same as the colour of the box
    while(leftTextColour == leftBoxColour){
        leftTextColour = getRandomColour(colours.length);
    }
    
    ctx.fillStyle = leftTextColour;
    ctx.font = '60px arial';
    ctx.fontBaseline = 'bottom';
	
    ctx.fillText(leftNumber,width / 4.75,height / 1.25);
	
	// assigns attributes to box1
	box1.numberColour = leftTextColour;
	box1.number = leftNumber;
}

// draws the right box
function drawRightBox(){
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    
    ctx.lineWidth = 3;
    
    ctx.fillStyle = rightBoxColour;
    ctx.fillRect(width / 1.95, height / 2, width / 2.2, height / 2.2);
    
	// assigns attributes to box2
	box2.backgroundColor = rightBoxColour;
	
    rightFillText();
}

// draws the text in the right box
function rightFillText(){
    // variables
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var rightTextColour = getRandomColour(colours.length);
	var rightNumber = getRandomNumber();
    
    // check if the colour of the text is the same as the colour of the box
    while(rightTextColour == rightBoxColour){
        rightTextColour = getRandomColour(colours.length);
    }
    
    ctx.fillStyle = rightTextColour;
    ctx.font = '60px arial';
    ctx.fontBaseline = 'bottom';
    ctx.fillText(rightNumber,width / 1.45,height / 1.25);
	
	// assigns attributes to box2
	box2.numberColour = rightTextColour;
	box2.number = rightNumber;
}
