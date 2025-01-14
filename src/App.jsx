import React from "react";
import { Home, About, Contact, Auth } from "./pages";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./Layouts/PageLayout/PageLayout";

function App() {
	return (
		<>
			<PageLayout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/auth" element={<Auth />} />
				</Routes>
			</PageLayout>
		</>
	);
}

export default App;
