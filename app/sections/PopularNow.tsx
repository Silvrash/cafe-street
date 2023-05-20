import clsx from 'clsx';
import Image from 'next/image';
import PageContainer from '../../components/PageContainer';

const PopularNow = () => {
	function renderPopularProduct(name: string, image: string, count: string) {
		return (
			<div className="flex justify-center items-center">
				<div className="min-w-[17.25rem] glass glass_anim p-2 rounded-xl">
					<div className="py-6 px-5 bg-white rounded-xl">
						<Image src={image} alt="product1" width={307} height={226} className="rounded-xl" />
						<div className="mt-5 flex justify-between text-2xl">
							<div className="text-coffee font-semibold">{name}</div>
							<div className="text-coffee font-bold uppercase">{count}</div>
						</div>
						<div className="mt-3 flex justify-between items-center">
							<div className="flex gap-6">
								<div className="ring ring-offset-2 ring-primary w-16 h-6 flex items-center justify-center rounded text-base font-semibold text-primary">
									Hot
								</div>

								<div className="ring ring-offset-2 ring-[#FFD28F] w-16 h-6 flex items-center justify-center rounded text-base font-semibold text-[#FFD28F]">
									Cold
								</div>
							</div>

							<div className="inline-flex self-end self bg-primary rounded-full w-11 h-11 items-center justify-center">
								<Image src="/images/cart.webp" alt="cart-icon" width={18} height={17} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<PageContainer className="relative -top-[6vh] md:-top-[15vh] z-10">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={1268}
				height={364}
				fill="none"
				className={clsx('absolute -z-10 top-0', 'sm:relative sm:z-10')}
			>
				<path
					className="z-0"
					fill="#F9D9AA"
					d="M0 64.936C0 28.089 31.034-1.147 67.815 1.05L1207.82 69.127c33.8 2.019 60.18 30.022 60.18 63.887V300c0 35.346-28.65 64-64 64H64c-35.346 0-64-28.654-64-64V64.936Z"
				/>
			</svg>
			<PageContainer.Content
				className={clsx('-mt-16', 'flex flex-col justify-center', 'sm:absolute sm:z-10 sm:-top-64 sm:mt-0')}
			>
				<div className="text-4xl font-semibold mt-36 pb-8 mb-2">
					Popular <span className="underline decoration-primary decoration-4">Now</span>
				</div>
				<div
					className={clsx('flex gap-10', 'w-screen overflow-y-auto lg:overflow-y-visible pb-10', 'lg:w-auto')}
				>
					{renderPopularProduct('Vanilla Latte', '/images/popular/card_product_1.webp', '21 k')}
					{renderPopularProduct('Espresso', '/images/popular/card_product_2.webp', '12 k')}
					{renderPopularProduct('Hazelnut Latte', '/images/popular/card_product_3.webp', '23 k')}
				</div>
			</PageContainer.Content>
		</PageContainer>
	);
};

export default PopularNow;
