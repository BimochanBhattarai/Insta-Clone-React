import React from "react";
import { Auth, HomePage, ProfilePage } from "./pages";
import { Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import useAuthStore from "./store/authStore";

function App() {
	const authUser = useAuthStore((state) => state.user);
	return (
		<>
			<PageLayout>
				<Routes>
					<Route path="/" element={authUser ? <HomePage /> : <Navigate to="/auth" />} />
					<Route path="/auth" element={!authUser ? <Auth /> : <Navigate to="/" />} />
					<Route path="/:username" element={<ProfilePage />} />
				</Routes>
			</PageLayout>
		</>
	);
}

export default App;
