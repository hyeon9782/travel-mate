import styled from "styled-components";
import { useState } from "react";

type Props = {
  tags: string[];
  setTags: any;
};
const TagInput = ({ tags, setTags }: Props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (value.trim() !== "") {
      setTags((prevTags) => [...prevTags, value]);
      setValue("");
    }
  };

  const handleClick = (tag: string) => {
    setTags((prevTags) => prevTags.filter((prevTag) => prevTag !== tag));
  };

  return (
    <TagInputBlock>
      <form onSubmit={(e) => handleSubmit(e)} style={{ width: "100%" }}>
        <CreateInput
          placeholder="태그를 입력하세요."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <TagsBox>
        {tags.map((tag, index) => (
          <TagBox key={index} onClick={() => handleClick(tag)}>
            {tag}
          </TagBox>
        ))}
      </TagsBox>
    </TagInputBlock>
  );
};

const TagInputBlock = styled.div``;

const TagsBox = styled.div`
  display: flex;
  min-height: 38px;
  flex-wrap: wrap;
  gap: 5px;
  padding: 5px 0;
  box-sizing: border-box;
`;

const TagBox = styled.div`
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 5px 10px;
`;

const CreateInput = styled.input`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-bottom: 1px solid lightgray;
`;

export default TagInput;