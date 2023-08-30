import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Susan Sample",
      age: 0,
      pets: ["Fido", "Mr Whiskers"]
    };
  }

  hadBirthday = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <>
        <h2>{this.state.name}</h2>
        <h3 onClick={this.hadBirthday}>Current Age: {this.state.age}</h3>
        <h4>Pets</h4>
        <ul>
          {
            this.state.pets.map((pet, idx) => {
              return <li key={idx}>{pet}</li>
            })
          }
        </ul>
      </>
    )
  }
}

export default App;
