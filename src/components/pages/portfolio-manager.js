import React, { Component } from 'react';
import axios from 'axios';

import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: [],
      portfolioToEdit: {}
    };

    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);
  }

  clearPortfolioToEdit() {
    this.setState({
      portfolioToEdit: {}
    })
  }

  handleEditClick(portfolioItem) {
    this.setState({
      portfolioToEdit: portfolioItem
    })
  }

  handleDeleteClick(portfolioItem) {
    axios
      .delete(
        `https:ikeralareki.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          portfolioItems: this.state.portfolioItems.filter(item => {
            return item.id !== portfolioItem.id;
          })
        })
        return response.data;
      })
      .catch(error => {
        console.log('handleDeleteClick', error);
      });
  }

  handleEditFormSubmission() {
    this.getPortfolioItems();
  }

  handleNewFormSubmission(portfolioItem) {
    this.setState({
      portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
    });
  }

  handleFormSubmissionError() {
    console.log('handleFormSubmissionError error', error);
  }

  getPortfolioItems() {
    axios
      .get(
        "https://ikeralareki.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {
        withCredentials: true
      })
      .then(response => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items]
        });
      })
      .catch(error => {
        console.log('error in getPortfolioItems', error);
      })
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    return (
      <div className='portfolio-manager-wrapper'>
          <PortfolioForm
            handleNewFormSubmission={this.handleNewFormSubmission}
            handleEditFormSubmission={this.handleEditFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
            clearPortfolioToEdit={this.clearPortfolioToEdit}
            portfolioToEdit={this.state.portfolioToEdit}
          />
        </div>
    );
  }
}