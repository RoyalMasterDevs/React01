import { useEffect, useState } from "react";
import Card from "./Card";
import data from "../data/data.json";

function CardsList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(data);
    }, []);

    return (
        <>
            <div style={{ display: "flex", gap: "20px", padding: "40px" }}>

                {cards.map(card => (
                    <Card
                        title={card.title}
                        description={card.description}
                        imageURL={card.imageURL}
                        link={card.link}
                    />
                ))}

            </div>
        </>
    );

}

export default CardsList;
/* 
No hagas esto. Las reglas de los hooks
1. Solo llamar Hooks en el nivel superior

if (condition){
    useEffect(()=>{});
}
Ni lazos o loops
for (...){
    useEffect(()=>{})''
}
Siempre al inicio del componente

2. Solo usar hooks en componentes funcionales o custom hooks.

functiuon helper(){
useState(0)
}

3. El array de dependencias debe ser correcto, todo lo que uses dentro del efecto y venga de fuera, debe ir en dependencias

useEffect(()=>{
    console.log(user.name);
    }, [user]);

4. No modificar el4 estado de forma infinita

    useEffect(()=>{
        setCount(count + 1);
        }, [count]);
        
5. Hooks siempre van en orden
    if (loading){
    useEffect(()=>{})
        }
 */