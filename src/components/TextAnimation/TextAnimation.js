import React from 'react';
import Typical from 'react-typical';

const TextAnimation = () => {
	return (
		<div >
			<Typical
				steps={[
					'Full Stack Web Developer..',
					1500,
					'',
					500,
					'with in Bangladesh..',
					1500,
					'',
					500,
				]}
				loop={Infinity}
				wrapper="h1"
			/>
		</div>
	);
};

export default TextAnimation;