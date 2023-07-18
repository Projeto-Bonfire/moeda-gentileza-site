import React from "react";

function Container2({image, title, description}) {
    
    return (
        <div>
            <section className="information-container">
                <div className="project-information">
                    <h1>{title}</h1>
                    <p>
                        {description}
                    </p>
                </div>

                <div className="image">
                    <img className="img" src={image} alt='imagem' />
                </div>
            </section>
        </div>
    );
}

export default Container2;