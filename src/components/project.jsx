import React from "react";
import '../css/project.css'
import { useTranslation } from 'react-i18next';
function Project() {
    const { t } = useTranslation();
    return (
        <section  className="project" id="project">
            {/*Background video*/}
            <div className="card">
                <img src="https://picsum.photos/id/287/250/300" alt="Mountains"/>
                    <div className="description">The Day</div>
            </div>


        </section>
    );

}
export default Project;
