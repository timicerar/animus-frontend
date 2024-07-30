import { ChangeEvent, useMemo } from 'react';
import classes from './Select.module.scss';

type SelectProps = {
  option: {
    value: string | number;
    label: string;
    isDefault?: boolean;
  }[];
  onChange: (value: string | number) => void;
};

const Select = ({ option, onChange }: SelectProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  const defaultValue = useMemo(() => {
    return option?.find((option) => option?.isDefault)?.value;
  }, [option]);

  return (
    <select
      onChange={handleChange}
      defaultValue={defaultValue}
      className={classes.select}
    >
      {option.map((option) => (
        <option key={option?.value} value={option?.value}>
          {option?.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
