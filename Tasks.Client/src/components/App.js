import React, { useEffect, useState } from "react";
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { getTasksAsync } from "../entities/Task";
import { TaskList } from "./TaskList";
import { CreateTask } from "./CreateTask";

export const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const doGetTasks = async () => {
      const allTasks = await getTasksAsync();
      setTasks(allTasks);
      setLoading(false);
    };
    doGetTasks().then();
  }, [tasks]);

  return (
    <ChakraProvider>
      <Container>
        <Flex justifyContent="flex-end" mb="2">
          <CreateTask />
        </Flex>
        {loading ? "Loading..." : <TaskList tasks={tasks} />}
      </Container>
    </ChakraProvider>
  );
};
