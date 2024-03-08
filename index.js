// index.js

// CodeForge - A versatile platform designed to empower developers and streamline the software development process.

// CodeForge functionality
class CodeForge {
    constructor() {
        this.projects = [];
        this.collaborators = {};
    }

    // Method to create a new project
    createProject(projectName, description) {
        const project = {
            name: projectName,
            description: description
        };
        this.projects.push(project);
    }

    // Method to add collaborators to a project
    addCollaborators(projectName, collaborators) {
        this.collaborators[projectName] = collaborators;
    }

    // Method to display all projects and their collaborators
    displayProjects() {
        console.log("Projects:");
        this.projects.forEach(project => {
            console.log(`- ${project.name}: ${project.description}`);
            if (this.collaborators[project.name]) {
                console.log(`  Collaborators: ${this.collaborators[project.name].join(", ")}`);
            }
        });
    }
}

// Example usage:
const codeForgeApp = new CodeForge();

// Creating projects
codeForgeApp.createProject("CodeForge Dashboard", "Develop a dashboard interface for the CodeForge platform.");
codeForgeApp.createProject("E-commerce Website", "Build an e-commerce website with user authentication and product listing features.");

// Adding collaborators to projects
codeForgeApp.addCollaborators("CodeForge Dashboard", ["developer1", "developer2", "designer"]);
codeForgeApp.addCollaborators("E-commerce Website", ["developer2", "developer3"]);

// Displaying projects
codeForgeApp.displayProjects();
