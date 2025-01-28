import { Avatar, Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

const SuggestedHeader = () => {
	const { handleLogout, isLoggingOut } = useLogout();
	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
			<Flex alignItems={"center"} gap={2}>
				<Avatar name="Bimochan" size={"lg"} src="/profilepic.png" />
				<Text fontSize={'sm'} fontWeight={"bold"}>
					Bimochan
				</Text>
			</Flex>
			<Button
				bg={"transparent"}
				size={"sm"}
				fontSize={14}
				fontWeight={"medium"}
				color={"blue.400"}
				cursor={"pointer"}
                _hover={{textDecoration: 'none', color: 'white'}}
				onClick={handleLogout}
				loading={isLoggingOut}
			>
                Log out
            </Button>
		</Flex>
	);
};

export default SuggestedHeader;
