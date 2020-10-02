import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { languages } from '../../18next';
import { useTranslation } from 'react-i18next';

const SelectLanguage = () => {
  const { t, i18n } = useTranslation();

  const handleChange = e => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="select-language">{t('select-language')}</InputLabel>
      <Select
        labelId="select-language"
        id="select-language"
        value={i18n.language}
        onChange={handleChange}
      >
        {languages.map(l => {
          return (
            <MenuItem key={l} value={l}>
              {l}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectLanguage;
