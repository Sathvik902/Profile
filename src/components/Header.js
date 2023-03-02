import { Circle,Box,Text,Divider,Stack,Flex } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import {Button} from '@chakra-ui/button';
import {useColorMode} from '@chakra-ui/color-mode';
import {Image} from '@chakra-ui/image';
import  React from 'react';
import image from './Image/image.jpeg';



export default function Header() {
  const {colorMode} = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');


  return (
    <Stack>
      <Circle position="absolute" bg = "blue.100" opacity = ".1" w="300px" h = "300px" alignSelf = "flex-end" zIndex={-1}></Circle>
      <Flex direction={isNotSmallerScreen? "row":"column"  } spacing='200px' p= {isNotSmallerScreen?"16":"5"} alignSelf="flex-start">
      <Box mt = {isNotSmallerScreen?"0":'8'} align="flex-start">
        <Text fontSize="5xl" fontWeight="semibold">Hi I am,</Text>
        <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip="text"  mb={isNotSmallerScreen ?'0':'12'}>Sathvik</Text>
        <Text color={isDark? "gray.200":"grey.500"} w={isNotSmallerScreen?"100%":"40%"}>A Third year student of IS, at Bangalore Institute of technology. Proficient in React.js, MERN interested in learning new things on the go.
        Completed internship at Triant, on React.js.
        {/* <Divider mt={2}mb={10}/> */}
        {/* <code>While(True):<br/>
        <center ml={30}>Eat()</center>
        <center ml={30}>Sleep()</center>
        <center ml={30}>Code()</center>
        <center ml={30}>Repeat()</center>
          
        </code> */}
        </Text>
        <Button mt = {8} colorScheme="blue" onClick={()=>{
          window.open("https://www.linkedin.com/in/sathvik-k-95b473212")}
          }>Hire me</Button>
      </Box>
      <Image alignSelf="center" ml='12px'  mb={isNotSmallerScreen ?'0':'8'} borderRadius="full" backgroundColor = "black" boxShadow="lg" boxSize="300px"src={image}  />
      </Flex>
    </Stack>
  );
}