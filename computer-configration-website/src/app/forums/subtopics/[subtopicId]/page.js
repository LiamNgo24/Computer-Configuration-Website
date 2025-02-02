"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "./subtopic.module.css";

export default function SubtopicPage() {
  const params = useParams();
  const { subtopicId } = params;

  // Example data structure for posts under a subtopic
  const subtopics = {
    "part-list-options": {
      title: "Part List Options Wanted",
      posts: [
        { id: "1", title: "Best GPU for gaming" },
        { id: "2", title: "Affordable CPU suggestions" },
        { id: "3", title: "Choosing the right PSU" },
      ],
    },
    "build-a-pc": {
      title: "Build a PC for Me",
      posts: [
        { id: "4", title: "Budget PC under $500" },
        { id: "5", title: "Mid-range build guide" },
        { id: "6", title: "High-end PC suggestions" },
      ],
    },
    // Add more subtopics as needed
  };

  const subtopic = subtopics[subtopicId];

  if (!subtopic) {
    return <div className={styles.error}>Subtopic not found.</div>;
  }

  return (
    <div className="forum-container">
      {/* Header Bar */}
      <div className="forum-header-bar">
        <div className="header-wrap">
          <div className="user-profile-box">
            <img src="/avatar-placeholder.png" alt="User Avatar" />
            <a href="/profile" className="user-name">User</a>
            <div className="icons">
              <i className="fas fa-comment-dots"></i>
              <i className="fas fa-bell"></i>
              <i className="fas fa-cog"></i>
            </div>
          </div>
        </div>
      </div>
      {/* Subtopic Content */}
      <div className={styles.subtopicContainer}>
        {/* Header */}
        <h1 className={styles.subtopicTitle}>{subtopic.title}</h1>
        {/* Post List */}
        <ul className={styles.postList}>
          {subtopic.posts.map((post) => (
            <li key={post.id} className={styles.postItem}>
              <Link href={`/forums/posts/${post.id}`} className={styles.postLink}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
}
