import clsx from 'clsx';
import Image from 'next/image';

const HeroLeft = () => {
	return (
		<div className={clsx('items-center', 'text-center', 'lg:text-start')}>
			<div className="hero_text">
				Enjoy your <span className="text-primary">coffee</span> <br /> before your activity
			</div>
			<div className="mt-6 mb-8 text-[#7E7D7A] text-lg font-normal">
				Boost your productivity and build your <br className='hidden lg:block'/>
				mood with a glass of coffee in the morning
			</div>
			<div className={clsx('flex gap-14', 'justify-center', 'lg:justify-start')}>
				<button className="min-w-[10.611rem] rounded-full bg-coffee px-8 py-3 text-white text-sm font-semibold hover:bg-opacity-90 hover:drop-shadow-2xl transition duration-150">
					Order now
					<div className="inline-flex ml-2 bg-primary rounded-full w-6 h-6 items-center justify-center">
						<Image src="/images/cart.png" alt="cart-icon" width={12} height={12} />
					</div>
				</button>
				<button className="text-[#F4AE26] text-sm font-semibold">More menu</button>
			</div>
		</div>
	);
};

export default HeroLeft;
