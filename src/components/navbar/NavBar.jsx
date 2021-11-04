import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/Menu';

import {
	ButtonBox,
	MenuBox,
	MenuText,
	NavButton,
	TopBar,
} from './NavBar.style';
import logo from '../../images/PEDDLE.png';

export default function PrimarySearchAppBar() {
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<img src={logo} alt='' />
			</MenuItem>
			<MenuItem>
				<MenuText variant='body1'>About</MenuText>
			</MenuItem>
			<MenuItem>
				<MenuText variant='body1'>FAQs</MenuText>
			</MenuItem>
			<MenuItem>
				<MenuText variant='body1'>Pricing</MenuText>
			</MenuItem>
			<MenuItem>
				<MenuText variant='body1'>Testimonials</MenuText>
			</MenuItem>
			<MenuItem>
				<NavButton variant='text'>Sign In</NavButton>
			</MenuItem>
			<MenuItem>
				<NavButton variant='outlined'>Sign Out</NavButton>
			</MenuItem>
		</Menu>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<TopBar position='static'>
				<Toolbar>
					<img src={logo} alt='' />
					<MenuBox sx={{ display: { xs: 'none', md: 'flex' } }}>
						<MenuText variant='body1'>About</MenuText>
						<MenuText variant='body1'>FAQs</MenuText>
						<MenuText variant='body1'>Pricing</MenuText>
						<MenuText variant='body1'>Testimonials</MenuText>
					</MenuBox>
					<ButtonBox sx={{ display: { xs: 'none', md: 'flex' } }}>
						<NavButton variant='text'>Sign In</NavButton>
						<NavButton variant='outlined'>Sign Out</NavButton>
					</ButtonBox>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='show more'
							aria-controls={mobileMenuId}
							aria-haspopup='true'
							onClick={handleMobileMenuOpen}
							color='inherit'
						>
							<MoreIcon />
						</IconButton>
					</Box>
				</Toolbar>
			</TopBar>
			{renderMobileMenu}
		</Box>
	);
}
