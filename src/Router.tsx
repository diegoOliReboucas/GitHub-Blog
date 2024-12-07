import { Route, Routes } from "react-router-dom";
import { Posts } from "./pages/Posts/Index";
import { SelectedPost } from "./pages/SelectedPost/Index";
import { DefaultLayout } from "./layouts/DefaultLayout/Index";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Posts />} />
                <Route path="post" element={<SelectedPost />} />
            </Route>
        </Routes>
    )
}