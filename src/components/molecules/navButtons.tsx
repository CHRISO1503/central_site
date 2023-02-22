import "./navButtons.css";

export default function NavButtons({
    navLeft,
    navRight,
}: {
    navLeft: (value: void) => void;
    navRight: (value: void) => void;
}) {
    return (
        <div className="button-container">
            <div onClick={() => navLeft()}>
                <img src="../src/assets/icons/chevron-left.svg" />
            </div>
            <div onClick={() => navRight()}>
                <img src="../src/assets/icons/chevron-right.svg" />
            </div>
        </div>
    );
}
