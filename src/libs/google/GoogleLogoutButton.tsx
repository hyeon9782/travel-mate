import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";
import { removeLocalStorage } from "../../utils/storage";

const GoogleLogoutButton = () => {
  const setUser = useSetRecoilState(userState);
  const handleClick = () => {
    setUser({});
    removeLocalStorage("user");
  };
  return <button onClick={() => handleClick()}>로그아웃</button>;
};

export default GoogleLogoutButton;
