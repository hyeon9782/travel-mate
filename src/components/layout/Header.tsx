import { Link } from "react-router-dom";
import styled from "styled-components";

const menu = [
  {
    href: "/plan",
    text: "코스 등록",
  },
  {
    href: "/login",
    text: "로그인",
  },
];

const Header = () => {
  return (
    <HeaderBlock>
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
  padding: 0px 30px;
  border-bottom: 2px solid lightgray;
  height: 50px;
  font-weight: bold;
`;

const Logo = styled.div`
  font-size: 2rem;
`;

const Nav = styled.ul`
  display: flex;
  font-size: 1.2rem;

  li {
    padding-left: 5px;
  }
`;

export default Header;
