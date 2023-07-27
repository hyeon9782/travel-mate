import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../../store/userState";

const Profile = () => {
  const user = useRecoilValue(userState);
  return (
    <ProfileBlock>
      <ImageBox image={user.picture}></ImageBox>
      <NameBox>{user.name}</NameBox>
    </ProfileBlock>
  );
};

const ProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageBox = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.image});
  margin: 10px;
`;

const NameBox = styled.div``;

export default Profile;
