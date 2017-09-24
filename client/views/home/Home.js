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

import { Contacts, ContactDetails, EditContact, AddContact } from '../../components/layouts';
import { Button, Label, Input } from '../../components/atoms';
import { Modal } from '../../components/molecules';

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

const addNewStyle = {
  marginRight: '5px',
  fontWeight: 'bold',
};

const filterStyle = {
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginRight: '20px',
  padding: '2px',
  backgroundColor: '#f3f3f3',
};

class Home extends React.Component {

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      loadedContact: {},
      isListLoading: true,
      editContact: {},
      searchTerm: '',
    };
  }

  componentWillMount() {
    this.getContacts();
  }

  componentDidMount() {
    document.title = 'Phonebook';
  }

  onHandleViewContactClick(id) {
    const onSuccess = (response) => {
      if (response && response.status === 200) {
        this.setState({ loadedContact: response.data });
        return;
      }
      console.warn('Did not enter response section', response);
    };
    const onError = (error) => {
      console.error(error);
    };

    axios.get(`/api/contacts/${id}`)
      .then(onSuccess)
      .catch(onError);
  }

  onHandleEditContactClick(id) {
    const onSuccess = (response) => {
      if (response && response.status === 200) {
        this.setState({ editContact: response.data });
        return;
      }
      console.warn('Did not enter response section', response);
    };

    const onError = (error) => {
      console.error(error);
    };

    axios.get(`/api/contacts/${id}`)
      .then(onSuccess)
      .catch(onError);
  }

  getContacts() {
    const onSuccess = (response) => {
      if (response && response.status === 200) {
        this.setState({ contacts: response.data, isListLoading: false });
        return;
      }
      console.warn('Did not enter response section', response);
    };
    const onError = (error) => {
      console.warn(error);
    };

    axios.get('/api/contacts')
      .then(onSuccess)
      .catch(onError);
  }

  updateContact(changed, id) {
    const onSuccess = (response) => {
      if (response && response.status === 200) {
        this.setState({ editContact: {} });
        this.getContacts();
        return;
      }
      console.warn('Did not enter response section', response);
    };

    const onError = (error) => {
      console.warn(error);
    };

    return axios.put(`/api/contacts/${id}`, changed)
      .then(onSuccess)
      .catch(onError);
  }

  createContact(details) {
    const onSuccess = (response) => {
      if (response && response.status === 201) {
        const contacts = this.state.contacts;
        this.setState({ isAddContact: false, contacts: [...contacts, response.data] });
        return;
      }
      console.warn('Did not enter response section', response);
    };

    const onError = (error) => {
      console.warn(error);
    };

    return axios.post('/api/contacts', details).then(onSuccess).catch(onError);
  }

  deleteContact(id) {
    return axios.delete(`/api/contacts/${id}`).then((response) => {
      if (response && response.status === 204) {
        this.setState({ editContact: {} });
        this.getContacts();
      }
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  renderDetailsModal() {
    if (Object.keys(this.state.loadedContact).length === 0) return null;

    const onCloseClick = () => {
      this.setState({ loadedContact: {} });
    };

    const { loadedContact } = this.state;
    const contactName = `${loadedContact.firstName} ${loadedContact.lastName}`;
    return (
      <Modal
        title={`Contact Details - ${contactName}`}
        handleCloseClick={onCloseClick}
      >
        <ContactDetails contact={loadedContact} />
      </Modal>
    );
  }

  renderEditModal() {
    if (Object.keys(this.state.editContact).length === 0) return null;

    const onCloseClick = () => {
      this.setState({ editContact: {} });
    };

    const onSave = (changed) => {
      if (Object.keys(changed).length === 0) onCloseClick();

      this.updateContact(changed, this.state.editContact.id);
    };

    const onDelete = () => {
      this.deleteContact(this.state.editContact.id);
    };

    const { editContact } = this.state;
    const contactName = `${editContact.firstName} ${editContact.lastName}`;
    return (
      <Modal
        title={`Edit Contact - ${contactName}`}
        handleCloseClick={onCloseClick}
      >
        <EditContact contact={editContact} handleSave={onSave} handleDelete={onDelete} />
      </Modal>
    );
  }

  renderAddModal() {
    if (!this.state.isAddContact) return null;

    const onCloseClick = () => {
      this.setState({ isAddContact: false });
    };

    return (
      <Modal
        title={'Add Contact'}
        handleCloseClick={onCloseClick}
      >
        <AddContact handleSave={(data) => { this.createContact(data); }} />
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
          <Input style={filterStyle} type={'text'} placeholder={'Search...'} value={this.state.searchTerm} onChange={evt => this.setState({ searchTerm: evt.target.value })} />
          <Button style={addNewStyle} onClick={() => { this.setState({ isAddContact: true }); }}>Add New</Button>
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
          filter={this.state.searchTerm}
          handleViewContactClick={(id) => { this.onHandleViewContactClick(id); }}
          handleEditContactClick={(id) => { this.onHandleEditContactClick(id); }}
        />
        {this.renderDetailsModal()}
        {this.renderAddModal()}
        {this.renderEditModal()}
      </Wrapper>
    );
  }
}

export default Home;
