export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  angular: {
    name: "Angular",
    iconName: "angular",
  },
  web3: {
    name: "Web3.js",
    iconName: "web3",
    className: "!bg-[#f6ece1]",
  },
  ethereum: {
    name: "Ethereum",
    iconName: "ethereum",
  },

  solidity: {
    name: "Solidity",
    iconName: "solidity",
    className: "!bg-[#f6ece1]",
  },

  aws: {
    name: "AWS",
    iconName: "aws",
  },

  prisma: {
    name: "Prisma",
    iconName: "prisma",
    className: "!bg-[#f6ece1]",
  },

  nestjs: {
    name: "Nestjs",
    iconName: "nestjs",
  },
  react: {
    name: "React.js",
    iconName: "react",
  },
  next: {
    name: "Next.js",
    className: "!bg-[#f6ece1]",
    iconName: "next",
  },
  golang: {
    name: "GoLang",
    iconName: "golang",
  },
  blockchain: {
    name: "Blockchain",
    className: "!bg-[#f6ece1]",
    iconName: "blockchain",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  mongo: {
    name: "MongoDb",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "!bg-[#f6ece1]",
    iconName: "mysql",
  },
  wordpress: {
    name: "Wordpress",
    iconName: "wordpress",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  postgresql: {
    name: "PostgreSQL",
    iconName: "postgresql",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  firebase: {
    name: "Firebase",
    iconName: "firebase",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  sass: {
    name: "Sass",
    iconName: "sass",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  vercel: {
    name: "Vercel",
    iconName: "vercel",
  },
  netlify: {
    name: "Netlify",
    iconName: "netlify",
  },
  gatsby: {
    name: "Gatsby",
    iconName: "gatsby",
  },
  windsurf: {
    name: "Windsurf",
    iconName: "windsurf-logo",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "deepseek",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
};
