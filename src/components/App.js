import React from "react";
import HomePage from "./HomePage";
import About from "./About";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import ManageCoursePage from "./ManageCoursePage";

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/about" component={About} />
                <Route path="/course/:slug" component={ManageCoursePage} />
                <Redirect from="/about-page" to="about" />

            </Switch>
        </div>
    );
}

export default App;
