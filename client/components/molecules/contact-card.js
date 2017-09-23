import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Label from '../atoms/label';
import Button from '../atoms/button';

const ContactCardContainer = styled.div`
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

const ContactOptions = styled.div`
  line-height: 50px;
  margin-right: 5px;
`;

const contactNameStyle = {
  marginLeft: '5px',
};

class ContactCard extends React.Component {
  render() {
    const { id, firstName, lastName } = this.props.contact;
    return (
      <ContactCardContainer>
        <div className="contact-detail">
          <img src="http://via.placeholder.com/50x50" alt="Contact" />
          <Label style={contactNameStyle}>{firstName} {lastName}</Label>
        </div>
        <ContactOptions>
          <Button onClick={() => { console.log(`clicked: ${id}`); }}>Edit</Button>
        </ContactOptions>
      </ContactCardContainer>
    );
  }
}

ContactCard.propTypes = {
  contact: PropTypes.shape({ id: PropTypes.number, firstName: PropTypes.string, lastName: PropTypes.string }).isRequired,
};

export default ContactCard;
