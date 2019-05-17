import React, { Component } from 'react';
import './App.scss';

import SearchField from './components/searchField';
import ImagesGrid from './components/imagesGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      noResults: false
    }
    this.fetchImages = this.fetchImages.bind(this);
  }
  componentDidMount() {
    this.searcField = document.querySelector('#search-filed');
  }
  render() {
    return (
      <div className="App">
        <SearchField onSubmit={this.fetchImages}/>
        <ImagesGrid images={this.state.images} noResults={this.state.noResults}/>
      </div>
    );
  }
  fetchImages(e) {
    e.preventDefault();
    const TAGS = this.searcField.value;
    if (TAGS.length === 0) return;
    const API_KEY = '6b3575d10435de5f010fc941f5eff94a';
    const url = 'https://api.flickr.com/services/rest'
      + '?method=flickr.photos.search'
      + '&api_key=' + API_KEY
      + '&text=' + encodeURI(TAGS)
      + '&format=json'
      + '&nojsoncallback=1';

    fetch(url)
      .then((res) => res.json())
      .then(({ photos: { photo: images }}) => {
        this.setState(() => {return { images, noResults: !images.length }});
      })
      .catch((err) => {console.error('Error happened:', err)});
  }
}

export default App;
