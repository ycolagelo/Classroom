import React from "react";
import { Box } from "@chakra-ui/react";
import { Lesson } from "../components/Lesson";
import { CardList } from "../components/CardList";
import { getLessons } from "../api/lessons";

export function Home() {
  const [lessons, setLessons] = React.useState([]);
  React.useEffect(() => {
    getLessons().then((lessons) => {
      setLessons(lessons);
    });
  }, []);

  return (
    <Box p={8}>
      <Box>
        <CardList />
      </Box>
      {lessons.map((lesson) => (
        <Lesson lesson={lesson} key={lesson.id} />
      ))}
    </Box>
  );
}
