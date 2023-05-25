import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '60px',
      }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/abc">Abc</NavLink>
    </nav>
  );
};
