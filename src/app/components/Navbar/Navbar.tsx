import React from "react";
import mainLogo from "../../../assets/logo/mwb-logo.png";
import { useTranslation } from "../../../Locales";


import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  HStack,
  useDisclosure,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();


  return (
    <div id="navFix">
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={9}
        width={["100%"]}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} gap={8}>
          <Box boxSize="150px" py={6}>
           <a href="/">
            <img src={mainLogo} alt="logo"/>
          </a>
          </Box>

          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                <Button className="btnRes">
                  <a href="/about">
                    {" "}
                    {t("navbar.about")}
                  </a>
                </Button>

                <Button className="btnRes">
                  <a href="/contact">
                  {t("navbar.contact")}
                  </a>
                </Button>

                <Button className="btnRes">
                  <a href="/blog">
                    {" "}
                    {t("navbar.blog")}
                  </a>
                </Button>    
              </HStack>
            </HStack>
          </Flex>


          <Flex alignItems={"center"}>
            <Menu>

              <MenuButton
              as={Button}
                backgroundColor="blue"
                _hover={{ bg: "#a891b7", color: "black" }}
                color="white"
                id="resumeBtn"
              >
               
               {t("navbar.sign_in.headline")}
              </MenuButton>
              <MenuList>
                <MenuItem as="a" href="/login">
                {t("navbar.sign_in.login")}
                </MenuItem>
                <MenuItem as="a" href="/signup">
                {t("navbar.sign_in.sign_up")}
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="/">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="/about">
                    <b>About Us</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="/contact">
                    {" "}
                    <b>Contact Us</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="/blog">
                    <b>Blog</b>
                  </a>
                </Button>
              </Stack>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </div>
  );
}




