import AboutUs from '@/app/sections/AboutUs';
import HowToUseDeliveryService from '@/app/sections/HowToUseDeliveryService';
import Landing from '@/app/sections/Landing';
import Menu from '@/app/sections/Menu';
import PopularNow from '@/app/sections/PopularNow';
import Subscribe from '@/app/sections/Subscribe';
import WhatTheySayAboutUs from '@/app/sections/WhatTheySayAboutUs';

export default function Home() {
	return (
		<main className="">
			<div className="relative overflow-hidden">
				<Landing />
				<PopularNow />
			</div>

			<HowToUseDeliveryService />
			<AboutUs />
			<Menu />
			<WhatTheySayAboutUs />
			<Subscribe />
		</main>
	);
}
