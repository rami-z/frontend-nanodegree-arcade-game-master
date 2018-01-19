var Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
    if (this.x <= 505){
        this.x+=this.speed*dt;
    }else {
        this.x=0;
    } ;
    if ((( player.x - this.x ) < 70  && (( player.x - this.x ) > -70 )) && ((( player.y - this.y ) < 50) && ( player.y - this.y ) > -40)) {
        player.x = 200;
        player.y = 380;
    };
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x,y,speed){
    this.x=x;
    this.y=y;
    this.speed=speed;
    this.sprite='images/char-boy.png';
};

Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyup){
    if (keyup === 'up'){
        this.y-=this.speed; 
    } else if (keyup ==='down'){
        this.y+=this.speed; 
    } else if (keyup ==='right') {
        this.x +=this.speed;
    } else if (keyup ==='left') {
        this.x -=this.speed;
    }

    if (player.x >= 400) {
        player.x = 400;
    } else if (player.x <= 0) {
        player.x = 0;
    }; 
    if (player.y >= 400) {
        player.y=400;
    };

    if (player.y<=10){
        player.y=380;
        alert("You win!!");
    }

};

var enemyBug1 = new Enemy(0,60,250);
var enemyBug2 = new Enemy(0,145,100);
var enemyBug3 = new Enemy(0,230,30);
var allEnemies = [enemyBug1,enemyBug2,enemyBug3];
var player = new Player(200,380,80);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
