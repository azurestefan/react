import React from 'react';
import Accordion from './components/Accordion';
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
    }
]

export default () => {
    return (
    <div>
        <Search />
    </div>
    );
};