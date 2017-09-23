import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ContactCard from '../molecules/contact-card';

const Wrapper = styled.div`
  @media (min-width: 800px) {
    width: 75%;
  }
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 1rem;
`;

class Contacts extends React.Component {
  render() {
    return (
      <Wrapper>
        {
          this.props.contacts.length === 0
            ? 'No contacts.'
            : this.props.contacts.map(contact => (<ContactCard contact={contact} key={contact.id} />))
        }
      </Wrapper>
    );
  }
}

Contacts.defaultProps = {
  contacts: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
    },
  ],
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string })),
};

export default Contacts;
