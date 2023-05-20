'use client';

import Image from 'next/image';

const HeroImage = () => {
	return <Image src="/images/hero/img-hero.webp" alt="landing_cup" width={416} height={416} priority/>;
};

export default HeroImage;
