import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaLock, FaUserNinja } from 'react-icons/fa'
import SocialLogin from './SocialLogin'

interface LoginModalProps {
    isOpen: boolean,
    onClose: () => void;
}

function LoginModal({ isOpen, onClose }: LoginModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Login</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color={"gray.500"}>
                                    <FaUserNinja />
                                </Box>} />
                            <Input
                                placeholder='Username'
                                variant={"filled"} />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color={"gray.500"}>
                                    <FaLock />
                                </Box>} />
                            <Input
                                placeholder='Password'
                                variant={"filled"} />
                        </InputGroup>
                    </VStack>
                    <Button colorScheme={"red"} w={"100%"} mt={4} mb={4}>Login</Button>

                    <SocialLogin />
                </ModalBody>

            </ModalContent>

        </Modal>)
}

export default LoginModal