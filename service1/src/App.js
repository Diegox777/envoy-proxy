import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, CardBody, CardHeader } from 'reactstrap';
import Person from './components/Person';
import Comment from './components/Comment';

class App extends Component {
  state = {
    name: '',
    comment: '',
    date: ''
  }
  
  async updateComment() {
    let res;
    res = await fetch('http://service1_envoy:3007/api/person');
    const person = await res.json();

    res = await fetch('http://service1_envoy:3008/api/comment');
    const comment = await res.json();
    
    this.setState({
      name: person.firstName + ' ' + person.lastName,
      comment: comment.comment,
      date: comment.date
    });      
  }

  async componentDidMount() {
    this.updateComment();
  }

  handleNewComment = async () => {
    this.updateComment();
  }

  render () {
    return (
      <div className="App">
        <Container>
          <h1>Comments!</h1>
          <Button color="primary" onClick={this.handleNewComment}>Get random comment</Button>
          <Card>
            <CardHeader>
              Comment
            </CardHeader>
            <CardBody>
              <blockquote className="blockquote mb-0">
                <Comment comment={this.state.comment} />
                <Person name={this.state.name} date={this.state.date} />
              </blockquote>
            </CardBody>
          </Card>
        </Container>
      </div>
    );  
  }
}

export default App;
