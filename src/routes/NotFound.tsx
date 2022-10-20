import { Button, Heading, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <VStack
            justifyContent={"center"}
            minH="100vh"
            background={"gray.100"}
        >
            <Heading>Page not found.</Heading>
            <Text>It seems you are lost</Text>
            <Link to='/'>
                <Button
                    variant={"link"}
                    // ghost, solid, link, outline
                    colorScheme={"twitter"}
                // twitter, red
                >Go home &rarr;</Button>
            </Link>
        </VStack>
    );
}

export default NotFound