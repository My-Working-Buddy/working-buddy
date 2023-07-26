import React from "react";
import mwbCanva from "../../../assets/mwb-canva.jpg";
import { Text, Image, Heading, Card, CardBody, Stack } from "@chakra-ui/react";

export const BannerText = () => {
  return (
    <div className="">
      <Heading size="lg" as="h3">MWB</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </Text>
    </div>
  );
};
const Banner = () => {
  return (
    <div className="max-w">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Stack>
          <CardBody minW="3/4">
            <BannerText/>
          </CardBody>
        </Stack>
        <Image
          objectFit="cover"
          maxW={{ base: "200%", lg: "500px" }}
          src={mwbCanva}
          alt="banner-logo"
        />
      </Card>
    </div>
  );
};

export default Banner;
