import React from 'react';
import projects from './data/projects.json';

const SectionThree = () => (
    <div className="this-div3">
        <div className="subject">
            <h5>APPS</h5>
        </div>
        <div className="content">
            <p>
                These are some of the recent apps and websites we
                have engineered:
            </p>
            <ul>
                { projects.map(project => (
                    <li>
                        <a href={ project.link }>{ project.name }</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default SectionThree;