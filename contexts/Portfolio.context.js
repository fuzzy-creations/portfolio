import { createContext } from "react";
import { Projects } from '../projects/Projects';

export const PortfolioContext = createContext();

export function PortfolioProvider(props){
    
    return (
        <PortfolioContext.Provider value={{Projects}}>
            {props.children}
        </PortfolioContext.Provider>
        );
}