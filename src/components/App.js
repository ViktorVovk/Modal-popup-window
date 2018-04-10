import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Modal from './Modal';
import './App.css';

const style = {
  margin: 12,
};


class App extends Component {
  state={
    hidden: true,
    open: true,
    countArr: [new Date().getTime()],
  }
  clickSaveModal = () => {
    this.setState({
      hidden: !this.state.hidden,
      open: true
    })
  }
  clickToggleModal = () => {
    this.setState({
      open:!this.state.open,
      hidden: true,
      countArr: [new Date().getTime()]
    })
  }
  addBtnClick = () => {
    this.setState({
      countArr: [...this.state.countArr,...[new Date().getTime()]],
    })
  };

  deleteSelectLine = (event) => {
    let arr = this.state.countArr;
    arr.splice(event.currentTarget.parentElement.attributes.index.value, 1)
    this.setState({
      countArr: arr,
    })

  };
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <RaisedButton label="Open" primary={true} style={style} onClick={this.clickSaveModal} disabled={this.state.hidden?false:true}/>
        <Modal hidden={this.state.hidden}
          open={this.state.open}
          clickToggleModal={this.clickToggleModal}
          clickSaveModal={this.clickSaveModal}
          addBtnClick={this.addBtnClick}
          deleteSelectLine={this.deleteSelectLine}
          countArr={this.state.countArr}
        />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
