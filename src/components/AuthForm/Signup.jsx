import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";

const Signup = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		email: "",
		password: "",
	});

	const [showPassword, setShowPassword] = useState(false);
	return (
		<>
			<Input
				placeholder="Email"
				type="email"
				fontSize={"14px"}
				value={inputs.email}
				size={"sm"}
				onChange={(e) =>
					setInputs({ ...inputs, email: e.target.value })
				}
				id="email"
			/>
			<Input
				placeholder="Username"
				type="text"
				fontSize={"14px"}
				value={inputs.username}
				size={"sm"}
				onChange={(e) =>
					setInputs({ ...inputs, username: e.target.value })
				}
				id="username"
			/>
			<Input
				placeholder="Full Name"
				type="text"
				fontSize={"14px"}
				value={inputs.fullName}
				size={"sm"}
				onChange={(e) =>
					setInputs({ ...inputs, fullName: e.target.value })
				}
				id="fullName"
			/>
			<InputGroup>
				<Input
					placeholder="Password"
					type={showPassword ? "text" : "password"}
					fontSize={"14px"}
					value={inputs.password}
					size={"sm"}
					onChange={(e) =>
						setInputs({ ...inputs, password: e.target.value })
					}
					id="password"
				/>
				<InputRightElement h="full">
					<Button
						variant="ghost"
						size="sm"
						onClick={() => setShowPassword(!showPassword)}
					>
						{showPassword ? <ViewIcon /> : <ViewOffIcon />}
					</Button>
				</InputRightElement>
			</InputGroup>
			<Button w={"100%"} colorScheme={"blue"} fontSize={"14px"}>
				Sign Up
			</Button>
		</>
	);
};

export default Signup;
