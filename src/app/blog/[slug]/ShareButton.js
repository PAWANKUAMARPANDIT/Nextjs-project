"use client";

import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaShare } from "react-icons/fa";

const ShareButton = ({ blog }) => {
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);

  const handleShare = (platform) => {
    const shareUrl = window.location.href;
    switch (platform) {
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(shareUrl)}`, "_blank");
        break;
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank");
        break;
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
        className="p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        <FaShare />
      </button>

      {isShareMenuOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 flex flex-col gap-2">
          <button
            onClick={() => handleShare("twitter")}
            className="p-2 text-blue-400 hover:opacity-80 transition-opacity"
          >
            <FaTwitter />
          </button>
          <button
            onClick={() => handleShare("facebook")}
            className="p-2 text-blue-600 hover:opacity-80 transition-opacity"
          >
            <FaFacebook />
          </button>
          <button
            onClick={() => handleShare("linkedin")}
            className="p-2 text-blue-700 hover:opacity-80 transition-opacity"
          >
            <FaLinkedin />
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
