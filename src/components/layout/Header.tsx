import { Link } from "react-router-dom";
import styled from "styled-components";

const menu = [
  {
    href: "/plan",
    text: "여행일정",
  },
  {
    href: "/login",
    text: "로그인",
  },
];

const Header = () => {
  const path = window.location.pathname;
  console.log(path);
  const shouldHideHeader = path === "/plan";
  return (
    <HeaderBlock className={shouldHideHeader ? "none" : "block"}>
      <Logo>
        <Link to={"/"}>Travel Mate</Link>
      </Logo>
      <Nav>
        {menu.map((item, index) => (
          <li key={index}>
            <Link to={item.href}>{item.text}</Link>
          </li>
        ))}
      </Nav>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 2px solid lightgray;
  font-weight: bold;
  &.none {
    display: none;
  }

  &.block {
    display: flex;
  }
`;

const Logo = styled.div`
  font-size: 1.2rem;
`;

const Nav = styled.ul`
  display: flex;
  font-size: 1rem;

  li {
    padding-left: 5px;
  }
`;

export default Header;
