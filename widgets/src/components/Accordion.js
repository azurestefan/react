import React, { useState } from 'react'; //useState is a hook imported.

const Accordion = ({ items }) => {
    //useState is a primitive hook provided by the react library that lest you use state in a functional component.
    //Array destructuring. Shortcut to get elements inside an array.
    //activeIndex: piece of state, setActiveIndex: function we call to update our piece of state, causes entire component to rerender
    //useState takes in one argument, which becomes the default value of our piece of state.(Initialization)
    //If you want multiple states, we call the state many times.
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index)=> {
        //expression that decides if active should be added to divs below.
        //it is active when the index is equal to the activeIndex in state.
        const active = index === activeIndex ? 'active' : '';

        return (
        <React.Fragment key={item.title}>
            <div className={`title ${active}`}
                 onClick={() => onTitleClick(index)}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
        );
    });

    return <div className="ui styled accordion">
        {renderedItems}
    </div>
};

export default Accordion;