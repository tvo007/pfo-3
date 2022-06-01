import React, {useContext} from 'react';
import NavContext from '../../lib/NavContext';
import BurgerButton from './BurgerButton';
import DrawerNav from './DrawerNav';
import {motion, AnimatePresence} from 'framer-motion';
import {useIsMedium} from '../../lib/hooks';
const FloatingNav = () => {
  const {isVisible, isDrawerOpen, setIsDrawerOpen} = useContext (NavContext);

  const isMedium = useIsMedium ();

  const burgerHandler = () => {
    setIsDrawerOpen (true);
  };

  //refactor to navcontext
  const closeDrawerHandler = () => {
    setIsDrawerOpen (false);
  };

  const variants = isMedium
    ? {
        visible: {opacity: 1, visibility: 'visible'},
        hidden: {opacity: 0, visibility: 'hidden'},
      }
    : {
        visible: {opacity: 1, visibility: 'visible'},
        hidden: {opacity: 1, visibility: 'visible'},
      };

  return (
    <div className="sticky">
      <AnimatePresence>
        <div className={'flex justify-end'}>
          {!isVisible &&
            isMedium &&
            <motion.div
              key="burger"
              initial={'hidden'}
              variants={variants}
              animate={'visible'}
              exit={'hidden'}
            >
              <BurgerButton handleClick={burgerHandler} />
            </motion.div>}

          {!isMedium &&
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
              <BurgerButton handleClick={burgerHandler} />
            </motion.div>}
        </div>

      </AnimatePresence>
      <DrawerNav
        isDrawerOpen={isDrawerOpen}
        closeDrawerHandler={closeDrawerHandler}
      />
    </div>
  );
};

export default FloatingNav;
