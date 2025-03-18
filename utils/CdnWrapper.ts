/**
 * Enhanced GitHub CDN solution with wrapper function and multiple CDN options
 * to handle rate limiting and improve performance
 */

// Configuration object for CDN settings
const cdnConfig = {
  // GitHub settings
  github: {
    username: "ikshit004",
    repo: "CDN-Images",
    branch: "webp",
    enabled: true,
  },
  // jsDelivr settings (provides higher rate limits by using GitHub as source)
  jsdelivr: {
    enabled: true,
  },
  // Statically.io settings (another free CDN service using GitHub as source)
  statically: {
    enabled: true,
    quality: 80, // Image quality for optimization (0-100)
  },
  // Default path prefix if needed
  pathPrefix: "",
  // Enable CDN rotation to distribute requests
  rotateCdns: true,
};

/**
 * Main wrapper function to get CDN URL for an asset
 * @param {string} path - Path to the asset (e.g., "assets/polaris/E-sports.png")
 * @param {object} options - Optional configuration overrides
 * @return {string} The CDN URL for the asset
 */
export function getCdnUrl(path: string, options = {}) {
  // Merge defaults with provided options
  
  const config = { ...cdnConfig, ...options };

  // Remove leading slashes and prefix path if needed
  let cleanPath = convertToWebp(path).replace(/^\/+/, "");
  if (config.pathPrefix && !cleanPath.startsWith(config.pathPrefix)) {
    cleanPath = config.pathPrefix + cleanPath;
  }

  // Get all available CDN URLs based on configuration
  const availableCdns = [];

  if (config.github.enabled) {
    availableCdns.push(getGithubRawUrl(cleanPath, config.github));
  }

  if (config.jsdelivr.enabled) {
    availableCdns.push(getJsdelivrUrl(cleanPath, config.github));
  }

  if (config.statically.enabled) {
    availableCdns.push(
      getStaticallyUrl(cleanPath, config.github, config.statically)
    );
  }

  // Return appropriate URL
  if (availableCdns.length === 0) {
    console.error("No CDN configurations enabled");
    return "";
  }

  if (config.rotateCdns) {
    // Simple rotation based on path length to keep same URLs for same files
    const index = cleanPath.length % availableCdns.length;
    return availableCdns[index];
  }

  // Default to first available CDN
  return availableCdns[0];
}

/**
 * Get raw GitHub URL
 * @param {string} path - Asset path
 * @param {object} config - GitHub config
 * @return {string} Raw GitHub URL
 */
function getGithubRawUrl(
  path: string,
  config: { username: string; repo: string; branch: string; enabled: boolean }
) {
  return `https://raw.githubusercontent.com/${config.username}/${config.repo}/${config.branch}/${path}`;
}

/**
 * Get jsDelivr URL (higher rate limits than GitHub raw)
 * @param {string} path - Asset path
 * @param {object} config - GitHub config
 * @return {string} jsDelivr URL
 */

function convertToWebp(path: string): string {
  return path.replace(/\.(jpg|jpeg|png)$/i, ".webp");
}

function getJsdelivrUrl(
  path: string,
  config: { username: string; repo: string; branch: string; enabled: boolean }
) {
  return `https://cdn.jsdelivr.net/gh/${config.username}/${config.repo}@${config.branch}/${path}?v=123`;
}

/**
 * Get Statically.io URL (provides image optimization and high rate limits)
 * @param {string} path - Asset path
 * @param {object} githubConfig - GitHub config
 * @param {object} staticallyConfig - Statically config
 * @return {string} Statically URL
 */
function getStaticallyUrl(
  path: string,
  githubConfig: {
    username: string;
    repo: string;
    branch: string;
    enabled: boolean;
  },
  staticallyConfig: { enabled: boolean; quality: number }
) {
  // Only apply image optimization for image files
  const isImage = /\.(jpe?g|png|gif|webp)$/i.test(path);

  const baseUrl = `https://cdn.statically.io/gh/${githubConfig.username}/${githubConfig.repo}/${githubConfig.branch}/${path}`;

  if (isImage && staticallyConfig.quality) {
    return `${baseUrl}?q=${staticallyConfig.quality}`;
  }

  return baseUrl;
}
