import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalBackdrop = styled.div`
  position: fixed;
  background-color: rgba(0,0,0, .3);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  min-height: 200px;
  width: 500px;
  background-color: green;
`;

class Modal extends React.Component {
  render() {
    const handleBackdropClick = (evt) => {
      if (evt.target.dataset
        && Object.keys(evt.target.dataset).length > 0
        && evt.target.dataset.closemodal) {
        this.props.handleCloseClick();
      }
    };

    return (
      <ModalBackdrop data-closemodal="true" onClick={handleBackdropClick}>
        <ModalContainer>
          <a onClick={this.props.handleCloseClick} role="button">Close</a>
          {this.props.children}
        </ModalContainer>
      </ModalBackdrop>
    );
  }
}

Modal.propTypes = {
  handleCloseClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
