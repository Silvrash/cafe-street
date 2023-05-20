import clsx from 'clsx';
import Image from 'next/image';
import { Children } from 'react';
import PageContainer from '../../components/PageContainer';

interface MenuItem {
	image: string;
	name: string;
	desc: string;
	count: string;
	rating: number;
}

const menu: MenuItem[] = [
	{
		image: '/images/menu/menu-1.png',
		name: 'Sandwich',
		desc: 'bread with meat and vegetables',
		count: '12 K',
		rating: 4.8,
	},
	{
		image: '/images/menu/menu-2.png',
		name: 'Hot Milk',
		desc: 'Hot Milk with less sugar',
		count: '12 K',
		rating: 4.8,
	},
	{
		image: '/images/menu/menu-3.png',
		name: 'Coffe Ice Cream',
		desc: 'Coffe with ice cream vanilla',
		count: '12 K',
		rating: 4.8,
	},
	{
		image: '/images/menu/menu-4.png',
		name: 'Cappucino',
		desc: 'Hot Cappucino',
		count: '12 K',
		rating: 4.8,
	},
	{
		image: '/images/menu/menu-5.png',
		name: 'Moccacinno',
		desc: 'Hot Moccacino',
		count: '12 K',
		rating: 4.8,
	},
	{
		image: '/images/menu/menu-6.png',
		name: 'Waffle Ice Crem',
		desc: 'Wafle with Ice cream',
		count: '12 K',
		rating: 4.8,
	},
];

const Menu = () => {
	function renderItem(item: MenuItem) {
		return (
			<div className="flex flex-col items-center justify-center">
				<div
					className={clsx(
						'2xl:w-[22.25rem] glass glass_anim min-h-[24.063rem] bg-white shadow py-6 px-4 rounded-xl relative',
						'flex flex-col items-center',
					)}
				>
					<Image
						src={item.image}
						width={307.86}
						height={226}
						className="object-cover rounded-xl"
						alt="menu"
					/>
					<div className="glass rounded-full absolute top-8 left-8">
						<div className="m-2 bg-white min-w-[4.388rem] h-[2.125rem] rounded-full text-coffee text-sm font-bold flex flex-row items-center justify-center py-2 px-3 gap-1">
							{item.rating.toFixed(1)}
							<svg xmlns="http://www.w3.org/2000/svg" width={15} height={14} fill="none">
								<path
									fill="#FFD057"
									stroke="#FFD057"
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6.567 1.536c.187-.492.893-.492 1.08 0l1.208 3.345a.577.577 0 0 0 .54.37h2.967c.549 0 .788.682.357 1.016l-2.112 1.9a.565.565 0 0 0-.188.637l.771 3.268c.188.525-.42.976-.88.653l-2.867-1.82a.584.584 0 0 0-.671 0l-2.869 1.82c-.459.323-1.067-.128-.88-.653l.772-3.268a.565.565 0 0 0-.188-.637l-2.112-1.9c-.431-.334-.19-1.017.356-1.017H4.82a.577.577 0 0 0 .54-.37l1.207-3.344h0Z"
								/>
							</svg>
						</div>
					</div>
					<div className="mt-4 w-[90%] flex flex-row justify-between items-center">
						<div className="flex-[0.8]">
							<div className="text-2xl font-semibold text-coffee">{item.name}</div>
							<div className="mt-2 text-[#7E7D7A] font-semibold text-sm">{item.desc}</div>
						</div>
						<div className="">
							<div className="font-bold text-2xl text-coffee">{item.count}</div>
							<div className="mt-2 flex self-end self bg-primary rounded-full w-11 h-11 items-center justify-center">
								<Image src="/images/cart.png" alt="cart-icon" width={18} height={17} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<PageContainer className="min-h-[70.938rem] bg-white pt-32">
			<PageContainer.Content>
				<div className="text-4xl font-semibold text-center">
					Special menu{' '}
					<span className="underline decoration-primary decoration-4 underline-offset-[0.625rem]">
						for you
					</span>
				</div>
				<div className={clsx('mt-8 grid grid-cols-1 gap-10', 'lg:grid-cols-2', 'xl:grid-cols-3 xl:gap-28')}>
					{Children.toArray(menu.map(renderItem))}
				</div>
			</PageContainer.Content>
		</PageContainer>
	);
};

export default Menu;
