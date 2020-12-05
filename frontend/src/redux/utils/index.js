import { createActions as createActionsNative } from 'redux-actions';

export const createAction = (actionName, { async = false, ...options }) => {
  let actions = {};

  if (async) {
    actions = createActionsNative(
      {
        [actionName]: {
          REQUEST: action => action,
          SUCCESS: action => action,
          FAIL: action => action
        }
      },
      options
    );
  } else {
    actions = createActionsNative(
      {
        [actionName]: action => action
      },
      options
    );
  }

  return actions;
};

export const createActions = ({ actions = [], async = [] }, options) => {
  const _actions = {};
  const _asyncActions = {};

  actions.forEach(action => {
    _actions[action] = act => act;
  });

  async.forEach(action => {
    _asyncActions[action] = {
      REQUEST: act => act,
      SUCCESS: act => act,
      FAIL: act => act
    };
  });

  return {
    actions: createActionsNative({ ..._actions }, options),
    async: createActionsNative({ ..._asyncActions }, options)
  };
};
