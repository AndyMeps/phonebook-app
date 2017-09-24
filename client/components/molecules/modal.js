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
  @media(max-width: 799px) {
    width: 90%;
  }
  @media(min-width: 800px) {
    width: 50%;
  }
  background-color: white;
  border-radius: 10px;
`;
const ModalHeader = styled.div`
  height: 40px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
`;
const ModalBody = styled.div`
  padding: 10px;
`;
const ModalTitle = styled.div`
  line-height: 40px;
  padding-left: 10px;
  font-weight: bold;
`;
const ModalClose = styled.div`
  line-height: 40px;
  padding-right: 10px;
`;

const Cross = styled.a`
  color: #ff4081;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
`;

class Modal extends React.Component {
  render() {
    const { title } = this.props;
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
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <ModalClose>
              <Cross onClick={this.props.handleCloseClick} role="button">✘</Cross>
            </ModalClose>
          </ModalHeader>
          <ModalBody>
            {this.props.children}
          </ModalBody>
        </ModalContainer>
      </ModalBackdrop>
    );
  }
}

Modal.defaultProps = {
  title: 'Modal',
};

Modal.propTypes = {
  handleCloseClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Modal;
