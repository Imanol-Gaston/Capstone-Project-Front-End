import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";
import ProfileDetails from "../pages/profile-details";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    })
  }

  getPortfolioItems() {
    axios
      .get("http://127.0.0.1:5000/api/v1/profiles/")
      .then(response => {
        this.setState({
          data: response.data.profiles
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return (
        <PortfolioItem key={item.id} item={item} />
      );
    });
  }


  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }

    return (
      <div className="portfolio-items-wrapper">
        {this.portfolioItems()}
      </div>
    )
  }
}