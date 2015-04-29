function initiate() {
    var element = document.getElementById("canvas");
    var canvas = element.getContext('2d');

    //canvas.textBaseline = 'bottom';
    canvas.font = 'bold 20px segoe UI';
    canvas.fillText('Привет HTML5', 200, 200);

    //measureText
}

addEventListener("load", initiate);