import React/*, { Component } */from 'react';
//import './App.css';

// class App extends Component {
//   render () {
//     return (
//       <h1>Welcome!</h1>
//     )
//   }
// }


//stateless functional components in react - just to represent something visual

function Box(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}
function App() {
   return (
    <Box
      text="Hi, Hows it?"
      subtitle="this is a subtitle"
    />
   )
}

export default App;
