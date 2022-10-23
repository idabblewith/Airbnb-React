import { Button, Heading, Spinner, Text, useToast, VStack } from '@chakra-ui/react'
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { githubLogin } from '../api';

export default function LineConfirm() {
    const { search } = useLocation();
    const toast = useToast();
    const QueryClient = useQueryClient();
    const navigate = useNavigate();
    const confirmLogin = async () => {
        const params = new URLSearchParams(search);
        const code = params.get("code");
        if (code) {
            const status = await githubLogin(code);
            if (status == 200) {
                toast({
                    status: "success",
                    title: "Logged In",
                    description: "Welcome back!",
                    position: "bottom-right"
                });
                QueryClient.refetchQueries(['me']);
                navigate("/");
            } else {
                toast({
                    status: "error",
                    title: "Error",
                    description: "Something went wrong!",
                    position: "bottom-right"
                })
            }
        }
    }
    useEffect(() => {
        confirmLogin();
    }, []);
    return (
        <VStack
            justifyContent={"center"}
            mt={40}
        >
            <Heading>Logging In...</Heading>
            <Text>Please wait a moment.</Text>
            <Spinner size={'lg'} />
        </VStack>
    );
}