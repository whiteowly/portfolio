export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
  status: string;
  type?: string; 
  download?: string; 
  preview?: string;
}

declare const projects: Project[];
export { projects };
export default projects;
