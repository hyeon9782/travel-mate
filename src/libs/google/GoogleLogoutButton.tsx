import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";
import { removeLocalStorage } from "../../utils/storage";
import styled from "styled-components";

const GoogleLogoutButton = () => {
  const setUserData = useSetRecoilState(userState);
  const handleClick = () => {
    setUserData({});
    removeLocalStorage("user");
  };
  return <LogoutButton onClick={() => handleClick()}>로그아웃</LogoutButton>;
};

const LogoutButton = styled.button`
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  font-weight: bold;
  padding: 10px;
`;

export default GoogleLogoutButton;
