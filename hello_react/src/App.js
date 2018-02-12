import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import FoodList from './FoodList'
import Board from './Board'
import ContactsContainer from './Contacts/ContactsContainer'

let cardList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    color: '#3A7E28',
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code alone with the samples in the book. [github](https://github.com/Xiaobin0860/web)",
    color: '#BD8D31',
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false
      },
    ]
  },
  {
    id: 3,
    title: "Finish the Guide",
    description: "I should finish the guide",
    color: '#BD8D31',
    status: "done",
    tasks: [
      {
        id: 1,
        name: "Create project",
        done: true
      },
      {
        id: 2,
        name: "Finish guide",
        done: true
      }]
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Hello name="React" />
        <FoodList />
        <Board cards={cardList} />
        <ContactsContainer />
      </div>
    );
  }
}

export default App;
