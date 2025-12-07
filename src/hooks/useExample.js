import { useState } from "react";

export default function useExample() {
    const [count, setCount] = useState(0);

    return {
        count,
        increment: () => setCount((c) => c + 1),
    };
}
