import React from "react";
import { VStack } from "@chakra-ui/react";
import { TaskItem } from "./TaskItem";

export const TaskList = (props) => {
  const tasks = props.tasks;
  return (
    <VStack spacing={2}>
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </VStack>
  );
};
