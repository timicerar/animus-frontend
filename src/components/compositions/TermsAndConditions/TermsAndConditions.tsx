import Link from 'next/link';
import { Trans, useTranslation } from 'next-i18next';
import classes from './TermsAndConditions.module.scss';

const TermsAndConditions = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <p>
          <Trans
            i18nKey="termsAndConditionsPage.sections.general"
            components={{
              linkComponent: (
                <Link
                  href={`mailto:${t('shared.infoEmail')}`}
                  className={classes.link}
                />
              ),
            }}
          />
        </p>
      </div>
      <div className={classes.wrapper}>
        <h3>{t('termsAndConditionsPage.sections.priceAndPurchase.title')}</h3>
        <p>
          {t('termsAndConditionsPage.sections.priceAndPurchase.paragraphs.1')}
        </p>
        <p>
          {t('termsAndConditionsPage.sections.priceAndPurchase.paragraphs.2')}
        </p>
        <p>
          {t('termsAndConditionsPage.sections.priceAndPurchase.paragraphs.3')}
        </p>
        <p>
          {t('termsAndConditionsPage.sections.priceAndPurchase.paragraphs.4')}
        </p>
      </div>
      <div className={classes.wrapper}>
        <h3>{t('termsAndConditionsPage.sections.returnPolicy.title')}</h3>
        <p>{t('termsAndConditionsPage.sections.returnPolicy.paragraphs.1')}</p>
        <p>
          <Trans
            i18nKey="termsAndConditionsPage.sections.returnPolicy.paragraphs.2"
            components={{
              linkComponent: (
                <Link
                  href={`mailto:${t('shared.infoEmail')}`}
                  className={classes.link}
                />
              ),
            }}
          />
        </p>
        <p>{t('termsAndConditionsPage.sections.returnPolicy.paragraphs.3')}</p>
      </div>
      <div className={classes.wrapper}>
        <h3>{t('termsAndConditionsPage.sections.cashOnDelivery.title')}</h3>
        <p>
          {t('termsAndConditionsPage.sections.cashOnDelivery.paragraphs.1')}
        </p>
        <p>
          {t('termsAndConditionsPage.sections.cashOnDelivery.paragraphs.2')}
        </p>
      </div>
      <div className={classes.wrapper}>
        <h3>{t('termsAndConditionsPage.sections.onlinePayment.title')}</h3>
        <p>{t('termsAndConditionsPage.sections.onlinePayment.paragraphs.1')}</p>
      </div>
      <div className={classes.wrapper}>
        <h3>{t('termsAndConditionsPage.sections.terms.title')}</h3>
        <p>{t('termsAndConditionsPage.sections.terms.paragraphs.1')}</p>
        <p>
          <Trans
            i18nKey="termsAndConditionsPage.sections.terms.paragraphs.2"
            components={{
              linkComponent: (
                <Link
                  href={`mailto:${t('shared.infoEmail')}`}
                  className={classes.link}
                />
              ),
            }}
          />
        </p>
        <p>
          <Trans
            i18nKey="termsAndConditionsPage.sections.terms.paragraphs.3"
            components={{
              linkComponent: (
                <Link
                  href={t('shared.ecEuropaLink')}
                  target="_blank"
                  className={classes.link}
                />
              ),
            }}
          />
        </p>
        <p>{t('termsAndConditionsPage.sections.terms.paragraphs.4')}</p>
        <p>
          <Trans
            i18nKey="termsAndConditionsPage.sections.terms.paragraphs.5"
            components={{
              linkComponent: (
                <Link
                  href={`mailto:${t('shared.infoEmail')}`}
                  className={classes.link}
                />
              ),
            }}
          />
        </p>
        <p>
          <Trans
            i18nKey="termsAndConditionsPage.sections.terms.paragraphs.6"
            components={{
              linkComponent: (
                <Link
                  href={`mailto:${t('shared.infoEmail2')}`}
                  className={classes.link}
                />
              ),
            }}
          />
        </p>
        <p>{t('termsAndConditionsPage.sections.terms.paragraphs.7')}</p>
        <p>{t('termsAndConditionsPage.sections.terms.paragraphs.8')}</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
