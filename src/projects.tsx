import ExternalSites from "./components/molecules/externalSites";
import NavButtons from "./components/molecules/navButtons";
import useNavButtons from "./components/molecules/navButtons.hooks";

export default function Projects() {
    const { navLeft, navRight, currentPos } = useNavButtons();

    return (
        <>
            <ExternalSites currentPos={currentPos} />
            <NavButtons
                currentPos={currentPos}
                navLeft={navLeft}
                navRight={navRight}
            />
        </>
    );
}
