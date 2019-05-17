import React, { Component } from 'react';
import './App.scss';

import SearchField from './components/searchField';
import ImagesGrid from './components/imagesGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
    this.fetchImages = this.fetchImages.bind(this);
  }
  componentDidMount() {
    this.searcField = document.querySelector('#search-filed');

    this.searcField.value = 'cats';
    this.fetchImages({preventDefault: () => {}});
  }
  render() {
    return (
      <div className="App">
        <SearchField onSubmit={this.fetchImages}/>
        <ImagesGrid images={this.state.images}/>
      </div>
    );
  }
  fetchImages(e) {
    e.preventDefault();
    const API_KEY = '6b3575d10435de5f010fc941f5eff94a';
    const TAGS = this.searcField.value;
    const url = 'https://api.flickr.com/services/rest'
      + '?method=flickr.photos.search'
      + '&api_key=' + API_KEY
      + '&text=' + encodeURI(TAGS)
      + '&format=json'
      + '&nojsoncallback=1';

    fetch(url)
      .then((res) => res.json())
      .then(({ photos: { photo: images }}) => {
        console.log(images);
        this.setState(() => {return { images }});
      })
      .catch((err) => {console.error('Error happened:', err)});
  }
}

export default App;
