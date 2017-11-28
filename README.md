# Pong Game

![Screen Shot Pong Game](public/images/screen-shot-pong.png "pong game")

A basic pong game using SVGs.  

# Modifications to the game:
* Smooth paddle scroll 
* Ball inscreases speed with each paddle collision
* Game restarts once a player reaches 5 points
* Additional small ball 

## Setup

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Keys

* spacebar : pause and unpause game

**Player 1:**
* a : up
* z : down

**Player 2:**
* ▲ : up
* ▼ : down

## The Process
During the creation of this project I was able to learn many new skills using webpack and interacting with JavaScript. I was challenged constantly which allowed me to experiment and to learn by failing many times. 




Your README could still use a bit of work—what did you learn working on this project (about OOP, JS, etc?).
• Clever thought to pass the game object into the Ball so it could access the restart method...you’re definitely getting into some more complicated concerns around game state here, and how tricky that can be to manage. One thing I would point out here is that your code isn’t as DRY as it could be in Game.js (take a look at your constructor and your restart method). What kind of light refactor could you do here to avoid duplicating all of that code?

## technologies used 
* HTML 
* CSS
* SVG
* npm
* GIT
* JavaScrpt  
* Webpack

##  Contributors

* wdp-fall-2017 classmates

* RED Academy

* Mandi Wise

* Jim Bennett

## Authors

* Breckon Trischuk 
