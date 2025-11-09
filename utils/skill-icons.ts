interface SkillImage {
  src: string;
}

export const skillsImage = (skill: string): SkillImage => {
  // Using CDN images from devicon for immediate availability
  const placeholderImages: Record<string, string> = {
    'html': '/skill/html5.svg',
    'css': '/skill/css3.svg',
    'javascript': '/skill/javascript.svg',
    'typescript': '/skill/typescript.svg',
    'react': '/skill/react.svg',
    'next js': '/skill/nextjs.svg',
    'tailwind': '/skill/tailwind.svg',
    'mongodb': '/skill/mongodb.svg',
    'mysql': '/skill/mysql.svg',
    'postgresql': '/skill/postgresql.svg',
    'git': '/skill/git.svg',
    'aws': '/skill/aws.svg',
    'bootstrap': '/skill/bootstrap.svg',
    'docker': '/skill/docker.svg',
    'go': '/skill/go.svg',
    'figma': '/skill/figma.svg',
    'firebase': '/skill/firebase.svg',
    'materialui': '/skill/materialui.svg',
    'nginx': '/skill/nginx.svg',
    'strapi': '/skill/strapi.svg'
  };

  const skillID = skill.toLowerCase();
  return {
    src: placeholderImages[skillID] || placeholderImages['html'] // fallback to HTML icon if skill not found
  };
};