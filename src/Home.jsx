import React, { Component } from "react";
import NavigationBar from "./NavigationBar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: false });
    }, 3000);
  }

  render() {
    const { visible } = this.state;
    return (
      <>
        <NavigationBar />
        <div className="home-container">
          {visible && (
            <h1 className="welcome-message">
              Welcome to Our Competition World
            </h1>
          )}
        </div>
      </>
    );
  }
}

export default Home;
