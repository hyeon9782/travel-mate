import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AppEditor = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{ height: "400px" }}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default AppEditor;
