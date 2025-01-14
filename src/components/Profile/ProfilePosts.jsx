import { Grid, Skeleton } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { use } from 'react';
import ProfilePost from './ProfilePost';

const ProfilePosts = () => {
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

  return (
    <Grid
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={1}
        columnGap={1}

    >
        {loading && [1, 2, 3, 4, 5, 6].map((index) => (
            <Skeleton key={index} height="300px" />
        ))}

        {!loading && (
            <>
                <ProfilePost img="/img1.png"/>
                <ProfilePost img="/img2.png"/>
                <ProfilePost img="/img3.png"/>
                <ProfilePost img="/img4.png"/>
            </>
        )}

    </Grid>
  )
}

export default ProfilePosts