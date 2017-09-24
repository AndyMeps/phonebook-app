import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Label from '../atoms/label';

const LabelLabelWrapper = styled.div`
display: flex;
justify-content: space-evenly;
`;
const LabelWrapper = styled.div`
  width: 50%;
`;

class LabelLabel extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };
  static defaultProps = {
    placeholder: '',
    value: '',
  };
  render() {
    const { text, value } = this.props;
    return (
      <LabelLabelWrapper>
        <LabelWrapper>
          <Label>{text}</Label>
        </LabelWrapper>
        <LabelWrapper>
          <Label>{value}</Label>
        </LabelWrapper>
      </LabelLabelWrapper>
    );
  }
}

export default LabelLabel;
