import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import {
  IconButton,
  Checkbox,
  Flex,
  Input,
  ButtonGroup,
} from "@chakra-ui/react";
import { CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { deleteTaskAsync, putTaskAsync } from "../entities/Task";

export const TaskItem = (props) => {
  const [id] = useState(props.task.id);
  const [isDone, setIsDone] = useState(props.task.isDone);
  const [title, setTitle] = useState(props.task.title);
  const [titleValue, setTitleValue] = useState(props.task.title);

  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    const task = {
      id: id,
      isDone: isDone,
      title: title,
    };
    putTaskAsync(task).then();
  }, [id, isDone, title]);

  return (
    <Flex
      p={3}
      boxShadow="base"
      width="100%"
      _hover={{ boxShadow: "lg" }}
      justify="space-between"
    >
      <Checkbox
        isChecked={isDone}
        onChange={(event) => {
          setIsDone(event.target.checked);
        }}
        pr="3"
        isTruncated
      >
        {!showEdit && title}
      </Checkbox>
      {showEdit && (
        <Input
          value={titleValue}
          variant="flushed"
          mr="2"
          onChange={(event) => setTitleValue(event.target.value)}
        />
      )}
      <ButtonGroup spacing="2">
        {!showEdit ? (
          <IconButton
            aria-label="Edit"
            icon={<EditIcon />}
            onClick={() => {
              setShowEdit(!showEdit);
            }}
          />
        ) : (
          <IconButton
            aria-label="Save"
            icon={<CheckIcon />}
            colorScheme="blue"
            onClick={() => {
              setShowEdit(!showEdit);
              setTitle(titleValue);
            }}
          />
        )}
        <IconButton
          aria-label="Delete"
          icon={<DeleteIcon />}
          onClick={() => deleteTaskAsync(id)}
        />
      </ButtonGroup>
    </Flex>
  );
};
