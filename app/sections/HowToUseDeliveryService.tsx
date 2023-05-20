import clsx from 'clsx';
import Image from 'next/image';
import PageContainer from '../../components/PageContainer';

const HowToUseDeliveryService = () => {
	function renderService(name: string, caption: string, image: string) {
		return (
			<div
				className={clsx(
					'flex flex-col items-center p-4 text-center justify-center cursor-pointer bg-white',
					'hover:bg-secondary hover:bg-opacity-30 hover:rounded-xl transition-colors ease-out duration-500',
					'lg:last:col-span-2',
					'xl:last:col-span-1',
				)}
			>
				<Image src={image} alt="service-1" width={159} height={159} className="" />
				<div className="mt-4 flex flex-col items-center">
					<div className="font-semibold text-2xl text-coffee">{name}</div>
					<div className="mt-2 font-normal text-lg ">{caption}</div>
				</div>
			</div>
		);
	}
	return (
		<PageContainer className="bg-white mb-36 py-20">
			<PageContainer.Content>
				<div className="font-semibold text-3xl"></div>
				<div className="text-4xl font-semibold">
					How to use delivery <span className="underline decoration-primary decoration-4">service</span>
				</div>
				<div className="mt-12 grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-9 ">
					{renderService(
						'choose your coffee',
						'there are 20+ coffees for you',
						'/images/services/service-1.png',
					)}
					{renderService(
						'we delivery it to you',
						'Choose delivery service',
						'/images/services/service-2.png',
					)}
					{renderService('Enjoy your coffee', 'Choose delivery service', '/images/services/service-3.png')}
				</div>
			</PageContainer.Content>
		</PageContainer>
	);
};

export default HowToUseDeliveryService;
