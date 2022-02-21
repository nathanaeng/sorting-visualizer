import { useEffect, useState, Component, setState } from 'react';
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
    playing: false
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

    this.setState({algorithm}, this.updateArray());
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
    console.log(this.state.array);
  }

  // FRAMES
  setFrames = (frames) => {
    if(this.state.sorted === false) {
      this.setState({frames, sorted: true});
    }
  }

  playFrames = async (dur) => {
    console.log(this.state.playing);
    if(this.state.playing === false) {  // disable play button spam clicking
      this.setState({playing: true});
      for(let i=this.state.frameIndex+1; i<this.state.frames.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        this.renderArray(this.state.frames[i]);
        this.setState({frameIndex: this.state.frameIndex + 1}); // does order matter?
      }
      this.setState({frameIndex: this.state.frameIndex - 1});
      this.setState({playing: false});
    }
  }

  frameBack = () => {
    if(this.state.frameIndex > 0) {
      this.setState({frameIndex: this.state.frameIndex - 1});
      console.log(this.state.frameIndex);
      this.renderArray(this.state.frames[this.state.frameIndex-1]);
    }
  }

  frameNext = () => {
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
        <Controls back={this.frameBack} play={this.playFrames} next={this.frameNext}/>
        <Algorithm name={this.state.algorithm} arr={[...this.state.array]} renderFrames={this.playFrames} setFrames={this.setFrames}/>
      </div>
    );
  }
}

export default App;
