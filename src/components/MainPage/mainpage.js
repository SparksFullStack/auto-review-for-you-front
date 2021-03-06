import React, { Component } from 'react';
import SearchBar from './searchbar';
import MainContent from './maincontent';
import axios from 'axios';
import Navbar from './navbar';
import Footer from './Footer';

const dbRequests = `https://back-lambda-car-reviews.herokuapp.com/auth/verify`;

// This file contains the various components that make up the landing page
// and search results. This file is rendered in App.

class MainPage extends Component {
  state = {
    isLoggedIn: false
  };

  componentWillMount() {
    const localJWT = localStorage.getItem('jwt');
    if (!localJWT) this.handleLogin(false);
    else {
      axios
        .get(dbRequests, { headers: { jwt: localJWT } })
        .then(response => {
          const { tokenIsValid } = response.data;
          if (tokenIsValid) this.handleLogin(tokenIsValid);
          else this.handleLogin(false);
        })
        .catch(err => {
          console.log(err);
          this.handleLogin(false);
        });
    }
  }

  handleLogin = status => {
    this.setState({ isLoggedIn: status });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        <SearchBar isLoggedIn={isLoggedIn} />
        <MainContent isLoggedIn={isLoggedIn} />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
