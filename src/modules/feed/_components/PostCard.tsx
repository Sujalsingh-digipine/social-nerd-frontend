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
import { HeartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reaction } from "../@enums/reaction.enum";

const { Text } = Typography;

export default function PostCard({ post }: { post: PostType }) {
  const [reaction, setReaction] = useState<Reaction | null>(
    post.reactions.userReaction || null
  );
  const [reactionSummary, setReactionSummary] = useState(post.reactions);
  const [showAllComments, setShowAllComments] = useState(false);
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

  const visibleComments = showAllComments ? comments : comments.slice(0, 1);

  return (
    <Card className="w-full max-w-4xl mx-auto">
  <div className="flex flex-col md:flex-row gap-6">
    <div className="md:w-1/2 w-full">
      <Carousel dotPosition="bottom" className="rounded-lg overflow-hidden">
        {post.images.map((url, idx) => (
          <Image
            key={idx}
            src={url}
            alt={`post-${idx}`}
            className="w-full h-auto object-cover rounded-lg"
          />
        ))}
      </Carousel>
    </div>

    
    <div className="md:w-1/2 w-full flex flex-col">
      <div className="flex items-center gap-3 mb-2">
        <Avatar
          src={
            typeof post.createdBy === "object"
              ? post.createdBy.avatar
              : post.createdBy
          }
          size="large"
        />
        <div>
          <Text strong>
            {typeof post.createdBy === "object"
              ? post.createdBy.username
              : post.createdBy}
          </Text>
          <div className="text-sm text-gray-500">{post.createdAt}</div>
        </div>
      </div>


      <Text className="block mb-3">{post.caption}</Text>


      <Divider className="my-3" />
      <Space size="large" className="mb-4">
        <div
          className="relative"
          onMouseEnter={() => setShowReactions(true)}
          onMouseLeave={() => setShowReactions(false)}
        >
          <motion.div
            whileTap={{ scale: 1.3 }}
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

        <Text className="cursor-pointer">💬 {comments.length}</Text>
      </Space>

      
      {comments.length > 0 && (
        <div className="mb-3 max-h-40 overflow-y-auto pr-2">
          <List
            dataSource={visibleComments}
            size="small"
            renderItem={(comment) => (
              <List.Item className="px-0 py-1">
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
        </div>
      )}

      
      {comments.length > 1 && (
        <Button
          type="text"
          size="small"
          onClick={() => setShowAllComments(!showAllComments)}
          className="mb-2 self-start"
        >
          {showAllComments
            ? "Show less"
            : `Show all (${comments.length})`}
        </Button>
      )}

      
      <Space.Compact className="w-full mt-auto">
        <Input
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
          onPressEnter={handleCommentSubmit}
        />
        <Button type="primary" onClick={handleCommentSubmit}>
          Post
        </Button>
      </Space.Compact>
    </div>
  </div>
</Card>
  );
}
