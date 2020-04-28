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
`;

const commonForText = css<ICommonForText>`
  text-align: ${(props) => props.align || 'inherit'};
  color: ${(props) => theme[props.color || 'light']};
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
`;
export const H2 = styled.h2<IText>`
  ${commonForText}
  ${align}
  font-size: calc(16px + 9 * ((100vw - 320px) / 680));
`;
export const H3 = styled.h3<IText>`
  ${commonForText}
  ${align}
  font-size: calc(13px + 5 * ((100vw - 320px) / 680));
`;
export const H4 = styled.h4<IText>`
  ${commonForText}
  ${align}
  text-transform: uppercase;
  font-weight: 600;
  font-size: calc(10px + 4 * ((100vw - 320px) / 680));
`;
export const Paragraph = styled.p<IText>`
  ${commonForText}
  ${align}
  font-size: calc(12px + 2 * ((100vw - 320px) / 680));
  line-height: 1.8;
`;

export const SloganContainer = styled.div`
  width: 40%;
  z-index: 2;
  position: relative;
  color: #fefefe;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Feature = styled.div`
  width: 200px;
  text-align: center;
`;

export const FeatureIconWrapper = styled.span`
  border: 2px solid #77c5f8;
  border-radius: 50%;
  padding: 70px 80px;
  position: relative;
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
`;

export const DemoContentColumn = styled.div`
  width: 40%;
  margin-right: 50px;
  padding-left: 200px;
  p {
    width: 80%;
  }
`;

export const ContactMainContainer = styled.div`
  flex-direction: column;
  align-items: center;
`;

// .contact-container__row {
//   margin-top: 100px;
//   z-index: 3;
//   position: relative;
//   display: flex;
//   justify-content: space-around;
// }

// .contact-container__col {
//   width: 35%;
// }

// .contact-title {
//   color: #fefefe;
//   font-size: 25px;
//   letter-spacing: 0.3px;
// }

// .contact-paragraph {
//   margin-top: 30px;
//   color: #fefefe;
//   font-size: 18px;
//   letter-spacing: 0.2px;
// }

//   display: flex;
//   justify-content: space-between;
//   text-align: center;
// }

// .feature {
//   width: 200px;
// }

// .icon-wrapper {
//   border: 2px solid #77c5f8;
//   border-radius: 50%;
//   padding: 70px 80px;

//   position: relative;
// }

// .feature-icon {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// }

// .feature-title {
//   margin-top: 100px;
//   font-size: 17px;
//   font-weight: 600;
//   color: #145e90;
//   text-transform: uppercase;
// }

// .feature-description {
//   color: #a3a8ab;
// }

// .demo-container {
//   margin-top: 50px;
//   padding-bottom: 50px;
//   display: flex;
//   justify-content: center;
//   background-color: #f1f1f1;
// }
// .demo-container__content-column {

// }
// .demo-container__image-column {
//   width: 47%;
// }
// .demo-container__title {
//   margin-top: 50px;
//   font-size: 30px;
//   color: #145e90;
//   text-transform: uppercase;
//   /* font-family: 'Work Sans', sans-serif; */
// }
// .demo-container__description {
//   width: 70%;
//   font-size: 15px;
//   color: #9ca5ac;
//   letter-spacing: 0.3px;
//   line-height: 1.6;
// }
// .demo-container__button {
//   color: #145e90;
//   border: 2px solid #298dcf;
//   border-radius: 6px;
//   margin-top: 20px;
//   padding: 15px 25px;
//   background: transparent;
//   text-transform: uppercase;
//   font-weight: bolder;
//   cursor: pointer;
//   transition: all 0.4s;
//   font-size: 18px;
// }

// .demo-container__button:hover {
//   background-color: #62bcf821;
// }
// .demo-container__image {
//   position: relative;
//   top: -20px;
//   width: 100%;
//   height: auto;
// }

// .quote-container {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   color: #145e90;
//   margin-bottom: 90px;
// }

// .quote {
//   margin-top: 90px;
//   font-size: 35px;
//   color: #145e90;
// }

// .contact-container {
//   background-image: url('../staticresources/foofterimg.jpg');
//   min-height: 600px;
//   background-position: bottom;
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: relative;
//   z-index: 1;
// }

// .contact-container {
//   flex-direction: column;
//   align-items: center;
// }

// .contact-container__row {
//   margin-top: 100px;
//   z-index: 3;
//   position: relative;
//   display: flex;
//   justify-content: space-around;
// }

// .contact-container__col {
//   width: 35%;
// }

// .contact-title {
//   color: #fefefe;
//   font-size: 25px;
//   letter-spacing: 0.3px;
// }

// .contact-paragraph {
//   margin-top: 30px;
//   color: #fefefe;
//   font-size: 18px;
//   letter-spacing: 0.2px;
// }

// .email-form {
//   position: relative;
//   z-index: 3;
//   background: rgba(2, 42, 75, 0.4);
//   border-radius: 3px;
//   height: fit-content;
//   padding: 15px 0;
// }

// .social-container {
//   position: relative;
//   z-index: 3;
//   color: #fefefe;
//   margin: 50px 0;
//   display: flex;
//   justify-content: space-around;
// }
// .social-container > span {
//   margin: 0 35px;
//   cursor: pointer;
// }

// footer {
//   background-color: #363a3d;
//   text-align: center;
//   height: 50px;
// }

// footer h4 {
//   line-height: 50px;
//   color: #eee;
//   margin: 0;
// }
