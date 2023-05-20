import clsx from 'clsx';
import Image from 'next/image';
import PageContainer from '../../components/PageContainer';

const AboutUs = () => {
	return (
		<PageContainer className="min-h-[30.25rem] mt-60 bg-[url('/images/coffee-cups.svg')] bg-opacity-30 ">
			<PageContainer.Content className={clsx('grid px-20 py-12 grid-cols-1', 'md:grid-cols-2')}>
				<div className="col-span-1 relative -top-10">
					<div className="flex items-center justify-center  w-full">
						<div
							className={clsx(
								'glass p-2 mt-5 rounded-2xl flex items-center justify-center',
								'lg:absolute lg:-top-24 lg:mt-0 lg:left-[20%]',
							)}
						>
							<Image
								src="/images/about_expresso.png"
								alt="expresso"
								width={359.13}
								height={497.67}
								className="rounded-2xl"
							/>
						</div>
					</div>
				</div>

				<div className="col-span-1 md:ml-[15%] lg:ml-[5%]">
					<div className={clsx('text-4xl font-semibold', 'text-center', 'md:text-start')}>
						About <span className="underline decoration-primary decoration-4">us</span>
					</div>
					<div className={clsx('mt-6 font-semibold text-2xl', 'text-center', 'md:text-start')}>
						We provide quality coffee, <br className="hidden md:block" /> and ready to deliver.
					</div>
					<div
						className={clsx(
							'mt-4 text-[#7E7D7A] font-normal text-lg',
							'text-center',
							'md:text-start lg:w-[80%]',
						)}
					>
						We are a company that makes and distributes delicious drinks. our main product is made with a
						secret recipe and available in stores worldwide.
					</div>
					<div className={clsx('mt-8', 'flex items-center justify-center', 'md:block')}>
						<button
							className={clsx(
								'bg-coffee rounded-full flex items-center justify-center py-3 px-6 text-[#F4AE26] font-bold text-xs ',
								'hover:bg-opacity-90 transition-all duration-300 ease-out',
							)}
						>
							Get your coffee
						</button>
					</div>
				</div>
			</PageContainer.Content>
		</PageContainer>
	);
};

export default AboutUs;
