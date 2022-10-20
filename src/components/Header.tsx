import { Box, Button, HStack, IconButton, LightMode, Stack, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { FaAirbnb, FaMoon, FaSun } from 'react-icons/fa'
import LoginModal from './LoginModal'
import SignupModal from './SignupModal';
import { AnimatePresence, motion } from 'framer-motion';

function Header() {
    const { isOpen: isLoginOpen, onClose: onLoginClose, onOpen: onLoginOpen } = useDisclosure();
    const { isOpen: isSignupOpen, onClose: onSignupClose, onOpen: onSignupOpen } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const logoColor = useColorModeValue("red.500", "red.200");
    const colorToggleICon = useColorModeValue(<FaMoon />, <FaSun />)

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

                <Button
                    onClick={onLoginOpen}
                >Login</Button>
                <LightMode>
                    <Button colorScheme={"red"}
                        onClick={onSignupOpen}
                    >Signup</Button>
                </LightMode>

            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignupModal isOpen={isSignupOpen} onClose={onSignupClose} />
        </Stack>
    )
}

export default Header