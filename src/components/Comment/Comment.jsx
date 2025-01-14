import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Comment = ({ createdAt, username, text, profilePicture }) => {
	return (
		<Flex gap={4} alignItems={"center"}>
			<Avatar src={profilePicture} size={"sm"} name={username} />
			<Flex direction={"column"}>
				<Flex gap={2}>
					<Text fontSize={14} fontWeight={"bold"}>
						{username}
					</Text>
					<Text fontSize={16}>{text}</Text>
				</Flex>
				<Text fontSize={14} color={"gray"}>
					{createdAt}
				</Text>
			</Flex>
		</Flex>
	);
};

export default Comment;
