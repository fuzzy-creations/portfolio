import React, { createContext } from "react";
import { Projects, Project } from '../projects/Projects';

interface PortfolioContextType {
    Projects: Array<Project>;
  }

export const PortfolioContext = createContext<PortfolioContextType>({
    Projects: []
});

export function PortfolioProvider({children}: {children: React.ReactNode} ) {

    return (
        <PortfolioContext.Provider value={{Projects}}>
            {children}
        </PortfolioContext.Provider>
        );
}