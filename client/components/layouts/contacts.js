import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ContactCard from '../molecules/contact-card';

const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  padding-top: 1rem;
`;

class Contacts extends React.Component {
  renderContacts() {
    if (this.props.contacts.length === 0) return 'No contacts.';

    return this.props.contacts.map(contact => (
      <ContactCard contact={contact} key={contact.id} handleEditClick={this.props.handleEditContactClick} />
      ),
    );
  }
  render() {
    return (
      <Wrapper>
        { this.renderContacts() }
      </Wrapper>
    );
  }
}

Contacts.defaultProps = {
  contacts: [],
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      imageSource: PropTypes.string,
    })),
  handleEditContactClick: PropTypes.func.isRequired,
};

export default Contacts;
