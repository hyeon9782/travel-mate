import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { fetchPostsAPI } from "../../api/post";
import PostItem from "./PostItem";

const PostsTest = () => {
  //   const fetchPosts = async ({ pageParam = 1, category = "전체" }) => {
  //     const res = await fetch(`/api/post?page=${pageParam}&category=${category}`);
  //     return await res.json();
  //   };

  /* 멘토 리스트 조회 */
  const fetchPostList = async ({ pageParam = 1 }) => {
    const res = await fetchPostsAPI({ ...params, page: pageParam });

    if (res.status === 200) {
      const { count, mentors } = res.data.result;
      const isLast = count / params.pageSize <= pageParam;

      return {
        count: count,
        items: mentors,
        nextPage: isLast ? undefined : pageParam + 1,
      };
    }
  };

  const {
    data: posts,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["posts", { category: "전체" }], fetchPostList, {
    staleTime: 60 * 1000,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      {posts.pages[0].data?.map((post, i) => (
        <PostItem key={i} post={post} />
      ))}
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

export default PostsTest;
