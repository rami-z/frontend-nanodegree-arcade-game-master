/*app.js
this file will create Enemy class and Player class with their
methods specified for each of them
*/

// create Enemy class 
var Enemy = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = "images/enemy-bug.png";
};

// update will let Enemy move from left to right of canvas
Enemy.prototype.update = function (dt) {
    if (this.x <= 505) {
        this.x += this.speed * dt;
    } else {
        this.x = 0;
    }
    this.checkCollisions();
};

// checkCollisions will prevent collision between Enemy and player. if collision happen player will move to start position.
Enemy.prototype.checkCollisions = function () {
    if ((((player.x - this.x) < 70) &&
            ((player.x - this.x) > -70)) &&
        (((player.y - this.y) < 50) &&
            (player.y - this.y) > -40)) {
        player.reset();
    }
};

//  render will draw  Enemy
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//create Player class
var Player = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = "images/char-boy.png";
};

Player.prototype.update = function (dt) {
};

// render will draw Player class
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// reset player position to start position.
Player.prototype.reset = function () {
    this.x = 200;
    this.y = 380;
};
// this prototype will move Player when user press up,down,right and left key.
Player.prototype.handleInput = function (keyup) {
    if (keyup === 'up') {
        this.y -= this.speed;
    } else if (keyup === "down") {
        this.y += this.speed;
    } else if (keyup === "right") {
        this.x += this.speed;
    } else if (keyup === "left") {
        this.x -= this.speed;
    }

    // this if statement will prevent player move out of canvas height and width
    if (this.x >= 400) {
        this.x = 400;
    } else if (this.x <= 0) {
        this.x = 0;
    }
    if (this.y >= 400) {
        this.y = 400;
    }

    // if statement that tell that if player rich to water it will alert that he win
    if (this.y <= 10) {
        this.reset();
        alert("You win!!");
    }

};

//create Enemy object
var enemyBug1 = new Enemy(0, 60, 250);
var enemyBug2 = new Enemy(0, 145, 100);
var enemyBug3 = new Enemy(0, 230, 30);

// push all Enemy object inside array named allEnemies
var allEnemies = [enemyBug1, enemyBug2, enemyBug3];
var player = new Player(200, 380, 80);

// Define the buttons used within the game
document.addEventListener("keyup", function (e) {
    var allowedKeys = {
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };
    player.handleInput(allowedKeys[e.keyCode]);
});