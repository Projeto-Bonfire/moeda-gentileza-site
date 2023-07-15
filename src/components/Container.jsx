import React from "react";

function Container({image, title, description}) {
    
    return (
        <div>
            <section className="information-container">
                <div className="image">
                    <img className="img" src={image} alt='imagem' />
                </div>
                <div className="project-information">
                    <h1>{title}</h1>
                    <p>
                        {description}
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Container;