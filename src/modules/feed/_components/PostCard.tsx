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
import { CommentOutlined, HeartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reaction } from "../@enums/reaction.enum";

const { Text } = Typography;

export default function PostCard({ post }: { post: PostType }) {
  const [reaction, setReaction] = useState<Reaction | null>(
    post.reactions.userReaction || null
  );
  const [reactionSummary, setReactionSummary] = useState(post.reactions);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(post.comments);
  const [showReactions, setShowReactions] = useState(false);

  const handleDefaultLike = () => {
    if (reaction) {
      setReaction(null);
      setReactionSummary((prev) => {
        const updatedTypeCount = { ...prev.typeCount };
        updatedTypeCount[reaction] = (updatedTypeCount[reaction] || 1) - 1;
        if (updatedTypeCount[reaction] <= 0) delete updatedTypeCount[reaction];

        return {
          ...prev,
          total: prev.total - 1,
          typeCount: updatedTypeCount,
          userReaction: undefined,
        };
      });
    } else {
      const newReaction = Reaction.Like;
      setReaction(newReaction);
      setReactionSummary((prev) => ({
        ...prev,
        total: prev.total + 1,
        typeCount: {
          ...prev.typeCount,
          [newReaction]: (prev.typeCount[newReaction] || 0) + 1,
        },
        userReaction: newReaction,
      }));
    }
  };

  const handleEmojiReact = (emo: Reaction) => {
    const previous = reaction;
    setReaction(emo);
    setReactionSummary((prev) => {
      const updatedTypeCount = { ...prev.typeCount };

      if (previous) {
        updatedTypeCount[previous] = (updatedTypeCount[previous] || 1) - 1;
        if (updatedTypeCount[previous] <= 0) delete updatedTypeCount[previous];
      } else {
        prev.total += 1;
      }

      updatedTypeCount[emo] = (updatedTypeCount[emo] || 0) + 1;

      return {
        total: previous ? prev.total : prev.total + 1,
        typeCount: updatedTypeCount,
        userReaction: emo,
      };
    });
    setShowReactions(false);
  };

  const handleCommentSubmit = () => {
    if (!commentText.trim()) return;
    const newComment = {
      _id: Date.now().toString(),
      user: "You",
      text: commentText,
      createdAt: "Now",
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

        {typeof post.createdBy === "object" && (
          <div className="flex items-center gap-3 mb-3">
            <Avatar src={post.createdBy.avatar} size="large" />
            <div>
              <Text strong>{post.createdBy.username}</Text>
              <div className="text-sm text-gray-500">{post.createdAt}</div>
            </div>
          </div>
        )}

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
              onClick={handleDefaultLike}
            >
              {reaction ? (
                <span className="text-xl">{reaction}</span>
              ) : (
                <HeartOutlined />
              )}{" "}
              {reactionSummary.total}
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
                  {Object.values(Reaction).map((emoji) => (
                    <motion.div
                      key={emoji}
                      whileHover={{ scale: 1.3 }}
                      onClick={() => handleEmojiReact(emoji as Reaction)}
                      className="cursor-pointer text-xl"
                    >
                      {emoji}
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

        {typeof post.comments === "object" && lastComment && !showComments && (
          <div className="mt-3 text-sm text-gray-600">
            {typeof lastComment.user === "string" ? (
              <strong>{lastComment.user}:</strong>
            ) : (
              <strong>{lastComment.user.username}:</strong>
            )}{" "}
            {lastComment.text}
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
                      <strong>
                        {typeof comment.user === "string"
                          ? comment.user
                          : comment.user.username}
                        :
                      </strong>{" "}
                      {comment.text}
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
