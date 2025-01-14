import React from "react";
import { About, Contact, Auth, HomePage } from "./pages";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./Layouts/PageLayout/PageLayout";

function App() {
	return (
		<>
			<PageLayout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/auth" element={<Auth />} />
				</Routes>
			</PageLayout>
		</>
	);
}

export default App;
