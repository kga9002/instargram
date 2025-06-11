import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './global.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import NavBar from '@/components/NavBar';
config.autoAddCss = false;

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
}: Readonly<{ children: React.ReactNode }>) {

	return (
		<html lang="en">
			<body
				className={`${pretendard.className} flex flex-col w-screen h-screen`}>
				<header className="w-full h-fit py-4 px-4 flex flex-row justify-between items-center border-solid border-b border-gray-400">
					<NavBar />
				</header>
				<div className="w-full grow overflow-hidden">
					<div className="w-full h-full overflow-auto">{children}</div>
				</div>
			</body>
		</html>
	);
}
