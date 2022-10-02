import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  useDisclosure,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";

const RightDrawer = () => {
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button style={{ marginRight: "1rem" }}>All tasks</Button>
      <Button ref={btnRef} colorScheme="gray" onClick={onOpen}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="black"
            class="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
        </span>{" "}
        <span> Tasks</span>
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader style={{ fontSize: "16px" }}>
            <input type="radio" /> Mark as done
          </DrawerHeader>

          <DrawerBody style={{ fontWeight: "bold" }}>
            <Input placeholder="Task name" />
            <Text
              style={{
                fontSize: "12px",
                color: "gray",
                marginTop: "5px",
              }}
            >
              Add details...
            </Text>
            <Text style={{ fontSize: "16px", marginTop: "6%" }}>
              Project A [sample]
            </Text>
            <Flex style={{ marginTop: "6%" }}>
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="gray"
                  class="bi bi-list-ul"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                  />
                </svg>
              </Box>
              <Box style={{ marginLeft: "1%" }}>
                <Text style={{ fontSize: "10px" }}>Add to task list</Text>
              </Box>
            </Flex>

            <div
              className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
              style={{ marginTop: "6%" }}
            >
              <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block p-2 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                    aria-current="page"
                  >
                    Information
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block p-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  >
                    Hours
                  </a>
                </li>
              </ul>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default RightDrawer;
