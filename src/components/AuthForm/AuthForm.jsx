import {
	Box,
	Button,
	Flex,
	Image,
	Input,
	Text,
	VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);


	

	return (
		<>
			<Box border={"1px solid gray"} borderRadius={8} px={4} pb={6}>
				<VStack spacing={4}>
					<Image
						src="/iglogo.svg"
						h={28}
						alt="Instagram Logo"
						cursor={"pointer"}
						mb={"-25px"}
					/>
					
					{isLogin ? <Login /> : <Signup />}
					
					<Flex
						justifyContent={"center"}
						fontSize={"14px"}
						width={"full"}
						alignItems={"center"}
						my={2}
						gap={1}
					>
						<Box flex={2} h={"1px"} bg={"gray.400"} />
						<Text mx={1} color={"white"}>
							OR
						</Text>
						<Box flex={2} h={"1px"} bg={"gray.400"} />
					</Flex>

					<GoogleAuth />
				</VStack>
			</Box>
			<Box border={"1px solid gray"} borderRadius={8} p={2} mt={4}>
				<Flex justifyContent={"center"} alignItems={"center"} gap={2}>
					<Box mx={2} fontSize={"14px"}>
						{isLogin
							? "Don't have an account?"
							: "Already have an account?"}
					</Box>
					<Box
						cursor={"pointer"}
						color={"blue.500"}
						fontSize={"14px"}
						onClick={() => setIsLogin(!isLogin)}
					>
						{isLogin ? "Sign Up" : "Log in"}
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default AuthForm;
