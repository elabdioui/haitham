import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Haitham El Abdioui | Software Engineer',
    short_name: 'Haitham El Abdioui',
    description: 'Software engineering student specializing in web development and cloud technologies',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',  // Create these icons in your public directory
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',  // Create these icons in your public directory
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-maskable.png',  // Create a maskable icon for PWAs
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}