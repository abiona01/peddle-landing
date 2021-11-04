import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import avatar1 from '../../images/Ellipse 175.png';
import avatar2 from '../../images/Ellipse 175 (1).png';
import avatar3 from '../../images/Ellipse 175 (2).png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import {
	Section,
	CarouselItem,
	CarouselTitle,
	Profile,
	CarouselTitleTextBox,
	CarouselTitleHeading,
	CarouselTitleBody,
	Rating,
	RatingText,
	CarouselBody,
	SubscriptionDiv,
	SubscriptionDivTextBox,
	SubscriptionTitle,
	SubscriptionBody,
	SubscriptionButton,
	SubscriptionButtonBox,
	Footer,
	FooterTextBoxBody,
	FooterTextBox,
	FooterListBoxA,
	FooterList,
	FooterListText,
	FooterListTitle,
	FooterListBoxB,
	CopyrightText,
	CarouselButton,
	CarouselBox,
} from './Section3.style';
import logo from '../../images/PEDDLE.png';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
};

const Section3 = () => {
	const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
		const {
			carouselState: { currentSlide },
		} = rest;
		return (
			<div className='carousel-button-group'>
				<CarouselButton
					className={currentSlide === 0 ? 'disable' : ''}
					onClick={() => previous()}
				>
					<ArrowBackIcon />
				</CarouselButton>
				<CarouselButton onClick={() => next()} className='second-fab'>
					<ArrowForwardIcon />{' '}
				</CarouselButton>
			</div>
		);
	};
	return (
		<Section>
			<CarouselBox>
				<Carousel
					responsive={responsive}
					arrows={false}
					customButtonGroup={<ButtonGroup />}
					swipeable
					draggable={false}
					infinite={false}
					showDots={false}
					show={3}
					keyBoardControl={true}
					customTransition='all .5'
					transitionDuration={500}
					deviceType='desktop'
				>
					<CarouselItem>
						<CarouselTitle>
							<Profile>
								<img src={avatar1} alt='profile' />
								<CarouselTitleTextBox>
									<CarouselTitleHeading variant='h6'>
										Viezh Robert
									</CarouselTitleHeading>
									<CarouselTitleBody>Warsaw, Poland</CarouselTitleBody>
								</CarouselTitleTextBox>
							</Profile>
							<Rating>
								<RatingText>4.5</RatingText>
								<StarIcon />
							</Rating>
						</CarouselTitle>
						<CarouselBody>
							“Mauris sem neque, ultrices nec sapien id, consequat laoreet
							dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim
							et. Fusce arcu ex”
						</CarouselBody>
					</CarouselItem>
					<CarouselItem>
						<CarouselTitle>
							<Profile>
								<img src={avatar2} alt='profile' />
								<CarouselTitleTextBox>
									<CarouselTitleHeading variant='h6'>
										Viezh Robert
									</CarouselTitleHeading>
									<CarouselTitleBody>Warsaw, Poland</CarouselTitleBody>
								</CarouselTitleTextBox>
							</Profile>
							<Rating>
								<RatingText>4.5</RatingText>
								<StarIcon />
							</Rating>
						</CarouselTitle>
						<CarouselBody>
							“Mauris sem neque, ultrices nec sapien id, consequat laoreet
							dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim
							et. Fusce arcu ex”
						</CarouselBody>
					</CarouselItem>
					<CarouselItem>
						<CarouselTitle>
							<Profile>
								<img src={avatar2} alt='profile' />
								<CarouselTitleTextBox>
									<CarouselTitleHeading variant='h6'>
										Viezh Robert
									</CarouselTitleHeading>
									<CarouselTitleBody>Warsaw, Poland</CarouselTitleBody>
								</CarouselTitleTextBox>
							</Profile>
							<Rating>
								<RatingText>4.5</RatingText>
								<StarIcon />
							</Rating>
						</CarouselTitle>
						<CarouselBody>
							“Mauris sem neque, ultrices nec sapien id, consequat laoreet
							dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim
							et. Fusce arcu ex”
						</CarouselBody>
					</CarouselItem>
					<CarouselItem>
						<CarouselTitle>
							<Profile>
								<img src={avatar3} alt='profile' />
								<CarouselTitleTextBox>
									<CarouselTitleHeading variant='h6'>
										Viezh Robert
									</CarouselTitleHeading>
									<CarouselTitleBody>Warsaw, Poland</CarouselTitleBody>
								</CarouselTitleTextBox>
							</Profile>
							<Rating>
								<RatingText>4.5</RatingText>
								<StarIcon />
							</Rating>
						</CarouselTitle>
						<CarouselBody>
							“Mauris sem neque, ultrices nec sapien id, consequat laoreet
							dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim
							et. Fusce arcu ex”
						</CarouselBody>
					</CarouselItem>
				</Carousel>
			</CarouselBox>
			<SubscriptionDiv>
				<SubscriptionDivTextBox>
					<SubscriptionTitle variant='h6'>
						Subscribe Now for Get Special Features!
					</SubscriptionTitle>
					<SubscriptionBody>
						Praesent mollis lobortis nisl nec laoreet.
					</SubscriptionBody>
				</SubscriptionDivTextBox>
				<SubscriptionButtonBox>
					<SubscriptionButton>Subscribe Now</SubscriptionButton>
				</SubscriptionButtonBox>
			</SubscriptionDiv>
			<Footer>
				<FooterTextBox>
					<img src={logo} alt='' />
					<FooterTextBoxBody>
						Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec
						ante egestas ullamcorper.
						<br /> Duis id mauris consequat, ultrices ligula at, laoreet mag.
					</FooterTextBoxBody>
				</FooterTextBox>
				<FooterListBoxA>
					<FooterList>
						<FooterListTitle variant='h6'>Product</FooterListTitle>
						<FooterListText>Praesent</FooterListText>
						<FooterListText>Laoreet</FooterListText>
						<FooterListText>Laoreet</FooterListText>
						<FooterListText>Server</FooterListText>
					</FooterList>
					<FooterList>
						<FooterListTitle variant='h6'>Engage</FooterListTitle>
						<FooterListText>Mauris</FooterListText>
						<FooterListText>Aenean</FooterListText>
						<FooterListText>Linsean</FooterListText>
						<FooterListText>Lingula</FooterListText>
					</FooterList>
				</FooterListBoxA>
				<FooterListBoxB>
					<FooterList>
						<FooterListTitle variant='h6'>Earn Money</FooterListTitle>
						<FooterListText>Ultrices</FooterListText>
						<FooterListText>Fusce</FooterListText>
					</FooterList>
				</FooterListBoxB>
			</Footer>
			<CopyrightText variant='body2' className='copyright'>
				©2020PADDLE
			</CopyrightText>
		</Section>
	);
};
export default Section3;
