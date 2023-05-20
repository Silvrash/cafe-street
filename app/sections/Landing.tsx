import HeroRight from '@/components/HeroRight';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import CartIcon from '../../components/CartIcon';
import HeroLeft from '../../components/HeroLeft';
import NavLogo from '../../components/NavLogo';
import PageContainer from '../../components/PageContainer';
import SearchIcon from '../../components/SearchIcon';

const Landing = () => {
	function renderLink(name: string, href: string, isSelected: boolean = false) {
		return (
			<Link href={href} className={clsx('font-normal', isSelected ? 'text-primary' : 'text-gray-700')}>
				{name}
			</Link>
		);
	}

	return (
		<PageContainer className="min-h-screen bg-[#F6EBDA] pt-9">
			<Image
				src="/images/hero/bg_img_hero_top.webp"
				alt="bg_img_hero"
				width={599}
				height={394}
				className={clsx('object-contain absolute -right-[15%] -top-[5%]', 'md:-right-10 md:-top-1')}
				priority
			/>

			<Image
				src="/images/hero/bg_img_hero_bottom.webp"
				alt="bg_img_hero"
				width={569}
				height={394}
				className={clsx('object-contain absolute left-2 bottom-[30%]', 'md:-left-[10%] md:bottom-[35%]')}
				priority
			/>
			<PageContainer.Content className="relative">
				<nav className="flex flex-row justify-between items-center">
					<NavLogo />
					<div className={clsx('flex flex-row gap-8 font-normal text-lg text-center', 'hidden', 'md:flex')}>
						{renderLink('About us', '#', true)}
						{renderLink('Our Product', '#')}
						{renderLink('Delivery', '#')}
					</div>
					<div className="flex flex-row gap-8 z-10">
						<div className="relative hidden lg:block">
							<SearchIcon className="absolute top-2 left-3 z-10" />
							<input
								type="text"
								className="py-2 pr-2 pl-10 input w-56 h-10 text-[#929292]"
								placeholder="Cappuccino "
							/>
						</div>
						<CartIcon className="cursor-pointer ring rounded-full ring-[#F6EBDA] bg-[#F6EBDA]" />
					</div>
				</nav>

				<div className={clsx('flex justify-center items-center mt-20 z-10', 'lg:justify-between')}>
					<HeroLeft />
					<HeroRight className="z-10 hidden lg:block" />
				</div>
			</PageContainer.Content>
		</PageContainer>
	);
};

export default Landing;
