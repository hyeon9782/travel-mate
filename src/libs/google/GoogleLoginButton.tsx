import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";
import { setLocalStorage } from "../../utils/storage";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const clientId = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={(res) => {
          console.log(res);
          const userObject = jwt_decode(res.credential);
          console.log(userObject);
          setUser(userObject);
          setLocalStorage("user", userObject);
          navigate("/");
        }}
        onFailure={(err) => {
          console.log(err);
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
