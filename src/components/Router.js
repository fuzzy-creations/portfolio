import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PortfolioContext } from '../contexts/Portfolio.context';
import Portfolio from './Portfolio';
import Project from './Project';
import Error404 from './Error404';


function Router(){
    const { Projects } = useContext(PortfolioContext)

    const project_list = Projects.map(project => <Route path={`/project/${project.url}`} render={(props) => <Project project={project} /> } /> );
    console.log(project_list)
    
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={(props) => <Portfolio /> } />
                {project_list}
                <Route render={() => <Error404 /> } />        
            </Switch>
        </BrowserRouter>
        </>
    )

}

export default Router;