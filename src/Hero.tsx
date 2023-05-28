function Hero() {
	return (
		<section
			id='about'
			className='min-h-screen bg-main flex flex-col justify-center text-center px-6'
		>
			<h1 className='text-4xl font-bold mb-4 md:text-7xl'>
				Nice to meet you!
				<br />
				I'm Jon Rose.
			</h1>
			<p className='leading-7 max-w-3xl	mx-auto'>
				I'm a web developer from Texas, currently focusing on front-end, with a
				goal to become full-stack developer. Currently looking for an entry
				level position.
			</p>
		</section>
	);
}

export default Hero;
