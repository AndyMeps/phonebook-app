import styled from 'styled-components';

const ResponsiveImage = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${props => props.src})
`;

export default ResponsiveImage;
