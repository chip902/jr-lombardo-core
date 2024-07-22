import { ChakraProvider } from "@chakra-ui/react";
import { mrTheme } from "@/app/theme";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return <ChakraProvider theme={mrTheme}>{children}</ChakraProvider>;
};
