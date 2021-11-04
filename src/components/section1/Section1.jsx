import Keyboard from '../../images/71h1_ux51_210519 1.png';
import {
	Section,
	SectionDivA,
	SectionDivB,
	SectionDivText,
	SectionDivTitle,
	SectionList,
	SectionListItem,
	SectionListItemText,
} from './Section1.style';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
const Section1 = () => {
	return (
		<Section>
			<SectionDivA>
				<img src={Keyboard} alt='keyboard' />
			</SectionDivA>
			<SectionDivB>
				<SectionDivTitle variant='h5'>
					Features We Provide For You
				</SectionDivTitle>
				<SectionDivText variant='body1'>
					Curabitur tempor justo non turpis malesuada cursus. Mauris ac libero
					eu sem finibus lacinia nec pulvinar.
				</SectionDivText>
				<SectionList>
					<SectionListItem>
						<IndeterminateCheckBoxIcon />
						<SectionListItemText>Curabitur tempor justo </SectionListItemText>
					</SectionListItem>
					<SectionListItem>
						<IndeterminateCheckBoxIcon />
						<SectionListItemText>Curabitur tempor justo </SectionListItemText>
					</SectionListItem>
					<SectionListItem>
						<IndeterminateCheckBoxIcon />
						<SectionListItemText>Curabitur tempor justo </SectionListItemText>
					</SectionListItem>
					<SectionListItem>
						<IndeterminateCheckBoxIcon />
						<SectionListItemText>Curabitur tempor justo </SectionListItemText>
					</SectionListItem>
				</SectionList>
			</SectionDivB>
		</Section>
	);
};

export default Section1;
