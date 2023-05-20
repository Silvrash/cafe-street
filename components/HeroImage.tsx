'use client';

import Image from 'next/image';
import { useRef } from 'react';

const lg = '(min-width: 1024px)';
const HeroImage = () => {
	const priority = useRef(window.matchMedia(lg).matches);
	return (
		<Image
			src="/images/hero/img-hero.webp"
			alt="landing_cup"
			width={416}
			height={416}
			priority={priority.current}
		/>
	);
};

export default HeroImage;
