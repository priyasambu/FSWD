import React, { useState } from "react";

export default function Blog() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  function addComment(e) {
    e.preventDefault();

    if (newComment.trim() === "") {
      alert("Comment cannot be empty");
      return;
    }

    setComments([...comments, newComment]);
    setNewComment("");
  }

  return (
    <>
      <div style={styles.container}>
        <h2>My Blog Post</h2>

        <p>
          This is a simple responsive blog layout built using React. Users can
          add comments and see them updated in real time without refreshing the
          page.
        </p>

        <hr />

        <h3>Comments</h3>

        <form onSubmit={addComment}>
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Post
          </button>
        </form>

        <ul style={styles.commentList}>
          {comments.map((comment, index) => (
            <li key={index} style={styles.commentItem}>
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "15px",
    fontFamily: "Arial",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
  },
  commentList: {
    listStyle: "none",
    padding: 0,
  },
  commentItem: {
    background: "#f2f2f2",
    padding: "8px",
    marginTop: "8px",
    borderRadius: "4px",
  },
};
