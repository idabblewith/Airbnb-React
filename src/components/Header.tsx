import { Avatar, Box, Button, HStack, IconButton, LightMode, Menu, MenuButton, MenuItem, MenuList, Stack, ToastId, useColorMode, useColorModeValue, useDisclosure, useToast } from '@chakra-ui/react'
import { FaAirbnb, FaMoon, FaSun } from 'react-icons/fa'
import LoginModal from './LoginModal'
import SignupModal from './SignupModal';
import { AnimatePresence, motion } from 'framer-motion';
import useUser from '../lib/useUser';
import { logOut } from '../api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from "react";

function Header() {
    const { userLoading, isLoggedIn, userData } = useUser();
    const { isOpen: isLoginOpen, onClose: onLoginClose, onOpen: onLoginOpen } = useDisclosure();
    const { isOpen: isSignupOpen, onClose: onSignupClose, onOpen: onSignupOpen } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const logoColor = useColorModeValue("red.500", "red.200");
    const colorToggleICon = useColorModeValue(<FaMoon />, <FaSun />)
    const toast = useToast();
    const queryClient = useQueryClient();
    const toastId = useRef<ToastId>();
    const mutation = useMutation(logOut, {
        onMutate: () => {
            toastId.current = toast({
                title: "Login out...",
                description: "Sad to see you go...",
                status: "loading",
                position: "bottom-right",
            });
        },
        onSuccess: () => {
            if (toastId.current) {
                queryClient.refetchQueries(["me"]);
                toast.update(toastId.current, {
                    status: "success",
                    title: "Logged Out",
                    description: "You have successfully logged out",
                });
            }
        },
    });
    const onLogOut = async () => {
        mutation.mutate();
    }
    return (
        <Stack py={5}
            px={{
                base: 10,
                lg: 40,
            }}
            alignItems="center"
            spacing={{
                sm: 4,
                md: 0,
            }}
            borderBottomWidth={1}
            justifyContent={"space-between"}
            direction={{
                sm: "column",
                md: "row",
            }}>
            <Box color={logoColor}>
                <FaAirbnb size={48} />
            </Box>
            <HStack spacing={"2"}>
                <AnimatePresence exitBeforeEnter initial={false}>
                    <motion.div
                        style={{ display: 'inline-block' }}
                        key={useColorModeValue('light', 'dark')}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        <IconButton
                            icon={colorToggleICon}
                            onClick={toggleColorMode}
                            colorScheme={useColorModeValue('blue', 'red')}
                            variant={"ghost"}
                            aria-label='Toggle Dark Mode'
                        />
                    </motion.div>
                </AnimatePresence>

                {!userLoading ? (
                    !isLoggedIn ?
                        <>
                            <Button
                                onClick={onLoginOpen}
                            >
                                Login
                            </Button>
                            <LightMode>
                                <Button colorScheme={"red"}
                                    onClick={onSignupOpen}
                                >
                                    Signup
                                </Button>
                            </LightMode></> :
                        (
                            <Menu>
                                <MenuButton>
                                    <Avatar name={userData?.username} size={'md'} src={userData?.profile_photo} />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={onLogOut}>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        )
                ) : null}

            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignupModal isOpen={isSignupOpen} onClose={onSignupClose} />
        </Stack>
    )
}

export default Header