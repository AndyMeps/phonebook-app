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
  handleFilter(contact) {
    const { filter } = this.props;
    const { firstName, lastName } = contact;
    const lowerFilter = filter.toLowerCase();
    const lowerFirst = firstName.toLowerCase();
    const lowerLast = lastName.toLowerCase();

    return (lowerFirst.indexOf(lowerFilter) !== -1) ||
           (lowerLast.indexOf(lowerFilter) !== -1);
  }

  renderContacts() {
    if (this.props.contacts.length === 0) return 'No contacts.';

    return this.props.contacts.filter(c => this.handleFilter(c)).map(contact => (
      <ContactCard
        contact={contact}
        key={contact.id}
        handleEditClick={this.props.handleEditContactClick}
        handleViewClick={this.props.handleViewContactClick}
      />),
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
  filter: '',
};

Contacts.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      imageSource: PropTypes.string,
    })),
  handleEditContactClick: PropTypes.func.isRequired,
  handleViewContactClick: PropTypes.func.isRequired,
};

export default Contacts;
