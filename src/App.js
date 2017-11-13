import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Messages from './components/Messages'
import Toolbar from './components/Toolbar'
import Compose from './components/Compose'

class App extends Component {


  state = {
    messages: [],
    inbox: [],
    isComposing: false
  }

  createMessage = async(message) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/messages`, {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })

    const itemsResponse = await fetch(`${process.env.REACT_APP_API_URL}/messages`)
    const itemsJson = await itemsResponse.json()
    this.setState({
      ...this.state,
      messages: itemsJson,
      isComposing: false
    })
  }

  // , {
  //   method: 'GET',
  //   mode: 'no-cors',
  //   headers: {
  //       "Access-Control-Allow-Origin" : "*",
  //       "Access-Control-Allow-Credentials" : true,
  //     }
  //   }

  componentDidMount = async() => {
    const itemsResponse = await fetch(`${process.env.REACT_APP_API_URL}/messages`)
    const itemsJson = await itemsResponse.json()
    this.setState({
      ...this.state,
      messages: itemsJson,
      inbox: itemsJson
    })
  }

  deleteMessage = async(message) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/messages/${message.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const itemsResponse = await fetch(`${process.env.REACT_APP_API_URL}/messages`)
    const itemsJson = await itemsResponse.json()
    this.setState({
      ...this.state,
      messages: itemsJson
    })

  }

  toggleCompose = () => {

    this.setState({
      ...this.state,
      isComposing: !this.state.isComposing
    })

  }

  filterMessage = (e) => {

    const test = this.state.inbox.filter((message) => message.name.toLowerCase().includes(e.target.value.toLowerCase()) || message.message.toLowerCase().includes(e.target.value.toLowerCase()) )

    this.setState({
      messages: [...test]
    })

  }


  render() {
    return (
      <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css"></link>

      <Toolbar messages={ this.state.messages } filterMessage={ this.filterMessage } toggleCompose={this.toggleCompose}/>
      <Messages messages = {
        this.state.messages
      }
      deleteMessage = {
        this.deleteMessage
      }
      />
      {
        this.state.isComposing ? <Compose createMessage={this.createMessage}/> : null
      }

      </div>
    );
  }
}

export default App;
