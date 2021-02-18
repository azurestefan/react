import React from 'react';

class SearchBar extends React.Component {
    // onInputChange(event) { //anytime user enters input this callback will be invoked. event object is passed as an argument.
    //     console.log(event.target.value)  //what the user typed in.
    // }

    state = { term: ''}; //update the term property with whatever the current value that input is. 

    onFormSubmit = event => { //prevents page from updating every time you press enter.
        event.preventDefault();

        console.log(this.state.term); //this points to undefined. Error

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>                    
                        {/* <input type="text" onChange={this.onInputChange}/>  
                        refactored to code below. e is for event. Can directly pass arrow function directly  to the prop itself
                        this is a uncontrolled element as only the html input tag/DOM has the idea of what the input value is.
                        */}
                        {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> 
                        Controlled element is below. Where now the react component knows what the value of the input is as state is updated.
                        value={this.state.term} allows the react application to drive and store all the data.
                        */}
                        <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
        //method/call back function onInputChange(defined above) is passed to the onChange prop inside the input tag.
        //important thing to note is that we don't put a parenthesis () after onInputChange
        //as it means the onInputChange will be automatically called anytime your component is rendered.
        //We are leaving it to the input element to call the function some time in the future.
        
    }
}

export default SearchBar;