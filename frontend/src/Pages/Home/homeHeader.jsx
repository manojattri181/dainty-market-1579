import "./home.css"
import React from 'react'
import {Box, Button, Heading, Text, useMediaQuery, VStack}  from "@chakra-ui/react"
import ButtonComp from "./ButtonComp"
const Header = () => {

  const [isLargerThanHD, isDisplayingInBrowser, mobileView] = useMediaQuery([
    '(min-width: 800px)',
    '(min-width: 500px)',
    '(min-width: 200px)'
  ])

       
    function determineText() {
      if (isLargerThanHD) {
       return  (<VStack>
        <Box>
          <Text color="#ed565a;" fontWeight="bold" letterSpacing="2.52px"
             fontSize="12px" textAlign="center" margin="0 0 15px">
            TRACKINGTIME TIME TRACKER SOFTWARE
          </Text>
  
          <Text color="#242954;" fontWeight="800" letterSpacing="2.52px"
             fontSize="20px" textAlign="center" margin="0 0 15px" line-height=" 24px">
            SET AND FORGET TIME TRACKING
          </Text>
  
         <Text fontSize="70px" color="#242954;" letterSpacing=".01em"
                fontWeight="700" textAlign="center">
                Bring your productivity
                to   the next level.
         </Text>
         <Box display="flex" justifyContent="center" marginBottom="10px" gap="10px">
         <ButtonComp words="Your Work Email" s="265px" bg="white" bord="0.5px solid black" />
          <ButtonComp bg="#ed565a" words="Start For Free" s="210px" clr="white" hov="#646cc7" />
         </Box>
        
        </Box>
      </VStack>)
    
      }
  
      
        else if (isDisplayingInBrowser){
          return (
            <VStack>
            <Box display="flex" flexWrap="wrap" flexDirection="column">
              <Text color="#ed565a;" fontWeight="bold" letterSpacing="2.52px"
                 fontSize="18px" textAlign="center" margin="0 0 15px">
                TRACKINGTIME TIME TRACKER SOFTWARE
              </Text>
      
              <Text color="#242954;" fontWeight="800" letterSpacing="2.52px"
                 fontSize="24px" textAlign="center" margin="0 0 15px" line-height="24px">
                SET AND FORGET TIME TRACKING
              </Text>
      
             <Text fontSize="90px" color="#242954;" letterSpacing=".01em" 
                                 fontWeight="700" textAlign="center">
                    Bring your productivity
                    to   the next level.
             </Text>

             <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" marginBottom="10px" gap="10px">
                <ButtonComp words="Your Work Email" s="400px" bg="white" bord="0.5px solid black" />
                <ButtonComp bg="#ed565a" words="Start For Free" s="400px" clr="white" hov="#646cc7" />
            </Box>
            </Box>
          </VStack>
          )
        }

        else if (mobileView){
          return (
           
            <Box display="flex" flexWrap="wrap" flexDirection="column">
              <Text color="#ed565a;" fontWeight="bold" letterSpacing="2.52px"
                 fontSize="14px" textAlign="center" margin="0 0 15px">
                TRACKINGTIME TIME TRACKER SOFTWARE
              </Text>
      
              <Text color="#242954;" fontWeight="800" letterSpacing="2.52px"
                 fontSize="20px" textAlign="center" margin="0 0 15px" line-height=" 24px">
                SET AND FORGET TIME TRACKING
              </Text>
      
             <Text fontSize="80px" color="#242954;" 
                    fontWeight="700" textAlign="center" display="flex" flexWrap="wrap">
                    Bring your productivity
                    to   the next level.
             </Text>
            
             <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" marginBottom="10px" gap="10px">
                <ButtonComp words="Your Work Email" s="400px" bg="white" bord="0.5px solid black" />
                <ButtonComp bg="#ed565a" words="Start For Free" s="400px" clr="white" hov="#646cc7" />
            </Box>
            </Box>
         
          )
        }
        
      
    }
  
    return determineText()
  }


export default Header