import { Component, ElementType, ErrorInfo, ReactNode } from "react";

//에러페이지로 보여줄 fallback과 정상적으로 작동할때 보여줄 children을 가진다.
interface Props {
  fallback: ElementType;
  children?: ReactNode;
}

//에러상태를 구분하고, 에러를 핸들링하기위한 state의 interface이다.
interface State {
  hasError: boolean;
  error: Error | null;
}

//에러를 가지지 않은 초기상태이다.
const initialState: State = {
  hasError: false,
  error: null,
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  //error를 매개변수로 받고 갱신될 state 값을 반환한다. getDerivedStateFromError는 렌더링 결과로 수집한 내용으로 Virtual DOM을 생성하고
  //이전 Virtual DOM과 비교하는 단계인 렌더 단계에 작동한다.
  //내부에 사이드이펙트를 발생시킬 작업을 해서는 안된다.
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  //componentDidCatch는 Virtual DOM을 이용해 계산된 모든 변경사항 실제 DOM에 적용하는 단계인 커밋 단계에서 호출되어 실행된다.
  //따라서 이 메서드 내부에는 side effects가 발생해도 된다. 따라서 에러 정보에 대한 로그를 남길 때, 주로 사용된다.
  //에러 정보를 기록할 때 주로 사용된다.
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error);
    console.log("errorInfo", errorInfo);
  }

  public render() {
    const { hasError, error } = this.state;
    const { children } = this.props;
    if (error?.message === "Request failed with status code 401") {
      return <div>에러입니다.</div>;
    } else if (hasError) {
      return <this.props.fallback />;
    }
    return children;
  }
}

export default ErrorBoundary;
