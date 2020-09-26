import React from 'react';

const Button = ({ background, color, content, onClick }) => {
  const styles = {
    btn: {
      opacity: '1',
      background: background,
      width: '100px',
      minHeight: '30px',
      color: color,
      border: ' 1px solid rgba(0,0,0,0)',
      borderRadius: '15px'
    },
    p: {
      margin: '0 auto'
    }
  };

  return (
    <button onClick={onClick} style={styles.btn}>
      <p style={styles.p}>{content}</p>
    </button>
  );
};

export default Button;
