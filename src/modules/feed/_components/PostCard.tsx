import {
  Card,
  Avatar,
  Image,
  Typography,
  Input,
  Button,
  List,
  Dropdown,
  Menu,
  Modal,
  Space,
  message,
  Carousel,
} from "antd";
import {
  HeartOutlined,
  MessageOutlined,
  SendOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { Reaction } from "../@enums/reaction.enum";
import { MdOutlineReportProblem } from "react-icons/md";

const { Text } = Typography;

const reactionEmojis = {
  [Reaction.Like]: "👍",
  [Reaction.Love]: "❤️",
  [Reaction.Haha]: "😂",
  [Reaction.Wow]: "😮",
  [Reaction.Sad]: "😢",
  [Reaction.Angry]: "😡",
};

export default function InstagramPost({ post }: { post: PostType }) {
  const [currentReaction, setCurrentReaction] = useState<Reaction | null>(
    post.reactions.userReaction || null
  );
  const [reactionSummary, setReactionSummary] = useState(post.reactions);
  const [saved, setSaved] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(post.comments);
  const [showAllComments, setShowAllComments] = useState(false);
  const [showReactions, setShowReactions] = useState(false);
  const [reportModalVisible, setReportModalVisible] = useState(false);
  const [selectedReportReason, setSelectedReportReason] = useState<
    string | null
  >(null);
  const [reportSubmitting, setReportSubmitting] = useState(false);

  const handleReaction = (reaction: Reaction) => {
    const previousReaction = currentReaction;
    setCurrentReaction(reaction);

    setReactionSummary((prev) => {
      const updatedTypeCount = { ...prev.typeCount };

      if (previousReaction) {
        updatedTypeCount[previousReaction] =
          (updatedTypeCount[previousReaction] || 1) - 1;
        if (updatedTypeCount[previousReaction] <= 0) {
          delete updatedTypeCount[previousReaction];
        }
      }

      updatedTypeCount[reaction] = (updatedTypeCount[reaction] || 0) + 1;

      return {
        total: previousReaction ? prev.total : prev.total + 1,
        typeCount: updatedTypeCount,
        userReaction: reaction,
      };
    });
    setShowReactions(false);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleCommentSubmit = () => {
    if (!commentText.trim()) return;
    const newComment: CommentType = {
      _id: Date.now().toString(),
      user: "current_user",
      text: commentText,
      createdAt: "Just now",
    };
    setComments([...comments, newComment]);
    setCommentText("");
  };

  const reportOptions = [
    { label: "It's spam", icon: "🚫", key: "spam" },
    { label: "Nudity or sexual activity", icon: "🔞", key: "nudity" },
    { label: "Hate speech or symbols", icon: "💢", key: "hate" },
    {
      label: "Violence or dangerous organizations",
      icon: "🔪",
      key: "violence",
    },
    { label: "Bullying or harassment", icon: "😠", key: "harassment" },
    { label: "False information", icon: "❌", key: "false" },
    { label: "Something else", icon: "❓", key: "other" },
  ];

  const getUserName = (user: UserType | string) => {
    return typeof user === "string" ? user : user.username;
  };

  const getUserAvatar = (user: UserType | string) => {
    return typeof user === "string" ? "/default-avatar.jpg" : user.avatar;
  };

  const handleReportSubmit = () => {
    if (!selectedReportReason) {
      message.warning("Please select a reason for reporting");
      return;
    }

    setReportSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log(
        "Report submitted for post:",
        post._id,
        "Reason:",
        selectedReportReason
      );
      setReportSubmitting(false);
      setReportModalVisible(false);
      setSelectedReportReason(null);
      message.success("Report submitted successfully");
    }, 1000);
  };
  return (
    <Card className="max-w-lg w-full mx-auto mb-6 border border-gray-200 rounded-none bg-white">
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <div className="flex items-center space-x-3 gap-2">
          <Avatar
            size={32}
            src={getUserAvatar(post.createdBy)}
            className="border border-gray-200"
          />
          <Text strong className="text-sm">
            {getUserName(post.createdBy)}
          </Text>
        </div>
        <Dropdown
          overlay={
            <Menu className="rounded-md shadow-lg">
              <Menu.Item
                key="report"
                icon={<MdOutlineReportProblem className="text-red-500" />}
                onClick={() => setReportModalVisible(true)}
                className="flex items-center gap-2"
              >
                Report
              </Menu.Item>
            </Menu>
          }
          trigger={["click"]}
          placement="bottomRight"
        >
          <EllipsisOutlined className="text-xl cursor-pointer hover:text-gray-600" />
        </Dropdown>
      </div>

      <Carousel
        dots
        className="w-full aspect-square bg-black"
        autoplay={false}
        arrows={false}
      >
        {post.images.map((img, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-full bg-black"
          >
            <Image
              src={img}
              alt={`Post image ${index + 1}`}
              className="max-h-full max-w-full object-contain"
              preview={false}
            />
          </div>
        ))}
      </Carousel>

      <div className="p-3">
        <div className="flex justify-between mb-2">
          <div className="flex space-x-4">
            <div
              className="relative"
              onMouseEnter={() => setShowReactions(true)}
              onMouseLeave={() => setShowReactions(false)}
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  currentReaction
                    ? handleReaction(currentReaction)
                    : handleReaction(Reaction.Like)
                }
                className="cursor-pointer"
              >
                {currentReaction ? (
                  <span className="text-2xl">
                    {reactionEmojis[currentReaction]}
                  </span>
                ) : (
                  <HeartOutlined className="text-2xl hover:text-gray-500" />
                )}
              </motion.div>

              <AnimatePresence>
                {showReactions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-8 left-0 flex gap-2 bg-white p-2 rounded-full shadow-lg z-10 border border-gray-100"
                  >
                    {Object.entries(reactionEmojis).map(([reaction, emoji]) => (
                      <motion.div
                        key={reaction}
                        whileHover={{ scale: 1.3 }}
                        onClick={() => handleReaction(reaction as Reaction)}
                        className="cursor-pointer text-2xl hover:scale-125 transition-transform"
                      >
                        {emoji}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <MessageOutlined className="text-2xl cursor-pointer hover:text-gray-500" />
            <SendOutlined className="text-2xl cursor-pointer hover:text-gray-500" />
          </div>
          <div onClick={handleSave} className="cursor-pointer">
            {saved ? (
              <FaBookmark className="text-2xl" />
            ) : (
              <FaRegBookmark className="text-2xl hover:text-gray-500" />
            )}
          </div>
        </div>

        {reactionSummary.total > 0 && (
          <Text strong className="text-sm block mb-1">
            {reactionSummary.total.toLocaleString()} likes
          </Text>
        )}

        <div className="mb-1">
          <Text strong className="text-sm mr-1">
            {getUserName(post.createdBy)}
          </Text>
          <Text className="text-sm">{post.caption}</Text>
        </div>

        {comments.length > 0 && (
          <>
            {comments.length > 2 && !showAllComments && (
              <button
                onClick={() => setShowAllComments(true)}
                className="text-gray-500 text-sm mb-1 hover:text-gray-700"
              >
                View all {comments.length} comments
              </button>
            )}
            <List
              dataSource={showAllComments ? comments : comments.slice(0, 2)}
              renderItem={(comment) => (
                <List.Item className="!p-0 !pl-1">
                  <div className="flex items-start">
                    <Text strong className="text-sm mr-1">
                      {getUserName(comment.user)}
                    </Text>
                    <Text className="text-sm">{comment.text}</Text>
                  </div>
                </List.Item>
              )}
              className="max-h-40 overflow-y-auto"
            />
          </>
        )}

        <Text type="secondary" className="text-xs block mt-1">
          {post.createdAt}
        </Text>
      </div>

      <div className="border-t border-gray-200 p-3">
        <Space.Compact className="w-full">
          <Input
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
            bordered={false}
            className="!px-0 !py-1"
            onPressEnter={handleCommentSubmit}
          />
          <Button
            type="primary"
            disabled={!commentText.trim()}
            onClick={handleCommentSubmit}
          >
            Post
          </Button>
        </Space.Compact>
      </div>

      <Modal
        title={
          <div className="flex items-center gap-2">
            <MdOutlineReportProblem className="text-red-500 text-xl" />
            <span>Report Post</span>
          </div>
        }
        open={reportModalVisible}
        onCancel={() => setReportModalVisible(false)}
        footer={[
          <Button
            key="cancel"
            onClick={() => {
              setReportModalVisible(false);
              setSelectedReportReason(null);
            }}
            disabled={reportSubmitting}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            danger
            onClick={handleReportSubmit}
            loading={reportSubmitting}
            disabled={!selectedReportReason || reportSubmitting}
            className="font-medium"
          >
            Submit Report
          </Button>,
        ]}
        centered
        width={400}
      >
        <div className="space-y-3">
          <Text className="block mb-2 text-gray-600">
            Please select the reason for reporting this post. Your report is
            anonymous.
          </Text>
          <div className="max-h-[300px] overflow-y-auto pr-2">
            {reportOptions.map((option) => (
              <div
                key={option.key}
                className={`p-3 rounded-lg mb-2 cursor-pointer transition-colors ${
                  selectedReportReason === option.key
                    ? "bg-red-50 border border-red-100"
                    : "hover:bg-gray-50 border border-transparent"
                }`}
                onClick={() => setSelectedReportReason(option.key)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{option.icon}</span>
                  <div>
                    <div className="font-medium">{option.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </Card>
  );
}
