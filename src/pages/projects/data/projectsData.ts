// src/projects/data/projectsData.ts
import { type Project } from "../components/types";


export const projects: Project[] = [
    {
        id: 1,
        title: "Game Of Life",
        description: "A modern web extension built with React and Node.js. Plugin for the application '© Obsidian'.",
        status: "soon-release",
        link:"https://github.com/Xlambdas/Game-of-life-obsi-plugin-",
    },
    {
        id: 2,
        title: "Cognitive Science",
        description: "Knowledge exploration in cognitive science.",
        status: "paused",
    },
    {
        id: 3,
        title: "Upcoming Unity Project",
        description: "A full project on Unity. But no spoilers, you'll find out soon!",
        status: "started",
    },
    {
        id: 4,
        title: "Upcoming Project",
        description: "Currently in progress, please be patient...",
        status: "not-started",
    },
];