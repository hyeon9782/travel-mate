import Comment from "./Comment";
type Props = {
  list: [];
};
const Comments = ({ list }: Props) => {
  return (
    <div>
      {list.map((item) => (
        <Comment key={item.id} />
      ))}
    </div>
  );
};

export default Comments;
