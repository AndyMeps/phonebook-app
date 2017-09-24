import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ImageContainer, ResponsiveImage, ContactFields } from '../atoms';
import { LabelLabel } from '../molecules';


const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
`;

class ContactDetails extends React.Component {
  static propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      homeNumber: PropTypes.string,
      mobileNumber: PropTypes.string,
      imageHash: PropTypes.string,
    }),
  }

  static defaultProps = {
    contact: null,
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
    } = this.props.contact;

    const imageToUse = imageHash || 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png';

    return (
      <Wrapper>
        <ImageContainer>
          <ResponsiveImage src={imageToUse} />
        </ImageContainer>
        <ContactFields>
          <LabelLabel text={'First Name:'} value={firstName} />
          <LabelLabel text={'Last Name:'} value={lastName} />
          <LabelLabel text={'Home Number:'} value={homeNumber || '-'} />
          <LabelLabel text={'Mobile Number:'} value={mobileNumber || '-'} />
          <LabelLabel text={'Email'} value={email || '-'} />
        </ContactFields>
      </Wrapper>
    );
  }
}

export default ContactDetails;
