import {
  Card,
  Avatar,
  Image,
  Space,
  Typography,
  Divider,
  Input,
  Button,
  List,
  Carousel,
} from "antd";
import { CommentOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { PostType } from "../@types/post";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const { Text } = Typography;

export default function PostCard({ post }: { post: PostType }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(post.comments);
  const [reaction, setReaction] = useState<string | null>(null);
  const [showReactions, setShowReactions] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };
  const reactions = ["👍", "❤️", "😂", "😮", "😢", "😡"];
  const handleCommentSubmit = () => {
    if (!commentText.trim()) return;

    const newComment = {
      id: Date.now().toString(),
      user: "You",
      text: commentText,
    };
    setComments((prev) => [...prev, newComment]);
    setCommentText("");
  };

  const lastComment = comments[comments.length - 1];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="w-full max-w-xl rounded-2xl shadow-md border border-gray-200">
        <Carousel
          dotPosition="bottom"
          className="rounded-lg overflow-hidden mb-4"
        >
          {post.images.map((url, idx) => (
            <Image
              key={idx}
              src={url}
              alt={`post-${idx}`}
              className="h-96 w-full object-cover"
              preview={false}
            />
          ))}
        </Carousel>
        <div className="flex items-center gap-3 mb-3">
          <Avatar src={post.createdBy.avatar} size="large" />
          <div>
            <Text strong>{post.createdBy.name}</Text>
            <div className="text-sm text-gray-500">{post.createdAt}</div>
          </div>
        </div>
        <Text>{post.caption}</Text>

        <Divider className="my-3" />

        <Space size="large" className="mt-4">
          <div
            className="relative"
            onMouseEnter={() => setShowReactions(true)}
            onMouseLeave={() => setShowReactions(false)}
          >
            <motion.div
              whileTap={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer text-lg"
              onClick={handleLike}
            >
              {reaction ? (
                <span className="text-xl">{reaction}</span>
              ) : liked ? (
                <HeartFilled style={{ color: "red" }} />
              ) : (
                <HeartOutlined />
              )}{" "}
              {likes}
            </motion.div>

            <AnimatePresence>
              {showReactions && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-8 left-0 flex gap-2 bg-white p-2 rounded-full shadow-lg z-10"
                >
                  {reactions.map((emo) => (
                    <motion.div
                      key={emo}
                      whileHover={{ scale: 1.3 }}
                      onClick={() => {
                        setReaction(emo);
                        if (!liked) setLikes((prev) => prev + 1);
                        setLiked(true);
                        setShowReactions(false);
                      }}
                      className="cursor-pointer text-xl"
                    >
                      {emo}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Text
            onClick={() => setShowComments((prev) => !prev)}
            className="cursor-pointer"
          >
            <CommentOutlined /> {comments.length}
          </Text>
        </Space>

        {lastComment && !showComments && (
          <div className="mt-3 text-sm text-gray-600">
            <strong>{lastComment.user}:</strong> {lastComment.text}
          </div>
        )}

        <AnimatePresence>
          {showComments && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <List
                dataSource={comments}
                size="small"
                bordered={false}
                renderItem={(comment) => (
                  <List.Item className="px-0">
                    <Text>
                      <strong>{comment.user}:</strong> {comment.text}
                    </Text>
                  </List.Item>
                )}
              />
              <Space.Compact className="mt-3 w-full" block>
                <Input
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Add a comment..."
                  className="rounded-l-lg"
                />
                <Button type="primary" onClick={handleCommentSubmit}>
                  Post
                </Button>
              </Space.Compact>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}
