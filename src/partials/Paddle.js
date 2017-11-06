import {SVG_NS} from '../settings';


export default class Paddle {
  constructor(boardHeight, width, height, x, y, up, down, name) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.score = 0;
    this.name = name;

    document.addEventListener('keyup', event => {
      switch(event.key) {
        case up:
          this.upPressed = false;
        break;
        case down:
          this.downPressed = false;
        break;
      }
    });
    
    document.addEventListener('keydown', event => {
      switch(event.key) {
        case up:
          this.upPressed = true;
        break;
        case down:
        this.downPressed = true;
        break;
      }
    });
  }

  coordinates(x, y, width, height) {                //where the paddle is in space, for collision
    let leftX = x;
    let rightX = x + width;             
    let topY = y;
    let bottomY = y + height;
    return { leftX, rightX, topY, bottomY };
  }
  
  up() {
    this.y = Math.max(this.y - this.speed, 0);
  }
  
  down() {
    this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
  }
  
  render(svg){
    if (this.downPressed) {
      this.down(); 
    }
    if (this.upPressed) {
      this.up();
    }
    
    let rect = document.createElementNS(SVG_NS, 'rect');
    
    rect.setAttributeNS(null, 'boardHeight', this.boardHeight);
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'x', this.x);
    rect.setAttributeNS(null, 'y', this.y);
    rect.setAttributeNS(null, 'fill', 'green');  
    
    svg.appendChild(rect);
  }
}