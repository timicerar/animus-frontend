import { useMemo } from 'react';
import { ButtonColor, ButtonType } from '@/components/components/Button/Button';
import classes from '@/styles/shared/Button.module.scss';

const useGetButtonColorClass = (type: ButtonType, color: ButtonColor) => {
  return useMemo(() => {
    if (type === 'Primary') {
      return classes[`primary${color}`];
    } else if (type === 'Outlined') {
      return classes[`outlined${color}`];
    }
  }, [type, color]);
};

export default useGetButtonColorClass;
