import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	weight: [/*'100', '200', '300',*/ '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'Cafe Street',
	description: `Cafe Street is a UI kit design by <a href='https://www.figma.com/@rauliqbal'>Rauliqbal</a> and implemented by <a href='https://github.com/Silvrash'>Benjamin Arko Afrasah</a> as a code project.
The UI kit is designed to provide a seamless and user-friendly experience for ordering coffee, with a focus on modern design and functionality.
The code implementation of the Cafe Street UI kit is just a challenge to the author of this code.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={poppins.className} suppressHydrationWarning>
				{children}
			</body>
		</html>
	);
}
