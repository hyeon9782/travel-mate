import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../../store/userState";

const Profile = () => {
  const user = useRecoilValue(userState);
  return (
    <ProfileBlock>
      <img src={user.picture} alt="profile" />
    </ProfileBlock>
  );
};

const ProfileBlock = styled.div`
  border-radius: 50%;
  border: 1px solid black;
`;

export default Profile;
