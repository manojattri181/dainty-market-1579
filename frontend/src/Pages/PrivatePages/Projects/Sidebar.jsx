import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { MdSettingsBackupRestore } from "react-icons/md";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [task, setTask] = useState("");
  const [project, setProject] = useState([]);

  function handleAdd(task) {}
  return (
    <div className="bg-gray-100 min-h-screen">
      <aside className="w-64 ml-4" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 rounded">
          <h2 className="text-sm font-extrabold text-gray-500 mt-4">
            MY TASKS
          </h2>
        </div>
        <hr class=" h-px bg-gray-300 border-0 dark:bg-gray-900" />
        <div className="flex flex-row space-x-12 mt-4 ">
          <div>
            <h2 className=" font-bold text-lg mb-3">Projects</h2>
          </div>

          <div>
            <Button
              colorScheme="gray"
              variant="outline"
              onClick={onOpen}
              _hover={{
                bg: "#c1c1c1",
                color: "black",
                fontWeight: "bolder",
                border: "1px solid gray",
              }}
              style={{
                fontSize: "12px",
                height: "24px",
                lineHeight: "1.2",
                px: "8px",
                fontWeight: "semibold",
                bg: "#f5f6f7",
                color: "#4b4f56",
              }}
            >
              + PROJECT
            </Button>

            <Drawer
              isOpen={isOpen}
              placement="right"
              initialFocusRef={firstField}
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px">
                  <Button colorScheme="gray" variant="outline">
                    Due date
                  </Button>
                </DrawerHeader>

                <DrawerBody>
                  <Stack spacing="24px">
                    <Box>
                      <Input
                        ref={firstField}
                        id="username"
                        placeholder="Project name"
                      />
                    </Box>

                    <Box>
                      <label
                        for="small-toggle"
                        class="inline-flex relative items-center mb-5 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          value={task}
                          onChange={(e) => setTask(e.target.value)}
                          id="small-toggle"
                          class="sr-only peer"
                          checked
                        />
                        <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Public
                        </span>
                      </label>
                    </Box>

                    <Box>
                      <FormLabel htmlFor="owner">Client</FormLabel>
                      <Select id="owner" defaultValue="segun">
                        <option value="segun">Add custom field</option>
                        <option value="kola">Kola Tioluwani</option>
                      </Select>
                    </Box>

                    <Box>
                      <FormLabel htmlFor="desc">Estimated time</FormLabel>
                      <Textarea id="desc" />
                    </Box>
                  </Stack>
                </DrawerBody>

                <DrawerFooter borderTopWidth="1px">
                  <Button variant="outline" mr={3} onClick={onClose}>
                    CANCEL
                  </Button>
                  <Button
                    onClick={() => handleAdd(task)}
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    SAVE
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <hr class=" h-px bg-gray-300 border-0 dark:bg-gray-900 mb-3" />
        <Flex gap="4%">
          <Box style={{ fontSize: "13px" }}>
            <Menu>
              <MenuButton>
                <Flex>
                  <Box
                    style={{ fontSize: "13px", textDecoration: "underline" }}
                  >
                    <b>All</b>
                  </Box>
                  <Box>
                    <svg
                      class="w-3 h-4 mt-1"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList style={{ width: "10%" }}>
                <MenuItem>All</MenuItem>
                <MenuItem>Favourites</MenuItem>
                <MenuItem>Client</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box style={{ fontSize: "13px", textDecoration: "underline" }}>
            <Menu>
              <MenuButton>
                <Flex>
                  <Box style={{ fontSize: "13px" }}>
                    <b>By order</b>
                  </Box>
                  <Box>
                    <svg
                      class="w-3 h-4 mt-1"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList style={{ width: "10%" }}>
                <MenuItem>By order</MenuItem>
                <MenuItem>By name</MenuItem>
                <MenuItem>By due date</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </aside>
      <div className="px-2">
        <nav>
          <a
            href="#"
            className="flex justify-between px-3 py-3 text-sm font-medium text-gray-900 bg-gray-300 rounded-lg mt-7"
          >
            <span>Project A</span>
            <span class="text-xs font-semibold text-gray-700">Time</span>
          </a>
          <a
            href="#"
            className="flex justify-between px-3 py-3 text-sm font-medium text-gray-900 bg-gray-300 rounded-lg mt-7"
          >
            <span>Project B</span>
            <span class="text-xs font-semibold text-gray-700">Time</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
