import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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
    // constructor(props) {    //App components 'constructor" function gets called
    //     super(props); //reference to the parent's(React.component) constructor function
        
    //     //THIS IS THE ONLY TIME we do direct assignment. Initialze or updates our state object.
    //     this.state = {lat: null, errorMessage: ''};
    // }

    // refactored from constructor above. Babel will build the constructor for you.
    state = {lat: null, errorMessage: ''};

    componentDidMount() {
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

    componentDidUpdate() {
        console.log('My comp was re rendered!')
    }
    
    //helper function
    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
    
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} /> //state is passed down as a prop down to the child
        }

        return <Spinner message="Please accept location request"/>;
    }
    

    //React says we have to define render!! Is going to be called frequently when updating components.
    //avoid conditionals in render because you might want a property that encompasses all conditions. Create a helper function
    render() {
       return <div  className="border red">{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))