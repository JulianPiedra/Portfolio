import React from "react";
import '../css/project.css'
import { useTranslation } from 'react-i18next';
function Project() {
    const { t } = useTranslation();
    return (
        <section className="project" id="project">
            <h1>Projects</h1>
            <div className="projects">
                <div class="card-project">
                    <img
                        class="card__background"
                        src="https://i.imgur.com/QYWAcXk.jpeg"
                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"

                    />
                    <div class="card__content | flow">
                        <div class="card__content--container | flow">
                            <h2 class="card__title">Colombia</h2>
                            <p class="card__description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                                labore laudantium deserunt fugiat numquam.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card-project">
                    <img
                        class="card__background"
                        src="https://i.imgur.com/QYWAcXk.jpeg"
                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"

                    />
                    <div class="card__content | flow">
                        <div class="card__content--container | flow">
                            <h2 class="card__title">Colombia</h2>
                            <p class="card__description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                                labore laudantium deserunt fugiat numquam.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card-project">
                    <img
                        class="card__background"
                        src="https://i.imgur.com/QYWAcXk.jpeg"
                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"

                    />
                    <div class="card__content | flow">
                        <div class="card__content--container | flow">
                            <h2 class="card__title">Colombia</h2>
                            <p class="card__description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                                labore laudantium deserunt fugiat numquam.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card-project">
                    <img
                        class="card__background"
                        src="https://i.imgur.com/QYWAcXk.jpeg"
                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"

                    />
                    <div class="card__content | flow">
                        <div class="card__content--container | flow">
                            <h2 class="card__title">Colombia</h2>
                            <p class="card__description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                                labore laudantium deserunt fugiat numquam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );

}
export default Project;
