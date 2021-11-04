import styled from "styled-components"
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography"
export const Section = styled(Box)`
width: 100%;
padding: 2rem 1rem;
height: 100%;
overflow-x: hidden;
background: linear-gradient(180deg, rgba(229,229,229,0.28335084033613445) 0%, rgba(255,255,255,1) 100%);
text-align: center;
overflow-x: hidden;
.css-ag7rrr-MuiTypography-root{
    font-size: 2.1875rem;
    font-weight: 500;
    line-height: 50px;
    
}
.css-ahj2mt-MuiTypography-root{
    font-size: 1rem;
    line-height: 30px;
   
}

@media only screen and (min-width: 728px) and (max-width: 1332px){
    margin: 2rem 0;
    padding: 2rem 0;
    & > div {
        width: 90%;
    }
}
@media only screen and (max-width: 728px){
     margin: 2rem 0;
    padding: 2rem 0;
}
@media only screen and (max-width: 540px){
     margin: 4rem 0 2rem;
    padding: 2rem 0;
}

`
export const FirstSectionDiv = styled(Box)`
width: 35%;
margin: 0 auto;
@media only screen and (max-width: 540px){
    width: 80%;
}
`;
export const Section2Title = styled(Typography)`
color: #0B132A;
`;
export const Section2Text = styled(Typography)`
color: #4F5665;
`;
export const SecondSectionDiv = styled(Box)`
width: 70%;
height: 70%;
margin: 2rem auto;
display: flex;
justify-content: space-evenly;
   @media only screen and (min-width: 768px) and (max-width: 1332px){
margin: 2rem auto ;
div{
    img{
        width: 90%;
    }
    div{
        width: 90%;
    }
}
   }
@media only screen and (max-width: 728px){
    width: 90%;
    flex-direction: column;
    & > div {
        width: 95%;
        margin: 1rem auto;
    }
}
`;
export const PricingDiv = styled(Box)`
width: 30%;
padding: 3rem 1rem;
background: #FFFFFF;
border: 2px solid #DDDDDD;
box-sizing: border-box;
border-radius: 10px;
text-align: center;
&:hover {
    border: 2px solid #BA55D3;
}
img{
    height: 30%;
}
.css-ahj2mt-MuiTypography-root{
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 30px;
    text-align: center;
}
.css-i4bv87-MuiSvgIcon-root{
    fill: #2FAB73;
    width: 1rem;
    height: 1rem;
}
.css-ahj2mt-MuiTypography-root{
    font-size: 0.875rem;
}
.css-1rwt2y5-MuiButtonBase-root-MuiButton-root{
    border: 2px solid #BA55D3;
    color: #BA55D3;
    text-transform: none;
    font-size: 1rem;
    line-height: 19px;
    padding: 0.5rem 3rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    margin-top: 1rem;
    &:hover{
        background-color: #BA55D3;
        color: #ffffff;
        outline: #BA55D3;
        border: 2px solid #BA55D3;
    }
}
.css-sghohy-MuiButtonBase-root-MuiButton-root{
    background-color: #BA55D3;
    color: #ffffff;
    text-transform: none;
    padding: 0.5rem 3rem;
    font-size: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    line-height: 19px;
    margin-top: 1rem;
    &:hover{
        background-color:#ffffff;
        color: #BA55D3;
        outline: #BA55D3;
        border: 2px solid #BA55D3;
    }
}
`;
export const PricingTitle = styled(Typography)`
color:  #0B132A;
`;
export const PricingBox = styled(Box)`
width: 75%;
height: 40%;
margin: 0 auto;
@media only screen and (max-width: 728px){
    width: 100%;
}
`;
export const PricingItem = styled(Box)`
margin: 0 auto;
display: flex;
width: 70%;
justify-content: space-between;
align-items: center;
@media only screen and (max-width: 728px){
    width: 55%;
    margin: 0 auto;
}
@media only screen and (max-width: 540px){
    width: 48%;
    margin: 0 auto;
}
@media only screen and (max-width: 380px){
    width: 55%;
    margin: 0 auto;
}
`;
export const PricingText = styled(Typography)`
color: #4F5665;
`;

export const PriceBox = styled(Box)`
margin: 3rem auto 0;
display: flex;
justify-content:center;
align-items: center;
width: 75%;
.css-2ulfj5-MuiTypography-root{
    font-size: 1.56525rem;
    font-weight: 500;
}
.css-ahj2mt-MuiTypography-root{
    font-size: 1.56525rem;
    font-weight: 500;
}
`;

export const PriceMain = styled(Typography)`
color: #0B132A;
`;

export const PriceSub = styled(Typography)`
color: #4F5665;
`;
export const PriceButton = styled(Button)`
margin-top: 1rem;
`;
export const ThirdSectionDiv = styled(Box)`
width: 32%;
text-align: center;
margin: 2rem auto;
.css-sghohy-MuiButtonBase-root-MuiButton-root{
    display: block;
    margin: 1rem auto;
    background-color: #BA55D3;
    color: #ffffff;
    text-transform: none;
    padding: 0.7rem 2.5rem;
    font-size: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    line-height: 19px;
    &:hover{
        background-color:#ffffff;
        color: #BA55D3;
        outline: #BA55D3;
        border: 2px solid #BA55D3;
    }
}
   @media only screen and (min-width: 768px) and (man-width: 1332px){
width: 60%;
margin: 0 auto;
div {
      width: 70%;
    }
   }
@media only screen and (max-width: 728px){
    width: 90%;
    margin: 0 auto;
    .css-ahj2mt-MuiTypography-root{
        margin: 0 auto;
    }
}

`;
export const ThirdSectionTitleDiv = styled(Box)`
width: 70%;
margin: 0 auto;
text-align: center;
@media only screen and (max-width: 728px){
    width: 90%;
    margin: 0 auto;
}
`;
export const ThirdSectionDivTitle = styled(Typography)`
color: #0B132A;
`;
export const ThirdSectionDivBody = styled(Typography)`
color: #4F5665;
`;
export const FourthSectionDiv = styled(Box)`
width: 80%;
margin: 3rem auto;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
img {
    width: 18%;
    height: 4rem;
}
@media only screen and (max-width: 728px){
    width: 100%;
    justify-content: center;
    img {
        width: 40%;
    }
}
`;