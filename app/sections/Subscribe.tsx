import clsx from 'clsx';
import PageContainer from '../../components/PageContainer';

const Subscribe = () => {
	return (
		<PageContainer className="bg-white">
			<PageContainer.Content
				className={clsx('h-[39.5rem] flex items-center justify-center overflow-hidden', 'relative')}
			>
				<div
					className={clsx(
						'object-cover subscribe-bg flex flex-col items-center justify-center',
						'h-[24.5rem]',
						'absolute left-0 -mx-6 px-6 right-0 bottom-0',
						'sm:relative sm:rounded-3xl sm:w-[73.125rem]',
					)}
				>
					<div className="text-white font-semibold text-4xl text-center px-2">
						Subscribe to get 50% discount price
					</div>
					<div className={clsx('mt-7 relative flex items-center justify-center', 'w-[100%]', 'md:w-auto')}>
						<input
							type="text"
							className={clsx(
								'input pl-4 pr-[25%] h-12 placeholder:font-semibold text-lg text-[#929292]',
								'w-[80%]',
								'md:w-[30.375rem]',
							)}
							placeholder="Email address"
						/>
						<button
							className={clsx(
								'bg-coffee rounded-full flex items-center justify-center py-3 px-6 text-white font-bold text-xs',
								'transition-all duration-300 ease-out',
								'hover:bg-opacity-90',
								'absolute h-10',
								'right-[11%]',
								'md:right-1',
							)}
						>
							Order now
						</button>
					</div>
				</div>
			</PageContainer.Content>
		</PageContainer>
	);
};

export default Subscribe;
