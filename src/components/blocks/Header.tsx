
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div
			style={{
				display: "flex",
				gap: "50px",
			}}>
			<Link to='/'>
				<div>Home</div>
			</Link>
			<Link to='/line'>
				<div>Line Chart</div>
			</Link>
			<Link to='/pie'>
				<div>Pie Chart</div>
			</Link>
		</div>
	);
};

export default Header;
