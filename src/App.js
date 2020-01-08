import React, { Component } from 'react';
//import './App.css';

// class App extends Component {
//   render () {
//     return (
//       <h1>Welcome!</h1>
//     )git
//   }
// }


//stateless functional components in react - just to represent something visual

// function Box(props) {
//   return (
//     <div>
//       <h1>{props.text}</h1>
//       <h2>{props.subtitle}</h2>
//     </div>
//   )
// }
// function App() {
//    return (
//     <Box
//       text="Stateless functional component"
//       subtitle="this is a subtitle"
//     />
//    )
// }

//class based react component

// (manually coded in button names)
// class App extends Component {
//   constructor(props) {
//     super(props); //will go to the component in this case (parent of constructor)
//     this.state = {
//       activated: false,
//     }
//     this.handleActiveChange = this.handleActiveChange.bind(this);
//   }

//   handleActiveChange() {
//     //this.setState({ activated: !this.state.activated })  (old version below if the go to)
//     this.setState((prevState) => {
//       return {
//         activated: !prevState.activated
//       }
//     })
//   }

//   render() {
//     const buttonText = this.state.activated ? 'Active' : 'Inactive';
//     return (
//       <button onClick={this.handleActiveChange}>
//         { buttonText }
//       </button>
//     )
//   }
// }

// (Dynamic button names making this a reusable component (need to use this.props.name))
class Button extends Component {
  constructor(props) {
    super(props); //will go to the component in this case (parent of constructor)
    this.state = {
      activated: false,
    }
    this.handleActiveChange = this.handleActiveChange.bind(this);
  }

  handleActiveChange() {
    //this.setState({ activated: !this.state.activated })  (old version below if the go to)
    this.setState((prevState) => {
      return {
        activated: !prevState.activated
      }
    })
  }

  render() {
    const buttonText = this.state.activated ? this.props.activeText : this.props.inactiveText;
    return (
      <button onClick={this.handleActiveChange}>
        { buttonText }
      </button>
    )
  }
}

class App extends Component {
  render() {
    return(
      <div>
        <Button
        activeText="ON"
        inactiveText="OFF"
        />
        <Button
        activeText="TRUE"
        inactiveText="FALSE"
        />
      </div>
    )
  }
}

export default App;
