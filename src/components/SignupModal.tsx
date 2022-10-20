import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope, FaLock, FaUserNinja, FaUserSecret } from 'react-icons/fa'
import SocialLogin from './SocialLogin'

interface SignupModalProps {
    isOpen: boolean,
    onClose: () => void;
}

function SignupModal({ isOpen, onClose }: SignupModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Signup</ModalHeader>
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
                                    <FaUserSecret />
                                </Box>} />
                            <Input
                                placeholder='Name'
                                variant={"filled"} />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color={"gray.500"}>
                                    <FaEnvelope />
                                </Box>} />
                            <Input
                                placeholder='Email'
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
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color={"gray.500"}>
                                    <FaLock />
                                </Box>} />
                            <Input
                                placeholder='Confirm Password'
                                variant={"filled"} />
                        </InputGroup>

                    </VStack>
                    <Button colorScheme={"red"} w={"100%"} mt={4} mb={4}>Login</Button>

                    <SocialLogin />
                </ModalBody>

            </ModalContent>

        </Modal>)
}

export default SignupModal