let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d"); // ctx (context)

// notes
// in canvas direction:
// x - (right direction x _>)
// y - (down direction y |v)

// line
ctx.beginPath();
ctx.moveTo(50, 50); // args is x, y
ctx.lineTo(150, 50);
ctx.stroke();

// arrow down
ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(100, 200);
ctx.lineTo(150, 150);
ctx.stroke();

// triangle
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(100, 350);
ctx.lineTo(150, 300);
ctx.lineTo(50, 300);
ctx.stroke();

// square
ctx.beginPath();
ctx.moveTo(50, 450);
ctx.lineTo(150, 450);
ctx.lineTo(150, 550);
ctx.lineTo(50, 550);
ctx.closePath(); // return to the beginner position in moveTo
ctx.stroke();

// triangle using method closePath()
ctx.beginPath();
ctx.moveTo(50, 650);
ctx.lineTo(100, 700);
ctx.lineTo(150, 650);
ctx.closePath();
ctx.stroke();

// triangle with background color using fill and without stroke() and closePath()
ctx.beginPath();
ctx.moveTo(50, 800);
ctx.lineTo(100, 850);
ctx.lineTo(150, 800);
ctx.fill();

//hw1
// horizontal line
ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(300, 50);
ctx.stroke();

// vertical line;
ctx.beginPath();
ctx.moveTo(200, 150);
ctx.lineTo(200, 250);
ctx.stroke();

// cross
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(250, 350);
ctx.moveTo(200, 350);
ctx.lineTo(250, 300);
ctx.stroke();

// square
ctx.beginPath();
ctx.moveTo(200, 450);
ctx.lineTo(300, 450);
ctx.lineTo(300, 550);
ctx.lineTo(200, 550);
ctx.closePath();
ctx.stroke();

// triangle
ctx.beginPath();
ctx.moveTo(250, 650);
ctx.lineTo(300, 700);
ctx.lineTo(200, 700);
ctx.closePath();
ctx.stroke();

// arrow right
ctx.beginPath();
ctx.moveTo(200, 800);
ctx.lineTo(300, 800);
ctx.lineTo(280, 820);
ctx.moveTo(300, 800);
ctx.lineTo(280, 780);
ctx.stroke();

// filled square
ctx.beginPath();
ctx.moveTo(200, 920);
ctx.lineTo(300, 920);
ctx.lineTo(300, 1020);
ctx.lineTo(200, 1020);
ctx.fill();

// filled triangle
ctx.beginPath();
ctx.moveTo(250, 1120);
ctx.lineTo(300, 1270);
ctx.lineTo(200, 1270);
ctx.fill();

//methods for rectangle
ctx.strokeRect(350, 50, 100, 75);

ctx.fillRect(350, 150, 100, 75);

ctx.rect(350, 300, 100, 75);
// ctx.fill();
ctx.stroke(); // can be fill() or stroke()

ctx.fillRect(350, 450, 100, 75);
ctx.clearRect(375, 470, 50, 50);
