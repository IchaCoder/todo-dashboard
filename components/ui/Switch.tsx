'use client';

import { useState } from 'react';
import styles from './Switch.module.css';

interface SwitchProps {
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export const Switch = ({ id = 'switch', checked = false, onChange, label, disabled = false }: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <div className={styles.switchContainer}>
      <label className={styles.switch}>
        <input
          type='checkbox'
          id={id}
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className={styles.switchInput}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};
