import {
	IconAvatars,
	Item,
	ItemBox,
	ItemNumber,
	ItemText,
	LandingContainer,
	MainBox,
	MainBoxButton,
	MainBoxDiv,
	MainBoxText,
	MainBoxTitle,
} from './Landing.style';
import Developer from '../../images/web developer 1.png';
import { Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DnsIcon from '@mui/icons-material/Dns';
import NavBar from '../navbar/NavBar';

const Landing = () => {
	return (
		<LandingContainer>
			<NavBar />
			<MainBox>
				<MainBoxDiv>
					<MainBoxTitle variant='h6'>
						We Are Everything We Aspire To BE
					</MainBoxTitle>
					<MainBoxText variant='body1'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
						orci condimentum lectus efficitur tempor vel eu massa. Sed molestie
						turpis eget ipsum malesuada dignissim{' '}
					</MainBoxText>
					<MainBoxButton variant='contained' size='large'>
						Get Started
					</MainBoxButton>
				</MainBoxDiv>
				<MainBoxDiv>
					<img src={Developer} alt='web developer' />
				</MainBoxDiv>
			</MainBox>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={4} sm={4} md={4}>
					<Item>
						<IconAvatars>
							<PersonIcon />
						</IconAvatars>
						<ItemBox>
							<ItemNumber variant='h5'>90+</ItemNumber>
							<ItemText variant='body1'>Users</ItemText>
						</ItemBox>
					</Item>
				</Grid>
				<Grid item xs={4} sm={4} md={4}>
					<Item>
						<IconAvatars>
							<LocationOnIcon />
						</IconAvatars>
						<ItemBox>
							<ItemNumber variant='h5'>30+</ItemNumber>
							<ItemText variant='body1'>Locations</ItemText>
						</ItemBox>
					</Item>
				</Grid>
				<Grid item xs={4} sm={4} md={4}>
					<Item>
						<IconAvatars>
							<DnsIcon />
						</IconAvatars>
						<ItemBox>
							<ItemNumber variant='h5'>50+</ItemNumber>
							<ItemText variant='body1'>Servers</ItemText>
						</ItemBox>
					</Item>
				</Grid>
			</Grid>
		</LandingContainer>
	);
};

export default Landing;
