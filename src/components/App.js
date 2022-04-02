import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import About from "./About";
import ManageCoursePage from "./ManageCoursePage";
import NotFoundPage from "./NotFoundPage";

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/about" component={About} />
                <Route path="/course/:slug" component={ManageCoursePage} />
                <Route component={NotFoundPage} />
                <Redirect from="/about-page" to="about" />
            </Switch>
        </div>
    );
}

export default App;
