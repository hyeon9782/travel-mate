import { useNavigate } from "react-router-dom";
import PrevStep from "../components/plan/PrevStep";
import PostForm from "../components/posts/PostForm";
import { Container } from "../components/layout/Container";

const PostNewPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <PrevStep onPrev={() => navigate(-1)} />
      <PostForm />
    </Container>
  );
};

export default PostNewPage;
