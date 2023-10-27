import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// Define the configuration directly as we're not checking the environment here
const config = {
  plugins: [
    tailwindcss,
    autoprefixer,
    // PurgeCSS will be applied in production by Vite, so we don't include it here
  ],
};

export default config;
