import React, { Component } from 'react';
import Display from '../components/display/Display';
import Links from '../components/links/Links';
import ShortForm from '../components/short-form/ShortForm';
import { getPageLinks } from '../services/pageLinks';
import { shorten } from '../services/shortUrl';

export default class MainContainer extends Component {
  state = {
    longUrl: '',
    shortUrl: '',
    links: []
  }

  handleChange = ({ target }) => {
    this.setState({ longUrl: target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    Promise.all([
      shorten(this.state.longUrl),
      getPageLinks(this.state.longUrl)
    ])
      .then(([shortUrl, links]) => this.setState({ shortUrl, links }));
  }

  render() {
    const { links, longUrl, shortUrl } = this.state;
    return (
      <>
        <ShortForm
          longUrl={longUrl}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Display longUrl={longUrl} shortUrl={shortUrl}/>
        <Links links={links}/>
      </>
    );
  }
}
