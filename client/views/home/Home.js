/**
 * ASP.NET Core Starter Kit (https://dotnetreact.com)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Contacts from '../../components/layouts/contacts';
import Button from '../../components/atoms/button';
import Label from '../../components/atoms/label';
import Modal from '../../components/molecules/modal';

const Wrapper = styled.div`
  @media (min-width: 800px) {
    width: 75%;
  }

  margin: 0 auto;
  width: 90%;
`;

const Header = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const HeaderCell = styled.div`
`;

class Home extends React.Component {

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { contacts: [], loadedContact: {}, isListLoading: true };
  }

  componentWillMount() {
    this.getContacts();
  }

  componentDidMount() {
    document.title = 'Phonebook';
  }

  onHandleEditContactClick(id) {
    axios.get(`/api/contacts/${id}`)
      .then((response) => {
        if (response && response.status === 200) {
          this.setState({ loadedContact: response.data });
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getContacts() {
    const onSuccess = (response) => {
      if (response && response.status === 200) {
        this.setState({ contacts: response.data, isListLoading: false });
      }
    };
    const onError = (error) => {
      console.log(error);
    };

    axios.get('/api/contacts')
      .then(onSuccess)
      .catch(onError);
  }

  renderModal() {
    if (Object.keys(this.state.loadedContact).length === 0) return null;

    return (
      <Modal handleCloseClick={() => { this.setState({ loadedContact: {} }); }}>
        {this.state.loadedContact.firstName}
      </Modal>
    );
  }

  renderHeader() {
    return (
      <Header>
        <HeaderCell>
          <Label style={{ fontWeight: 'bold' }}>
            Your contacts:
          </Label>
        </HeaderCell>
        <HeaderCell>
          <Button onClick={() => this.getContacts()}>Sync</Button>
        </HeaderCell>
      </Header>
    );
  }

  render() {
    if (this.state.isListLoading) return (<p>Loading...</p>);

    return (
      <Wrapper>
        {this.renderHeader()}
        <Contacts
          contacts={this.state.contacts}
          handleEditContactClick={(id) => { this.onHandleEditContactClick(id); }}
        />
        {this.renderModal()}
      </Wrapper>
    );
  }
}

export default Home;
