import AnimusBackgroundHero from 'public/images/animus_background_hero.png';
import AnimusHero from 'public/images/animus_hero.png';
import NextImage from '@/components/components/NextImage/NextImage';
import Section from '@/components/compositions/Section/Section';
import classes from './HeroImage.module.scss';

const HeroImage = () => {
  return (
    <Section
      className={classes.container}
      backgroundImage={AnimusBackgroundHero}
    >
      <NextImage
        src={AnimusHero}
        alt="animus-hero-image"
        className={classes.image}
      />
    </Section>
  );
};

export default HeroImage;
