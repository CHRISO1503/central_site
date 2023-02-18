import { useCallback, useState } from "react";

export default function useNavButtons() {
    const [currentPos, setCurrentPos] = useState(0);
    const navRight = useCallback(() => {
        setCurrentPos(currentPos + 1);
        console.log(currentPos);
    }, [currentPos, setCurrentPos]);
    const navLeft = useCallback(() => {
        setCurrentPos(currentPos - 1);
        console.log(currentPos);
    }, [currentPos, setCurrentPos]);

    return { navLeft, navRight, currentPos };
}
