import React from  'react';

import 'antwar-default-theme/scss/main.scss';

import Fork from 'react-ghfork';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

//XXX: figure out how to force order
//import 'react-ghfork/gh-fork-ribbon.ie.css' // ie support
import 'react-ghfork/gh-fork-ribbon.css'

import config from 'config';

if(config.theme.customStyles) {
  require('customStyles/' + config.theme.customStyles);
}

module.exports = React.createClass({
  displayName: 'Body',
  render() {
    const section = this.props.section;
    const sectionName = section.name;

    return (
      <div>
        {sectionName && sectionName !== '/' ?
          <Nav pages={config.theme.navigation(sectionName)} /> :
          null
        }
        {sectionName && sectionName !== '/' ? this.renderFeedback() : null}

        <main role="main">{this.props.children}</main>

        <Footer sectionPages={section.pages} />
      </div>
    );
  },
  renderFeedback() {
    const page = this.props.page;

    return <Fork className="right ribbon"
      project={`survivejs/webpack_react/issues/new?title=${page.title} - `}
      text="Submit feedback"
      style={{backgroundColor: 'black'}}
      target="_blank" />;
  }
});