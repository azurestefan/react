import React from 'react';
import ReactDOM from 'react-dom';

//functional component
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position), //success callback: when we get back a result
//         (err) => console.log(err)//failure callback 
//     );

//     return <div>Latitude: </div>;
// };

//class component
class App extends React.Component {
    constructor(props) {
        super(props); //reference to the parent's(React.component) constructor function
        
        //THIS IS THE ONLY TIME we do direct assignment. Use setState
        this.state = {lat: null};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude}); //setState is a function that updates state.
            }, //success callback: when we get back a result
            err => console.log(err)//failure callback 
        );
    }
    

    //React says we have to define render!! Is going to be called frequently.
    render() {
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))