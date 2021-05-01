import React from "react";
import { Button } from "@chakra-ui/react";
import { postTaskAsync } from "../entities/Task";

export const CreateTask = () => {
  return (
    <Button colorScheme="blue" onClick={() => postTaskAsync()}>
      Create
    </Button>
  );
};
