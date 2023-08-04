/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRef } from "react";
import useScript from "../../hooks/useScript";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";
import jwt_decode from "jwt-decode";
import { setLocalStorage } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { User } from "../../types";

const GoogleLogin = () => {
  const client_id = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;
  const googleSignInButton = useRef(null);
  const setUserData = useSetRecoilState(userState);
  const navigate = useNavigate();

  const handleCallbackResponse = async (res: any) => {
    const userData: User = jwt_decode(res.credential);
    console.log(userData);
    setUserData({ ...userData });
    setLocalStorage("user", userData);
    navigate("/");
  };

  useScript("https://accounts.google.com/gsi/client", () => {
    //@ts-ignore
    google.accounts.id.initialize({
      client_id,
      callback: handleCallbackResponse,
    });

    // 사용자가 로그인되어 있는지 확인합니다.
    //@ts-ignore
    google.accounts.id.prompt();

    //@ts-ignore
    google.accounts.id.renderButton(googleSignInButton.current, {
      width: "250",
      type: "icon",
      shape: "circle",
    });
  });

  return <div id="google-login-api" ref={googleSignInButton} />;
};

export default GoogleLogin;
