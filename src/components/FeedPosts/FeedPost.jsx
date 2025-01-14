import React from "react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";

const FeedPost = ({img, username, avatar}) => {
	return (
		<>
			<PostHeader username={username} avatar={avatar} />
			<Box
				borderRadius={8}
				overflow={"hidden"}
			>
				<Image src={img} alt={username} />
			</Box>
			<PostFooter username={username} />
		</>
	);
};

export default FeedPost;
