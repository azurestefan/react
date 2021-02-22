import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

const items = [
    {
    title: 'What is React?',
    content: 'React is a front end js framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a great'
    },
    {
        title: 'React?',
        content: 'Use React by creating components'
    },
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
];

export default () => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Dropdown 
            selected={selected} 
            onSelectedChange={setSelected}
            options={options} 
            />
        </div>
    );
};