import { Box, HStack, Skeleton, SkeletonCircle, SkeletonText, Spacer } from "@chakra-ui/react"

function SkeletonRoom() {
    return (
        <Box>
            <Skeleton height={{ sm: 315, lg: 290, xl: 380 }} rounded="3xl" mb={3} minW={280} />
            <HStack mb={-0.5} w={"100%"}>
                <SkeletonText noOfLines={1} w={"75%"} />
                <Spacer />
                <SkeletonCircle py={1} px={7} />
            </HStack>
            <SkeletonText noOfLines={1} w={"40%"} mb={3} />
            <SkeletonText noOfLines={1} w={"25%"} mt={4} />
        </Box>
    )
}

export default SkeletonRoom