import { ReactNode } from 'react';
import classes from './Checkbox.module.scss';

type CheckboxProps = {
  label: ReactNode;
  checked: boolean;
  onChange: (value: boolean) => void;
};

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <label className={classes.container}>
      <input
        type="checkbox"
        checked={checked}
        className={classes.checkbox}
        onChange={(e) => onChange(e?.target?.checked)}
      />
      <span className={classes.label}>{label}</span>
    </label>
  );
};

export default Checkbox;
