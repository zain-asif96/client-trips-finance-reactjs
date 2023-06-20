import React, { useState } from 'react';
import { useScrollBlock } from '../../../../useBlockScroll/useScrollBlock';
import RightNav from '../RightNav/RightNav';
import { StyledBurger } from './BurgerStyle';

const Burger: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  if (!open) allowScroll();
  else blockScroll();

  return (
    <>
      <StyledBurger
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
