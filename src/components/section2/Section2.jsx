import pricing1 from '../../images/pricing1.png';
import pricing2 from '../../images/pricing2.png';
import pricing3 from '../../images/pricing3.png';
import mask1 from '../../images/Mask Group.png';
import mask2 from '../../images/Mask Group (1).png';
import mask3 from '../../images/Mask Group (2).png';
import mask4 from '../../images/Mask Group (3).png';
import mask5 from '../../images/Mask Group (4).png';
import {
	FirstSectionDiv,
	FourthSectionDiv,
	PriceBox,
	PriceButton,
	PriceMain,
	PriceSub,
	PricingBox,
	PricingDiv,
	PricingItem,
	PricingText,
	PricingTitle,
	SecondSectionDiv,
	Section,
	Section2Title,
	Section2Text,
	ThirdSectionDiv,
	ThirdSectionDivTitle,
	ThirdSectionTitleDiv,
	ThirdSectionDivBody,
} from './Section2.style';
import CheckIcon from '@mui/icons-material/Check';
const Section2 = () => {
	return (
		<Section>
			<FirstSectionDiv>
				<Section2Title variant='h5'>Choose Your Plan</Section2Title>
				<Section2Text variant='body1'>
					Let's choose the package that is best for you and explore it happily
					and cheerfully.
				</Section2Text>
			</FirstSectionDiv>
			<SecondSectionDiv>
				<PricingDiv>
					<img src={pricing3} alt='pricing3' />
					<PricingTitle> Free Plan</PricingTitle>
					<PricingBox>
						<PricingItem>
							<CheckIcon />
							<PricingText>Mauris sem neque</PricingText>
						</PricingItem>
						<PricingItem>
							<CheckIcon />
							<PricingText>Mauris sem neque</PricingText>
						</PricingItem>
						<PricingItem>
							<CheckIcon />
							<PricingText>Mauris sem neque</PricingText>
						</PricingItem>
						<PricingItem>
							<CheckIcon />
							<PricingText>Mauris sem neque</PricingText>
						</PricingItem>
					</PricingBox>
					<PriceBox>
						<PriceMain variant='h6'>Free</PriceMain>
					</PriceBox>
					<PriceButton variant='outlined'>Select </PriceButton>
				</PricingDiv>

				<PricingDiv>
					<img src={pricing2} alt='pricing2' />
					<PricingTitle> Standard Plan</PricingTitle>
					<PricingBox>
						<PricingItem>
							<CheckIcon />
							<PricingText>Mauris sem neque</PricingText>
						</PricingItem>
						<PricingItem>
							<CheckIcon />
							<PricingText>Mauris sem neque</PricingText>
						</PricingItem>
						<PricingItem>
							<CheckIcon />
							<PricingText>Mauris sem neque</PricingText>
						</PricingItem>
						<PricingItem>
							<CheckIcon />
							<PricingText>Mauris sem neque</PricingText>
						</PricingItem>
						<PricingItem>
							<CheckIcon />
							<PricingText>Mauris sem neque</PricingText>
						</PricingItem>
					</PricingBox>
					<PriceBox>
						<PriceMain variant='h6'>$9</PriceMain>
						<PriceSub>/ mo</PriceSub>
					</PriceBox>
					<PriceButton variant='outlined'>Select </PriceButton>
				</PricingDiv>
				<PricingDiv>
					<img src={pricing1} alt='pricing1' />
					<PricingTitle> Premium Plan</PricingTitle>
					<PricingBox>
						<PricingItem>
							<CheckIcon />
							<PricingText>Mauris sem neque</PricingText>
						</PricingItem>
						<PricingItem>
							<CheckIcon />
							<PricingText>Mauris sem neque</PricingText>
						</PricingItem>
						<PricingItem>
							<CheckIcon />
							<PricingText>Mauris sem neque</PricingText>
						</PricingItem>
						<PricingItem>
							<CheckIcon />
							<PricingText>Mauris sem neque</PricingText>
						</PricingItem>
						<PricingItem>
							<CheckIcon />
							<PricingText>Mauris sem neque</PricingText>
						</PricingItem>
						<PricingItem>
							<CheckIcon />
							<PricingText>Mauris sem neque</PricingText>
						</PricingItem>
					</PricingBox>
					<PriceBox>
						<PriceMain variant='h6'>$12</PriceMain>
						<PriceSub>/ mo</PriceSub>
					</PriceBox>
					<PriceButton variant='contained'>Select </PriceButton>
				</PricingDiv>
			</SecondSectionDiv>
			<ThirdSectionDiv>
				<ThirdSectionTitleDiv>
					<ThirdSectionDivTitle variant='h5'>
						Get Started With Paddle Today
					</ThirdSectionDivTitle>
				</ThirdSectionTitleDiv>
				<ThirdSectionDivBody>
					Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante
					egestas ullamcorper
				</ThirdSectionDivBody>
				<PriceButton variant='contained'>Start Today</PriceButton>
			</ThirdSectionDiv>
			<FourthSectionDiv>
				<img src={mask1} alt='' />
				<img src={mask2} alt='' />
				<img src={mask3} alt='' />
				<img src={mask4} alt='' />
				<img src={mask5} alt='' />
			</FourthSectionDiv>
		</Section>
	);
};

export default Section2;
