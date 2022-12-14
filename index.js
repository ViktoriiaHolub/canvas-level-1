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

// work with circumferences
function getRadians(degrees) {
  return (Math.PI / 180) * degrees;
}

ctx.beginPath();
ctx.arc(550, 85, 40, 0, getRadians(360));
ctx.stroke();

ctx.beginPath();
ctx.arc(550, 150, 40, 0, getRadians(180));
ctx.stroke();

ctx.beginPath();
ctx.arc(550, 300, 40, 0, getRadians(180));
ctx.fill();

ctx.beginPath();
ctx.arc(550, 490, 40, 0, getRadians(360));
ctx.fill();

ctx.beginPath();
ctx.arc(550, 650, 40, 0, getRadians(180));
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(550, 790, 40, 0, getRadians(180));
ctx.fill();

ctx.beginPath();
ctx.arc(550, 920, 40, 0, getRadians(90));
ctx.fill();

// color for lines and background
ctx.beginPath();

ctx.rect(650, 50, 75, 75);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.rect(650, 150, 75, 75);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.moveTo(650, 300);
ctx.lineTo(750, 300);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(650, 450);
ctx.lineTo(750, 450);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.beginPath();
ctx.moveTo(650, 470);
ctx.lineTo(750, 470);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.rect(650, 650, 100, 75);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.rect(650, 790, 50, 50);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.rect(650, 850, 50, 50);
ctx.fillStyle = "red";
ctx.fill();

// size of lines
ctx.beginPath();
ctx.moveTo(800, 50);
ctx.lineTo(900, 50);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();

ctx.beginPath();
ctx.rect(800, 150, 75, 75);
ctx.lineWidth = 5;
ctx.stroke();

// loops
ctx.beginPath();
ctx.lineWidth = 1;
for (let i = 3; i <= 8; i++) {
  ctx.moveTo(950, 15 * i);
  ctx.lineTo(1050, 15 * i);
}
ctx.stroke();

ctx.beginPath();
for (let i = 10; i <= 18; i++) {
  for (let y = 7; y <= 96; y += 12) {
    ctx.moveTo(950 + y, 145);
    ctx.lineTo(950 + y, 245);
  }
  ctx.moveTo(950, 11 * i + 40);
  ctx.lineTo(1050, 11 * i + 40);
}
ctx.stroke();
