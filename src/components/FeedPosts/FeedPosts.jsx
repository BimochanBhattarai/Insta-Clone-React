import React from 'react'
import FeedPost from './FeedPost';
import { Container } from '@chakra-ui/react';

const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
        <FeedPost img="/img1.png" username="Bimochan Bhattarai" avatar="/img1.png" />
        <FeedPost img="/img2.png" username="Prakriti Khanal" avatar="/img2.png" />
        <FeedPost img="/img3.png" username="Muna Sharma" avatar="/img3.png" />
        <FeedPost img="/img4.png" username="Dinesh Raj" avatar="/img4.png" />
    </Container>
  )
}

export default FeedPosts