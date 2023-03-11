import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: FC = () => {
  const naviagate = useNavigate();
  const onAboutClick = () => {
    naviagate("/about");
  };

  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
