import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRoomDetail, getRoomReviews } from "../api";
import { IReview, IRoomDetail } from "../types";
import { Box, Grid, Heading, Skeleton, Image, GridItem, VStack, HStack, Text, Avatar, SkeletonCircle, Container } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

function RoomDetail() {
    const { roomPk } = useParams();
    const { isLoading, data } = useQuery<IRoomDetail>([`room`, roomPk], getRoomDetail)
    console.log(data);
    const { data: reviewsData, isLoading: isReviewsLoading } = useQuery<IReview[]>([`rooms`, roomPk, `reviews`], getRoomReviews);
    return (
        <Box
            px={{
                sm: 10,
                lg: 40,
            }}
            mt={10}
        >
            <Skeleton
                isLoaded={!isLoading}
                w={"25%"} h={"43px"}
            >
                <Heading>{data?.name}</Heading>
            </Skeleton>
            <Grid
                mt={7}
                rounded="xl"
                overflow={"hidden"}
                gap={3}
                height={"60vh"}
                templateRows={"1fr 1fr"}
                templateColumns={"repeat(4, 1fr)"}
            >
                {[0, 1, 2, 3, 4].map((index) => (
                    <GridItem
                        colSpan={index === 0 ? 2 : 1}
                        rowSpan={index === 0 ? 2 : 1}
                        overflow={"hidden"}
                        key={index}>
                        <Skeleton
                            isLoaded={!isLoading} h="100%" w="100%"
                        >
                            <Image src={data?.photos[index].file} w={"100%"} h={"100%"} objectFit={"cover"} />

                        </Skeleton>
                    </GridItem>)
                )
                }
            </Grid>
            <HStack mt={10} w={"40%"} justifyContent={"space-between"}>
                <VStack alignItems={"flex-start"}>
                    <Skeleton isLoaded={!isLoading} h={"30px"}>
                        <Heading fontSize={'2xl'}>
                            House hosted by {data?.owner.username}
                        </Heading>
                    </Skeleton>
                    <Skeleton isLoaded={!isLoading} h={"30px"}>
                        <HStack justifyContent={"flex-start"} w={"100%"} >
                            <Text>{data?.toilets} toilet{data?.toilets == 1 ? "" : "s"}</Text>
                            <Text>|</Text>
                            <Text>{data?.rooms} room{data?.rooms == 1 ? "" : "s"}</Text>
                        </HStack>
                    </Skeleton>

                </VStack>
                <SkeletonCircle isLoaded={!isLoading} h="95px" w="95px">
                    <Avatar size={'xl'}
                        name={data?.owner.username}
                        src={data?.owner.profile_photo} />
                </SkeletonCircle>

            </HStack>
            <Box mt={10}>
                <Heading fontSize={'2xl'} mb={5}>
                    <Skeleton w={'40%'} isLoaded={!isLoading}>
                        <HStack>
                            <FaStar />
                            <Text>{data?.rating}</Text>
                            <Text fontSize={18}>|</Text>
                            <Text>{reviewsData?.length} review{reviewsData?.length === 1 ? "" : "s"}</Text>
                        </HStack>
                    </Skeleton>
                </Heading>
                <Container mx={"none"} maxW="container.lg" mt={35}>
                    <Grid templateColumns={"1fr 1fr"} gap={10}>
                        {reviewsData?.map((review, index) => (
                            <VStack key={index} alignItems={"flex-start"} spacing={0}>
                                <HStack >
                                    <Avatar name={review.user.name}
                                        src={review.user.profile_photo}
                                        size={'md'}
                                    />
                                    <VStack alignItems={"flex-start"}>
                                        <Heading fontSize={'md'}>{review.user.username}</Heading>
                                        <HStack spacing={1}>
                                            <FaStar size={'12px'} />
                                            <Text>{review.rating}</Text>
                                        </HStack>
                                    </VStack>
                                </HStack>
                                <Text>{review.payload}</Text>

                            </VStack>
                        ))}
                    </Grid>
                </Container>

            </Box>
        </Box>
    )
}

export default RoomDetail