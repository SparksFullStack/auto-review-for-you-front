import React, { Component } from 'react';
import SearchBar from './searchbar';
import MainContent from './maincontent';
import axios from 'axios';
import Navbar from './navbar';

const dbRequests = `https://back-lambda-car-reviews.herokuapp.com/auth/verify`;

// This file contains the various components that make up the landing page
// and search results. This file is rendered in App.

class MainPage extends Component {
  render() {
    return (
      <div>
        <div>
          <SearchBar />
        </div>
        <MainContent />
        
        <div className="team-link">
          <i className="fas fa-car"></i>
          <br />
          <a
            href="https://lambdaschool.com"
            className="team-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to learn about The Team!
          </a>
          <div style={{ width: '10px' }} />
        </div>
      </div>
    );
  }
}

export default MainPage;
