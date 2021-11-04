import { Button } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
export const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background: #ffffff;
    font-family: Rubik;
    width: 100%;
    height:100%;
    .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper {
      text-align: center;
      .css-6hp17o-MuiList-root-MuiMenu-list{
        .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root{
          img{
            margin: 0 auto;
          }
          .css-ahj2mt-MuiTypography-root{
margin: 0 auto;
text-align: center;
          }

        }

      }
      
    .css-1e6y48t-MuiButtonBase-root-MuiButton-root {
      color: #0b132a;
      text-transform: none;
      padding: 0.4rem 2rem;
      &:hover {
        border: 3px solid #ba55d3;
        border-radius: 4px;
      }
    }
    .css-1rwt2y5-MuiButtonBase-root-MuiButton-root {
      border: 3px solid #ba55d3;
      padding: 0.4rem 2rem;
      color: #0b132a;
      border-radius: 4px;
      text-transform: none;
      &:hover {
        background-color: #ba55d3;
        color: #ffffff;
      }
    }
  }
  .css-sghohy-MuiButtonBase-root-MuiButton-root{
    display: block;
    text-transform: none;
    margin: 5rem auto 1rem;
    a {
      color: white;
      text-decoration: none;
    }
  }
  .css-1rwt2y5-MuiButtonBase-root-MuiButton-root{
    display: block;
    text-transform: none;
    margin: 1rem auto;
    a {
      color: #1976d2;
      text-decoration: none;
    }
  }
  .app-button{
    width: 15rem;
  }
}
`;

export const AppButtons = styled(Button)`

`