import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import ButtonPreview from '../../generic/ButtonPreview';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'left',
    font: 'normal normal bold 18px/24px Roboto',
    letterSpacing: '0px',
    color: '#293134',
    opacity: '1',
    marginBottom: '20px'
  },
  listItem: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
    gridGap: '10px'
  }
}));

const ManagementServiceList = ({ services, onClick }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <p className={classes.title}>{t('managementServiceListTitle')}</p>
      <div className={classes.listItem}>
        {services.map(el => (
          <ButtonPreview
            key={el.id}
            startIcon={el.startIcon}
            startIconColor={el.startIconColor}
            title={el.title}
            onClick={() => onClick(el.id)}
          />
        ))}
      </div>
    </div>
  );
};

ManagementServiceList.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      startIcon: PropTypes.element.isRequired,
      startIconColor: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired
};

export default ManagementServiceList;
