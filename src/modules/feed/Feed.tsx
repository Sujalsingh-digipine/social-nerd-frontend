import { useEffect, useState } from "react";
import { Spin } from "antd";
import PostCard from "./_components/PostCard";
import { fetchPosts } from "./@http/api";
import { PostType } from "./@types/post";

export default function HomeFeed() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col items-center p-4 gap-8">
      {loading ? (
        <Spin size="large" />
      ) : (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      )}
    </div>
  );
}
