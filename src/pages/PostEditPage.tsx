import PrevStep from "../components/plan/PrevStep";
import { Container } from "../components/layout/Container";
import PostForm from "../components/posts/PostForm";
import { useNavigate } from "react-router-dom";

const PostEditPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <PrevStep onPrev={() => navigate(-1)} />
      <PostForm />
    </Container>
  );
};

export default PostEditPage;
