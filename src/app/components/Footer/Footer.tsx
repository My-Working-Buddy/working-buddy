import { ReactNode } from "react";

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import mainLogo from "../../../assets/logo/mwb-logo.png";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2} color={"blue.500"}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box bg={"blue.900"} color={"white"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <img src={mainLogo} alt="logo" />
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Services</ListHeader>
            <Link href={"#"}>Join Working buddy</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Resource</ListHeader>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Community</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contacts</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      {/* <Divider orientation="horizontal" color={"red.400"} /> */}
      <Box borderTop={1} borderColor={"gray.600"} borderStyle={"solid"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text fontSize={"sm"}>© 2023 Working buddy. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            Social icons
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
