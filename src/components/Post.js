import {Card} from 'react-bootstrap';

import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id:""
      }
    }
    
  render() {
    return (
      <>
        <Card>
            <Card.Header>
                
            </Card.Header>
            <Card.Img>
              {this.props.postImage}
            </Card.Img>
            <Card.Body>
                  {this.props.postContent}  
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
        </Card>
      </>
    )
  }
}
