import UsersAPI from '../../services/UsersAPI';
import { errorShow } from './Error';
import { startLoad, stopLoad } from './System';

export const updateProfile = data => dispatch => {
  dispatch(startLoad());

  UsersAPI.updateProfile(data)
    .then(res => {})
    .catch(err => errorShow(err.response.data)(dispatch))
    .finally(() => dispatch(stopLoad()));
};

export const getAllUsers = () => dispatch => {
  dispatch(startLoad());

  UsersAPI.getAllUsers()
    .then(res => {})
    .catch(err => errorShow(err.response.data)(dispatch))
    .finally(() => dispatch(stopLoad()));
};
