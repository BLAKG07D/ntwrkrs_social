import {Card,Button} from 'react-bootstrap';

import React, { Component } from 'react'
import PostControls from './PostControl';
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
            <Card.Body>
                    
            </Card.Body>
            <Card.Footer>
            <PostControls id={this.state.id}/>
            </Card.Footer>
        </Card>
      </>
    )
  }
}
