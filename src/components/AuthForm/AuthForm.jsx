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
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);
	const navigate = useNavigate();
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handelAuth = () => {
		if (!inputs.email || !inputs.password) {
			return alert("Please fill all the fields");
		}
		navigate("/");
		setInputs({ email: "", password: "", confirmPassword: "" });
	};

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
					<Input
						placeholder="Email"
						type="email"
						fontSize={"14px"}
						value={inputs.email}
						onChange={(e) =>
							setInputs({ ...inputs, email: e.target.value })
						}
						id="email"
					/>
					<Input
						placeholder="Password"
						type="password"
						fontSize={"14px"}
						value={inputs.password}
						onChange={(e) =>
							setInputs({ ...inputs, password: e.target.value })
						}
						id="password"
					/>
					{!isLogin ? (
						<Input
							placeholder="Confirm Password"
							type="password"
							fontSize={"14px"}
							value={inputs.confirmPassword}
							onChange={(e) =>
								setInputs({
									...inputs,
									confirmPassword: e.target.value,
								})
							}
							id="confirmPassword"
						/>
					) : null}
					<Button
						w={"100%"}
						colorScheme={"blue"}
						fontSize={"14px"}
						onClick={handelAuth}
					>
						{isLogin ? "Sign Up" : "Login"}
					</Button>
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

					<Flex
						justifyContent={"center"}
						alignItems={"center"}
						gap={2}
						cursor={"pointer"}
					>
						<Image src="/google.png" w={5} alt="Google Logo" />
						<Text mx={2} color={"blue.500"}>
							Log in with Google
						</Text>
					</Flex>
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
