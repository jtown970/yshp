import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import List from './components/Lists'

class App extends Component {
  constructor(){
    super()

    this.state = {
      userList: []
    }
  }

  componentDidMount(){
    axios.get(`https://virtserver.swaggerhub.com/HopeIgetFree/grocery/1.0.0/pet/findByStatus?status=available`)
    .then(res => {
      this.setState({
        userList: res.data
      })
    })
  }

  render(){
    const {userList} = this.state;
    console.log(userList)
    return (
      <div className="App">
        <h1 className="company-name">YSHOP</h1>
        <List/>
        {
          userList.map(pets => {
            return <List key={pets.id}/>
          })
        }

      </div>
    );
  }
}


export default App;
