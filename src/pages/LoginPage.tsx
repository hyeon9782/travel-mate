import styled from "styled-components";
import GoogleLoginButton from "../libs/google/GoogleLoginButton";
import { useNavigate } from "react-router-dom";
import GoogleLogoutButton from "../libs/google/GoogleLogoutButton";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <LoginPageBlock>
      <ButtonBox>
        <div className="back" onClick={() => navigate(-1)}>
          뒤로가기
        </div>
        <div className="preview">둘러보기</div>
      </ButtonBox>
      <ContentBox>
        <ImageBox>
          <img src="/travel-mate-logo.png" alt="" width={300} height={300} />
        </ImageBox>
        <TextBox>
          트레블 메이트와 함께
          <br /> 여행을 떠나보세요!
        </TextBox>
        <LoginBox>
          <GoogleLogoutButton />
          <GoogleLoginButton />
        </LoginBox>
      </ContentBox>
    </LoginPageBlock>
  );
};

const LoginPageBlock = styled.section`
  height: 100%;
  text-align: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  color: gray;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const ContentBox = styled.div`
  height: calc(100% - 37.59px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 30px;
  padding: 10px 0;
`;

const ImageBox = styled.div``;

const LoginBox = styled.div`
  padding-top: 60px;
`;

export default LoginPage;