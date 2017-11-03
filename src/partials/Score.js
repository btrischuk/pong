import {SVG_NS} from '../settings';

export default class Score {
  
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  
  render(svg, score) {
    
    let text = document.createElementNS(SVG_NS, 'text');
    text.setAttributeNS(null, 'font-family', 'Silkscreen Web', 'monotype');
    text.setAttributeNS(null, 'font-size', '30');
    text.setAttributeNS(null, 'fill', 'white');
    text.setAttributeNS(null, 'x', this.x);  
    text.setAttributeNS(null, 'y', this.y);
    
    text.innerHTML = score;
    svg.appendChild(text);
    
  }
}