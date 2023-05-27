import React, { useState } from 'react';

function Contact() {
	const [result, setResult] = useState({
		message: '',
		visible: false,
	});
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		message: '',
	});

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const target = e.target as HTMLFormElement;
		const formData = new FormData(target);

		formData.append('access_key', 'd946b178-a9f7-41dc-adb7-90335e0e00f1');

		const res = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData,
		}).then((res) => res.json());

		if (res.success) {
			console.log('Success', res);
			setResult({ message: res.message, visible: true });
		} else {
			console.log('Error', res);
			setResult({ message: res.message, visible: true });
		}
		setInputs({ name: '', email: '', message: '' });
	}

	function handleInput(e) {
		console.log(e.target, e.target.id, e.target.value);
		if (e.target.id === 'name') {
			setInputs({ ...inputs, name: e.target.value });
		}
		if (e.target.id === 'email') {
			setInputs({ ...inputs, email: e.target.value });
		}

		if (e.target.id === 'message') {
			setInputs({ ...inputs, message: e.target.value });
		}
	}

	return (
		<section id='contactll' className='contact px-6 py-12'>
			<div className='text-center flex flex-col justify-center gap-8 max-w-6xl mx-auto lg:text-left lg:flex-row'>
				<div className='basis-2/4'>
					<h2 className='contact__heading text-5xl mb-8'>Contact</h2>
					<p className='max-w-md mx-auto lg:mx-0'>
						I would like to hear about your project and how I could help. Please
						fill in the form, and I'll get back to you as soon as possible.
					</p>
				</div>
				<form
					className='contact__form grid gap-6 w-full max-w-lg mx-auto'
					onSubmit={onSubmit}
				>
					<span
						className={result.visible ? 'bg-green p-2' : 'bg-green p-2 hidden'}
					>
						{result.message}
					</span>
					<div className='contact__input-container'>
						<label className='contact__label sr-only' htmlFor='name'>
							Name
						</label>
						<input
							id='name'
							className='contact__input bg-transparent w-full border-b-2 p-2'
							type='text'
							placeholder='Name'
							name='name'
							value={inputs.name}
							onChange={handleInput}
						/>
					</div>
					<div className='contact__input-container'>
						<label className='contact__label sr-only' htmlFor='email'>
							Email
						</label>
						<input
							id='email'
							className='contact__input bg-transparent w-full border-b-2 p-2'
							type='email'
							placeholder='Email'
							name='email'
							value={inputs.email}
							onChange={handleInput}
						/>
					</div>
					<div className='contact__input-container contact__message contact__textarea contact--full'>
						<label className='contact__label sr-only' htmlFor='message'>
							Message
						</label>
						<textarea
							id='message'
							className='contact__input contact__textarea contact--full bg-transparent w-full border-b-2 p-2'
							rows={5}
							name='message'
							placeholder='Message'
							value={inputs.message}
							onChange={handleInput}
						></textarea>
					</div>
					<button
						type='submit'
						className='contact__submit contact--full justify-self-end'
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
