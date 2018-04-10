import React, { PureComponent } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField'
import DeleteIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import {pink50, red500} from 'material-ui/styles/colors';

const styleSelect = {
  width: 130,
}
const styleTextField = {
  width: 40,
  marginRight: 20
}
const styleDeleteIcon = {
  width:30,
  height:30,
}
const styleDeleteBytton = {
  width:36,
  height:36,
  padding:0,
  backgroundColor: pink50,
  borderRadius: '50%',
};

class Select extends PureComponent{
  state = {
    valueSelectField: 2,
    valueTextField: '',
  };

  handleChangeSelectField = (event, index, value) => {
      this.setState({valueSelectField: value});
  };

  handleChangeTextField = (event) => {
    this.setState({valueTextField: event.target.value})
  }
    render() {
      return (
        <div className="modal__select" index={this.props.index}>
        <SelectField value={this.state.valueSelectField} onChange={this.handleChangeSelectField} style={styleSelect}  iconStyle={{fill:'rgba(0,0,0,0.7)'}} underlineStyle={{borderWidth:2, width:115}}>
          <MenuItem value={1} key={1} primaryText={`Twin`} />
          <MenuItem value={2} key={2} primaryText={`Tripple`} />
          <MenuItem value={3} key={3} primaryText={`Quadro`} />
        </SelectField>
        <TextField type="number" multiLine={false} name="textfield" style={styleTextField} value={this.state.valueTextField} underlineStyle={{borderWidth:2}} onChange={this.handleChangeTextField}/>
        <IconButton onClick={this.props.deleteSelectLine} style={styleDeleteBytton} iconStyle={styleDeleteIcon}>
          <DeleteIcon color={red500}/>
        </IconButton>
        </div>
      );
    }
}

export default Select
