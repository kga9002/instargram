'use client';

import React, { useEffect, useState } from 'react';
import ProfileCircle from './ProfileCircle';
import Image from 'next/image';
import tempImg from '../../../public/images/view.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as EmptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as EmptyBookmark } from '@fortawesome/free-regular-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';

function SinglePost() {
	const [isLiked, setIsLiked] = useState(false);
	const [isBookmarked, setIsBookMarked] = useState(false);

	useEffect(() => {
		console.log(isLiked);
	}, [isLiked]);

	return (
		<div className="w-full rounded-md shadow-md flex flex-col">
			<header className="flex flex-row gap-2 p-2 items-center">
				<div className="w-10 h-10">
					<ProfileCircle />
				</div>
				<span className="font-semibold">kga9002</span>
			</header>
			<div className="flex flex-col">
				<Image
					className="w-full aspect-square"
					src={tempImg}
					alt="post-image"
				/>
				<div className="py-2 px-3 h-10 flex justify-between">
					<button
						type="button"
						className="cursor-pointer"
						onClick={() => setIsLiked((prev) => !prev)}>
						{isLiked ? (
							<FontAwesomeIcon icon={faHeart} size="lg" />
						) : (
							<FontAwesomeIcon icon={EmptyHeart} size="lg" />
						)}
					</button>
					<button
						type="button"
						className="cursor-pointer"
						onClick={() => setIsBookMarked((prev) => !prev)}>
						{isBookmarked ? (
							<FontAwesomeIcon icon={faBookmark} size="lg" />
						) : (
							<FontAwesomeIcon icon={EmptyBookmark} size="lg" />
						)}
					</button>
				</div>
				<div className="px-3 py-2">
					<p className="pb-1 font-semibold">0 like</p>
					<div className="flex flex-row">
						<span className="font-semibold cursor-pointer">kga9002</span>
						<span className="ml-2">happy vacation</span>
					</div>
					<p className="text-neutral-500 py-1">20 seconds ago</p>
					<div className="w-full h-0.25 bg-neutral-300 mt-1 mb-2"></div>
					<div className="flex flex-row items-center">
						<FontAwesomeIcon icon={faFaceSmile} size="lg" />
						<input
							type="text"
							className="ml-2 focus:outline-none"
							placeholder="Add a Comment..."
						/>
						<button
							type="submit"
							className="ml-auto text-blue-400 cursor-pointer">
							Post
						</button>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
}

export default SinglePost;
