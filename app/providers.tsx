import { ChakraProvider } from "@chakra-ui/react";
import { jrTheme } from "@/app/theme";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return <ChakraProvider theme={jrTheme}>{children}</ChakraProvider>;
};
