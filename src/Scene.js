import { Canvas } from 'react-three-fiber';
import { Route } from 'wouter';

import Cube from './Cube';
import Voyager from './Voyager';

function Scene() {
	return (
		<Canvas camera={[5, 0, 0]}>
			<ambientLight intensity={0.5} />
			<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
			<pointLight position={[-10, -10, -10]} />
			<Route path="/Cube">
				<Cube />
			</Route>
			<Route path="/Voy">
				<Voyager />
			</Route>
		</Canvas>
	);
}

export default Scene;
