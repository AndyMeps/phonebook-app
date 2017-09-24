import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ContactFields, Button } from '../atoms';
import { LabelInput } from '../molecules';

const AddContactWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

const AddContactFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const saveButtonStyle = {
  fontWeight: 'bold',
};

class AddContact extends React.Component {
  static propTypes = {
    handleSave: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      homeNumber: null,
      mobileNumber: null,
      email: null,
    };
  }

  handleChangeFirst(event) {
    this.setState({ firstName: event.target.value });
  }

  handleChangeLast(event) {
    this.setState({ lastName: event.target.value });
  }

  handleChangeHome(event) {
    this.setState({ homeNumber: event.target.value });
  }

  handleChangeMobile(event) {
    this.setState({ mobileNumber: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleInternalSave() {
    if (this.state.firstName == null || this.state.lastName == null) {
      console.warn('Required fields not set.');
      return;
    }

    this.props.handleSave(this.state);
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      homeNumber,
      mobileNumber,
    } = this.state;
    return (
      <AddContactWrapper>
        <ContactFields>
          <LabelInput text={'First Name*'} placeholder={'First Name (Required)'} type={'text'} value={firstName} handleChange={event => this.handleChangeFirst(event)} />
          <LabelInput text={'Last Name*'} placeholder={'Last Name (Required)'} type={'text'} value={lastName} handleChange={event => this.handleChangeLast(event)} />
          <LabelInput text={'Home Number'} placeholder={'Home Number'} type={'text'} value={homeNumber} handleChange={event => this.handleChangeHome(event)} />
          <LabelInput text={'Mobile Number'} placeholder={'Mobile Number'} type={'text'} value={mobileNumber} handleChange={event => this.handleChangeMobile(event)} />
          <LabelInput text={'Email'} placeholder={'Email'} type={'text'} value={email} handleChange={event => this.handleChangeEmail(event)} />
        </ContactFields>
        <AddContactFooter>
          <Button style={saveButtonStyle} onClick={() => this.handleInternalSave()}>Save</Button>
        </AddContactFooter>
      </AddContactWrapper>
    );
  }
}

export default AddContact;
