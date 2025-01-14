import React from "react";
import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";
import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";

const SuggestedUsers = () => {
	return (
		<VStack py={8} px={6}>
			<SuggestedHeader />
			<Flex
				alignItems={"center"}
				justifyContent={"space-between"}
				w={"full"}
			>
				<Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
					Suggested for you
				</Text>
				<Text
					fontSize={12}
					fontWeight={"bold"}
					_hover={{ color: "gray.400" }}
					cursor={"pointer"}
				>
					See All
				</Text>
			</Flex>
      <SuggestedUser name="Dan Abrahmov" followers={1392} avatar='/img1.png'/>
      <SuggestedUser name="Dan Abrahmov" followers={1392} avatar='/img2.png'/>
      <SuggestedUser name="Dan Abrahmov" followers={1392} avatar='/img3.png'/>
      <SuggestedUser name="Dan Abrahmov" followers={1392} avatar='/img4.png'/>

      <Box w={"full"} py={4} fontSize={12} fontWeight={"bold"} color={"gray.500"}>
        &copy; 2025 Built by <Link href="https://github.com/BimochanBhattarai" target="_blank" color={"blue.400"}>Bimochan Bhattatai</Link>
      </Box>
		</VStack>
	);
};

export default SuggestedUsers;
