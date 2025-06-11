import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import tempImg from '../../public/images/women.jpg';
import ProfileCircle from '../components/ProfileCircle';
import SinglePost from '../components/SinglePost';

const tempArr = [
	{
		name: 'Anna',
		img: '',
	},
	{
		name: 'Bill',
		img: '',
	},
	{
		name: 'Sophie',
		img: '',
	},
];

export default function Home() {
	return (
		<div className="w-full px-2 md:max-w-[768px] justify-center mx-auto flex flex-row gap-4 mt-4 mb-12">
			<div className="flex flex-col gap-2 grow">
				<section
					style={{
						gridTemplateColumns: 'repeat(auto-fit, minmax(56px, max-content))',
					}}
					className="rounded-md shadow-sm p-4 grid gap-4 w-full">
					{tempArr.map((o) => (
						<div
							key={o.name}
							className="flex flex-col gap-1 w-fit items-center">
							<div className="w-14 h-14">
								<ProfileCircle />
							</div>
							<p>{o.name}</p>
						</div>
					))}
				</section>
				<article>
					<SinglePost />
				</article>
			</div>
			<section className="flex flex-col gap-4 w-[250px] min-w-[250px]">
				<div className="flex flex-row gap-4 items-center">
					<Image
						src={tempImg}
						alt="profile"
						className="w-14 h-14 rounded-full"
					/>
					<div className="flex flex-col gap-1">
						<p className="font-semibold max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
							kga9002
						</p>
						<p className="text-gray-500 max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
							김지애
						</p>
					</div>
				</div>
				<div className="text-gray-400 cursor-pointer">
					About · Help · Press · API · Jobs · Privacy · Terms · Location ·
					Language
				</div>
				<div className="text-gray-600 font-semibold">
					@Copyright INSTARGRAM from METAL
				</div>
			</section>
		</div>
	);
}
