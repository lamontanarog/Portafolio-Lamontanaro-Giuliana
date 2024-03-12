import CardAboutMe from "./CardAboutMe";

function AboutMe() {
    return (
        <>
            <div className="father-card">
                <CardAboutMe
                    title="Quien soy?"
                    content="Mi nombre es Giuliana Lamontanaro, 
            tengo 23 años y cuento con una sólida orientación hacia el desarrollo web desde hace 3 años. 
            Actualmente, me encuentro culminando el último tramo de mi carrera universitaria en programación en la UTN-FRT."
                ></CardAboutMe>
                <CardAboutMe
                    title="Desarrollo Web"
                    content="Cuento con amplios conocimientos en el desarrollo web, abarcando
                    áreas como el maquetado con HTML5, CSS3 y JavaScript. Además,
                    poseo experiencia en el uso de herramientas como Bootstrap y
                    Sass para la creación de interfaces web modernas y responsivas."
                ></CardAboutMe>
                <CardAboutMe
                    title="JavaScript"
                    content="También poseo un sólido entendimiento de los fundamentos de la
                    programación con JavaScript, así como de sus principios básicos.
                    Además, tengo experiencia en el uso de Git para el control de
                    versiones del código, lo que me permite colaborar de manera
                    efectiva en proyectos y mantener un flujo de trabajo organizado
                    y estructurado."
                ></CardAboutMe>
                <CardAboutMe
                    title="React Js"
                    content=" He obtenido certificación en ReactJS, lo que me ha permitido
                    familiarizarme con sus bibliotecas y hooks, los cuales optimizan
                    el proceso de creación de aplicaciones web mediante la
                    modularización de componentes. Además, poseo experiencia en la
                    gestión de rutas dentro de la aplicación, aplicando el concepto
                    de Single Page Application (SPA)."
                ></CardAboutMe>
                <CardAboutMe
                    title="Node Js & MongoDB"
                    content="
                    Aprendi didacticamente Node.js, utilizando el framework Express. Además, he explorado el uso de MongoDB,
                    empleando la librería Mongoose para facilitar la interacción con la base de datos NoSQL.Este proceso me ha permitido comprender 
                    el desarrollo de aplicaciones web con tecnologías modernas y escalables."
                ></CardAboutMe>
            </div>
        </>
    );
}

export default AboutMe;
