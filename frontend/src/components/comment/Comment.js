import React from 'react';
import Rating from './Rating';
import { Card } from '@material-ui/core';
import { styles } from './commentStyles.js';

function Comment({ userName, avatar, firstData, lastData, rating, commentText }) {
  return (
    <Card style={styles.card}>
      <header>
        <div style={styles.commentHeader}>Останнiй Вiдгук</div>
        <div style={styles.userBox}>
          <div style={styles.userName}>{userName}</div>
          <div style={styles.avatarCont}>
            <img style={styles.avatar} src={require('./Background.svg')} alt="icon" />
          </div>
        </div>
        <div style={styles.data}>
          {firstData} - {lastData}
        </div>
        <Rating rating={rating} />
      </header>
      <div style={styles.inspection}>огляд</div>
      <div style={styles.commentText}>{commentText}</div>
      <div style={styles.buttons}>
        <div style={styles.iconsCont}>
          <img style={styles.icons} src={require('./back.svg')} alt="arrow" />
        </div>
        <div style={styles.iconsCont}>
          <img style={styles.icons} src={require('./heart.svg')} alt="heart" />
        </div>
      </div>
    </Card>
  );
}

export default Comment;
