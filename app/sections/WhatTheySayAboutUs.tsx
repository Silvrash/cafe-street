import clsx from 'clsx';
import Image from 'next/image';
import { Children } from 'react';
import PageContainer from '../../components/PageContainer';

interface ReviewItem {
	image: string;
	name: string;
	comment: string;
}

const reviews: ReviewItem[] = [
	{
		name: 'Naura',
		comment: 'I really love the cappuccino, the coffee was very smooth',
		image: '/images/reviews/review-1.webp',
	},
	{
		name: 'John',
		comment: 'this coffee shop is very convenient',
		image: '/images/reviews/review-2.webp',
	},
	{
		name: 'Azura',
		comment: 'the coffee menu here is very much',
		image: '/images/reviews/review-3.webp',
	},
];

const title = 'What they say about us';
const description = 'We always provide the best service and always maintain the quality of coffee';

const WhatTheySayAboutUs = () => {
	function renderReview(item: ReviewItem) {
		return (
			<div className="col-span-1 sm:last:col-span-2 xl:last:col-span-1 sm:mx-auto">
				<div className="w-[16.068rem] relative">
					<Image
						src={item.image}
						alt="review"
						width={203.57}
						height={280}
						className="border-[6px] border-[#FFD3909E]"
					/>
					<div className="absolute w-[14.156rem] h-[5.389rem] bg-[#FFCB7C] p-3 rounded-xl ring-[#FFD3909E] ring-8 ring-opacity-60 left-7 top-[50%]">
						<div className="font-medium text-coffee text-lg">{item.name}</div>
						<div className="font-normal text-sm text-coffee">{item.comment}</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<PageContainer
			className={clsx(
				'min-h-[30.25rem] relative overflow-hidden justify-center',
				"py-36 bg-[url('/images/coffee-cups.svg')] bg-opacity-30 mt-20",
				'xl:bg-none',
			)}
		>
			<div className="hidden xl:flex absolute self-center  flex-col justify-center  left-0 min-h-[30.25rem] w-[70%] bg-[70%] rounded-r-3xl bg-[url('/images/coffee-cups.svg')] bg-opacity-30" />
			<div className="hidden xl:grid absolute right-8 col-span-2 pl-24 grid-cols-3 gap-12">
				{Children.toArray(reviews.map(renderReview))}
			</div>
			<PageContainer.Content className="hidden xl:grid z-10 my-auto grid-cols-3">
				<div className="col-span-1">
					<div className="font-semibold text-3xl">{title}</div>
					<div className="text-[#7E7D7A] font-normal text-lg mt-4 w-[90%]">{description}</div>
				</div>
			</PageContainer.Content>
			<PageContainer.Content className={'z-10 my-auto grid grid-cols-1 xl:hidden'}>
				<div className="col-span-1 flex flex-col items-center">
					<div className="font-semibold text-3xl text-center xl:text-start">{title}</div>
					<div className="text-[#7E7D7A] font-normal text-lg mt-4 w-[90%] text-center xl:text-start">
						{description}
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-9 mt-10">
						{Children.toArray(reviews.map(renderReview))}
					</div>
				</div>
			</PageContainer.Content>
		</PageContainer>
	);
};

export default WhatTheySayAboutUs;
