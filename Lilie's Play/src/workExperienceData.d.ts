export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  year: string;
  logo: string;
}

declare const workExperience: WorkExperience[];
export { workExperience };
export default workExperience;
