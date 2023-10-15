import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MenuIcon, PlusIcon, WriteIcon } from "../common/icons";
import { useEffect, useState } from "react";
import AppPanel from "../common/AppPanel";
import UserContent from "../user/UserContent";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";
import { getLocalStorage } from "../../utils/storage";
import { Container } from "./Container";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const [userData, setUserData] = useRecoilState(userState);

  useEffect(() => {
    if (userData?.email?.length === 0) {
      const userFromLocalStorage = getLocalStorage("user");

      setUserData({ ...userFromLocalStorage });
    }
  }, [userData, setUserData]);

  const isPlanPath = location.pathname === "/";

  if (!isPlanPath) {
    return <></>;
  }

  return (
    <Container>
      <HeaderBlock>
        <Logo>
          <Link to={"/"}>Travel Mate</Link>
        </Logo>
        <IconBox>
          <WriteIcon onClick={() => navigate("/post")} />
          <PlusIcon onClick={() => navigate("/plan")} />
          <MenuIcon onClick={() => setActive(true)} />
        </IconBox>
        {active && (
          <AppPanel handleClick={() => setActive(false)}>
            <UserContent />
          </AppPanel>
        )}
      </HeaderBlock>
    </Container>
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
