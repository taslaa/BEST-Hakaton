import React, {createContext} from 'react';

const CurrentThemeContext = createContext({
        currentTheme:'light'
});

export default CurrentThemeContext;