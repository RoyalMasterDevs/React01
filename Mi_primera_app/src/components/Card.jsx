function Card({ title, description, imageURL, link }) {
    return (
        <>
            <div className="card">
                <img src={imageURL} alt={title} />

                <div className="card-content">
                    <h3 className="card-title">
                        {title}
                    </h3>
                    <p className="card-text">
                        {description}
                    </p>
                    <a href={link} className="card-button">
                        Ver más
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;