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
  transition: background-color 1s;

  &:hover{
    cursor: pointer;
    background-color: #eee;
    transition: background-color 1s;
  }
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
    const imageToUse = imageSource || 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png';

    return (
      <div className="contact-detail" data-showdetails>
        <img src={imageToUse} alt="Contact" data-showdetails style={{ width: '50px', height: '50px' }} />
        <Label style={contactNameStyle} data-showdetails>{firstName} {lastName}</Label>
      </div>
    );
  }

  renderOptions() {
    const { handleEditClick } = this.props;

    return (
      <ContactOptions data-showdetails>
        <Button onClick={() => handleEditClick(this.props.contact.id)}>Edit</Button>
      </ContactOptions>
    );
  }

  render() {
    const handleContainerClick = (evt) => {
      if (evt.target.dataset
        && Object.keys(evt.target.dataset).length > 0
        && evt.target.dataset.showdetails) {
        this.props.handleViewClick(this.props.contact.id);
      }
    };

    return (
      <ContactCardContainer onClick={handleContainerClick} data-showdetails>
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
  handleViewClick: PropTypes.func.isRequired,
};

export default ContactCard;
