interface SkillImage {
  src: string;
}

export const skillsImage = (skill: string): SkillImage => {
  const skillID = skill.toLowerCase();
  const baseUrl = '/svg/skills';

  // Map of skill names to their SVG filenames
  const skillMap: Record<string, string> = {
    'html': 'html',
    'css': 'css',
    'javascript': 'javascript',
    'typescript': 'typescript',
    'react': 'react',
    'next js': 'nextjs',
    'tailwind': 'tailwind',
    'mongodb': 'mongodb',
    'mysql': 'mysql',
    'postgresql': 'postgresql',
    'git': 'git',
    'aws': 'aws',
    'bootstrap': 'bootstrap',
    'docker': 'docker',
    'go': 'go',
    'figma': 'figma',
    'firebase': 'firebase',
    'materialui': 'materialui',
    'nginx': 'nginx',
    'strapi': 'strapi'
  };

  const filename = skillMap[skillID] || 'default';
  return {
    src: `${baseUrl}/${filename}.svg`
  };
}