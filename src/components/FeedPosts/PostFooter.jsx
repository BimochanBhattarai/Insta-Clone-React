import {
	Box,
	Button,
	Flex,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
	NotificationsLogo,
	UnlikeLogo,
	CommentLogo,
} from "../../assets/Constants";

const PostFooter = ({ username, isProfilePage }) => {
	const [liked, setLiked] = useState(false);
	const [likes, setLikes] = useState(100);

	return (
		<Box mt={"auto"}>
			<Flex alignItems={"center"} w={"full"} gap={4} pt={0} mb={2} mt={4}>
				<Box
					onClick={() => {
						setLiked(!liked);
						liked ? setLikes(likes - 1) : setLikes(likes + 1);
					}}
					cursor={"pointer"}
					fontSize={18}
				>
					{!liked ? <NotificationsLogo /> : <UnlikeLogo />}
				</Box>
				<Box cursor={"pointer"} fontSize={18}>
					<CommentLogo />
				</Box>
			</Flex>
			<Text fontWeight={600} fontSize={"sm"}>
				{likes} likes
			</Text>
			{!isProfilePage && (
				<>
					<Text fontSize={"sm"} fontWeight={700}>
						{`${username} `}
						<Text as={"span"} fontWeight={400}>
							#programming #coding #webdevelopment
						</Text>
					</Text>
					<Text fontSize={"sm"} color={"gray"}>
						View all 10 comments
					</Text>
				</>
			)}
			<Flex
				alignItems={"center"}
				gap={2}
				justifyContent={"space-between"}
				w={"full"}
				mb={6}
			>
				<InputGroup>
					<Input
						variant={"flushed"}
						placeholder="Add a comment ..."
						fontSize={13}
					/>
					<InputRightElement>
						<Button
							fontSize={14}
							color={"blue.500"}
							fontWeight={600}
							cursor={"pointer"}
							_hover={{ color: "white" }}
							bg={"transparent"}
						>
							Post
						</Button>
					</InputRightElement>
				</InputGroup>
			</Flex>
		</Box>
	);
};

export default PostFooter;
