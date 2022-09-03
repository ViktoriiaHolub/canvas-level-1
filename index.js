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
