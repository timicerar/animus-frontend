import { ReactNode } from 'react';
import LinkButton, {
  LinkButtonProps,
} from '@/components/components/LinkButton/LinkButton';
import classes from './Banner.module.scss';

type BannerProps = {
  title: ReactNode;
  citation: {
    paragraph: string;
    author: string;
  };
  button?: LinkButtonProps;
};

const Banner = ({ title, citation, button }: BannerProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>{title}</h2>
        <div>
          <p className={classes.paragraph}>{citation?.paragraph}</p>
          <p className={classes.author}>- {citation?.author}</p>
        </div>
      </div>
      {button && <LinkButton {...button} />}
    </div>
  );
};

export default Banner;
