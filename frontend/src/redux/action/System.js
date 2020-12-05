import * as SYSTEM from '../config/System';

export const startLoad = () => ({
  type: SYSTEM.START_LOAD
});

export const startPageLoad = () => ({
  type: SYSTEM.START_PAGE_LOAD
});

export const stopLoad = () => ({
  type: SYSTEM.STOP_LOAD
});

export const stopPageLoad = () => ({
  type: SYSTEM.STOP_PAGE_LOAD
});
