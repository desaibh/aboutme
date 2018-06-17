
let fn = document.getElementById("name");
let nctx = fn.getContext("2d");

nctx.font = "30px Copperplate";
nctx.fillStyle = "hsl(173,100%, 100%)";

let text = "Bhavika Desai, Web Producer";
let x = 1;
let x1, y1;


 function draw() {
   nctx.fillText(text.substr(0,x), 40, 40);
   x++;
   if (x<=text.length) {
     requestAnimationFrame(draw);
   }

 }

 requestAnimationFrame(draw);
text2="Portfolio, Resume, Sitemap Below";
requestAnimationFrame(draw);
