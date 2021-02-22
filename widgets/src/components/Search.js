import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming'); //default input set to avoid empty search error at first load.
    const [results, setResults] = useState([]); //get results from useEffect search.

    useEffect(()=> {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });

            setResults(data.query.search);
        };

        if (term && !results.length) {
            search();
        } else {
        //time out for typing in a search. Skip this if it is the first time the component is being rendered.
            const timeoutId = setTimeout(() => {
                if(term) {
                    search();
                }
            }, 1000);

            return () => { //useEffect can only return functions
                clearTimeout(timeoutId); //We use clearTimeout to cancel previous timer.
            };
        }
    }, [term]);  //the second argument controls when our code is executed. Empty array, no array, or an array with values

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className= "header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form ">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                    value = {term}
                    onChange = {e => setTerm(e.target.value)}
                    className = "input" />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;