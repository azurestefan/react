import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state =  { images: [] }; //initialize state with empty array

    //can use the promise object + then() syntax, or the newer async await syntax to GET
     onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
           
        });
        
        this.setState({ images : response.data.results });
    }

    render() {
        return(
            <div className="ui container" style={{ marginTop: '10px'}}> 
                <SearchBar onSubmit={this.onSearchSubmit} />
                {/* Found: {this.state.images.length} images */}
                <ImageList images={this.state.images}/>
            </div>
        );
    }
};

export default App;