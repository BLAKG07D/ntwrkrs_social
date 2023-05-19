import {Card} from 'react-bootstrap';

import React, { Component } from 'react'
import PostContent from './post/PostContent';
import PostImpressions from './post/PostImpressions';
import PostHeader from './post/PostHeader';
import PostFooter from './post/PostFooter';
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
                <PostHeader displayName={"Robert Armstrong"} userName={'blakgold'}/>
            </Card.Header>
           
         
            <Card.Body>
                  <PostContent/>  
            </Card.Body>
            <Card.Footer>
              <PostFooter/>
              <PostImpressions/>
            </Card.Footer>
        </Card>
      </>
    )
  }
}
