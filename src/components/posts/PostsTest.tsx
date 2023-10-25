// import { useInfiniteQuery } from "@tanstack/react-query";
// import { fetchPostsAPI } from "../../api/post";
// import PostItem from "./PostItem";

// const PostsTest = () => {
//   const {
//     data,
//     error,
//     fetchNextPage,
//     hasNextPage,
//     isFetching,
//     isFetchingNextPage,
//     status,
//   } = useInfiniteQuery({
//     queryKey: ["posts"],
//     queryFn: ({ pageParam = 1 }) => fetchPostsAPI(pageParam),
//     getNextPageParam: (lastPage, pages) => {
//       return undefined;
//     },
//   });
//   return status === "loading" ? (
//     <p>Loading...</p>
//   ) : status === "error" ? (
//     <p>Error: {error.message}</p>
//   ) : (
//     <>
//       {data?.pages.map((group, i) => (
//         <div>
//           {group.posts.map((post: any) => (
//             <PostItem key={i} post={post} />
//           ))}
//         </div>
//       ))}
//       <div>
//         <button
//           onClick={() => fetchNextPage()}
//           disabled={!hasNextPage || isFetchingNextPage}
//         >
//           {isFetchingNextPage
//             ? "Loading more..."
//             : hasNextPage
//             ? "Load More"
//             : "Nothing more to load"}
//         </button>
//       </div>
//       <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
//     </>
//   );
// };

// export default PostsTest;
