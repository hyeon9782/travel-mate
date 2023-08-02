import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = {
  content: string;
  setContent: any;
};
const AppEditor = ({ content, setContent }: Props) => {
  return (
    <div style={{ height: "400px" }}>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default AppEditor;
