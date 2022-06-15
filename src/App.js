import React from "react";
import "./App.css";
import CardList from "./Components/cardList";
import Form from "./Components/form";

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profiles: testData,
    };
  }
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <Form />
        <CardList profiles={this.state.profiles}/>
      </>
    );
  }
  
}

export default App;
