import { Avatar, Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import SuggestedHeader from "./SuggestedHeader";

const SuggestedUser = ({followers, name, avatar}) => {

  const [isFollowed, setIsFollowed] = useState(false);

	return (
		<Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
      <Flex>
        <Avatar name={name} src={avatar} size={"md"}/>
        <VStack spacing={2} ml={4} alignItems={"flex-start"}>
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={11} color={"gray.400"} alignSelf={"flex-start"}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.400"}
        _hover={{ bg: "transparent", color: "white" }}
        cursor={"pointer"}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
	);
};

export default SuggestedUser;
