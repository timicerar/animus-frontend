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
      })}
    >
      <Link
        href={Routes.HOME}
        className={classNames(classes.logo, {
          [classes.hideLogoOnMobile]: !isShopPage,
          [classes.hideLogo]: isHomePage ? !visible : false,
        })}
      >
        <NextImage
          src={AnimusLogo}
          alt="animus-logo"
          height={72}
          width={72}
          priority
        />
      </Link>
      {!isShopPage && (
        <LinkButton href={Routes.SHOP} color="Red" className={classes.button}>
          {t('shared.buyBook')}
        </LinkButton>
      )}
    </nav>
  );
};

export default Navbar;
