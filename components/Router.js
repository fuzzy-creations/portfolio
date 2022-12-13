import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PortfolioContext } from '../contexts/Portfolio.context';
import Portfolio from './Portfolio';
import Project from './Project';
import Error404 from './Error404';


function Router(){
    const { Projects } = useContext(PortfolioContext)

    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Portfolio /> } />
                {Projects.map(project => <Route path={`/project/${project.url}`} element={<Project project={project} /> } /> )}
                <Route element={() => <Error404 /> } /> 
            </Routes>
        </BrowserRouter>
    );
};

export default Router;