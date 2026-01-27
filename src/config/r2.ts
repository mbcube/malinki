/**
 * Cloudflare R2 Configuration
 * 
 * Centralized configuration for R2 public domain.
 * This allows easy switching between dev and production URLs.
 * 
 * Usage in Astro components:
 *   import { R2_PUBLIC_DOMAIN } from '../config/r2';
 *   const videoUrl = `${R2_PUBLIC_DOMAIN}/projects/slug/video.mp4`;
 * 
 * To switch to production:
 *   1. Set up custom domain in Cloudflare R2 settings
 *   2. Update PUBLIC_R2_DOMAIN in .env file
 *   3. Rebuild and deploy
 */

// Get R2 public domain from environment variable or use default
export const R2_PUBLIC_DOMAIN = import.meta.env.PUBLIC_R2_DOMAIN || 'https://pub-a83e9e4a4dae446fa7c1797c5d49e07f.r2.dev';

// R2 configuration for scripts (server-side only)
export const R2_CONFIG = {
  accountId: '946e2e7f5eccdee1e72e2dd82c6f96fb',
  bucketName: 'malinki',
  endpoint: 'https://946e2e7f5eccdee1e72e2dd82c6f96fb.r2.cloudflarestorage.com',
  publicDomain: R2_PUBLIC_DOMAIN,
} as const;

/**
 * Helper function to construct R2 URLs
 * @param path - Path to the file in R2 (e.g., 'projects/cook-it/video.mp4')
 * @returns Full R2 URL
 */
export function getR2Url(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${R2_PUBLIC_DOMAIN}/${cleanPath}`;
}

/**
 * Helper to check if a URL is an R2 URL
 * @param url - URL to check
 * @returns true if URL is from R2
 */
export function isR2Url(url: string): boolean {
  return url.includes('.r2.dev') || url.includes('.r2.cloudflarestorage.com');
}











