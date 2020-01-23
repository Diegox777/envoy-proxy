import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, CardBody, CardHeader, CardFooter } from 'reactstrap';
import Person from './components/Person';
import Comment from './components/Comment';
import Reactions from './components/Reactions';

class App extends Component {
  state = {
    name: '',
    comment: '',
    date: '',
    likes: 0,
    love: 0,
    haha: 0,
    angry: 0,
    sad: 0
  }
  
  async updateComment() {
    let res;
    res = await fetch('http://localhost:3015/api/comment');
    const data = await res.json();

    
    this.setState({
      name: data.author.firstName + ' ' + data.author.lastName,
      comment: data.comment,
      date: data.date,
      likes: data.reactions.likes,
      love: data.reactions.love,
      haha: data.reactions.haha,
      angry: data.reactions.angry,
      sad: data.reactions.sad,
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
            <CardFooter>
              <Reactions 
                likes={this.state.likes}
                sad={this.state.sad}
                haha={this.state.haha}
                love={this.state.loves}
                angry={this.state.angry}                
              />
            </CardFooter>
          </Card>
        </Container>
      </div>
    );  
  }
}

export default App;
