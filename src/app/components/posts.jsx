import PostsList from "./postsList";
import Post from "./post";
import query from "query-string";


const Posts = ({match, location}) => {
    const posts=[
        {id:1, label:"post 1"},
        {id:2, label:"post 2"},
        {id:3, label:"post 3"},
      ];
      const search = location.search;
      const postId=match.params.postId;
      console.log(search);
      return <> {postId ? <Post posts={posts} id={postId}/> : <PostsList posts={posts}/>}</>;
};
 
export default Posts;