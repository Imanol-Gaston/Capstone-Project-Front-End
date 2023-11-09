import React, { Component } from 'react';
import axios from 'axios';
import DropzoneComponent from 'react-dropzone-component';

import "../../../node_modules/react-dropzone-component/styles/filepicker.css"
import "../../../node_modules/dropzone/dist/min/dropzone.min.css"

export default class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: "",
      category: "",
      supplier: "",
      product: "",
      description: "",
      duration: "",
      location: "",
      thumb_image: "",
      banner_image: "",
      logo: "",
      editMode: false,
      apiUrl: "https://ikeralareki.devcamp.space/portfolio/portfolio_items",
      apiAction: "post"
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleThumbDrop = this.handleThumbDrop.bind(this);
    this.handleBannerDrop = this.handleBannerDrop.bind(this);
    this.handleLogoDrop = this.handleLogoDrop.bind(this);
    this.deleteImage = this.deleteImage.bind(this);

    this.thumbRef = React.createRef();
    this.bannerRef = React.createRef();
    this.logoRef = React.createRef();
  }

  deleteImage(imageType) {
    axios
      .delete(`https://ikeralareki.devcamp.space/portfolio/delete-portfolio-image/${this.state
        .id}?image_type=${imageType}`,
        { withCredentials: true }
      ).then(response => {
        this.setState({
          [`${imageType}_url`]: ""
        })
      }).catch(error => {
        console.log('deleteImage error', error);
      });
  }

  componentDidUpdate() {
    if (Object.keys(this.props.portfolioToEdit).length > 0) {
      const {
        id,
        role,
        category,
        supplier,
        product,
        description,
        location,
        duration,
        thumb_image_url,
        banner_image_url,
        logo_url
      } = this.props.portfolioToEdit

      this.props.clearPortfolioToEdit();

      this.setState({
        id: id,
        role: role || "",
        category: category || "",
        supplier: supplier || "",
        product: product || "",
        description: description || "",
        duration: duration || "",
        location: location || "",
        editMode: true,
        apiUrl: `https://ikeralareki.devcamp.space/portfolio/portfolio_items/${id}`,
        apiAction: "patch",
        thumb_image_url: thumb_image_url || "",
        banner_image_url: banner_image_url || "",
        logo_url: logo_url || ""
      })
    }
  }

  handleThumbDrop() {
    return {
      addedfile: file => this.setState({ thumb_image: file })
    };
  }

  handleBannerDrop() {
    return {
      addedfile: file => this.setState({ banner_image: file })
    };
  }

  handleLogoDrop() {
    return {
      addedfile: file => this.setState({ logo: file })
    };
  }

  componentConfig() {
    return {
      iconFiletypes: [".doc", ".docx", ".pdf"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    }
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    }
  }

  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_item[role]", this.state.role);
    formData.append("portfolio_item[category]", this.state.category);
    formData.append("portfolio_item[supplier]", this.state.supplier);
    formData.append("portfolio_item[product]", this.state.product);
    formData.append("portfolio_item[description]", this.state.description);
    formData.append("portfolio_item[location]", this.state.location);
    formData.append("portfolio_item[duration]", this.state.duration);

    if (this.state.thumb_image) {
      formData.append("portfolio_item[thumb_image]", this.state.thumb_image);
    }

    if (this.state.banner_image) {
      formData.append("portfolio_item[banner_image]", this.state.banner_image);
    }

    if (this.state.logo) {
      formData.append("portfolio_item[logo]", this.state.logo);
    }

    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSumbit(event) {
    axios({
      method: this.state.apiAction,
      url: this.state.apiUrl,
      data: this.buildForm(),
      withCredentials: true
    })
      .then(response => {
        if (this.state.editMode) {
          this.props.handleEditFormSubmission();
        } else {
          this.props.handleNewFormSubmission(response.data.portfolio_item);
        }

        this.setState({
          role: "",
          category: "",
          supplier: "",
          product: "",
          description: "",
          location: "",
          duration: "",
          thumb_image: "",
          banner_image: "",
          logo: "",
          editMode: false,
          apiUrl: "https://ikeralareki.devcamp.space/portfolio/portfolio_items",
          apiAction: "post"
        });


        [this.thumbRef, this.bannerRef, this.logoRef].forEach(ref => {
          ref.current.dropzone.removeAllFiles();
        })
      }).catch(error => {
        console.log('portfolio form handlesubmit error', error);
      });

    event.preventDefault();
  }

  render() {
    return (

      <form onSubmit={this.handleSumbit} className='portfolio-form-wrapper'>
        <div className='one-column'>
          <h1>FILL OUT YOUR RESUME</h1>

          <h2 className='experiences'>Experiences</h2>
        </div>
        <div className='two-column'>
          <select
            name='role'
            value={this.state.role}
            onChange={this.handleChange}
            className='select-element'
          >
            <option value=''>-- Choose a work task --</option>
            <option value='Inspection'>Inspection</option>
            <option value='Activation'>Activation</option>
            <option value='Expedition'>Expedition</option>
            <option value='Others'>Others</option>
          </select>

          <select
            name='category'
            value={this.state.category}
            onChange={this.handleChange}
            className='select-element'
          >
            <option value=''>-- Choose a work type --</option>
            <option value='Mechanical'>Mechanical</option>
            <option value='Electrical'>Electrical</option>
            <option value='Electromechanical'>Electromechanical</option>
            <option value='Others'>Others</option>
          </select>

          <input
            type='text'
            name='supplier'
            placeholder='Supplier'
            value={this.state.supplier}
            onChange={this.handleChange}
          />

          <input
            type='text'
            name='product'
            placeholder='Product'
            value={this.state.product}
            onChange={this.handleChange}
          />

          <input
            type='text'
            name='duration'
            placeholder='Duration'
            value={this.state.position}
            onChange={this.handleChange}
          />

          <input
            type='text'
            name='location'
            placeholder='Location'
            value={this.state.location}
            onChange={this.handleChange}
          />

        </div>

        <div className='one-column'>
          <textarea
            type='text'
            name='description'
            placeholder='Job description: Fill it out with the performed activities'
            value={this.state.description}
            onChange={this.handleChange}
            rows="4"
            cols="80"
          />

          <h2 className='attachments'>CV and Certificates</h2>

        </div>

        <div className='image-uploaders'>
          {this.state.thumb_image_url && this.state.editMode ?
            <div className='portfolio-manager-image-wrapper'>
              <img src={this.state.thumb_image_url} />

              <div className='image-removal-link'>
                <a onClick={() => this.deleteImage("thumb_image")}>
                  Remove file
                </a>
              </div>
            </div>
            :
            <DropzoneComponent
              ref={this.thumbRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleThumbDrop()}
            >
              <div className='dz-message'>CV</div>
            </DropzoneComponent>}

          {this.state.banner_image_url && this.state.editMode ?
            <div className='portfolio-manager-image-wrapper'>
              <img src={this.state.banner_image_url} />

              <div className='image-removal-link'>
                <a onClick={() => this.deleteImage("banner_image")}>
                  Remove file
                </a>
              </div>
            </div>
            :
            <DropzoneComponent
              ref={this.bannerRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleBannerDrop()}
            >
              <div className='dz-message'>Certificate</div>
            </DropzoneComponent>
          }
          {this.state.logo_url && this.state.editMode ?
            <div className='portfolio-manager-image-wrapper'>
              <img src={this.state.logo_url} />

              <div className='image-removal-link'>
                <a onClick={() => this.deleteImage("logo")}>
                  Remove file
                </a>
              </div>
            </div>
            :
            <DropzoneComponent
              ref={this.logoRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleLogoDrop()}
            >
              <div className='dz-message'>Other certificates</div>
            </DropzoneComponent>
          }
        </div>

        <div>
          <button className='btn' type='submit'>Save</button>
        </div>
      </form>
    );
  }
}