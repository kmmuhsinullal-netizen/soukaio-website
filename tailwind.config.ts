import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { navy: '#061B49', midnight: '#082B68', electric: '#087BEE', cyan: '#27D5F5' } } }, plugins: [] };
export default config;
