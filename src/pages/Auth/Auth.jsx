import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react';
import React from 'react'
import { AuthForm } from '../../components';

const Auth = () => {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            <Flex justifyContent={"center"} alignItems={"center"} h={"100%"} gap={2}>
                <Box display={{base: "none", md: "block"}} flex={1}>
                    <Image src='/auth.png' h={600} alt='Phone Image' />
                </Box>
                <VStack spacing={4} align={"stretch"} width={{base: "full", md: "330px"}} maxWidth={330}>
                    <AuthForm />
                    <Box textAlign={"center"} fontSize={"sm"}>
                        Get the app.
                    </Box>
                    <Flex gap={5} justifyContent={"center"}>
                        <Image src='/playstore.png' h={"10"} alt='Playstore' />
                        <Image src='/microsoft.png' h={"10"} alt='Microsoft Store' />
                    </Flex>
                </VStack>
            </Flex>
        </Container>
    </Flex>
  )
}

export default Auth