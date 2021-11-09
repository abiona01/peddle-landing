import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

export const TopBar = styled(AppBar)`
	background-color: #ffffff;
	color: #4f5665;
	padding-top: 1rem;
	box-shadow: none;
	.MuiToolbar-root {
		width: 100%;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.MuiButtonBase-root.MuiMenuItem-root {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
	.MuiButtonBase-root.MuiButton-root {
		color: #0b132a;
		text-transform: none;
		width: 28%;
		height: 3rem;
		padding: 0 1rem;
		&:hover {
			background-color: #ffffff;
			color: #ba55d3;
			border: 3px solid #ba55d3;
		}
	}
	.MuiButton-outlinedPrimary {
		border: 3px solid #ba55d3;
		padding: 0.4rem 3rem;
		color: #0b132a;
		border-radius: 4px;
		margin-left: 1rem;
		text-transform: none;
		text-align: center;
		&:hover {
			background-color: #ba55d3;
			border: 3px solid #ba55d3;
			color: #ffffff;
		}
		@media only screen and (max-width: 898px) {
			margin-left: 0;
		}
	}
`;
export const MenuBox = styled(Box)`
	width: 40%;
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 898px) {
		display: none;
	}
`;
export const MenuText = styled(Typography)`
	font-size: 0.9rem;
	line-height: 18.96px;
`;
export const ButtonBox = styled(Box)`
	width: 35%;
	display: flex;
	align-items: center;
	@media only screen and (max-width: 898px) {
		display: none;
	}
`;

export const NavButton = styled(Button)`
	outline: none;
	border: none;
	border-radius: 4px;
`;
