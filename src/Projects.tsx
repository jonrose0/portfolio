import React, { useEffect, useRef, useState } from 'react';
import { projects } from './data';

function Projects() {
	const [isVisible, setIsVisible] = useState(false);
	const containerRef = useRef(null);

	function isobserving(entries: any) {
		const [entry] = entries;
		entry.isIntersecting && setIsVisible(true);
	}

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.1,
	};

	useEffect(() => {
		const observer = new IntersectionObserver(isobserving, options);
		if (containerRef.current) observer.observe(containerRef.current);

		return () => {
			if (containerRef.current) observer.disconnect();
		};
	}, []);

	return (
		<section id='portfolio' className='portfolio overflow-x-hidden px-6 py-32'>
			<div className='portfolio__container flex flex-col justify-center max-w-7xl mx-auto'>
				<h2 className='portfolio__heading text-5xl text-center mb-20'>
					Projects
				</h2>
				<div
					className='portfolio__items grid grid-cols-fluid-sm justify-items-center gap-8 md:grid-cols-fluid-md'
					ref={containerRef}
				>
					{projects.map((project, index) => {
						return (
							<div
								key={project.id}
								className={
									isVisible
										? `portfolio__item bg-header max-w-lg shadow-md  transition-[transform,opacity] duration-1000 ${
												index > 2 ? 'delay-500' : ''
										  }`
										: 'portfolio__item bg-header max-w-lg shadow-md opacity-0 translate-x-full transition-[transform,opacity] duration-1000'
								}
							>
								<img className='portfolio__image' src={project.image} alt='' />
								<div className='portfolio__content p-6'>
									<h3 className='portfolio__image-name text-2xl my-2 md:text-3xl'>
										{project.name}
									</h3>
									<ul className='languages flex gap-2 mb-4'>
										{project.languages.map((lang, index) => {
											return (
												<li
													key={index}
													className='languages__list-item languages--html font-bold uppercase'
												>
													{lang}
												</li>
											);
										})}
									</ul>
									<div className='portfolio__cta flex gap-6'>
										<a
											className='portfolio__btn portfolio__btn--left text-sm uppercase relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-full after:border-b-2 after:scale-x-50 after:transition-transform hover:after:scale-x-100 md:text-base'
											href={project.project}
											target='_blank'
										>
											view project
										</a>
										<a
											className='portfolio__btn text-sm uppercase relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-full after:border-b-2 after:scale-x-50 after:transition-transform hover:after:scale-x-100 md:text-base'
											href={project.code}
											target='_blank'
										>
											view code
										</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Projects;
