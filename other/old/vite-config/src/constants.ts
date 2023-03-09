// The name of the configuration file entered in the production environment
export const GLOB_CONFIG_FILE_NAME = '_app.config.js';

// vite package output directory
export const OUTPUT_DIR = 'dist';
export const ASSET_DIR = 'static';

export const TOKEN_PROXY: [string, string][] = [['/devToken', 'http://10.17.207.50:30991/environment/user-center/']];
