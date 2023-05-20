const CartIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<div className="relative">
			<svg
				data-te-animation-init
				data-te-animation-reset="true"
				data-te-animation="[slide-right_1s_ease-in-out]"
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					d="M6.66667 9.33333H25.0533C25.4259 9.33334 25.7943 9.41142 26.1349 9.56254C26.4754 9.71365 26.7805 9.93444 27.0305 10.2107C27.2805 10.4869 27.4698 10.8125 27.5863 11.1664C27.7027 11.5203 27.7437 11.8946 27.7067 12.2653L26.9067 20.2653C26.8409 20.9233 26.5329 21.5334 26.0426 21.9772C25.5523 22.4209 24.9146 22.6666 24.2533 22.6667H11.52C10.9033 22.6669 10.3056 22.4534 9.82859 22.0625C9.35162 21.6716 9.02487 21.1274 8.904 20.5227L6.66667 9.33333Z"
					stroke="#1D1D1D"
					strokeWidth="2"
					strokeLinejoin="round"
				/>
				<path
					d="M21.3333 28H24M6.66667 9.33333L5.58667 5.00933C5.51444 4.721 5.34794 4.46508 5.11361 4.28221C4.87928 4.09934 4.59057 4.00001 4.29333 4H2.66667L6.66667 9.33333ZM10.6667 28H13.3333H10.6667Z"
					stroke="#1D1D1D"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<span className="absolute top-1 right-0 flex h-2 w-2">
				<span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF912B] opacity-75"></span>
				<span className="relative inline-flex rounded-full h-2 w-2  bg-[#FF912B]"></span>
			</span>
		</div>
	);
};

export default CartIcon;
