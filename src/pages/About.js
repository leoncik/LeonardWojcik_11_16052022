import Accordion from '../components/Accordion/Accordion';
import MainBanner from '../components/MainBanner/MainBanner';
import { ABOUT_PAGE_TEXT } from '../helpers/ABOUT_PAGE_TEXT';
import aboutBanner from '../assets/images/about-banner.jpg';
import classes from './About.module.css';

const AboutPage = () => {
	return (
		<div className={classes['about-page']}>
			<MainBanner background={aboutBanner} />
			{ABOUT_PAGE_TEXT.map((elt, index) => (
				<Accordion key={index} title={elt.title} content={elt.content} />
			))}
		</div>
	);
};

export default AboutPage;
