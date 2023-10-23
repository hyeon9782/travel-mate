import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = {
  content: string;
  setContent: any;
};
const AppEditor = ({ content, setContent }: Props) => {
  return (
    <ReactQuill
      theme="snow"
      value={content}
      onChange={setContent}
      style={{ height: "300px" }}
    />
  );
};

export default AppEditor;
