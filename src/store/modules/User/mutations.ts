import { IUser } from './types';

export default {
  setDarkMode(state: IUser, payload: boolean) {
    state.dark = payload;
  },
};
