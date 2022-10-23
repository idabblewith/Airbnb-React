import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaLock, FaUserNinja } from 'react-icons/fa'
import SocialLogin from './SocialLogin'
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IUsernameLoginError, IUsernameLoginSuccess, IUsernameLoginVariables, usernameLogin } from '../api';

interface LoginModalProps {
    isOpen: boolean,
    onClose: () => void;
}

interface ILoginForm {
    username: string;
    password: string;
}

function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ILoginForm>(); // Generics could optionally go here (IUSucc,Errr,Variab)
    // watch, handleForm, formState
    const toast = useToast();
    const queryClient = useQueryClient();
    const mutation = useMutation(usernameLogin, {
        // onMutation - unused
        onSuccess: (data) => {
            console.log("mutation successful");
            toast({
                title: "Welcome back!",
                status: "success",
                position: "bottom-right",
            });
            onClose();
            reset();
            queryClient.refetchQueries(["me"])
        },
        onError: (error) => {
            console.log("mutation failed");
            toast({
                title: "Failed",
                status: "error",
                position: "bottom-right",
            })
        }
    });
    const onSubmit = ({ username, password }: ILoginForm) => {
        mutation.mutate({ username, password });
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Login</ModalHeader>
                <ModalCloseButton />
                <ModalBody as={"form"} onSubmit={handleSubmit(onSubmit)}>
                    <VStack>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color={"gray.500"}>
                                    <FaUserNinja />
                                </Box>} />
                            <Input
                                isInvalid={Boolean(errors.password?.message)}
                                {...register("username", {
                                    required: "Please provide a username",
                                })}
                                required
                                placeholder='Username'
                                variant={"filled"} />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color={"gray.500"}>
                                    <FaLock />
                                </Box>} />
                            <Input
                                isInvalid={Boolean(errors.password?.message)}
                                {...register("password", {
                                    required: "Please provide a password",
                                })}
                                required
                                type="password"
                                placeholder='Password'
                                variant={"filled"} />
                        </InputGroup>
                    </VStack>
                    {mutation.isError ?
                        <Text color={"red.500"} textAlign="center" fontSize={"sm"}>Username or password are wrong</Text> : ""}
                    <Button
                        isLoading={mutation.isLoading}
                        type='submit'
                        colorScheme={"red"}
                        w={"100%"}
                        mt={4}
                        mb={4}
                    >
                        Login
                    </Button>
                    <SocialLogin />
                </ModalBody>

            </ModalContent>

        </Modal>)
}

export default LoginModal