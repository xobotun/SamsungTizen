function ball(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.draw = function(color, globalAlpha) {
        context.globalAlpha = globalAlpha;
        context.fillStyle = color;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        context.fill();
    };
}

function rect(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.draw = function(color, globalAlpha) {
        context.globalAlpha = globalAlpha;
        context.fillStyle = color;
        context.fillRect(this.x, this.y, this.width, this.height);
    };
}

function draw() {
    game.draw("#000", 0.3)
    ball1.draw("#f00", 1);
    ball2.draw("#0f0", 0.999);
    ball3.draw("#00f", 1);
    update();
}

function update() {
    if (ball1.y - ball1.r < 0 || ball1.y + ball1.r > 256) {
        vY1 = -vY1;
    }
    if (ball1.x - ball1.r < 0 || ball1.x + ball1.r > 256) {
        vX1 = -vX1;
    }
    ball1.x += vX1;
    ball1.y += vY1;
    
    
    if (ball2.y - ball2.r < 0 || ball2.y + ball2.r > 256) {
        vY2 = -vY2;
    }
    if (ball2.x - ball2.r < 0 || ball2.x + ball2.r > 256) {
        vX2 = -vX2;
    }
    ball2.x += vX2;
    ball2.y += vY2;
    
    
    if (ball3.y - ball3.r < 0 || ball3.y + ball3.r > 256) {
        vY3 = -vY3;
    }
    if (ball3.x - ball3.r < 0 || ball3.x + ball3.r > 256) {
        vX3 = -vX3;
    }
    ball3.x += vX3;
    ball3.y += vY3;
}

function init() {
    game = new rect(0, 0, 256, 256)
    ball1 = new ball(game.width / 2, game.height / 2, 19);
    ball2 = new ball(game.width / 3, game.height / 1.5, 8);
    ball3 = new ball(game.width / 1.5, game.height / 3, 32);
    vX1 = 5;
    vY1 = 4;
    vX2 = 9;
    vY2 = 12;
    vX3 = 2;
    vY3 = 3;
    var canvas = document.getElementById("balls__canvas");
    canvas.width = game.width;
    canvas.height = game.height;
    context = canvas.getContext("2d");
    setInterval(draw, 1000 / 50);
}
init();