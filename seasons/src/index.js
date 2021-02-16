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
class App extends React.Component {  //Instance of App component created
    constructor(props) {    //App components 'constructor" function gets called
        super(props); //reference to the parent's(React.component) constructor function
        
        //THIS IS THE ONLY TIME we do direct assignment. Initialzed. Use setState
        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude}); //setState is a function that updates state object.
            }, //success callback: when we get back a result. React sees we update the state of the component.
            // After update in state, react calls our render mehtod the second time.
            err => {
                this.setState({errorMessage: err.message});
            }//failure callback 
        );
    }
    

    //React says we have to define render!! Is going to be called frequently.
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
       
        if(!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))