import React, { useState } from 'react';
import "./Header.css"


function Header(){
    const [showPlaceholder, setShowPlaceholder] = useState(false)
    return(
        <>
            <div className='app_name'>
                <p>To Do</p>
            </div>
            <div className="tooltip">
                <div className="search_tool_bar">
                    <div>
                        <i className="fa-solid fa-magnifying-glass search_icon" aria-label="Search"></i>
                    </div>
                    <input
                        type="text"
                        className="search_input"
                        placeholder={showPlaceholder ? "Поиск..." : ""}
                        onFocus={() => setShowPlaceholder(true)}
                        onBlur={() => setShowPlaceholder((false))}
                    />
                </div>
            </div>

            <div>
                <div>
                    <i className="fa-solid fa-gear"></i>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default Header