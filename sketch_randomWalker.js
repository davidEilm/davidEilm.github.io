class Coord {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}
var listOfCoords = new Array();

function setup() {
	createCanvas(windowWidth, windowHeight);
	listOfCoords.push(new Coord(windowWidth / 2, windowHeight / 2));
	console.log("Press the R-key to reset the canvas!");
}

function draw() {

	//DYNAMIC BACKGROUND COLER
	//var color = map(mouseX, 0, windowWidth, 0, 255) //Maps mouseX, which is in the range of 0 to windowWidth, and maps it to 2 to 255.
	//background(color);

	background(55, 55, 55);

	
	//FAST VERSION:
	for (let i = 1; i < 50; i++) {
		let temp = new Coord(listOfCoords[listOfCoords.length - 1].x + random(-5, 5), listOfCoords[listOfCoords.length - 1].y + random(-5, 5))
		listOfCoords.push(temp);
	}

	//SLOW VERSION:
	/*
	let temp = new Coord(listOfCoords[listOfCoords.length - 1].x + random(-5, 5), listOfCoords[listOfCoords.length - 1].y + random(-5, 5))
	listOfCoords.push(temp);
	*/

	for (let i = 1; i < listOfCoords.length; i++) {
		stroke(255, 94, 246);
		line(listOfCoords[i - 1].x, listOfCoords[i - 1].y, listOfCoords[i].x, listOfCoords[i].y);
	}

}

function mousePressed() { //Is executed exactly once, when mouse gets pressed down
	//console.log("Mouse has been pressed");
}

function keyPressed() {
	if (keyCode === 82) { //R -> Reset
		console.log(listOfCoords.length);
		listOfCoords = new Array();
		listOfCoords.push(new Coord(windowWidth / 2, windowHeight / 2));
	}
}


/*
	posX++;
	rect(posX,mouseY,50,50);



*/