import React, {Component} from 'react';
import dvd from '../dvd.png';
import './colors.css';

const SPEED = 2;
const IMAGE_HEIGHT = 211;
const IMAGE_WIDTH = 340;
const COLORS = ['yellow', 'green', 'blue', 'red', 'orange', 'green', 'white'];

const rangedRandom = max => Math.floor(Math.random() * Math.floor(max));
const canvasWidth = () => (window.innerWidth || document.documentElement.clientWidth);
const canvasHeight = () => (window.innerHeight || document.documentElement.clientHeight);
const randomColor = () => COLORS[rangedRandom(COLORS.length)];
const coinFlip = () => Math.floor(Math.random() * 2) === 0;

class DvdLogo extends Component {
  constructor(props) {
    super(props);
    this.status = {
      color: randomColor(),
      directionX: coinFlip() ? 1 : -1,
      directionY: coinFlip () ? -1 : 1,
      x: rangedRandom(canvasWidth()) / 2,
      y: rangedRandom(canvasHeight()) / 2
    };
  }

  render() {
    return (
        <div className={this.status.color} data-testid="container" style={{
          height: IMAGE_HEIGHT,
          width: IMAGE_WIDTH,
          WebkitTransform: `translate3d(${this.status.x}px, ${this.status.y}px, 0)`,
          transform: `translate3d(${this.status.x}px, ${this.status.y}px, 0)`
        }}>
          <img src={dvd} alt="DVD logo"/>
        </div>
    );
  }

  inboundsX() {
    return this.status.x >= 0 && this.status.x + IMAGE_WIDTH <= canvasWidth();
  }

  inboundsY() {
    return this.status.y >= 0 && this.status.y + IMAGE_HEIGHT <= canvasHeight();
  }

  componentDidMount() {
    setInterval(() => {
      if (!this.inboundsX()) {
        this.status.directionX *= -1;
        this.status.color = randomColor();
      }
      if (!this.inboundsY()) {
        this.status.directionY *= -1;
        this.status.color = randomColor();
      }
      this.status.x += SPEED * this.status.directionX;
      this.status.y += SPEED * this.status.directionY;
      this.forceUpdate();
    }, 100);
  }
}

export default DvdLogo;