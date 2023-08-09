import React from "react";
import mainLogo from "../../../assets/logo/mwb-logo-transparent.png";
import { useTranslation } from "../../../Locales";

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useDisclosure,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const MobileNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();

  const MobileNavBarItems = [
    { label: `${t("navbar.home")}` },
    { label: `${t("navbar.about")}`, href: "/about" },
    { label: `${t("navbar.contact")}`, href: "/contact" },
    { label: `${t("navbar.blog")}`, href: "/blog" },
  ];

  return (
    <Stack as={"nav"} p={4} display={{ md: "none" }}>
      {MobileNavBarItems.map((item, idx) => {
        return (
          <Stack spacing={4} onClick={isOpen ? onClose : onOpen} key={idx}>
            <Flex py={2} justify={"space-between"} align={"center"}>
              <a href={item.href ?? "/"}>
                <b>{item.label}</b>
              </a>
            </Flex>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation();

  return (
    <div id="navBar">
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={9} py={2}>
        <Flex align={"center"}>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              size={"md"}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              aria-label={"Open Menu"}
              onClick={onToggle}
            />
          </Flex>
          <Flex
            h={16}
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
          >
            <Box
              boxSize="100px"
              display={"flex"}
              alignItems={"center"}
              paddingBottom={2}
            >
              <a href="/">
                <img src={mainLogo} alt="logo" />
              </a>
            </Box>
          </Flex>

          <Stack
            as={"nav"}
            spacing={4}
            justify={"flex-end"}
            direction={"row"}
            display={{ base: "none", md: "flex" }}
          >
            <a href="/about">{t("navbar.about")}</a>
            <a href="/contact">{t("navbar.contact")}</a>
            <a href="/blog">{t("navbar.blog")}</a>
          </Stack>

          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                backgroundColor="blue.900"
                _hover={{ bg: "#a891b7", color: "black" }}
                color="white"
                mx={4}
              >
                {t("navbar.menu_bar.headline")}
              </MenuButton>
              <MenuList>
                <MenuItem as="a" href="/login">
                  {t("navbar.menu_bar.menu_items.login")}
                </MenuItem>
                <MenuItem as="a" href="/signup">
                  {t("navbar.menu_bar.menu_items.sign_up")}
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        <Collapse in={isOpen}>
          <MobileNavBar />
        </Collapse>
      </Box>
    </div>
  );
}
