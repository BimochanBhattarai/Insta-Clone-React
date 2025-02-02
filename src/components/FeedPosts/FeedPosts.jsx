import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost";
import {
	Box,
	Container,
	Flex,
	Skeleton,
	SkeletonCircle,
	VStack,
} from "@chakra-ui/react";

const FeedPosts = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<Container maxW={"container.sm"} py={10} px={2}>
			{loading &&
				[0, 1, 2, 3].map((_, index) => (
					<VStack
						key={index}
						gap={4}
						alignItems={"flex-start"}
						mb={10}
					>
						<Flex gap={2} alignItems={"center"}>
							<SkeletonCircle size={"10"} />
							<VStack alignItems={"flex-start"} gap={2}>
								<Skeleton height={"10px"} width={"200px"} />
								<Skeleton height={"10px"} width={"100px"} />
							</VStack>
						</Flex>
						<Skeleton width={"full"}>
							<Box height={"500px"}> Content </Box>
						</Skeleton>
					</VStack>
				))}
			{!loading && (
				<>
					<FeedPost
						img="/img1.avif"
						username="Bimochan Bhattarai"
						avatar="/img1.avif"
					/>
					<FeedPost
						img="/img2.avif"
						username="Prakriti Khanal"
						avatar="/img2.png"
					/>
					<FeedPost
						img="/img3.avif"
						username="Muna Sharma"
						avatar="/img3.png"
					/>
					<FeedPost
						img="/img4.avif"
						username="Dinesh Raj"
						avatar="/img4.png"
					/>
				</>
			)}
		</Container>
	);
};

export default FeedPosts;
