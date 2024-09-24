import React from "react";
import  List  from "./list";

//create your first component
const Home = () => {

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Todo List!</h1>
			
			<List/>

			<p className="fixed-bottom">
				Made by Marian Suarez{" "}
				<a href="http://www.4geeksacademy.com"> on 4Geeks Academy</a>!
			</p>
		</div>
	);
};

export default Home;
