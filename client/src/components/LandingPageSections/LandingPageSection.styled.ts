import styled from 'styled-components';
import heroIMG from '../../staticresources/headerimg.jpg';

interface IContainer {
  flexColumn: boolean;
}

export const Container = styled.section<IContainer>`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.flexColumn ? 'column' : 'row')}
  justify-content: ${(props) =>
    props.flexColumn ? 'space-around' : 'space-around'};
`;

export const ContainerImageBg = styled(Container)`
  background-image: url(${(props) => heroIMG});
  z-index: 2;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Paragraph = styled.p``;

// export const
