import React from "react";
import '../css/project.css'
import { useTranslation } from 'react-i18next';
import { ProjectCard } from "./cards";
function Project() {
    const { t } = useTranslation();
    return (
        <section className="project" id="project">
            <h1>{t('project_title')}</h1>
            <div className="projects">
                <ProjectCard
                    imageSrc="sdgsite.png"
                    title={t("sql")}
                    github="https://github.com/JulianPiedra/sqldatagenerator"
                    site="https://julianpiedra.github.io/sqldatagenerator/"
                    techStack={["#React.js", "#Vite", "#CSS"]}
                    siteLang={t("site")}
                    description={t("sql_description")}
                />
                <ProjectCard
                    imageSrc="API.png"
                    title={t("sql")+" API"}
                    github="https://github.com/JulianPiedra/SQLDataGeneratorAPI"
                    site="https://sqldatageneratorapi.runasp.net/swagger/index.html"
                    techStack={["#.NetCore", "#Entity Framework","#OpenAPI", "#MSSQL"]}
                    siteLang={t("site")}
                    description={t("sql_api_description")}
                />
            </div>
        </section>
    );

}
export default Project;
