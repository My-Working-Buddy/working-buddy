import { Button, Card, CardBody, Heading, Text } from "@chakra-ui/react";

export const TestingApp = () => {
  return (
    <div>
      <Heading> This is a heading</Heading>
      <Card>
        <CardBody>
          <Text>Testing body content</Text>
        </CardBody>
      </Card>

      <Button colorScheme="red" size="lg">
        Button using chakra
      </Button>
    </div>
  );
};

export default TestingApp;
