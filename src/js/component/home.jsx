import React from "react";
import  List  from "./list";

//create your first component
const Home = () => {

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">todo list!</h1>	
			<List/>
			<p className="fixed-bottom">
				Made by <a href="https://github.com/Marianvsf">Marian Suárez</a> on
				<a href="http://www.4geeksacademy.com"> 4Geeks Academy</a>!
			</p>
		</div>
	);
};

export default Home;
