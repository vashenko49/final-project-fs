import React from 'react';
import Rating from './Rating';

function Comment({ userName, avatar, firstData, lastData, rating, commentText }) {
  const styles = {
    Container: {
      width: '300px',
      height: '340px',
      background: 'white',
      borderRadius: '20px',
      padding: '20px',
      boxShadow: '0px 2px 9px -1px #9B9B9B',
      fontFamily: 'sans-serif',
      position: 'relative'
    },
    commentHeader: {
      fontSize: '20px'
    },
    userBox: {
      display: 'flex',
      position: 'absolute',
      width: '115px',
      left: '193px',
      top: '8px',
      background: 'green'
    },
    avatar: {
      width: '50px',
      height: '50px'
    },
    data: {
      opacity: '0.4',
      marginBottom: '15px',
      fontSize: '12px'
    },
    inspection: {
      marginBottom: '15px',
      marginTop: '-15px'
    },
    commentText: {
      height: '170px',
      maxHeight: '170px',
      opacity: '0.6'
    },
    buttons: {
      display: 'flex',
      width: '110px',
      margin: 'auto'
    },
    iconsCont: {
      margin: '7px'
    },
    icons: {
      width: '40px',
      height: '40px',
      opacity: '0.3'
    }
  };

  return (
    <div style={styles.Container}>
      <div style={styles.commentHeader}>Останнiй Вiдгук</div>
      <div style={styles.userBox}>
        <div>{userName}</div>
        <div>
          <img
            style={styles.avatar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU"
            alt="icon"
          />
        </div>
      </div>
      <div style={styles.data}>
        {firstData} - {lastData}
      </div>
      <Rating rating={rating} />
      <div style={styles.inspection}>огляд</div>
      <div style={styles.commentText}>{commentText}</div>
      <div style={styles.buttons}>
        <div style={styles.iconsCont}>
          <img
            style={styles.icons}
            src="https://image.flaticon.com/icons/png/512/60/60546.png"
            alt="arrow"
          />
        </div>
        <div style={styles.iconsCont}>
          <img
            style={styles.icons}
            src="data:image/png;base64,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"
            alt="heart"
          />
        </div>
      </div>
    </div>
  );
}

export default Comment;
