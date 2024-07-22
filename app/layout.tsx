import ClientLayout from "./ClientLayout";
import Footer from "./Footer";
import Navbar from "./NavBar";
import ServerLayout from "./server-layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ServerLayout>
			<ClientLayout>
				<nav>
					<Navbar />
				</nav>
				{children}
				<footer>
					<Footer />
				</footer>
			</ClientLayout>
		</ServerLayout>
	);
}
