import { fetchHelper } from "./fetch-util";

export function getComments(lessonId) {
  return fetchHelper(`api/get_comments/${lessonId}`);
}

export function createComment(lessonId, comment) {
  return fetchHelper(`api/update_lesson_comment/${lessonId}`, {
    method: "POST",
    body: JSON.stringify({
      posts: comment,
    }),
  });
}
