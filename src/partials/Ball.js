import {SVG_NS} from '../settings';

export default class Ball {
  
  constructor(ballRadius, boardWidth, boardHeight) {
    // this.ballRadius2 =ballRadius2;
    this.ballRadius = ballRadius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.ping = new Audio('public/sounds/pong-03.wav');
    this.pong = new Audio('public/sounds/pong-02.wav');
    
    this.reset();
  }
  
  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    
    //prevents ball from being launched at 0 
    this.vy = 0;
    
    while (this.vy === 0 ) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }
    //gives ball direction on start
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }
  
  wallCollision(player1, player2) {
    const hitLeft = this.x - this.ballRadius <= 0;
    const hitRight = this.x + this.ballRadius >= this.boardWidth;
    const hitTop = this.y - this.ballRadius <= 0;
    const hitBottom = this.y + this.ballRadius >= this.boardHeight;
    
    if (hitLeft) {
      this.direction = -1;
      this.goal(player2, player1);
      
    } else if (hitRight) {
      this.direction = 1;
      this.goal(player1, player2);      
      
    } else if (hitTop || hitBottom) {
      this.vy = -this.vy;
      this.pong.play();
    }
  }
  
  paddleCollision(player1, player2){
    if (this.vx > 0) {
      //detect collision on the right hand side (player 2)  *could be refacterd to return*
      let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);
      //have these below variables to use in our code
      let {leftX, topY, bottomY} = paddle;  
      
      if (
        // right eddge of the ball is >= left edge of the paddle
        this.x + this.ballRadius >= leftX
        //both will have to be true
        && this.y >= topY
        // if ball Y is >= paddle top Y
        && this.y <= bottomY
        // if ball Y is <= the paddle bottom Y
      ) {
        this.vx = -this.vx;
        this.ping.play();
      }
      
    } else {
      let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height);
      let {rightX, topY, bottomY} = paddle;
      //detect collision on the left hand side (player 1)
      if (
        this.x - this.ballRadius <= rightX // left paddle
        && this.y >= topY
        && this.y <= bottomY 
      ){
        this.vx = -this.vx;
        this.ping.play();
      }
    }
  }  

  // ballCollision (ball) {
  //   const ballHit = this.ballRadius <= this.ballRadius;

  //   const hitRight = this.x + this.ballRadius >= this.boardWidth;
    
  //   if (
  //     this.ballRadius <= this.ballRadius)
  // }
  
  goal(point, nopoint) {
    point.score ++;
    if (point.score >= 5) {

      point.score = 0;
      nopoint.score = 0;

    //   render() {
		// //if pause is true, return and stop render
		// if (this.pause) {
		// 	return;
		// }}
      
      // console.log(point.name);
    }
    
    this.reset();
  }
  
  
  rendor(svg, player1, player2) {
    // gives ball direction 
    this.y = this.y + this.vy;
    this.x = this.x + this.vx;
    
    this.wallCollision(player1, player2);
    this.paddleCollision(player1, player2);
    let circle = document.createElementNS(SVG_NS, 'circle');
    
    //position ball in the center of board
    circle.setAttributeNS(null, 'r', this.ballRadius);
    circle.setAttributeNS(null, 'fill', 'purple');
    circle.setAttributeNS(null, 'stroke', 'blue');
    circle.setAttributeNS(null, 'cx', this.x);
    circle.setAttributeNS(null, 'cy', this.y);
    
    svg.appendChild(circle);
  }
}