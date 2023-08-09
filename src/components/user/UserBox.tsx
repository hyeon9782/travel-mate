import styled from "styled-components";
import { User } from "../../types";

type Props = {
  user?: User;
  user_name?: string;
  size?: string;
};

const UserBox = ({ user, user_name, size = "small" }: Props) => {
  return (
    <UserBoxBlock size={size}>
      <div className="image_box">
        {user && <img src={user.picture} alt="" />}
      </div>
      <div className="name_box">{user_name}</div>
    </UserBoxBlock>
  );
};

const UserBoxBlock = styled.article<{ size?: string }>`
  display: flex;
  align-items: center;
  font-size: ${(props) => (props.size === "small" ? "0.9rem" : "1.1rem")};

  .image_box {
    border-radius: 50%;
    background-color: lightgray;
    width: ${(props) => (props.size === "small" ? "20px" : "30px")};
    height: ${(props) => (props.size === "small" ? "20px" : "30px")};
  }

  .name_box {
    font-weight: bold;
    padding-left: 7px;
  }
`;

export default UserBox;
