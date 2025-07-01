"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import PostCard from "./PostCard";

export default function PostPreviewDialog({
  open,
  onClose,
  post,
}: {
  open: boolean;
  onClose: () => void;
  post: PostType | null;
}) {
  if (!post) return null;

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/50" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-4 shadow-xl relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <IoIosCloseCircleOutline className="w-6 h-6 text-2xl text-gray-500" />
          </button>
          <PostCard post={post} />
        </DialogPanel>
      </div>
    </Dialog>
  );
}
