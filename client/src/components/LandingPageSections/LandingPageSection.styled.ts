import styled, { css } from 'styled-components';
import { theme } from '../../gloabl.styled';
import heroIMG from '../../staticresources/headerimg.jpg';

type ContainerHeight = 'high' | 'medium' | 'low';
type Color = 'blueDark' | 'blueLight' | 'blueLightHover' | 'grey' | 'light';

interface IContainer {
  flexColumn: boolean;
  containerHeight: ContainerHeight;
}

interface IButton {
  fontColor: Color;
  borderColor: Color;
  margin?: string;
}

interface IText {
  color?: Color;
  align?: 'center' | 'left' | 'right';
  margin?: string;
  padding?: string;
}

interface ICommonForText {
  align?: 'left' | 'center' | 'right';
  color?: Color;
}

const ContainerHeightValues = {
  high: '90vh',
  medium: '50vh',
  low: '30vh',
};

export const SectionContainer = styled.section<IContainer>`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.flexColumn ? 'column' : 'row')};
  justify-content: ${(props) =>
    props.flexColumn ? 'space-around' : 'space-around'};
`;
// height: ${(props) => ContainerHeightValues[props.containerHeight]};

export const HeroContainer = styled(SectionContainer)`
  background-image: url(${heroIMG});
  z-index: 2;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-size 0.5s linear;
  padding-top: 150px;
  min-height: 85vh;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    background-size: cover;
  }
  @media (max-width: 400px) {
    padding-top: 18vh;
  }
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
  color: ${(props) => theme[props.fontColor || 'light']};
  border: 2px solid ${(props) => theme[props.borderColor || 'light']};
  border-radius: 6px;
  padding: 15px 25px;
  margin: ${(props) => props.margin || 0};
  transition: all 0.4s;
  &:hover {
    background: ${theme.blueLightHover};
    color: ${(props) => theme[props.fontColor || 'light']};
  }
  @media (max-width: 900px) {
    font-size: 17px;
    background: ${theme.blueLightHover};
    padding: 12px 20px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
    background: ${theme.blueLightHover};
    padding: 10px 18px;
  }
`;

const commonForText = css<ICommonForText>`
  text-align: ${(props) => props.align || 'inherit'};
  color: ${(props) => theme[props.color || 'light']};
  @media (max-width: 900px) {
    text-align: center;
  }
`;

const align = css<{ margin?: string; padding?: string }>`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;
//  font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
export const H1 = styled.h1<IText>`
  ${commonForText}
  ${align}
  font-size: calc(18px + 12 * ((100vw - 320px) / 680));
  @media (max-width: 900px) {
    font-size: 32px;
  }
  @media (max-width: 400px) {
    font-size: 25px;
  }
`;
export const H2 = styled.h2<IText>`
  ${commonForText}
  ${align}
  font-size: calc(16px + 9 * ((100vw - 320px) / 680));
  @media (max-width: 900px) {
    font-size: 24px;
  }
  @media (max-width: 400px) {
    font-size: 19px;
  }
`;
export const H3 = styled.h3<IText>`
  ${commonForText}
  ${align}
  font-size: calc(13px + 5 * ((100vw - 320px) / 680));
  @media (max-width: 900px) {
    font-size: 21px;
  }
  @media (max-width: 400px) {
    font-size: 17px;
  }
`;
export const H4 = styled.h4<IText>`
  ${commonForText}
  ${align}
  text-transform: uppercase;
  font-weight: 600;
  font-size: calc(10px + 4 * ((100vw - 320px) / 680));
  @media (max-width: 900px) {
    font-size: 17px;
  }
  @media (max-width: 400px) {
    font-size: 13px;
  }
`;
export const Paragraph = styled.p<IText>`
  ${commonForText}
  ${align}
  font-size: calc(12px + 2 * ((100vw - 320px) / 680));
  line-height: 1.8;
  @media (max-width: 900px) {
    font-size: 15px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const SectionColumn = styled.div`
  width: 40%;
  z-index: 2;
  position: relative;
  color: #fefefe;
  @media (max-width: 900px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
`;

export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`;

export const FeatureSubContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  @media (max-width: 1200px) {
    justify-content: space-between;
    margin-bottom: 100px;
  }
  @media (max-width: 790px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }
`;

export const Feature = styled.div`
  width: 200px;
  text-align: center;
  @media (max-width: 790px) {
    margin-bottom: 80px;
  }
`;

export const FeatureIconWrapper = styled.span`
  border: 2px solid #77c5f8;
  border-radius: 50%;
  padding: 70px 80px;
  position: relative;
  @media (max-width: 790px) {
    padding: 50px 60px;
  }
`;

export const FeatureIcon = styled.span`
  color: ${theme.blueDark};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DemoContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f1f1f1;
  padding-bottom: 50px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DemoContentColumn = styled.div`
  width: 40%;
  margin-right: 50px;
  padding-left: 200px;
  p {
    width: 80%;
  }
  @media (max-width: 1400px) {
    padding-left: 50px;
  }
  @media (max-width: 1000px) {
    width: 90%;
    margin-right: 0;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 400px) {
    font-size: 17px;
  }
`;

export const DemoImageContainer = styled.div`
  width: 44%;
  @media (max-width: 1000px) {
    width: 80%;
  }
`;

export const QuoteContainer = styled.div`
  text-align: center;
  margin: 100px 0;
  @media (max-width: 1000px) {
    margin: 100px 10px;
  }
`;

export const ContactMainContainer = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const ContactSubContainer = styled.div`
  z-index: 3;
  position: relative;
  display: flex;
  justify-content: space-around;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactSubContainerColumn = styled.div`
  width: 35%;
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 80%;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;
