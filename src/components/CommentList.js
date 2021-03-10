import React, { useEffect, useState } from "react";
import { Box, Textarea, Button, Text } from "@chakra-ui/react";
import { getComments, createComment } from "../api/comments";
import { isAuthenticated } from "../utils/user-util";

export function CommentList({ lesson, ...props }) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const authenticated = isAuthenticated();

  useEffect(() => {
    fetchComments(lesson);
  }, [lesson]);

  function fetchComments(lesson) {
    getComments(lesson.id).then((comments) => {
      setComments(comments);
    });
  }

  function submitComment(event) {
    event.preventDefault();
    createComment(lesson.id, newComment).then(() => {
      fetchComments(lesson);
      setNewComment("");
    });
  }

  return (
    <>
      {authenticated && (
        <Box pt={2} w="98%" pl={6}>
          <form method="post" onSubmit={submitComment}>
            <Textarea
              placeholder="Add Comment"
              size="sm"
              borderRadius="10px"
              h={4}
              value={newComment}
              onChange={(event) => setNewComment(event.target.value)}
              {...props}
            />
            <Button type="submit" h="29px">
              Post
            </Button>
          </form>
          <Box pt={2}>
            {comments.map((comment) => (
              <Box
                borderBottom="1px"
                _last={{ borderBottom: "none" }}
                borderColor="purple.100"
                pb={2}
                key={comment.id}
              >
                <Text fontWeight="medium">{comment.user}</Text>
                {comment.comment}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
}
