import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './global.css';
import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import {
	faArrowRightFromBracket,
	faSquarePlus as SolidPlus,
} from '@fortawesome/free-solid-svg-icons';
import ProfileCircle from './components/ProfileCircle';

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
			<body
				className={`${pretendard.className} flex flex-col w-screen h-screen`}>
				<header className="w-full h-fit py-4 px-4 flex flex-row justify-between items-center border-solid border-b border-gray-400">
					<span className="cursor-pointer font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
						<Link key={'home'} href={`/`}>
							Instargram
						</Link>
					</span>
					<div>search component</div>
					<div className="items-center flex gap-2">
						{/* @TODO link add post */}
						<button
							type="button"
							className="cursor-pointer group relative w-8 aspect-square">
							<FontAwesomeIcon
								icon={faSquarePlus}
								size="2xl"
								className="group-hover:opacity-0 opacity-100 absolute top-0 left-0"
							/>
							<FontAwesomeIcon
								icon={SolidPlus}
								size="2xl"
								className="group-hover:opacity-100 opacity-0 absolute top-0 left-0"
							/>
						</button>
						<div className="w-10 h-10">
							<ProfileCircle />
						</div>
						{/* @TODO logout */}
						<button
							type="button"
							className="cursor-pointer rounded-sm bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] h-7 w-fit px-1">
							<div className="text-sm px-1 md:px-3">
								<span className="hidden md:block text-white">Sign Out</span>
								<div className="block md:hidden">
									<FontAwesomeIcon
										style={{
											color: '#FFFFFF',
										}}
										icon={faArrowRightFromBracket}
										size="lg"
									/>
								</div>
							</div>
						</button>
					</div>
				</header>
				<div className="w-full grow overflow-hidden">
					<div className="w-full h-full overflow-auto">{children}</div>
				</div>
			</body>
		</html>
	);
}
