import styled from "styled-components"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card"
import Fab from '@mui/material/Fab';
import { Typography } from "@mui/material";

export const Section = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  background-color: #ffffff;
  @media only screen and (max-width: 1332px){
.react-multi-carousel-list{
  width: 90% !important;
}
.react-multi-carousel-track{
  margin: 0 1rem;
}
}
  @media only screen and (min-width: 768px) and (max-width: 1332px){
    padding: 1rem 0;
.react-multi-carousel-list{
  width: 100% !important;
}
}
  @media only screen and (max-width: 768px){
            width: 100%;
            margin: 0 auto;
            padding: 1rem 0;
          }
  @media only screen and (max-width: 540px){
            width: 100%;
            padding: 0;
          }
  .react-multi-carousel-list {
    width: 90%;
    height: 100%;
    margin: 0 auto 2rem;
    overflow-x: hidden;
    
    .react-multi-carousel-track {
      width: 100%;
      height: 60%;
      margin: 0 auto 1rem;
      margin-top: -4rem;
      .react-multi-carousel-item {
        flex: unset !important;
        margin: 0 2.5rem;

@media only screen and (max-width: 540px){
            width: 100%;
            margin: 0 1rem;
          }
        .css-bhp9pd-MuiPaper-root-MuiCard-root {
          width: 22rem;
           height: 90%;
           box-shadow: unset !important;
          padding: 1rem;
          border: 2px solid #dddddd;
          border-radius: 4px;
          z-index: 9999999;
          &:hover {
            border: 3px solid #ba55d3;
            border-radius: 4px;
          }
          @media only screen and (max-width: 768px){
            width: 19rem;
          }
          @media only screen and (max-width: 540px){
            width: 18rem;
          }
        }
      }
    }
    
  }
  
`;
export const CarouselBox = styled(Box)`
width: 80%;
height: 20rem;
margin: 0 auto 2rem;
position: relative;
@media only screen and (min-width: 1332px){
width: 90%;
}
@media only screen and (min-width: 768px) and(max-width: 1332px){
width: 95%;
.carousel-button-group{
  width: 13px;
}
}
@media only screen and (max-width: 540px){
            width: 100%;
          }
.carousel-button-group{
    position: absolute;
    width: 11%;
    display: flex;
    justify-content: space-between;
    right: 0;
    bottom: 0;
    margin-top: 5rem;
    .css-a8igs1-MuiButtonBase-root-MuiFab-root{
      box-shadow: unset !important;
      background: ${props => props.backgroundColor || "#ffffff"};
      color: ${props => props.textColor || "#BA55D3"} !important;
      border: ${props => props.borderInfo || "2px solid #BA55D3"};
    }
    .second-fab{
      background: #BA55D3 !important;
      color: #ffffff !important;
      border: 2px solid #BA55D3 !important;
    } 
    @media only screen and (min-width: 768px) and(max-width: 1332px) {
      width: 14%;
    }
    @media only screen and (max-width: 768px){
      width: 18%;
    }
    @media only screen and (max-width: 480px){
      width: 38%;
    }
  }
`;
export const CarouselItem = styled(Card)`
.css-ahj2mt-MuiTypography-root{
    font-size: 1rem;
    margin-top: 0.5rem;
}
`;
export const CarouselTitle = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
export const CarouselTitleTextBox = styled(Box)`
  display: block;
  .css-2ulfj5-MuiTypography-root{
font-size: 1.125rem;
font-weight: 500;
  }
  .css-ahj2mt-MuiTypography-root{
      font-size: 0.875rem;
  }
`;

export const Profile = styled(Box)`
width: 50%;
display: flex;
justify-content:space-between;
@media only screen and (max-width: 768px){
            width: 55%;
          }
@media only screen and (max-width: 480px){
            width: 60%;
          }
`;
export const CarouselTitleHeading = styled(Typography)`
  color: #0b132a;
`;
export const CarouselTitleBody = styled(Typography)`
color: #4F5665;
`;
export const Rating = styled(Box)`
  width: 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .css-ahj2mt-MuiTypography-root {
    font-size: 1rem;
  }
  .css-i4bv87-MuiSvgIcon-root {
    fill: #fea250;
    width: 1rem;
    height: 1rem;
  }
`;
export const RatingText = styled(Typography)`
  color: #0b132a;
`;

export const CarouselBody = styled(Typography)`
  color: #0b132a;
`;
export const CarouselButton = styled(Fab)`

`
export const SubscriptionDiv = styled(Box)`
  width: 80%;
  padding: 2rem 4rem;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
  z-index: 2;
  
   @media only screen and (min-width: 768px) and (max-width: 1332px){
width: 90%;
margin: 0 auto;
div {
      width: 40%;
    }
   }
   @media only screen and (max-width: 768px){
width: 85%;
margin: 0 auto;
div {
      width: 50%;
    }
   }
  @media only screen and (max-width: 480px){
           
            padding: 1rem;
           flex-direction: column;
            div {
             width: 100%;
           }
          }
  .css-2ulfj5-MuiTypography-root {
    font-size: 2.1875rem;
    font-weight: 500;
    line-height: 45px;
  }
  .css-ahj2mt-MuiTypography-root {
    font-size: 1rem;
  }
  .css-1e6y48t-MuiButtonBase-root-MuiButton-root {
    background: #ba55d3;
    color: #ffffff;
    border-radius: 4px;
    padding: 0.5rem 2rem;
    text-transform: none;
  }
`;
export const SubscriptionDivTextBox = styled(Box)`
  display: block;
  width: 28%;
  @media only screen and (max-width: 480px){
            width: 100%;
            text-align: center;
          }
`;
export const SubscriptionTitle = styled(Typography)`
  color: #0b132a;
`;
export const SubscriptionBody = styled(Typography)`
  color: #4f5665;
`;
export const SubscriptionButtonBox = styled(Box)`
  width: 30%;
  text-align: center;
  z-index: 2;
  @media only screen and (max-width: 480px){
            width: 100%;
           margin-top: 2rem;
          }
`;
export const SubscriptionButton = styled(Button)`

`;
export const Footer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: -7rem;
  padding: 10rem 2rem 0 4.5rem;
  background: linear-gradient(
    180deg,
    rgba(229, 229, 229, 0.28335084033613445) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  .copyright{
    margin-left: 2rem;
  }
  @media only screen and (max-width: 768px){
padding: 10rem 2rem 0;
  }
  @media only screen and (max-width: 480px){
            flex-direction: column;
            padding: 10rem 1rem 0;
            div{ 
              width: 100%;
              margin: 0.4rem auto;
              
            }
    
  }
          }
`;
export const FooterTextBox = styled(Box)`
  width: 22%;
  .css-ag7rrr-MuiTypography-root {
    font-size: 1.875rem;
    line-height: 37px;
    color: #ba55d3;
  }
  .css-2ulfj5-MuiTypography-root {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 30px;
  }
  .css-ahj2mt-MuiTypography-root {
    font-size: 1rem;
    line-height: 30px;
  }
  .css-e784if-MuiTypography-root {
    margin-top: 2rem;
    padding-left: 0.5rem;
    font-size: 1rem;
    line-height: 30px;
  }
  @media only screen and (max-width: 768px){
width: 35%;
  }
`;
export const FooterTextBoxTitle = styled(Typography)`

`;
export const FooterTextBoxBody = styled(Typography)`
  color: #4f5665;
`;
export const CopyrightText = styled(Typography)`
  color: #afb5c0;
  margin-top: 3rem !important;
   margin-left: 4rem !important;
   @media only screen and (max-width: 480px){
margin-left: 1rem !important;
margin-top: 2rem !important;
   }
`;
export const FooterListBoxA = styled(Box)`
width: 25%;
display: flex;
justify-content: space-between;
`;
export const FooterListBoxB = styled(Box)`
width: 25%;
display: flex;

`;
export const FooterList = styled(Box)`
width: 40%;
text-align: center;
`;
export const FooterListTitle = styled(Typography)`
  color: #0b132a;
`;
export const FooterListText = styled(Typography)`
  color: #4f5665;
`;