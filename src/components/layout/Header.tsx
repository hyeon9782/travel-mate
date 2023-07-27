import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MenuIcon, PlusIcon } from "../common/icons";
import { useState } from "react";
import AppPanel from "../common/AppPanel";
import UserContent from "../user/UserContent";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const isPlanPath =
    location.pathname === "/plan" || location.pathname === "/login";
  if (isPlanPath) {
    return null;
  }
  return (
    <HeaderBlock>
      <Logo>
        <Link to={"/"}>Travel Mate</Link>
      </Logo>
      <IconBox>
        <PlusIcon onClick={() => navigate("/plan")} />
        <MenuIcon onClick={() => setActive(true)} />
      </IconBox>
      {active && (
        <AppPanel handleClick={() => setActive(false)}>
          <UserContent />
        </AppPanel>
      )}
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
`;

const Logo = styled.div`
  font-size: 1.2rem;
`;

const IconBox = styled.div`
  display: flex;
  gap: 20px;
  font-size: 1.3rem;
`;

export default Header;
