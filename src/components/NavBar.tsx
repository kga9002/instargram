'use client';

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {
	faArrowRightFromBracket,
	faSquarePlus as SolidPlus,
	faMagnifyingGlassPlus,
} from '@fortawesome/free-solid-svg-icons';
import ProfileCircle from '../components/ProfileCircle';
import { usePathname } from 'next/navigation';

function NavBar() {
	const currentPath = usePathname();
	console.log(currentPath);

	return (
		<>
			<span className="cursor-pointer font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
				<Link key={'home'} href={`/`}>
					Instargram
				</Link>
			</span>
			<div className="items-center flex gap-2">
				<Link href="/search">
					<button type="button">
						{currentPath === '/search' ? (
							<FontAwesomeIcon icon={faMagnifyingGlassPlus} size="xl" />
						) : (
							<FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
						)}
					</button>
				</Link>
				<Link href="/addPost">
					{currentPath === '/addPost' ? (
						<button type="button" className="cursor-pointer w-8 aspect-square">
							<FontAwesomeIcon icon={SolidPlus} size="2xl" />
						</button>
					) : (
						<button type="button" className="cursor-pointer w-8 aspect-square">
							<FontAwesomeIcon icon={faSquarePlus} size="2xl" />
						</button>
					)}
				</Link>
				<div className="w-10 h-10">
					<ProfileCircle />
				</div>

				<button
					type="button"
					className="cursor-pointer rounded-sm bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] h-7 w-fit px-1">
					<div className="text-sm px-1 md:px-3">
						<span className="hidden md:block text-white">Sign In</span>
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
		</>
	);
}

export default NavBar;
