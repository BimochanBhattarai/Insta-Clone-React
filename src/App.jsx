import React from "react";
import { Auth, HomePage, ProfilePage } from "./pages";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./Layouts/PageLayout/PageLayout";

function App() {
	return (
		<>
			<PageLayout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/auth" element={<Auth />} />
					<Route path="/:username" element={<ProfilePage />} />
				</Routes>
			</PageLayout>
		</>
	);
}

export default App;
