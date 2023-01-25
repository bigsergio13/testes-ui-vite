import React, { createContext, useEffect, useState } from "react";
import { apitasks } from "../services/api";

export interface Task {
    id: string;
    type: string | null;
    company: string | null;
    dateDelivery: string | null;
}

const Context = createContext<Task | any>(null);

export const ContextProvider = ({ children }: any) => {
    const [tasks, setTasks] = useState<Task[]>(apitasks)
    const tasksSize = tasks.length
    return (
        <Context.Provider value={{tasks, setTasks, tasksSize}}>
            {children}
        </Context.Provider>
    );
};

export default Context;
