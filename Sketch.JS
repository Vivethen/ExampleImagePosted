function setup() {
  createCanvas(400, 400);
}

function draw() {
	var x = 1
  fill(mouseX)
	ellipse(mouseX, mouseY, x, 200);

	x +=  20
}
					
