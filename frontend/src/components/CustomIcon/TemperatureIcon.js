import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const TemperatureIcon = props => {
  return (
    <SvgIcon {...props} style={{ width: 'auto', height: 'auto' }}>
      <g transform="translate(-20.998 -2)">
        <path
          d="M32.433,54.866a3.433,3.433,0,1,1,3.433-3.433A3.433,3.433,0,0,1,32.433,54.866Zm0-6.008a2.575,2.575,0,1,0,2.575,2.575A2.575,2.575,0,0,0,32.433,48.858Z"
          transform="translate(-4.568 -26.26)"
        />
        <path
          d="M27.869,32.038c-.115,0-.229,0-.343-.008A6.9,6.9,0,0,1,21,25.43,6.831,6.831,0,0,1,24.861,19V17.913h.858v1.362a.429.429,0,0,1-.257.394,6.008,6.008,0,1,0,4.806,0,.429.429,0,0,1-.257-.393V5a2.146,2.146,0,1,0-4.291,0V16.179h-.858V5a3,3,0,0,1,6.008,0V19a6.866,6.866,0,0,1-3,13.038Z"
          transform="translate(0 0)"
        />
        <path d="M47,7h3.433v.858H47Z" transform="translate(-14.844 -2.854)" />
        <path d="M47,14h2.146v.858H47Z" transform="translate(-14.844 -6.851)" />
        <path d="M47,21h3.433v.858H47Z" transform="translate(-14.844 -10.847)" />
        <path d="M47,28h2.146v.858H47Z" transform="translate(-14.844 -14.843)" />
        <path d="M47,35h3.433v.858H47Z" transform="translate(-14.844 -18.839)" />
        <path d="M36,11.994h.858v1.719H36Z" transform="translate(-8.564 -5.705)" />
        <path d="M36,20h.858V32.445H36Z" transform="translate(-8.564 -10.276)" />
      </g>
    </SvgIcon>
  );
};

TemperatureIcon.defaultProps = {
  viewBox: '0 0 14.591 30.038',
  height: '30.038',
  width: '14.591',
  htmlColor: '#fff'
};

export default TemperatureIcon;
