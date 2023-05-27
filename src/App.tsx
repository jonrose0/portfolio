import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
	return (
		<div className='App scroll-smooth font-openSans bg-main text-secondary'>
			<Header />
			<main>
				<Hero />
				<Projects />
				<Contact />
			</main>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
