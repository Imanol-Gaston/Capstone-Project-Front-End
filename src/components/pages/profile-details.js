import React, { Component } from 'react';
import axios from 'axios';

export default class ProfileDetails extends Component {
  constructor(props) {
    super(props);

    console.log(props)

    this.state = {
      isLoading: true,
      data: {}
    };
  }

  getProfile() {
    axios
      .get(`${process.env.API_URL}/api/v1/profiles/${this.props.match.params.slug}`)
      .then(response => {
        this.setState({
          data: response.data.profile,
          isLoading: false
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getProfile();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    
    return (
      <div className="portfolio-items-wrapper">
        <h2>{this.state.data.fullname}</h2>
        <p>{this.state.data.full_description}</p>
      </div>
    )
  }
}
