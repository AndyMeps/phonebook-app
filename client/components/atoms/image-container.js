import styled from 'styled-components';

const ImageContainer = styled.div`
  @media(max-width: 799px) {
    width: 100%;
    min-height: 100px;
    margin-bottom: 10px;
  }
  @media(min-width: 800px) {
    width: 30%;
  }
  display: flex;
`;

export default ImageContainer;
