import { Grid } from '@chakra-ui/react'
import { getRooms } from '../api';
import Room from '../components/Room'
import RoomSkeleton from '../components/RoomSkeleton'
import { useQuery } from '@tanstack/react-query';
import { IRoomList } from "../types";

function Home() {
    const { isLoading, data } = useQuery<IRoomList[]>(["rooms"], getRooms);
    return (
        <Grid
            columnGap={4}
            rowGap={8}
            templateColumns={{
                sm: "1fr",
                md: "1fr 1fr",
                lg: "repeat(2, 1fr)",
                xl: "repeat(3, 1fr)",
                "2xl": "repeat(4, 1fr)",
                "3xl": "repeat(5, 1fr)",
                "4xl": "repeat(6,1fr)",
            }}
            px={{
                sm: 10,
                lg: 40,
            }}
            mt={10}
        >
            {isLoading ? (
                <>
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                </>
            ) : null}
            {data?.map(room => {
                console.log(room);
                return <Room
                    key={room.pk}
                    pk={room.pk}
                    isOwner={room.is_owner}
                    name={room.name}
                    price={room.price}
                    rating={room.rating}
                    city={room.city}
                    country={room.country}
                    imageURL={
                        room.photos[0] === undefined ?
                            "https://a0.muscache.com/im/pictures/c2da931b-1f28-434c-8f99-d82f816a2ec6.jpg?im_w=720" :
                            room.photos[0].file === undefined ?
                                "data:image/jpeg;base64,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" :
                                room.photos[0].file
                    }
                />
            }
            )}


        </Grid>
    )
}

export default Home