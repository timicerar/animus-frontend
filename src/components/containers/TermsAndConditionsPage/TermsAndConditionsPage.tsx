import classNames from 'classnames';
import { Trans } from 'next-i18next';
import Section from '@/components/compositions/Section/Section';
import TermsAndConditions from '@/components/compositions/TermsAndConditions/TermsAndConditions';
import { Colors } from '@/constants/colors';
import classes from '@/styles/shared/PageWithHeading.module.scss';
import customClasses from './TermsAndConditionsPage.module.scss';

const TermsAndConditionsPage = () => {
  return (
    <div className={classes.container}>
      <Section classes={{ section: classes.pageTitleSection }}>
        <h1 className={classes.title}>
          <Trans
            i18nKey="termsAndConditionsPage.pageTitle"
            components={{ breakPoint: <br /> }}
          />
        </h1>
      </Section>
      <Section
        classes={{
          section: classNames(classes.pageSection, customClasses.pageSection),
          content: customClasses.pageContent,
        }}
        backgroundColor={Colors.BACKGROUND}
      >
        <TermsAndConditions />
      </Section>
    </div>
  );
};

export default TermsAndConditionsPage;