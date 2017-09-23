import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from '../atoms/label';
import Button from '../atoms/button';
import history from '../../history';

const ContactCardContainer = styled.div`
  @media (min-width: 800px) {
    width: 45%;
  }

  width: 100%;
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
  renderDetail() {
    const { firstName, lastName, imageSource } = this.props.contact;
    const imageToUse = imageSource || 'http://via.placeholder.com/50x50';

    return (
      <div className="contact-detail">
        <img src={imageToUse} alt="Contact" style={{ width: '50px', height: '50px' }} />
        <Label style={contactNameStyle}>{firstName} {lastName}</Label>
      </div>
    );
  }

  renderOptions() {
    const { handleEditClick } = this.props;

    return (
      <ContactOptions>
        <Button onClick={() => handleEditClick(this.props.contact.id)}>Edit</Button>
      </ContactOptions>
    );
  }

  render() {
    return (
      <ContactCardContainer>
        {this.renderDetail()}
        {this.renderOptions()}
      </ContactCardContainer>
    );
  }
}

ContactCard.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    imageSource: PropTypes.string }).isRequired,
  handleEditClick: PropTypes.func.isRequired,
};

export default ContactCard;
