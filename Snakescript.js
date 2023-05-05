//Game Constants and Variables
let direction = {x :0 , y:0};
let foodSound = new Audio('music/food.mp3');
let gameOverSound = new Audio('music/gameover.mp3');
let moveSound = new Audio('music/move.mp3');
let musicSound = new Audio('music/music.mp3');
let speed =5;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    {x:13 , y:15}
];

food = {x: 6, y: 7};
// Game Functions
function main(ctime)
{
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime - lastPaintTime)/1000 < 1/speed)
    {
        return ;
    }
    lastPaintTime = ctime;
    gameEngine();
 
    
}


// function gameEngine()
// {
//     // Part 1 : Updating the snake array & Food
//     board.innerHtml = "";
//     snakeArr.forEach((e, index) =>{
//         snakeElement = document.createElement('div');
//         snakeElement.style.gridRowStart = e.y;
//         snakeElement.style.gridColumnStart = e.x;
//         snakeElement.classList.add('food');
//         board.appendChild(snakeElement);
//     })
//     //Part  2:  Display the snake and food
// }

// //Main logic starts here
// window.requestAnimationFrame(main);



