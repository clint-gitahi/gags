import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link, hashHistory } from 'react-router';
import { Form } from '../components'

class AddImage extends Component {
  constructor(props) {
    super(props);

    this.state = { newImage: {}}

    //this.submit = this.submit.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  // submit() {
  //   // fetch('http://localhost:4000/gram', {
  //   //   headers: new Headers({
  //   //     "Content-Type": "application/json"
  //   //   }),
  //   //   method: "POST"
  //   // })
  //   // .then(res => res.json())
  //   // .then(data => {
  //   //   console.log(data.message);
  //   //   hashHistory.push("/");
  //   // })
  //   console.log( "____+++++ state++++", this.state.newImage);
  // }

  setImage(info) {
    // const newImage = {
    //   title: document.getElementById('title').value,
    //   description: document.getElementById('description').value,
    //   path: document.getElementById('image').value
    // }
    fetch('http://localhost:4000/gram', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(info)
    })
      .then(res =>
        res.json())
      .then(data => {
        console.log(data.message);
        hashHistory.push('/')
      })

    console.log(this.state.newImage);
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/"><Button basic color="violet">Back</Button></Link>
        </div>
        <div>
          <Form
            setImage={this.setImage}
          />
        </div>
      </div>
    );
  }
}

export default AddImage;
