import React from "react";
import About from "./About";
import HomePage from "./HomePage";
import Header from "./Header";
import CoursePage from "./CoursePage";
import { Route } from 'react-router-dom'


function App() {
    return (
        <div className="container-fluid">
            <Header />
            <main>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={About} />
                <Route path="/course" component={CoursePage} />
            </main>
        </div>
    )
}

export default App;