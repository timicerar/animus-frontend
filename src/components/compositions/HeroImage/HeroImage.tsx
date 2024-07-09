import AnimusBackgroundHero from 'public/images/animus_background_hero.png';
import AnimusHero from 'public/images/animus_hero.png';
import NextImage from '@/components/components/NextImage/NextImage';
import classes from './HeroImage.module.scss';

const HeroImage = () => {
  return (
    <section
      className={classes.container}
      style={{
        background: `url('${AnimusBackgroundHero?.src}') no-repeat center/cover`,
      }}
    >
      <NextImage
        src={AnimusHero}
        alt="animus-hero-image"
        className={classes.image}
      />
    </section>
  );
};

export default HeroImage;
