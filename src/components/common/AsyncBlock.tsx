import React, { Suspense } from "react";
import ErrorBoundary from "../error/ErrorBoundary";
type Props = {
  errorPage: () => any;
  loadingPage: () => any;
  children: any;
};
const AsyncBlock = ({ errorPage, loadingPage, children }: Props) => {
  return (
    <ErrorBoundary fallback={errorPage()}>
      <Suspense fallback={loadingPage()}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBlock;
