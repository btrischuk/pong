import {
	SVG_NS,
	KEYS,
	boardGap,
	paddleHeight,
	paddleWidth,
	ballRadius
} from '../settings.js';

import Board from './Board'
import Paddle from './Paddle'
import Ball from './Ball'
import score from './Score'

export default class Game {
	
	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		
		this.gameElement = document.getElementById(this.element)
		this.board = new Board(this.width, this.height);
		
		this.score1 = new score(100, 20, 30, this);
		this.score2 = new score(370, 20, 30, this);
		
		this.boardGap = boardGap;
		this.paddleWidth = paddleWidth;
		this.paddleHeight = paddleHeight;
		this.ballRadius = ballRadius;
		
		this.ball = new Ball(this.ballRadius, this.width, this.height, this);
		this.ball2 = new Ball(this.ballRadius/5 , this.width, this.height, this);
		
		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			(this.height - this.paddleHeight) / 2,
			KEYS.a,
			KEYS.z,
			'steve' 
		);
		
		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			(this.width - this.paddleWidth - this.boardGap),
			(this.height - this.paddleHeight) / 2,
			KEYS.up,
			KEYS.down,
			'bob'
		);
		
		//this inside is the same as outside of code block
		document.addEventListener('keydown', event => {
			if (event.key === KEYS.spaceBar) {
				this.pause = !this.pause;
			}
		});
	}

	togglePause() {
		this.pause = !this.pause;
	}

	restart () {
		this.board = new Board(this.width, this.height);
		
		this.score1 = new score(100, 20, 30, this);
		this.score2 = new score(370, 20, 30, this);
		
		this.boardGap = boardGap;
		this.paddleWidth = paddleWidth;
		this.paddleHeight = paddleHeight;
		this.ballRadius = ballRadius;
		
		this.ball = new Ball(this.ballRadius, this.width, this.height, this);
		this.ball2 = new Ball(this.ballRadius/5, this.width, this.height, this);		
		
		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			(this.height - this.paddleHeight) / 2,
			KEYS.a,
			KEYS.z,
			'steve' 
		);
		
		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			(this.width - this.paddleWidth - this.boardGap),
			(this.height - this.paddleHeight) / 2,
			KEYS.up,
			KEYS.down,
			'bob'
		);
		this.togglePause();
	}
	
	render() {
		//if pause is true, return and stop render
		if (this.pause) {
			return;
		}
		
		this.gameElement.innerHTML = ' ';
		
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		svg.setAttributeNS(null, 'version', '1.1');
		
		this.gameElement.appendChild(svg);
		
		this.board.render(svg);
		this.ball.rendor(svg, this.player1, this.player2);		
		this.ball2.rendor(svg, this.player1, this.player2);
		this.player1.render(svg);
		this.player2.render(svg);
		this.score1.render(svg, this.player1.score);
		this.score2.render(svg, this.player2.score);	
		

		if (this.player1.score === 5) {

			this.winner1.render(svg, 'Winner:player 1');

		} else if(this.player2.score === 5){

			this.winner2.render(svg, 'winner:player 2');
		}
	}
}