import React from 'react';

function Footer() {
	const [result, setResult] = React.useState('');

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult('Sending....');
		const formData = new FormData(event.target);

		formData.append('access_key', 'd946b178-a9f7-41dc-adb7-90335e0e00f1');

		const res = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData,
		}).then((res) => res.json());

		if (res.success) {
			console.log('Success', res);
			setResult(res.message);
		} else {
			console.log('Error', res);
			setResult(res.message);
		}
	};

	return (
		<div className='App'>
			<h1>React File Upload Form</h1>
			<form onSubmit={onSubmit}>
				<input type='text' name='name' />
				<input type='email' name='email' />
				<textarea name='message'></textarea>
				<input type='submit' />
			</form>
			<span>{result}</span>
		</div>
	);
}

export default Footer;
