import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});
	const {loading, error, login} = useLogin();
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
				placeholder="Password"
				type="password"
				fontSize={"14px"}
				value={inputs.password}
                size={"sm"}
				onChange={(e) =>
					setInputs({ ...inputs, password: e.target.value })
				}
				id="password"
			/>
			<Button w={"100%"} colorScheme={"blue"} fontSize={"14px"} 
			onClick={() => login(inputs)} isLoading={loading}
			>
				Log in
			</Button>
		</>
	);
};

export default Login;
