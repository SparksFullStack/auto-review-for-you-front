import React, { Component } from 'react';
import ReviewList from './reviewlist';
import Navbar from '../MainPage/navbar';
import axios from 'axios';

const dbRequests = `https://back-lambda-car-reviews.herokuapp.com/auth/verify`;

const MyReviews = () => (
  <div>
    <ReviewList />
  </div>
)

export default MyReviews;
