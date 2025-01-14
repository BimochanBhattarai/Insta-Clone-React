import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
			<Flex alignItems={"center"} gap={2}>
				<Avatar name="Bimochan" size={"lg"} src="/profilepic.png" />
				<Text fontSize={'sm'} fontWeight={"bold"}>
					Bimochan
				</Text>
			</Flex>
			<Link
				as={RouterLink}
				to={"/auth"}
				fontSize={14}
				fontWeight={"medium"}
				color={"blue.400"}
				cursor={"pointer"}
                _hover={{textDecoration: 'none', color: 'white'}}
			>
                Log out
            </Link>
		</Flex>
	);
};

export default SuggestedHeader;
