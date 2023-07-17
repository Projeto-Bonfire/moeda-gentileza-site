import informations from '../assets/Informations';

function Container() {
    return (
        <div>
            {informations.map((item, index) => {
                const position = index == 0

                return (
                    <section id={item.id} className="information-container" style={{ backgroundColor: item.color, flexDirection: index % 2 === 0 ? "row-reverse" : "row" }}>

                        <div className={position ? "background-img" : "image"}>

                            {position ?
                                null : (
                                    <div>
                                        <img className="img" src={item.image} alt="Imagem" />
                                    </div>
                                )}

                        </div>
                        <div className="project-information">

                            <h1 className={position ? "font1" : "font2"}>{item.title}</h1>

                            <p>{item.description}</p>
                        </div>
                    </section>
                );
            })}
        </div>
    );
}



export default Container;