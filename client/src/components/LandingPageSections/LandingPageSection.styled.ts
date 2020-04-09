import styled from 'styled-components';
import { theme } from '../../gloabl.styled';
import heroIMG from '../../staticresources/headerimg.jpg';

type ContainerHeight = 'high' | 'medium' | 'low';
type Color = 'light' | 'primaryDark' | 'primaryLight' | 'primaryDarkHover';

interface IContainer {
  flexColumn: boolean;
  containerHeight: ContainerHeight;
}

interface IButton {
  fontColor: string;
  borderColor: string;
  margin?: string;
}

interface IText {
  color?: Color;
}

const ContainerHeightValues = {
  high: '90vh',
  medium: '50vh',
  low: '30vh',
};

export const Container = styled.section<IContainer>`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.flexColumn ? 'column' : 'row')};
  justify-content: ${(props) =>
    props.flexColumn ? 'space-around' : 'space-around'};
  height: ${(props) => ContainerHeightValues[props.containerHeight]};
  padding-top: 20vh;

  @media() {
  }
`;

export const ContainerImageBg = styled(Container)`
  background-image: url(${heroIMG});
  z-index: 2;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ColorLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(27, 113, 185, 0.8);
  height: 100%;
  width: 100%;
`;

export const Button = styled.button<IButton>`
  background: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 18px;
  font-color: ${(props) => props.fontColor};
  border: 3px solid ${(props) => props.borderColor};
  border-radius: 6px;
  padding: 15px 25px;
  margin: ${(props) => props.margin || 0};
  transition: all 0.4s;
`;
//  font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
export const H1 = styled.h1<IText>`
  color: ${(props) => theme[props.color || 'light']};
  font-size: calc(18px + 12 * ((100vw - 320px) / 680));
`;
export const H2 = styled.h2<IText>`
  text-align: center;
  color: ${(props) => theme[props.color || 'light']};
  font-size: calc(16px + 10 * ((100vw - 320px) / 680));
`;
export const H3 = styled.h3<IText>`
  color: ${(props) => theme[props.color || 'light']};
  font-size: calc(13px + 5 * ((100vw - 320px) / 680));
`;
export const H4 = styled.h4<IText>`
  color: ${(props) => theme[props.color || 'light']};
  font-size: calc(12px + 4 * ((100vw - 320px) / 680));
`;
export const Paragraph = styled.p<IText>`
  color: ${(props) => theme[props.color || 'light']};
  font-size: calc(10px + 2 * ((100vw - 320px) / 680));
`;
