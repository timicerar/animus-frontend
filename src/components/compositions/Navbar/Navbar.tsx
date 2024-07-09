import classNames from 'classnames';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import AnimusLogo from 'public/images/animus-logo.svg';
import LinkButton from '@/components/components/LinkButton/LinkButton';
import NextImage from '@/components/components/NextImage/NextImage';
import { Routes } from '@/constants/routes';
import useNavbarProvider from '@/hooks/useNavbarProvider';
import usePageLocation from '@/hooks/usePageLocation';
import classes from './Navbar.module.scss';

const Navbar = () => {
  const { t } = useTranslation();
  const { visible } = useNavbarProvider();
  const { isHomePage, isShopPage } = usePageLocation();

  return (
    <nav
      className={classNames(classes.container, {
        [classes.sticky]: !isHomePage,
        [classes.visible]: visible,
        [classes.shop]: isShopPage,
      })}
    >
      {(visible || !isHomePage) && (
        <Link href={Routes.HOME} className={classes.logo}>
          <NextImage
            src={AnimusLogo}
            alt="animus-logo"
            priority
            height={72}
            width={72}
          />
        </Link>
      )}
      {!isShopPage && (
        <LinkButton href={Routes.SHOP} color="Red" className={classes.button}>
          {t('shared.buyBook')}
        </LinkButton>
      )}
    </nav>
  );
};

export default Navbar;
