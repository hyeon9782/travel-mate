import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
const GoogleLoginButton = () => {
  const clientId = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;
  console.log(clientId);

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(res) => {
            console.log(res);
          }}
          onError={() => {
            console.log("Login 실패");
          }}
          useOneTap
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton;
