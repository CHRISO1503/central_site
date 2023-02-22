import ExternalSites from "./components/molecules/externalSites";
import NavButtons from "./components/molecules/navButtons";
import useNavButtons from "./components/molecules/navButtons.hooks";
import ProjectsHeader from "./components/molecules/projectsHeader";
import "./projects.css";

export default function Projects() {
    const { navLeft, navRight, currentPos } = useNavButtons();

    return (
        <div className="projects">
            <ProjectsHeader/>
            <ExternalSites currentPos={currentPos} />
            <NavButtons
                navLeft={navLeft}
                navRight={navRight}
            />
        </div>
    );
}
