// layout muốn được bảo vệ
import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Profile from "../pages/Auth/Profile";

export const privateRoute = (
  <>
    <Route path="/" element={<DefaultLayout></DefaultLayout>}>
      <Route path="/profile" element={<Profile></Profile>}></Route>
    </Route>
  </>
);
