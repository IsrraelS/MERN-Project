import { Switch, Route } from "react-router-dom";

//components
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AccountPage from "../pages/AccountPage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectPage from "../pages/ProjectPage";
import UsersPage from "../pages/admin/UsersPage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import roles from "../helpers/roles";
import routes from '../helpers/routes.js'

export default function AppRouter() {
    return (
                <Switch>
                    <PublicRoute exact path ={routes.home} component={HomePage} />
                    <PublicRoute exact path ={routes.login} component={LoginPage} />
                    <PublicRoute exact path ={routes.register} component={RegisterPage} />
                    <PrivateRoute exact path ={routes.account} component={AccountPage} />
                    <PrivateRoute exact path ={routes.projects} component={ProjectsPage} />
                    <PrivateRoute exact path ={routes.project()} component={ProjectPage} />
                    <PrivateRoute hasRole={roles.admin} exact path={routes.admin.users} component={UsersPage} />
                    <PrivateRoute path ="*" component={NotFoundPage} />
                </Switch>
            )
}
