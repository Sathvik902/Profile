import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Divider, Flex, HStack, Stack } from "@chakra-ui/layout";
import { Center, Box,Heading,Text } from "@chakra-ui/react";
// import { Card,Image,ButtonGroup,Button, Divider, CardBody, CardFooter } from '@chakra-ui/react'
import { Tabs,Avatar,Badge, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'



export default function Profile() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');
  // const openAbout = ()=>{
  //   return "../About.js"
  // }
  
  return (
    <div>
      <Flex direction="column" w="100%" maxWidth={{base:"100vh",md:"130vh" , lg:"130vh",xl:"130vh" }}>
      
      <HStack  alignSelf="center" >
        <Heading fontWeight="600" py={10} alignContent={'center'}   >
          Web dev |
        </Heading>
        <Heading fontWeight="600"  py={10} alignContent={'center'}   >
          Open Source |
        </Heading>
        <Heading fontWeight="600"  py={10} alignContent={'center'} >
          ML
        </Heading>
        {/* <Text fontSize="2xl" color="gray.500" alignSelf='center' >Web developer</Text> */}
      </HStack>

      <Box>
        <Divider height={10}/>
        <Center color="blue.500" fontWeight={600} fontSize={40}>
          "My Works"
        </Center>
        <Tabs size='lg'  variant={'enclosed'} my={10}>
          <TabList mb='2em'  >
            <Tab>Open source</Tab>
            <Tab>Leetcode</Tab>
            <Tab>Projects</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
            <Flex pb={10}>
              {/* <Avatar src='https://ibb.co/s9rPYp0' /> */}
              <Box ml='3'  onClick={()=>{
          window.open("https://github.com/Thealgorithms/")}} cursor="pointer">
                <Text fontWeight='bold'>
                  The Algorithms Community
                  <Badge ml='1' colorScheme='blue'>
                    Recent
                  </Badge>
                </Text>
                <Text fontSize='sm'>Member and Contributer</Text>
              </Box>
            </Flex>


            <Flex pb={10}>
              {/* <Avatar src='https://ibb.co/s9rPYp0' /> */}
              <Box ml='3'  onClick={()=>{
          window.open("https://github.com/Clueless-Community/clueless-official-website")}} cursor="pointer">
                <Text fontWeight='bold'>
                  Clueless Community Website
                  <Badge ml='1' colorScheme='blue'>
                    Recent
                  </Badge>
                </Text>
                <Text fontSize='sm'>2 contributions</Text>
              </Box>
            </Flex>
            {/* <Divider/> */}
            <Flex>
              {/* <Avatar src='https://ibb.co/s9rPYp0' /> */}
              <Box ml='3'  onClick={()=>{
          window.open("https://github.com/Tech-Squad-Community/techsquad-community-website/")}} cursor="pointer">
                <Text fontWeight='bold'>
                  Tech Squad Community
                  <Badge ml='1' colorScheme='blue'>
                    Recent
                  </Badge>
                </Text>
                <Text fontSize='sm'>Created a landing page</Text>
              </Box>
            </Flex>
            </TabPanel>
            <TabPanel >
            <Flex>
              <Avatar src='https://ibb.co/s9rPYp0' />
              <Box ml='3'  onClick={()=>{
          window.open("https://www.leetcode.com/k_sathu")}} cursor="pointer">
                <Text fontWeight='bold'>
                  K_sathu
                  <Badge ml='1' colorScheme='green'>
                    New
                  </Badge>
                </Text>
                <Text fontSize='sm'>solved 100+ Questions</Text>
              </Box>
            </Flex>
            </TabPanel>
            <TabPanel>
            <Flex pb={10}>
              {/* <Avatar src='https://ibb.co/s9rPYp0' /> */}
              <Box ml='3'  onClick={()=>{
          window.open("https://github.com/Sathvik902/Triant-website")}} cursor="pointer">
                <Text fontWeight='bold'>
                 Triant Website
                  <Badge ml='1' colorScheme='green'>
                    Internship Task
                  </Badge>
                </Text>
                <Text fontSize='sm'>This is a fully functional website built on React.js for the Company.</Text>
              </Box>
            </Flex>
            <Flex pb={10}>
              {/* <Avatar src='https://ibb.co/s9rPYp0' /> */}
              <Box ml='3'  onClick={()=>{
          window.open("https://github.com/Sathvik902/face_recognisation_system")}} cursor="pointer">
                <Text fontWeight='bold'>
                Face Recognisation system
                  <Badge ml='1' colorScheme='blue'>
                  Finished
                  </Badge>
                </Text>
                <Text fontSize='sm'>This is based on Open CV, which detects your face.</Text>
              </Box>
            </Flex>
            <Flex pb={10}>
              {/* <Avatar src='https://ibb.co/s9rPYp0' /> */}
              <Box ml='3'  onClick={()=>{
          window.open("https://github.com/Sathvik902/Diabetes-Analysis")}} cursor="pointer">
                <Text fontWeight='bold'>
                  Diabetes Analysis System
                  <Badge ml='1' colorScheme='blue'>
                    Recent
                  </Badge>
                </Text>
                <Text fontSize='sm' w={400}>This is a machine learning model which predicts whether a person is having diabetes or not based on given parameters.</Text>
              </Box>
            </Flex>

           

            <Flex pb={10}>
              {/* <Avatar src='https://ibb.co/s9rPYp0' /> */}
              <Box ml='3'  onClick={()=>{
          window.open("https://github.com/Sathvik902/Coffee-shop")}} cursor="pointer">
                <Text fontWeight='bold'>
                  Coffee-Shop
                  <Badge ml='1' colorScheme='orange'>
                    Building Stage
                  </Badge>
                </Text>
                <Text fontSize='sm' w={400}>Want to get Bewerages, Go for it!</Text>
              </Box>
            </Flex>

            <Flex pb={10}>
              {/* <Avatar src='https://ibb.co/s9rPYp0' /> */}
              <Box ml='3'  onClick={()=>{
          window.open("https://github.com/Sathvik902/Chat-app-using-Socket.io")}} cursor="pointer">
                <Text fontWeight='bold'>
                  ChatZone
                  <Badge ml='1' colorScheme='orange'>
                    Building Stage
                  </Badge>
                </Text>
                <Text fontSize='sm' w={400}>This is a chat app used to communicate in group. This basically uses a broadcast of each messages to the clients which are in the same network</Text>
              </Box>
            </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      </Flex>
    </div>
  )
}
