import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ImageContainer, ResponsiveImage, ContactFields, Button } from '../atoms';
import { LabelInput } from '../molecules';

const EditContactWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const EditContactFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const deleteButtonStyle = {
  marginRight: '5px',
  color: '#ff4081',
};

const saveButtonStyle = {
  fontWeight: 'bold',
};

class EditContact extends React.Component {
  static propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      homeNumber: PropTypes.string,
      mobileNumber: PropTypes.string,
      email: PropTypes.string,
      imageHash: PropTypes.string,
    }),
    handleSave: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
  };

  static defaultProps = {
    contact: null,
  };

  constructor(props) {
    super(props);

    this.state = Object.assign({}, props.contact);
  }

  handleInternalClickSave() {
    const changed = {};
    const { firstName, lastName, homeNumber, mobileNumber, email } = this.props.contact;
    if (firstName !== this.state.firstName) changed.firstName = this.state.firstName;
    if (lastName !== this.state.lastName) changed.lastName = this.state.lastName;
    if (homeNumber !== this.state.homeNumber) changed.homeNumber = this.state.homeNumber;
    if (email !== this.state.email) changed.email = this.state.email;
    if (mobileNumber !== this.state.mobileNumber) changed.mobileNumber = this.state.mobileNumber;

    this.props.handleSave(changed);
  }

  handleInternalClickDelete() {
    this.props.handleDelete(this.state.id);
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

  render() {
    if (this.props.contact === null) return null;

    const {
      firstName,
      lastName,
      email,
      homeNumber,
      mobileNumber,
      imageHash,
    } = this.state;

    const imageToUse = imageHash || 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png';

    return (
      <EditContactWrapper>
        <ImageContainer>
          <ResponsiveImage src={imageToUse} />
        </ImageContainer>
        <ContactFields>
          <LabelInput text={'First Name'} type={'text'} value={firstName} handleChange={event => this.handleChangeFirst(event)} />
          <LabelInput text={'Last Name'} type={'text'} value={lastName} handleChange={event => this.handleChangeLast(event)} />
          <LabelInput text={'Home Number'} type={'text'} value={homeNumber} handleChange={event => this.handleChangeHome(event)} />
          <LabelInput text={'Mobile Number'} type={'text'} value={mobileNumber} handleChange={event => this.handleChangeMobile(event)} />
          <LabelInput text={'Email'} type={'text'} value={email} handleChange={event => this.handleChangeEmail(event)} />
        </ContactFields>
        <EditContactFooter>
          <Button style={deleteButtonStyle} onClick={() => this.handleInternalClickDelete()}>Delete</Button>
          <Button style={saveButtonStyle} onClick={() => this.handleInternalClickSave()}>Save</Button>
        </EditContactFooter>
      </EditContactWrapper>
    );
  }
}

export default EditContact;
