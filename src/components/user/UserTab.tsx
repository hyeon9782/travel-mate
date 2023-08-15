import styled from "styled-components";

const USER_TAB = ["일정", "게시글", "장소"];

const UserTab = () => {
  return (
    <UserTabBlock>
      {USER_TAB.map((tab) => (
        <div>{tab}</div>
      ))}
    </UserTabBlock>
  );
};

const UserTabBlock = styled.div`
  display: flex;
`;

export default UserTab;
