
var sunx = 10;
var suny = 10;
var moonx = 775;
var moony = 385;
var light = 0;
function initiate() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 5.5;
    ctx.lineCap = 'butt';
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (suny >= 10 && suny < 50) {
        ctx.fillStyle = "#87CEFA";
        ctx.fill();
        ctx.beginPath();
        ctx.fillRect(0, 0, 1000, 300);
    }
    else if (suny >= 50 && suny < 100) {
        ctx.fillStyle = "#87CEEB";
        ctx.fill();
        ctx.beginPath();
        ctx.fillRect(0, 0, 1000, 300);
    }
    else if (suny >= 100 && suny < 150) {
        ctx.fillStyle = "#00BFFF";
        ctx.fill();
        ctx.beginPath();
        ctx.fillRect(0, 0, 1000, 300);
    }
    else if (suny >= 150 && suny < 200) {
        ctx.fillStyle = "#483D8B";
        ctx.fill();
        ctx.beginPath();
        ctx.fillRect(0, 0, 1000, 300);
    }
    else if (suny >= 200 && suny < 250) {
        ctx.fillStyle = "#000080";
        ctx.fill();
        ctx.beginPath();
        ctx.fillRect(0, 0, 1000, 300);
        light = 1;
    }
    else if (suny >= 250 && suny < 400) {
        ctx.fillStyle = "#191970";
        ctx.fill();
        ctx.beginPath();
        ctx.fillRect(0, 0, 1000, 300);
        light = 1;
    }
    else {
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.beginPath();
        ctx.fillRect(0, 0, 1000, 300);
        light = 1;
    }


    ctx.beginPath();
    ctx.arc(sunx, suny, 120, 0, Math.PI * 2, true);//start point, radius, starting angle, degree(rad), clockwise
    suny += 0.7;
    sunx += 0.7;


    ctx.fillStyle = "#f9fb51";
    ctx.fill();

    ctx.lineWidth = 10;
    ctx.strokeStyle = "#f9ec6e";
    ctx.stroke();


    if (suny >= 300) {
        ctx.beginPath();
        ctx.arc(moonx, moony, 75, 0, Math.PI * 2, true);//start point, radius, starting angle, degree(rad), clockwise
        moonx -= 1;
        moony -= 0.8;
 
        ctx.fillStyle = "white";
        ctx.fill();
    }
    ctx.beginPath();

    ctx.fillStyle = "#708090";//surface
    ctx.fill();

    ctx.lineWidth = 10;
    ctx.strokeStyle = "#FF6347";
    ctx.stroke();
    ctx.beginPath();
    ctx.fillRect(0, 300, 700, 200);

    ctx.beginPath();
    ctx.moveTo(0, 450);
    ctx.lineTo(0, 95);
    ctx.lineTo(300, 95);//house
    ctx.lineTo(300, 450);
    ctx.lineTo(0, 450);

    ctx.fillStyle = "#8B4513";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, 95);
    ctx.lineTo(300, 95);
    ctx.lineTo(350, 145);//roof
    ctx.lineTo(0, 145);

    ctx.fillStyle = "#556B2F";
    ctx.fill();


    ctx.beginPath();
    ctx.moveTo(100, 195);
    ctx.lineTo(100, 400);
    ctx.lineTo(200, 400);//windows
    ctx.lineTo(200, 200);
    ctx.lineTo(100, 200);
 
    ctx.fillStyle = "#FF6347";
    ctx.fill();

    ctx.lineWidth = 10;
    ctx.strokeStyle = "#FF6347";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(105, 205);
    ctx.lineTo(105, 295);
    ctx.lineTo(145, 295);
    ctx.lineTo(145, 205);
    ctx.lineTo(105, 205);
    
    if (light == 1) {
        ctx.fillStyle = "yellow";
    }
    else
        ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(105, 305);
    ctx.lineTo(105, 395);
    ctx.lineTo(145, 395);
    ctx.lineTo(145, 305);
    ctx.lineTo(105, 305);

    if (light == 1) {
        ctx.fillStyle = "yellow";
    }
    else
        ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(155, 305);
    ctx.lineTo(155, 395);
    ctx.lineTo(195, 395);
    ctx.lineTo(195, 305);
    ctx.lineTo(155, 305);

    if (light == 1) {
        ctx.fillStyle = "yellow";
    }
    else
        ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(155, 205);
    ctx.lineTo(155, 295);
    ctx.lineTo(195, 295);
    ctx.lineTo(195, 205);
    ctx.lineTo(155, 205);
    
    if (light == 1) {
        ctx.fillStyle = "yellow";
    }
    else
        ctx.fillStyle = "white";//end of windows
    ctx.fill();

    setTimeout("initiate()", 20);
    /*if (moony == 0) {
        suny = 10;
        sunx = 10;
        moonx = 775;
        moony = 385;
    }*/

}

addEventListener("load", initiate);