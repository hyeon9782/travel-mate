import styled from "styled-components";

const USER_TAB = ["일정", "게시글", "장소"];

const UserTab = () => {
  return (
    <UserTabBlock>
      {USER_TAB.map((tab, index) => (
        <div key={index} className="user-tab-item">
          {tab}
        </div>
      ))}
    </UserTabBlock>
  );
};

const UserTabBlock = styled.div`
  display: flex;
  .user-tab-item: {
    background: red;
  }
`;

export default UserTab;
