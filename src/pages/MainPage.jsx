import React, { useState } from 'react';
import './MainPage.css'
import Header from "../components/Header.jsx"
import TaskList from "../components/TaskList.jsx"

function MainPage(){


    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <TaskList/>
            </main>
        </>
    )
}

export default MainPage