import React from "react";
import AppPanel from "../common/AppPanel";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UserPanel = (props) => {
  return (
    <UserPanelBlock>
      <AppPanel {...props}>
        <LoginBox>
          <Link to={"/login"}>로그인</Link>
        </LoginBox>
      </AppPanel>
    </UserPanelBlock>
  );
};

const UserPanelBlock = styled.div``;

const LoginBox = styled.div`
  font-size: 1.5rem;
`;

export default UserPanel;
