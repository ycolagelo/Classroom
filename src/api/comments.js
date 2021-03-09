export function getComments(lessonId) {
  return fetch(`api/get_comments/${lessonId}`).then((response) =>
    response.json()
  );
}

export function createComment(lessonId, comment) {
  fetch(`api/update_lesson_comment/${lessonId}`, {
    method: "POST",
    body: JSON.stringify({
      posts: comment,
    }),
  }).then((response) => response.json());
}
