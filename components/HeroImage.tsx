'use client'

import Image from 'next/image';
import { useMediaQuery } from './hooks/useMediaQuery';

const HeroImage = () => {
	const matches = useMediaQuery('(min-width: 1024px)');
    console.log(matches)
	return <Image src="/images/hero/img-hero.webp" alt="landing_cup" width={416} height={416} priority={matches}/>;
};

export default HeroImage;
