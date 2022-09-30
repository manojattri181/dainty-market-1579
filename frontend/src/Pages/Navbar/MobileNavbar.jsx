import { Box, Button, Drawer, DrawerBody, DrawerCloseButton,
     DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, 
     Image, Input, useDisclosure } from "@chakra-ui/react"
import React, {useRef} from "react"
function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      
        <HStack display="flex" justifyContent="space-between" alignItems="center" height="100px"
        border="2px solid blue" position="fixed" width="100%" top="0%">
            <Box>
                <Image width="300px"
                 src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg"
                  />
            </Box>

            <Box>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        </Box>
        </HStack>
      
    )
  }
  export default DrawerExample;