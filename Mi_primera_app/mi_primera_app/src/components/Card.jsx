// export default function Card(props) {
//     return (
//         <>
//             <h2>{props.title}</h2>
//             <p>{props.description}</p>
//         </>
//     );
// }
function Card({ title, description, price }) {
    return (
        <>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </>
    );
}

export default Card;