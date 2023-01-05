import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";
import { navigateToUrl } from "single-spa";
import { store } from "@react-spa/store";

export function SignIn() {
  const { signIn } = store;
  return (
    <Stack
      minH={"calc(100vh - 56px)"}
      direction={{ base: "column", md: "row-reverse" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            <Button
              as="a"
              colorScheme={"blue"}
              variant={"solid"}
              href="/products"
              onClick={(event) => {
                signIn();
                navigateToUrl(event);
              }}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg"
          }
        />
      </Flex>
    </Stack>
  );
}
