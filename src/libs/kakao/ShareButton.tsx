import { useEffect } from "react";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  buttonTitle: string;
  url: string;
};

const { Kakao }: any = window;

const KAKAO_API_KEY = import.meta.env.VITE_APP_KAKAO_API_KEY;
const ShareButton = ({
  title,
  description,
  imageUrl,
  buttonTitle,
  url,
}: Props) => {
  console.log("개발 환경이니? : " + import.meta.env.DEV);

  console.log("url 입니다 : " + url);

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(KAKAO_API_KEY);
    console.log(Kakao.isInitialized());
  }, []);

  function shareMessage() {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title,
        description,
        imageUrl,
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: buttonTitle,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  }

  return (
    <div>
      <button onClick={() => shareMessage()}>카카오톡 공유하기</button>
    </div>
  );
};

export default ShareButton;
