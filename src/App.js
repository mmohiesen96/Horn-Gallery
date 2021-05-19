import './App.css';
import React from 'react';
import imgArr from './components/data.json';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: imgArr,
      elementFound :{
      },
      showBeast: false,
    }
    console.log(props);
  }
  
  liftStateUp = (Main) =>{
    this.setState({ activeNode: Main})
  }
  showModal = (itemFound) =>{
    let result = imgArr.find(element => {
      if (element.title === itemFound) {
        return element;
      }
      else {
        return "";
      }
    });
    this.setState({
      elementFound: result,
      showBeast: true,
    });
  }

  

  hideModal = () => {
    this.setState({
      showBeast : false
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Main arr={this.state.arr} show={this.showModal}/>
        <SelectedBeast info={this.state.arr} 
        showBeast = {this.state.showBeast} 
        hideModal = {this.hideModal} 
        showSelectedBeast={this.state.showBeast} 
        modalElement ={this.state.elementFound} />
        <Footer />
      </div>
    )
  }
}

export default App;