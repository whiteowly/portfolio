export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
  status: string;
}

declare const projects: Project[];
export { projects };
export default projects;
