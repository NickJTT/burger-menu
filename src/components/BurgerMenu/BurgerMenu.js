import { useEffect, useRef, useState } from 'react';
import style from './BurgerMenu.module.css';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    ref.current.className = isOpen ? style.burgerMenuOpen : style.burgerMenu;
  }, [isOpen]);

  return <div ref = { ref } onClick = { clickHandler }>
    <span/>
    <span/>
    <span/>
  </div>;
}
