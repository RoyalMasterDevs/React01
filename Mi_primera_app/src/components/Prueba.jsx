// import { useState } from 'react';
// // useState
// export default function Prueba() {

//     const [count, setCount] = useState(0);

//     return (

//         <button onClick={() => setCount(count + 1)}>
//             Contador: {count}
//         </button>

//     );
// }
// ES6
import { useState } from "react";

const Prueba = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);

    }

    return (


        <>
            <p>Contador: {count}</p>
            <button onClick={increment}>
                Incrementar
            </button>
        </>
    );
}

export default Prueba;

