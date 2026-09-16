import React from 'react';

const categories = [
    {
        title: "Frontend",
        headerIcon: "fas fa-palette",
        className: "category-frontend",
        skills: [
            { name: "HTML", icon: "fab fa-html5" },
            { name: "CSS", icon: "fab fa-css3-alt" },
            { name: "JavaScript", icon: "fab fa-js" },
            { name: "React", icon: "fab fa-react" },
            { name: "TypeScript", icon: "fas fa-file-code" }
        ]
    },
    {
        title: "Backend",
        headerIcon: "fas fa-server",
        className: "category-backend",
        skills: [
            { name: "Python", icon: "fab fa-python" },
            { name: "Flask", icon: "fas fa-flask" },
            { name: "Expressjs", icon: "fab fa-express" },
            { name: "Nodejs", icon: "fab fa-node-js" }
        ]
    },
    {
        title: "Mobile",
        headerIcon: "fas fa-mobile-screen",
        className: "category-mobile",
        skills: [
            { name: "React Native (Expo)", icon: "fab fa-react" }
        ]
    },
    {
        title: "Databases",
        headerIcon: "fas fa-database",
        className: "category-databases",
        skills: [
            { name: "MySQL", icon: "fas fa-database" },
            { name: "MongoDB", icon: "fas fa-leaf" },
            { name: "Firebase", icon: "fas fa-fire" }
        ]
    }
];

function Skills() {
    return(
        <section id="skills">
            <h1>Skills</h1>
            <br></br>
            <div className="skills-group-grid">
                {categories.map((cat) => (
                    <div className={`skills-group ${cat.className}`} key={cat.title}>
                        <div className="skills-group-header">
                            <i className={cat.headerIcon}></i>
                            <h3>{cat.title}</h3>
                        </div>
                        <ul>
                            {cat.skills.map((skill) => (
                                <li key={skill.name}>
                                    <i className={skill.icon}></i>
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </section>
    )
}

export default Skills;