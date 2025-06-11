import Image from 'next/image';
import React from 'react';
import tempImg from '../../public/images/women.jpg';

function ProfileCircle() {
	return (
		<div className="cursor-pointer w-full h-full p-0.5 rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
			<div className="rounded-full w-full h-full p-0.5 bg-white">
				<Image
					src={tempImg}
					alt="profile"
					className="rounded-full w-full h-full"
				/>
			</div>
		</div>
	);
}

export default ProfileCircle;
