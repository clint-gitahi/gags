import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class Modal extends Component {

  render() {
    const { _id, i, title, description, image, created_at, image_id } = this.props.img;

    return (
      <div className="ui modal">
        <i className="close icon"></i>
        <div className="header">
          Profile Picture
        </div>
        <div className="image content">
          <div className="ui medium image">
            <img src={image} />
          </div>

          <div className="description">
            <div>
              {title}
            </div>
            <div>
              {description}
            </div>
          </div>
        </div>
        <div className="actions">
          <Button basic color='green'>Edit</Button>
        </div>
      </div>
    )
  }
}

export default Modal;
