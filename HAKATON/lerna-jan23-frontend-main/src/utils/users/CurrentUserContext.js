import { createContext } from 'react';

const CurrentUserContext = createContext({
  firstName: 'N/A',
  lastName: 'N/A',
  isLoggedIn: false
});
export default CurrentUserContext;