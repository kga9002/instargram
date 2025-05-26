import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './global.css';

const pretendard = localFont({
	src: '../../public/fonts/PretendardVariable.woff2',
	display: 'swap',
	weight: '45 920',
	variable: '--font-pretendard',
});

export const metadata: Metadata = {
	title: 'Instargram',
	description: 'clone the instagram',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${pretendard.className} flex flex-col 100vw 100vh`}>
				<header className="w-full h-10 bg-yellow-500"></header>
				<div className="w-full overflow-scroll"></div>
				{children}
			</body>
		</html>
	);
}
