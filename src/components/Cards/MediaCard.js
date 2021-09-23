import React from 'react';
import { Container } from '@material-ui/core';
import golden from '../../images/golden-retriever.jpg';
import shihtzu from '../../images/shih-tzu.jpg';
import labrador from '../../images/labrador.jpg';

const MediaCard = () => {
	return (
		<div>
			<Container className='shadow'>
				<h4>Mariane @marianeee</h4>
				<p>1/20/21</p>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
					expedita corporis exercitationem accusantium fugiat eaque molestiae
					impedit quia perspiciatis iusto vitae possimus ea, laudantium quos
					rerum libero amet quae eum.
				</p>
				<div>
					<img src={golden} alt='Golden Retriever' height={200} />
				</div>
			</Container>
			<Container className='shadow'>
				<h4>Mariane @marianeee</h4>
				<p>7/1/21</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
					eius libero voluptates quos ullam, temporibus perferendis commodi
					consequuntur rerum consectetur voluptatum dolor dolorem totam aut cum
					porro obcaecati exercitationem! Sint!
				</p>
				<div>
					<img src={shihtzu} alt='Shih Tzu' height={200} />
				</div>
			</Container>
			<Container className='shadow'>
				<h4>Mariane @marianeee</h4>
				<p>4/20/21</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dolore
					libero voluptas asperiores nobis. Laborum necessitatibus sequi
					consequatur illo, possimus harum culpa eos? Quaerat, excepturi. Nihil,
					aspernatur ullam. Aperiam, facere.
				</p>
				<div>
					<img src={labrador} alt='Labrador' height={200} />
				</div>
			</Container>
		</div>
	);
};

export default MediaCard;
