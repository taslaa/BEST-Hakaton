import React, { useContext,useEffect } from 'react';
import CurrentThemeContext from './../../utils/theme/CurrentTheme';
import CurrentUserContext from './../../utils/users/CurrentUserContext';
function CurrentThemeDisplayInfo() {
   const [theme, setTheme] = useContext(CurrentThemeContext);
   const currentUserObject = useContext(CurrentUserContext);
   useEffect(()=>{
      console.log("Hej evo me u current theme display info komponenti");
   });

   useEffect(()=>{
      console.log("Hej dobrodosao u konzolu:" + currentUserObject.firstName);
  },[currentUserObject.firstName]);
   return <div>
      <h1>{theme.currentTheme}</h1>
      <button onClick={(e) => {
         setTheme({
            currentTheme: 'dark'
         })
      }}>Promijeni temu</button>
   </div>
}
export default CurrentThemeDisplayInfo;