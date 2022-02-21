import { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Controls from './components/Controls';
import MyArray from './components/MyArray';
import Algorithm from './components/Algorithm';

class App extends Component {
  state = {
    array: [],
    size: 5,
    algorithm: "Choose Algorithm",
    frames: [],
    frameIndex: 0,
    sorted: false,
    playing: false,
    speed: 0
  };

  componentDidMount() {
    this.updateArray();
  }

  updateAlgorithm = (algorithm) => {
    // Remove previous sort binding
    let play = document.querySelector('.play');
    play.onclick = this.playFrames;

    // Remove alert if any
    ReactDOM.unmountComponentAtNode(document.querySelector('.alert-root'));

    this.setState({algorithm});
    setTimeout(() => this.updateArray(), 0);
  }

  // Update number of elements in array
  updateSize = (size) => {
    this.setState({size});
    setTimeout(() => this.updateArray(), 0);
  }

  // Generate new random array with values between 0-100
  updateArray = () => {
    const array = Array.from({length: this.state.size}, () => Math.floor(Math.random() * 100));
    this.setState({array, frames: [], frameIndex: 0, sorted: false, playing: false});
    // console.log(this.state.array);
  }

  // FRAMES/PLAYBACK
  toggleSpeed = () => {
    let speed = this.state.speed;
    if(speed < 3) {
      speed++;
    } else {
      speed = 0;
    }
    this.setState({speed: speed});
  }

  // Calculate the duration between swap animations
  getSpeed = () => {
    let dur;
    if(this.state.algorithm === "Selection Sort") {
      dur = 100 - (this.state.speed*25);
    } else if(this.state.algorithm === "Bubble Sort") {
      dur = 50 - (this.state.speed*50);
    } else if(this.state.algorithm === "Insertion Sort") {
      dur = 125 - (this.state.speed*35);
    } else if (this.state.algorithm === "Quick Sort") {
      dur = 40 - (this.state.speed*13);
    } else if (this.state.algorithm === "Merge Sort") {
      dur = 40 - (this.state.speed*13);
    } else if(this.state.algorithm === "Heap Sort") {
      dur = 40 - (this.state.speed*13);
    }
    return dur;
  }

  setFrames = (frames) => {
    if(this.state.sorted === false) {
      this.setState({frames, sorted: true});
    }
  }

  playFrames = async () => {
    console.log(this.state.playing);
    if(this.state.playing === false) {  // disable play button spam clicking
      this.setState({playing: true});
      for(let i=this.state.frameIndex+1; i<this.state.frames.length; i++) {
        if(this.state.playing === true) {
          let dur = this.getSpeed();
          await new Promise(resolve => setTimeout(resolve, dur));
          if(this.state.playing === true) {
            this.renderArray(this.state.frames[i]);
            this.setState({frameIndex: this.state.frameIndex + 1});
          }
        }
      }
      this.setState({frameIndex: this.state.frameIndex - 1});
      this.setState({playing: false});
    }
  }

  frameBack = () => {
    this.setState({playing: false});
    if(this.state.frameIndex > 0) {
      this.setState({frameIndex: this.state.frameIndex - 1});
      console.log(this.state.frameIndex);
      this.renderArray(this.state.frames[this.state.frameIndex-1]);
    }
  }

  frameNext = () => {
    this.setState({playing: false});
    if(this.state.frameIndex < this.state.frames.length-1) {
      this.setState({frameIndex: this.state.frameIndex + 1});
      console.log(this.state.frameIndex);
      this.renderArray(this.state.frames[this.state.frameIndex+1]);
    }
  }

  // Render array
  renderArray = (array) => {
    this.setState({array});
  }

  render() {
    return (
      <div>
        <Header updateArray={this.updateArray} updateAlgorithm={this.updateAlgorithm} updateSize={this.updateSize}/>
        <div className="alert-root"></div>
        <div className="array">
          <MyArray arr={this.state.array} size={this.state.size}/>
        </div>
        <Controls back={this.frameBack} play={this.playFrames} next={this.frameNext} speed={this.state.speed} toggleSpeed={this.toggleSpeed}/>
        <Algorithm name={this.state.algorithm} arr={[...this.state.array]} renderFrames={this.playFrames} setFrames={this.setFrames}/>
      </div>
    );
  }
}

export default App;
