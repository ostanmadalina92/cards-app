import React from "react";
import "./App.css";
import CardList from "./Components/cardList";
import Form from "./Components/form";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profiles: [],
    };
  }

  addNewProfile = (profileData) => {
    this.setState(previousState => ({
      profiles: [...previousState.profiles, profileData]
    }))
  }
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </>
    );
  }
  
}

export default App;
