import { Text, Box, Button, Divider, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaComment, FaGithub } from 'react-icons/fa'

function SocialLogin() {
    return (
        <Box mb={4}>
            <HStack my={8}>
                <Divider />
                <Text
                    textTransform={"uppercase"}
                    as="b"
                    color={"gray.500"}
                    fontSize="xs">Or</Text>
                <Divider />
            </HStack>
            <VStack>
                <Button w={"100%"} leftIcon={<FaGithub />} colorScheme={"telegram"}>Continue with Github</Button>
                <Button w={"100%"} leftIcon={<FaComment />} colorScheme={"yellow"}>Continue with Kakao</Button>
            </VStack>
        </Box>
    )
}

export default SocialLogin