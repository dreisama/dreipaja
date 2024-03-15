import { useState } from 'react';
import '../App.css'

function WikiSidebar() {
    const [showMusic, setShowMusic] = useState(false);

    const toggleMusic = () => {
        setShowMusic(!showMusic);
    };

    return(
        <div className='wiki-sidebar'>
        <div className='content-plus-hide-button'>
            <b className='content-bold'>Contents</b>
            <button className='hide-button'>hide</button>
        </div><br />
        <div className='side-links'>
            <a href="#">(Top)</a><br /><br />
            <a href="#">Computing</a><br /><br />
            <div className="arrow-toggle">
            <button className='toggle-btn' onClick={toggleMusic}>{showMusic ? "▼" : "▶"}</button> <a href="#">Arts and entertainment</a><br /><br />
                </div>
                {showMusic && (
                    <div className="dropdown-content">
                        <a href="#">Music</a><br /><br />
                    </div>
                )}
            <a href="#">Organization</a><br /><br />
            <a href="#">Other uses</a><br /><br />
            <a href="#">See also</a>
        </div>
    </div>
    )
}

export default WikiSidebar