//Import the React and ReactDOM libraries from node modules into variables
//Import statement itself is from ES2015 Modules system.
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {  //add the parenthesis too below to invoke this function.
     return 'Click on me!';
}

// Create a react component(JSX, which allows us to write much simpler code which is converted by babel into a much complicated function calls)
const App = () => {
    const buttonText = 'Click Me!'; //JS variable that is referenced in JSX below.
    // const buttonText = { text: 'Click me};
    //Values that Jsx can't show: objects are not valid as a React child. Can't show a js object as a attribute on an element.
    //{buttonText.text} can work. As it refers to text property of js object.
    const labelText = 'Enter Name:';
    //multiple interpolations cna be done in jsx.

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color:'white'}}>
                {buttonText}
            </button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
