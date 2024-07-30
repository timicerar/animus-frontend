import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Link from 'next/link';
import { Trans, useTranslation } from 'next-i18next';
import { useState } from 'react';
import Button from '@/components/components/Button/Button';
import Collapse from '@/components/compositions/Collapse/Collapse';
import classes from './CashOnDelivery.module.scss';

type CashOnDeliveryProps = {
  disabled?: boolean;
};

const CashOnDelivery = ({ disabled = false }: CashOnDeliveryProps) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button
        type="Primary"
        color="Paypal"
        fullWidth
        onClick={() => setShow((prevState) => !prevState)}
        disabled={disabled}
        className={classes.button}
        leadingIcon={<FontAwesomeIcon icon={faBoxesPacking} />}
      >
        {t('shopPage.productDetails.cashOnDelivery.button')}
      </Button>
      <Collapse show={show}>
        <div className={classes.content}>
          <p className={classNames(classes.paragraph, classes.marginBottom)}>
            <Trans
              i18nKey="shopPage.productDetails.cashOnDelivery.paragraphs.1"
              components={{
                bold: <b />,
                linkComponent: (
                  <Link
                    href={`mailto:${t('shared.infoEmail')}`}
                    className={classes.link}
                  />
                ),
              }}
            />
          </p>
          <div className={classes.marginBottom}>
            <p className={classes.paragraph}>
              {t('shopPage.productDetails.cashOnDelivery.paragraphs.2')}
            </p>
            <ul>
              <li>
                {t('shopPage.productDetails.cashOnDelivery.paragraphs.3')}
              </li>
              <li>
                {t('shopPage.productDetails.cashOnDelivery.paragraphs.4')}
              </li>
              <li>
                {t('shopPage.productDetails.cashOnDelivery.paragraphs.5')}
              </li>
              <li>
                {t('shopPage.productDetails.cashOnDelivery.paragraphs.6')}
              </li>
            </ul>
          </div>
          <p className={classes.paragraph}>
            {t('shopPage.productDetails.cashOnDelivery.paragraphs.7')}
          </p>
        </div>
      </Collapse>
    </div>
  );
};

export default CashOnDelivery;
