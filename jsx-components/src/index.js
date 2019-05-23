// Import the React and ReactDOM Libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

// Create a React Component
class App extends Component {
  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail 
            author={faker.internet.userName()}
            avatar={faker.image.avatar()}
            date={faker.date.recent()}
            post={faker.lorem.paragraph()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author={faker.internet.userName()}
            avatar={faker.image.avatar()}
            date={faker.date.recent()}
            post={faker.lorem.paragraph()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author={faker.internet.userName()}
            avatar={faker.image.avatar()}
            date={faker.date.recent()}
            post={faker.lorem.paragraph()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author={faker.internet.userName()}
            avatar={faker.image.avatar()}
            date={faker.date.recent()}
            post={faker.lorem.paragraph()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author={faker.internet.userName()}
            avatar={faker.image.avatar()}
            date={faker.date.recent()}
            post={faker.lorem.paragraph()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author={faker.internet.userName()}
            avatar={faker.image.avatar()}
            date={faker.date.recent()}
            post={faker.lorem.paragraph()}
          />
        </ApprovalCard>
      </div>
    );
  }
};

// Take the React Component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);