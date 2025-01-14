import {
	Avatar,
	Box,
	Divider,
	Flex,
	GridItem,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ProfilePost = ({ img }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<GridItem
				cursor={"pointer"}
				borderRadius="4"
				overflow="hidden"
				border="1px solid"
				borderColor="whiteAlpha.300"
				position="relative"
				aspectRatio="1"
				onClick={onOpen}
			>
				<Flex
					opacity={0}
					_hover={{ opacity: 1 }}
					position={"absolute"}
					top={0}
					left={0}
					right={0}
					bottom={0}
					bg={"blackAlpha.700"}
					transition={"all 0.3s ease"}
					zIndex={1}
					justifyContent={"center"}
				>
					<Flex
						alignItems={"center"}
						justifyContent={"center"}
						gap={15}
					>
						<Flex>
							<AiFillHeart size={20} />
							<Text fontWeight={"bold"} ml={2}>
								7
							</Text>
						</Flex>
						<Flex>
							<FaComment size={20} />
							<Text fontWeight={"bold"} ml={2}>
								7
							</Text>
						</Flex>
					</Flex>
				</Flex>
				<Image
					src={img}
					alt="post"
					width={"100%"}
					height={"100%"}
					objectFit={"cover"}
				/>
			</GridItem>

			<Modal
				isOpen={isOpen}
				onClose={onClose}
				isCentered
				size={{ base: "3xl", md: "5xl" }}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody bg={"black"} pb={5}>
						<Flex
							gap={4}
							w={{ base: "90%", sm: "70%", md: "full" }}
							mx={"auto"}
						>
							<Box
								borderRadius={4}
								overflow={"hidden"}
								border={"1px solid"}
								borderColor={"whiteAlpha.300"}
								flex={1.5}
							>
								<Image src={img} alt="Profile Post" />
							</Box>
							<Flex
								flex={1}
								direction={"column"}
								px={10}
								display={{ base: "none", md: "flex" }}
							>
								<Flex
									alignItems={"center"}
									justifyContent={"space-between"}
									mb={5}
								>
									<Flex
										alignItems={"center"}
										justifyContent={"space-between"}
									>
										<Avatar
											src="/profilepic.png"
											size={"sm"}
											name="Bimochan Bhattatai"
										/>
										<Text
											fontWeight={"bold"}
											fontSize={16}
											ml={2}
										>
											bimochanbhattarai_
										</Text>
									</Flex>
									<Box
										_hover={{
											bg: "whiteAlpha.300",
											color: "red.600",
										}}
										borderRadius={4}
										p={1}
									>
										<MdDelete
											size={20}
											cursor={"pointer"}
										/>
									</Box>
								</Flex>
								<Divider my={4} bg={"gray.400"} />
                                <VStack w={"full"} alignItems={"flex-start"} maxH={"350px"} overflowY={"auto"}>
                                        <Comment 
                                            username="bimochanbhattarai_" 
                                            text="This is a comment"
                                            createdAt="1 hour ago"
                                            profilePicture="/profilepic.png"
                                        />

                                        <Comment
                                            username="seconduser"
                                            text="This is another comment"
                                            createdAt="2 hours ago"
                                            profilePicture="/profilepic.png"
                                        />
                                        <Comment
                                            username="thirduser"
                                            text="This is another comment"
                                            createdAt="3 hours ago"
                                            profilePicture="/profilepic.png"
                                        />
                                </VStack>
							</Flex>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ProfilePost;
