import * as HEADER from '../config/Header';

export const headerOpen = () => ({
  type: HEADER.HEADER_OPEN
});

export const headerClose = () => ({
  type: HEADER.HEADER_CLOSE
});
