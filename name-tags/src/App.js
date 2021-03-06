import React, { Component } from 'react';
import './App.css';

const languages = [
  'English',
  'French',
  'Chineese',
  'Japaneese'
]

class App extends Component {
  state ={
    namesList: '',
    language: ''
  }

  onChangeInput = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const namesArr = this.state.namesList ? this.state.namesList.split("\n").filter(o=>o) : [];
    return (
      <div className="App">
      <div>
        <label>Enter Names</label> <br/>
      <textarea rows={5} cols={50} name="namesList" value={this.state.namesList} onChange={this.onChangeInput}/>
      </div><br/>
      <div>
        <label>Select Language</label>
      <select value={this.state.language} name="language" onChange={this.onChangeInput}>
        <option value="">Select Language</option>
          {
            languages.map((item, i) => <option key={i} value={item}>{item}</option>)
          }
        </select>
      </div>

    <br/><br/>

    <h3>Name with Language</h3>
          <ul>
            {
             this.state.language &&
              namesArr.map(name => <li>{name + "speaks " + this.state.language}</li>)
            }
          </ul>
      </div>
    );
  }
}

export default App;
