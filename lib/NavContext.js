import {createContext, useState} from 'react';

//global state listener for fancy nav effects
const NavContext = createContext ({
  isVisible: false,
});

export const NavProvider = ({children}) => {
  const [isVisible, setIsVisible] = useState (false);
 

  //todo: put a useEffect in AboutSection, that fires setIsVisible when intersection ref changes

  const context = {
    isVisible,
    setIsVisible,
  };

  return (
    <NavContext.Provider value={context}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
