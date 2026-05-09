"use client";
import Link from "next/link";
import { useState } from "react";
export default function CreatePostPage() {
 
    return (
      <div className="min-h-screen bg-[#dfe3ee] flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="bg-[#3b5998] text-white px-4 py-3 rounded-t-md shadow-md border border-[#2d4373]">
            <h1 className="text-lg font-bold tracking-wide">Create New Post</h1>
          </div>

          {/* Main Card */}
          <div className="bg-[#f7f7f7] border border-[#b7b7b7] shadow-lg rounded-b-md overflow-hidden">
            {/* User Info */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-300 bg-white">
              <div className="w-14 h-14 rounded bg-[#c4cde0] flex items-center justify-center text-[#3b5998] font-bold text-xl border border-[#8b9dc3]">
                A
              </div>

              <div>
                <h2 className="font-bold text-[#3b5998] text-sm">
                  Ahmed Gamal
                </h2>
                <p className="text-xs text-gray-500">Posting publicly</p>
              </div>
            </div>

            {/* Form */}
            <div className="p-5 bg-[#f7f7f7] space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Post Title
                </label>
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  className="w-full border border-gray-400 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#8b9dc3]"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Content
                </label>
                <textarea
                  rows={7}
                  placeholder="Write your post here..."
                  className="w-full border border-gray-400 rounded px-3 py-2 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-[#8b9dc3]"
                />
              </div>

              {/* Upload */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Upload Image
                </label>

                <label className="inline-flex items-center gap-2 bg-[#eceff5] border border-[#8b9dc3] px-4 py-2 rounded cursor-pointer hover:bg-[#dfe3ee] transition">
                  <span className="text-sm text-[#3b5998] font-semibold">
                    Choose File
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </div>
              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-3 border-t border-gray-300">
                <Link
                  href="/"
                  className="px-5 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded border border-gray-500 text-sm font-semibold transition"
                >
                  Cancel
                </Link>

                <button className="px-5 py-2 bg-[#4267b2] hover:bg-[#365899] text-white rounded border border-[#2d4373] text-sm font-semibold shadow-sm transition">
                  Publish Post
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-600 mt-4">
            © 2026 POST_APP — Inspired by Salem development{" "}
          </p>
        </div>
      </div>
    );
  };
