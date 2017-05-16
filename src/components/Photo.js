import React, { Component } from 'react';
import { Link } from 'react-router';
import { Divider, Image, Button } from 'semantic-ui-react';

export default class Photo extends Component {
  render() {
    const { _id, i, title, description, image, created_at, image_id, deletePhoto, toggle } = this.props;

    return (
      <div className="column">
        <div className="ui card">
          <div className="image">
            <Image.Group size='small'>
              <Image src={image} shape='rounded' size="medium"/>
            </Image.Group>
          </div>
          <div className="content">
            <h4>{title}</h4>
            <div className="meta">
              <span className="date">
                <i className="created_at"></i>{created_at}
              </span>
            </div>
            <div className="description">
              {description}
            </div>
          </div>
          <div>
            <Button basic color='green' onClick={() => toggle(i)}>View/Edit</Button>
            <Button basic color='red' onClick={() => deletePhoto(_id)}>Delete</Button>
          </div>
        </div>
      </div>
    )
  }
}
