import styled from "styled-components";
import { User } from "../../types";

type Props = {
  user: User;
  user_name: string;
};

const UserBox = ({ user, user_name }: Props) => {
  return (
    <UserBoxBlock>
      <div className="image_box">
        {user && <img src={user.picture} alt="" />}
      </div>
      <div className="name_box">{user_name}</div>
    </UserBoxBlock>
  );
};

const UserBoxBlock = styled.article`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  .image_box {
    border-radius: 50%;
    background-color: lightgray;
    width: 20px;
    height: 20px;
  }

  .name_box {
    font-weight: bold;
    padding-left: 7px;
  }
`;

export default UserBox;
