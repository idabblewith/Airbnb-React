import { Text, Image, Box, Button, HStack, VStack, useColorModeValue, Spacer } from '@chakra-ui/react'
import { FaCamera, FaRegHeart, FaStar } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';

interface IRoomProps {
    pk: number;
    isOwner: boolean;
    name: string;
    imageURL: string;
    city: string;
    country: string;
    price: number;
    rating: number;
}

function Room({ pk, name, imageURL, rating, city, country, price, isOwner }: IRoomProps) {
    const locationTextColor = useColorModeValue("gray.600", "gray.300");
    const navigate = useNavigate();
    const onCameraClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(`/rooms/${pk}/photos`)
    }
    const onHeartClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }
    return (
        <Link to={`/rooms/${pk}`}>
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
                        objectFit={"cover"}
                        src={imageURL} />
                    <Button
                        position={"absolute"}
                        top={2}
                        right={-1}
                        color={"white"}
                        variant="unstyled"
                        onClick={isOwner ? onCameraClick : onHeartClick}
                    >
                        {isOwner ? <FaCamera size={20} /> : <FaRegHeart size={20} />}
                    </Button>
                </Box>
                <Box w={"100%"}>
                    <HStack
                        w={"100%"}
                    >
                        <Text
                            w={"75%"}
                            noOfLines={1}
                            as={"b"}>
                            {name}
                        </Text>
                        <Spacer />
                        <HStack
                            spacing={1}
                            _hover={{ color: "red" }}>
                            <FaStar size={15} />
                            <Text>{rating}</Text>
                        </HStack>
                    </HStack>
                    <Text
                        fontSize={"sm"}
                        color={locationTextColor}>
                        {city}, {country}
                    </Text>
                    <Text
                        fontSize={"sm"}
                        color={locationTextColor}>
                        <Text
                            fontSize={"sm"}
                            as={"b"}>${price}</Text> / night
                    </Text>
                </Box>
            </VStack>
        </Link>
    )
}

export default Room
