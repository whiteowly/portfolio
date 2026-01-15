export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
  status: string;
  type?: string; // Added optional 'type' property
  download?: string; // Added optional 'download' property
}

declare const projects: Project[];
export { projects };
export default projects;
