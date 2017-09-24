import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label, Input } from '../atoms';

const FormInputWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const ElementWrapper = styled.div`
  width: 50%;
  display: flex;
`;

class FormInput extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    handleChange: PropTypes.func.isRequired,
  };
  static defaultProps = {
    placeholder: '',
    value: '',
  };
  render() {
    const { text, placeholder, type, value, handleChange } = this.props;
    return (
      <FormInputWrapper>
        <ElementWrapper>
          <Label>{text}</Label>
        </ElementWrapper>
        <ElementWrapper>
          <Input placeholder={placeholder} type={type} value={value || ''} style={{ width: '100%' }} onChange={handleChange} />
        </ElementWrapper>
      </FormInputWrapper>
    );
  }
}

export default FormInput;
