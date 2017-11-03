import {SVG_NS} from '../settings'

export default class Ball {

  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
  }

  rendor(svg) {
    let circle = document.createElementNS(SVG_NS, 'circle');
    
    circle.setAttributeNS(null, 'r', this.radius);
    circle.setAttributeNS(null, 'fill', 'purple');
    circle.setAttributeNS(null, 'stroke', 'blue');
    circle.setAttributeNS(null, 'cx', this.boardWidth/2);
    circle.setAttributeNS(null, 'cy', this.boardHeight/2);
    
    svg.appendChild(circle);
  }
}