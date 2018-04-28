// window.onload = function () {
//     let theCanvas = document.getElementById('canvas'),
//         ctx = theCanvas.getContext('2d'),
//          w = theCanvas.width = 400,
//          h = theCanvas.height = 400;

//     if (ctx) {
//         ctx.fillStyle = "yellow";
//         ctx.fillRect(0,0, w, h);
//     }
// }

// window.onload = function() {
//     let canvas = document.getElementById('canvas1'),
//         ctx = canvas.getContext('2d'),
//         w = width = 200,
//         h = height = 200;
//         if (ctx) {
//             ctx.fillStyle = "green";
//             ctx.fillRect(20,20,w,h);
//             ctx.lineWidth = 5;
//             ctx.strokeStyle='rgba(0,0,255,1)';
//             ctx.strokeRect(20, 20, w, h);
//         }
// }

// window.onload = function() {
//     let canvas = document.getElementById('canvas2'),
//         ctx = canvas.getContext('2d'),
//         w = width = 125,
//         h = height = 100;

//     if (ctx) {
//         // draw just a stroked recatangle
//         ctx.strokeStyle='red';
//         ctx.lineWidth=5;
//         ctx.strokeRect(25, 25, h, w);
//         // draw just a filled recatnagle
//         ctx.fillStyle='green';
//         ctx.fillRect(175, 25, h, w);
//         // draw a stroked and fill recatangle
//         ctx.strokeStyle = "red";
//         ctx.fillStyle = "blue";
//         ctx.lineWidth = 10;
//         ctx.fillRect(325,25,h,w);
//         ctx.strokeRect(325,25,h,w);
//         // clear a rectangle
//         ctx.clearRect(15, 75, 450, 50);
//     }
// }

// window.onload = function() {
//     let canvas = document.getElementById('canvas3'),
//         ctx = canvas.getContext('2d');

//     if (ctx) {
//         // lines
//         for (let i = 0; i < 15; i++) {
//             ctx.beginPath();
//             ctx.lineWidth= i+1;
//             ctx.moveTo(25, 25+i*15);
//             ctx.lineTo(475, 25+i*15);
//             ctx.stroke();
//         }
//     }
// }

// window.onload = function() {
//     let canvas = document.getElementById('canvas4'),
//         ctx = canvas.getContext('2d');

//     if (ctx) {
//         // draw the guide lines
//         ctx.strokeStyle='cyan';
//         ctx.lineWidth=1;
//         ctx.beginPath();
//         ctx.moveTo(50, 25);
//         ctx.lineTo(50,175);
//         ctx.moveTo(450,25);
//         ctx.lineTo(450, 175);
//         ctx.stroke();

//         // draw the lines each linecaps
//         ctx.lineWidth = 25;
//         ctx.strokeStyle = "black";
//         ctx.lineCap='butt';
//         ctx.beginPath();
//         ctx.moveTo(50,50);
//         ctx.lineTo(450,50);
//         ctx.stroke();
//         // square line cap
//         ctx.lineCap = "square";
//         ctx.beginPath();
//         ctx.moveTo(50,100);
//         ctx.lineTo(450,100);
//         ctx.stroke();
//         // round line cap
//         ctx.lineCap='round';
//         ctx.beginPath();
//         ctx.moveTo(50,150);
//         ctx.lineTo(450,150);
//         ctx.stroke();
//     }
// }

window.onload = function() {
    let canvas = document.getElementById('canvas5'),
        ctx = canvas.getContext('2d');

    if (ctx) {
        ctx.lineWidth=5;
        ctx.strokeStyle='red';
        // round
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(25, 150);
        ctx.lineTo(75,50);
        ctx.lineTo(125,150);
        ctx.stroke();
        // bevel
        ctx.lineJoin = "bevel";
        ctx.beginPath();
        ctx.moveTo(175, 150);
        ctx.lineTo(225,50);
        ctx.lineTo(275,150);
        ctx.stroke();
        // miter
        ctx.lineJoin = "miter";
        ctx.beginPath();
        ctx.moveTo(325, 150);
        ctx.lineTo(375,50);
        ctx.lineTo(425,150);
        ctx.miterLimit=1;
        ctx.stroke();
    }
}