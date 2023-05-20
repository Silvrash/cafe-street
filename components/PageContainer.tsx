import clsx from 'clsx';
import React from 'react';

const PageContainer = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
	return (
		<div {...props} className={clsx('flex flex-col items-center', props.className)}>
			{props.children}
		</div>
	);
};

const Content = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
	return (
		<div {...props} className={clsx('container px-[10%]', props.className)}>
			{props.children}
		</div>
	);
};

PageContainer.Content = Content;

export default PageContainer;
