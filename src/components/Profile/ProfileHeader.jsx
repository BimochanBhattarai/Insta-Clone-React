import {
	Avatar,
	AvatarGroup,
	Button,
	Flex,
	Text,
	VStack,
} from "@chakra-ui/react";
import React from "react";

const ProfileHeader = () => {
	return (
		<Flex
			gap={{ base: 4, sm: 10 }}
			py={10}
			direction={{ base: "column", sm: "row" }}
		>
			<AvatarGroup
				size={{ base: "lg", md: "2xl" }}
				mx={"auto"}
				justifySelf={"center"}
				alignSelf={"flex-start"}
			>
				<Avatar
					name="Bimochan"
					src="/profilepic.png"
					alt="Bimochan Logo"
				/>
			</AvatarGroup>
			<VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
				<Flex
					gap={4}
					direction={{ base: "column", sm: "row" }}
					w={"full"}
					justify={{ base: "center", sm: "flex-start" }}
					alignItems={"center"}
				>
					<Text
						fontSize={{ base: "sm", md: "xl" }}
						fontWeight={"bold"}
					>
						bimochanbhattatai_
					</Text>
					<Flex
						gap={4}
						alignItems={"center"}
						justifyContent={"center"}
					>
						<Button
							bg={"white"}
							color={"black"}
							_hover={{ bg: "whiteAlpha.800" }}
							size={{ base: "xs", md: "sm" }}
						>
							Edit Profile
						</Button>
					</Flex>
				</Flex>
                <Flex alignItems={"center"} gap={{base: 2, sm: 4}}>
                    <Text>
                        <Text as={"span"} fontWeight={"bold"}>10</Text> posts
                    </Text>
                    <Text>
                        <Text as={"span"} fontWeight={"bold"}>500</Text> followers
                    </Text>
                    <Text>
                        <Text as={"span"} fontWeight={"bold"}>100</Text> following
                    </Text>
                </Flex>
                <Flex alignItems={"center"} gap={{base: 2, sm: 4}}>
                    <Text fontSize={"sm"} fontWeight={"bold"}>Bimochan Bhattatai</Text>
                </Flex>
                    <Text fontSize={"sm"}>
                        🇳🇵 Kathmandu, Nepal
                    </Text>
			</VStack>
		</Flex>
	);
};

export default ProfileHeader;
