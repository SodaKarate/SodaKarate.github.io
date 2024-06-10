const main = document.getElementById('main');
const cim = document.createElement('h1');
let leveltext= document.createElement('h2');
const mozgas = 4;
cim.textContent = 'epik game';
let level = 1;
leveltext.innerText = 'Level: ' + level;


const playerimg="marci.png";
const playersize={width:100, height:100};
const player=document.createElement('img');
player.src=playerimg;
player.style.width=playersize.width+'px';
player.style.height=playersize.height+'px';
let playerpos={x:0, y:0};
player.style.position='absolute'; 
player.style.top = playerpos.y + 'px';


const gamesize={width:playersize.width*10, height:playersize.height*10};
const game=document.createElement('div');
game.style.width=gamesize.width+'px';
game.style.height=gamesize.height+'px';
game.style.border='5px solid black';
game.style.position='relative';

const goal = document.createElement('div');
goal.style.width = playersize.width + 'px';
goal.style.height = playersize.height + 'px';
goal.style.backgroundColor = 'green';
goal.style.position = 'absolute';
goal.style.top = gamesize.height - playersize.height + 'px';
goal.style.left = gamesize.width - playersize.width + 'px';

game.appendChild(goal);

let enemyes=[]

function spawnenemy(irany, speed, szelesseg, magassag){
    const enemyimg="enemy.png";
    const enemydir=irany;
    const enemyspeed=speed;
    const enemysize={width:100, height:100};
    const enemy=document.createElement('img');
    enemy.src=enemyimg;
    enemy.style.width=enemysize.width+'px';
    enemy.style.height=enemysize.height+'px';
    let enemypos={x:szelesseg, y:magassag};
    enemy.style.position='absolute'; 
    enemy.style.top = enemypos.y + 'px';
    enemy.style.left = enemypos.x + 'px';

    enemyes.push(enemy);
    game.appendChild(enemy);

    let direction = 1;
    let intervalId = setInterval(() => {
        if (enemydir === 'x') {
            if (enemypos.x + enemysize.width > gamesize.width || enemypos.x < 0) {
                direction *= -1;
            }
            enemypos.x += direction * enemyspeed;
        } else if (enemydir === 'y') {
            if (enemypos.y + enemysize.height > gamesize.height || enemypos.y < 0) {
                direction *= -1;
            }
            enemypos.y += direction * enemyspeed;
        }

        enemy.style.left = enemypos.x + 'px';
        enemy.style.top = enemypos.y + 'px';

        if (enemypos.x < playerpos.x + playersize.width &&
            enemypos.x + enemysize.width > playerpos.x &&
            enemypos.y < playerpos.y + playersize.height &&
            enemypos.y + enemysize.height > playerpos.y) {
            playerhit();
        }
    }, 10);
    enemy.intervalId = intervalId;
}

window.addEventListener('keydown', function(e) {
    if (e.key === 'w') {
        fel();
    }
    else if (e.key === 'a') {
        bal();
    }
    else if (e.key=='d') {
        jobb();
    }
    else if (e.key=='s') {
        le();
    }
    
    if(playerpos.x-gamesize.width-playersize.width==playersize.width*-2){
        if(playerpos.y-gamesize.height-playersize.height==playersize.height*-2){
        nextlevel()
    }
}
});

function playerhit(){
    console.log('hit');
    playerpos={x:0, y:0};
    player.style.left=playerpos.x+'px';
    player.style.top=playerpos.y+'px';
    setup()
}

function nextlevel(){
    playerpos={x:0, y:0};
    player.style.left=playerpos.x+'px';
    player.style.top=playerpos.y+'px';
    level++;
    leveltext.innerText = 'Level: ' + level;
    setup();
}


function setup(){
    enemyes.forEach(enemy => {
        game.removeChild(enemy);
        clearInterval(enemy.intervalId); // Clear the interval
    });
    enemyes = [];

    if (level==1){
    spawnenemy('x', 3, 0, playersize.height);
    spawnenemy('y',3,playersize.width,0);
}
    if (level==2){
    spawnenemy('y',5,gamesize.width-playersize.width,playersize.height);
    spawnenemy('x',5,0,gamesize.height-playersize.height);
    spawnenemy('y',5,gamesize.width/3,gamesize.height/3);
    }
    if(level==3){
        spawnenemy('x',5,gamesize.width/3,gamesize.height/3);
        spawnenemy('x',5,(gamesize.width/3)*2,(gamesize.height/3)*2);
        spawnenemy('y',5,gamesize.width/3,gamesize.height/3);
        spawnenemy('y',5,(gamesize.width/3)*2,(gamesize.height/3)*2);
    }
    if (level == 4){
        spawnenemy('x', 5, 0, gamesize.height/4);
        spawnenemy('x', 5, 0, (gamesize.height/4)*2);
        spawnenemy('x', 5, 0, (gamesize.height/4)*3);
        spawnenemy('y', 5, gamesize.width/4, 0);
        spawnenemy('y', 5, (gamesize.width/4)*2, 0);
        spawnenemy('y', 5, (gamesize.width/4)*3, 0);
    }
    if(level==5){
        spawnenemy('x', 5, 0, gamesize.height/6);
        spawnenemy('x', 5, 0, (gamesize.height/6)*2);
        spawnenemy('x', 5, 0, (gamesize.height/6)*3);
        spawnenemy('x', 5, 0, (gamesize.height/6)*4);
        spawnenemy('x', 5, 0, (gamesize.height/6)*5);
        spawnenemy('y', 5, gamesize.width/6, 0);
        spawnenemy('y', 5, (gamesize.width/6)*3, 0);
        spawnenemy('y', 5, (gamesize.width/6)*4.5, 0);
    }
    if (level==6){
        spawnenemy('x', 10, 0, gamesize.height/6);
        spawnenemy('x', 10, 0, (gamesize.height/6)*3);
        spawnenemy('x', 10, 0, (gamesize.height/6)*5);
        spawnenemy('y', 10, gamesize.width/6, 0);
        spawnenemy('y', 10, (gamesize.width/6)*3, 0);
        spawnenemy('y', 10, (gamesize.width/6)*5, 0);
    }
    }

function bal(){
    if (playerpos.x - playersize.width/mozgas >= 0) {
        playerpos.x -= playersize.width/mozgas;
    }
    player.style.left = playerpos.x + 'px';
}

function jobb(){
    if (playerpos.x + playersize.width/mozgas <= gamesize.width - playersize.width) {
        playerpos.x += playersize.width/mozgas;
    }
    player.style.left = playerpos.x + 'px';
}

function fel(){
    if (playerpos.y - playersize.height/mozgas >= 0) {
        playerpos.y -= playersize.height/mozgas;
    }
    player.style.top = playerpos.y + 'px';
}

function le(){
    if (playerpos.y + playersize.height/mozgas <= gamesize.height - playersize.height) {
        playerpos.y += playersize.height/mozgas;
    }
    player.style.top = playerpos.y + 'px';
}

setup();

main.appendChild(cim);   
main.appendChild(leveltext);
main.appendChild(game);
game.appendChild(player);

