import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

export const LandingContainer = styled(Box)`
	width: 90%;
	overflow-x: hidden;
	margin: 0 auto;
	padding: 0 !important;
	background: linear-gradient(
		180deg,
		rgba(229, 229, 229, 0.0032387955182072714) 0%,
		rgba(255, 255, 255, 1) 100%
	);

	.MuiPaper-root.MuiAppBar-root {
		background: transparent;
		color: black;
		box-shadow: none;
	}

	.MuiGrid-container {
		width: 95%;
		margin: 2rem auto;
		padding: 2rem 0;
		background: #ffffff;
		border-radius: 10px;
		-moz-box-shadow: 0 20px 20px rgba(182, 182, 182, 0.5);
		-webkit-box-shadow: 0 20px 20px rgba(182, 182, 182, 0.5);
		box-shadow: 0 20px 20px rgba(182, 182, 182, 0.5);
		@media only screen and (max-width: 728px) {
			margin: 2rem auto 0;
			width: 100%;
		}
	}
	.MuiGrid-root > .MuiGrid-item:last-of-type {
		div {
			border-right: none;
		}
	}
	@media only screen and (max-width: 728px) {
		width: 90%;
		margin: 0 auto;
	}
	@media only screen and (max-width: 480px) {
		width: 95%;
		margin: 0 auto;
	}
`;

export const Nav = styled(Box)`
	margin-top: 2rem;
	width: 95%;
	display: flex;
	justify-content: space-between;
`;

export const Menu = styled(Box)`
	width: 40%;
	display: flex;
	justify-content: space-between;
`;
export const MenuText = styled(Typography)`
	font-size: 0.9rem;
	line-height: 18.96px;
`;

export const ButtonBox = styled(Box)`
	display: flex;
	.MuiTouchRipple-root {
		padding: 0 1rem;
	}
	.MuiButtonBase-root.MuiButton-root {
		color: #000000;
		text-transform: none;
		padding: 0.2rem 1.5rem;
		&:hover {
			background: #ffffff;
			border: 2px solid #ba55d3;
		}
	}
	.lonana.MuiButtonBase-root.MuiButton-root {
		border: 2px solid #ba55d3;
	}
`;

export const NavButtonA = styled(Button)`
	outline: none;
	border: none;
	border-radius: 4px;
`;
export const NavButtonB = styled(Button)`
	outline: none;
	border-radius: 4px;
	border: 2px solid #ba55d3;
	.MuiButtonBase-root.MuiButton-root {
		border: 2px solid #ba55d3;
	}
`;

export const MainBox = styled(Box)`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin-top: 2rem;
	justify-content: space-between;
	align-items: center;
	@media only screen and (max-width: 728px) {
		flex-direction: column;
		div {
			width: 100%;
			text-align: center;
		}
	}
`;
export const MainBoxDiv = styled(Box)`
	width: 50%;
	text-align: start;
	@media only screen and (min-width: 768px) and (max-width: 1332px) {
		.MuiTypography-root.MuiTypography-h6 {
			margin-right: 0 !important;
		}
		.MuiTypography-root.MuiTypography-body1 {
			margin-right: 0 !important;
		}
	}
	.MuiTypography-root.MuiTypography-h6 {
		font-size: 3.125rem;
		font-weight: 500;
		margin-right: 8rem;
		@media only screen and (max-width: 728px) {
			margin-right: 0;
		}
		@media only screen and (max-width: 480px) {
			font-size: 2rem;
		}
	}
	.MuiTypography-root.MuiTypography-body1 {
		font-size: 1rem;
		line-height: 30px;
		margin-right: 10rem;
		@media only screen and (max-width: 728px) {
			margin-right: 0;
		}
	}
	img {
		width: 100%;
	}
	.MuiButtonBase-root.MuiButton-root {
		background: #ba55d3;
		border-radius: 4px;
		text-transform: none;
		padding: 0.5rem 2.5rem;
		margin-top: 1rem;
	}
`;
export const MainBoxTitle = styled(Typography)`
	color: #0b132a;
	text-shadow: 0px 2px 4px #ba55d3;
`;

export const MainBoxText = styled(Typography)`
	color: #4f5665;
`;
export const MainBoxButton = styled(Button)`
	background: #ba55d3;
	margin-top: 1rem;
`;
export const Item = styled(Box)`
	width: 80%;
	margin: 0 auto;
	padding: 1.5rem 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-align: center;
	border-right: 2px solid #eeeff2;
	& > :last-of-type {
		border-right: none;
	}
	@media only screen and (max-width: 480px) {
		border-right: none;
		width: 100%;
		flex-direction: column;
		justify-content: center;
	}
	.MuiAvatar-root {
		background: rgba(186, 85, 211, 0.25);
		color: #ba55d3;
		width: 3rem;
		height: 3rem;
	}
	.MuiTypography-root {
		font-weight: bold;
		font-size: 1.5625rem;
		line-height: 30px;
	}
	.MuiTypography-root {
		font-size: 1.25rem;
	}
`;
export const ItemBox = styled(Box)`
	width: 70%;
	text-align: start;
	@media only screen and (max-width: 480px) {
		text-align: center;
		margin-top: 0.5rem;
	}
`;
export const ItemNumber = styled(Typography)`
	color: #0b132a;
	font-weight: bold;
`;
export const ItemText = styled(Typography)`
	color: #4f5665;
`;
export const IconAvatars = styled(Avatar)`
	background: rgba(186, 85, 211, 0.25);
`;
