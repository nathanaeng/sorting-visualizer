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
    frames: []
  };

  componentDidMount() {
    this.updateArray();
  }

  updateAlgorithm = (algorithm) => {
    // Remove previous sort binding
    let play = document.querySelector('.play');
    play.replaceWith(play.cloneNode(true));

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
    this.setState({array, frames: []});
    console.log(this.state.array);
  }

  // FRAMES
  setFrames = (frames, dur) => {
    this.setState({frames});
    setTimeout(() => this.playFrames(dur), 0);
  }

  playFrames = async (dur) => {
    for(let i of this.state.frames) {
      await new Promise(resolve => setTimeout(resolve, dur));
      this.renderArray(i);
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
        <Controls />
        <Algorithm name={this.state.algorithm} arr={[...this.state.array]} renderFrames={this.playFrames} setFrames={this.setFrames}/>
      </div>
    );
  }
}

export default App;
