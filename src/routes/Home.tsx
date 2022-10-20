import { Grid } from '@chakra-ui/react'
import Room from '../components/Room'
import SkeletonRoom from '../components/SkeletonRoom'

function Home() {
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
            <SkeletonRoom />
            <SkeletonRoom />
            <SkeletonRoom />
            <Room />
            <SkeletonRoom />
            <SkeletonRoom />
            <Room />

        </Grid>
    )
}

export default Home