export function getLessons() {
  return fetch("/api/lessons").then((response) => response.json());
}

// export function UpdateComments() {
// const [comments, setComments] = React.useState([]);
// React.useEffect(() => {
//   getComments(lesson.id).then((comments) => {
//     setComments(comments);
//     console.log(comments);
//   });
// }, []);
// }
