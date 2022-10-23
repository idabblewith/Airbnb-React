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
                <Button
                    href='https://github.com/login/oauth/authorize?client_id=b99860fd6028f1114333&scope=read:user,user:email'
                    w={"100%"}
                    as="a"
                    leftIcon={<FaGithub />}
                >
                    Continue with Github
                </Button>
                <Button w={"100%"} leftIcon={<FaComment />} colorScheme={"yellow"}>Continue with Kakao</Button>
            </VStack>
        </Box>
    )
}

export default SocialLogin