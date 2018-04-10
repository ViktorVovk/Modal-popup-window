import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Select from './Select';


const stylePaper = {
  width: 400,
  margin: 13,
  padding: 20,
  textAlign: 'left',
  display: 'inline-block',
  position: 'absolute',
  left: 100,
};
const displayNone = {
  display: 'none'
}
const styleBtnSave = {
  borderRadius: 3,
}
const styleBtnCancel = {
  marginLeft: 15
}
const AddButtonStyle = {
  marginBottom: 20,
}


class Modal extends Component {

  render(){
    if(this.props.open){
      return (
        <Paper style={this.props.hidden?displayNone:stylePaper} zDepth={1}>
        <div className="modal__title">
          <p>Структура Номеров</p>
          <IconButton onClick={this.props.clickToggleModal}><NavigationClose /></IconButton>
        </div>
        <div className="modal__todo">
            {
              this.props.countArr.map((item, index) => {
                return <Select key={item} index={index} deleteSelectLine={this.props.deleteSelectLine} />
              })
            }
            <FlatButton label="Добавить" primary={true} labelStyle={{paddingLeft: 3}} style={AddButtonStyle}    onClick={this.props.addBtnClick}/>
            <div className="modal__btn-group">
              <RaisedButton label="Сохранить" primary={true} buttonStyle={styleBtnSave} onClick={this.props.clickSaveModal}/>
              <FlatButton label="Отмена" style={styleBtnCancel} onClick={this.props.clickToggleModal}/>
            </div>
        </div>
        </Paper>
      )
    } else return ""
  }
}

export default Modal
