import React, { PureComponent } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField'
import Delete from 'material-ui/svg-icons/navigation/cancel';
import IconButton from 'material-ui/IconButton';
import {pink100} from 'material-ui/styles/colors';

const styleSelect = {
  width: 130,
}
const styleTextField = {
  width: 40,
}
const styleByttonCancel = {
  width:40,
  height:40,
  backgroundColor: 'red',
  borderRadius: '50%',

}
const styleIconCancel = {
  width:50,
  height:50,
  position: 'absolute',
  top: -5,
  right: -5,
}

class Select extends PureComponent{
  state = {
    value: 2,
  };
  handleChangeSelectField = (event, index, value) => {
      this.setState({value});
    };

    render() {
      return (
        <div className="modal__select" index={this.props.index}>
        <SelectField value={this.state.value} onChange={this.handleChangeSelectField} style={styleSelect}  iconStyle={{fill:'rgba(0,0,0,0.7)'}} underlineStyle={{borderWidth:2, width:115}}>
          <MenuItem value={1} key={1} primaryText={`Twin`} />
          <MenuItem value={2} key={2} primaryText={`Tripple`} />
          <MenuItem value={3} key={3} primaryText={`Quadro`} />
        </SelectField>
        <TextField type="number" multiLine={false} name="textfield" style={styleTextField} underlineStyle={{borderWidth:2}}/>
        <IconButton onClick={this.props.deleteSelectLine} iconStyle={styleIconCancel}
          style={styleByttonCancel} >
          <Delete color={pink100}/>
        </IconButton>
        </div>
      );
    }
}

export default Select
