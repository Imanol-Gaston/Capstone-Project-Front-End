import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portoflioItemClass: ""
    };
  }

  render() {
    const { id, brief_description, fullname } = this.props.item;
    return (
      <div className="portfolio-item-wrapper">
        <div className="portfolio-item-wrapper-info">
          <div className="title">
            <h3>{fullname}</h3>
          </div>
          <div className="subtitle">{brief_description}</div>
        </div>
        <div className="portfolio-item-wrapper-right">
          <Link to={`profiles/${id}`} className="show-profiles">{fullname}'s full profile</Link>
        </div>
      </div>
    )
  }
}