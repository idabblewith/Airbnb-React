import { Text, Image, Box, Button, Grid, HStack, VStack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FaRegHeart, FaStar } from 'react-icons/fa'

function Room() {
    const locationTextColor = useColorModeValue("gray.600", "gray.300");
    return (
        <VStack
            alignItems={"flex-start"}
            spacing={1}>
            <Box
                overflow={"hidden"}
                rounded="3xl"
                mb={3}
                position={"relative"}
            >
                <Image
                    height={{ sm: 315, lg: 290, xl: 380 }}
                    minW={280}
                    width={{ sm: 800, lg: 600, xl: 800, '2xl': 1000 }}

                    src="https://a0.muscache.com/im/pictures/c2da931b-1f28-434c-8f99-d82f816a2ec6.jpg?im_w=720" />
                <Button
                    position={"absolute"}
                    top={2}
                    right={-1}
                    color={"white"}
                    variant="unstyled">
                    <FaRegHeart size={20} />
                </Button>
            </Box>
            <Box>
                <Grid
                    templateColumns={"6fr 1fr"}
                    gap={2}>
                    <Text
                        fontSize={""}
                        noOfLines={1}
                        as={"b"}>
                        sdasdasfgaesf dssssss ssssssssssssss ssssssssssssss sdfsdfdsf
                    </Text>
                    <HStack
                        spacing={1}
                        _hover={{ color: "red" }}>
                        <FaStar size={15} />
                        <Text>5.0</Text>
                    </HStack>
                </Grid>
                <Text
                    fontSize={"sm"}
                    color={locationTextColor}>
                    Osaka, Japan
                </Text>
            </Box>

            <Text
                fontSize={"sm"}
                color={locationTextColor}>
                <Text
                    fontSize={"sm"}
                    as={"b"}>$72</Text> / night
            </Text>
        </VStack>
    )
}

export default Room
