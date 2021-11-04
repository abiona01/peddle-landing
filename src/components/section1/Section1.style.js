import styled from "styled-components"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material";

export const Section  = styled(Box)`
width: 100%;
height: 60vh;
display:flex;
background: linear-gradient(180deg, rgba(229,229,229,0.0032387955182072714) 0%, rgba(255,255,255,1) 100%);
margin: 4rem auto 0;
align-items: center;
justify-content: space-between;
box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
@media only screen and (min-width: 728px) and (max-width: 1332px){
    height: 50vh !important;
    margin: 3rem auto !important;
& > div{
        width: 48%;
        height: 95%;
        margin: 0;
        padding-left: 0;
    }
}
@media only screen and (max-width: 728px){
    height: 80vh;
    flex-direction: column;
    margin: 0 auto 4rem;
    width: 95%;
    & > div{
        width: 95%;
    }
}
@media only screen and (max-width: 540px){
    height: 80vh;
    margin: 0 auto 5rem;
    & > div{
        width: 95%;
    }
}
`;
export const SectionDivA = styled(Box)`
width: 60%;
height: 100%;
margin: auto;
img {
    width: 90%;
    height: 80%;
    margin: 2rem;
}
`;
export const SectionDivB = styled(Box)`
width: 40%;
height: 100%;
margin: auto;
padding-left: 3rem;
text-align: start;
.css-ag7rrr-MuiTypography-root{
    font-size: 2.1875rem;
    font-weight: 500;
    line-height: 50px;
    margin-right: 15rem;
}
.css-ahj2mt-MuiTypography-root{
    font-size: 1rem;
    line-height: 30px;
    margin-right: 12rem;
}
@media only screen and (min-width: 728px) and (max-width: 1332px){
.css-ag7rrr-MuiTypography-root{
    margin-right: 0;
}
.css-ahj2mt-MuiTypography-root{
    margin-right: 0;
}
}
@media only screen and (max-width: 728px){
    padding-left: 0;
    .css-ag7rrr-MuiTypography-root{
        margin-right: 0;
    }
    .css-ahj2mt-MuiTypography-root{
        margin-right: 0;
    }
}
`;

export const SectionDivTitle = styled(Typography)`
color: #0B132A;
`;
export const SectionDivText = styled(Typography)`
color: #4F5665;
`;

export const SectionList = styled(Box)`
width: 100%;
.css-i4bv87-MuiSvgIcon-root{
    fill: #BA55D3;
    background-color: #BA55D3;
    border-radius: 5px;
    width: 1rem;
    height: 1rem;
}
.css-ahj2mt-MuiTypography-root{
    font-size: 0.875rem;
    margin-left: 1rem;
}
.css-ahj2mt-MuiTypography-root{
    margin-right: 0;
}
`;

export const SectionListItem = styled(Box)`
width: 65%;
margin-top: 1rem;
display: flex;
align-items: center;

`;
export const SectionListItemText = styled(Typography)`
color: #4F5665;
`;