import type { MetadataRoute } from 'next'

const siteUrl = 'https://ignisissolutions.com'
const siteLaunchDate = new Date('2026-08-24')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Main Pages
    {
      url: siteUrl,
      lastModified: siteLaunchDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: siteLaunchDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Service Pages
    {
      url: `${siteUrl}/services/web-development`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services/saas-development`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services/custom-software-development`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services/digital-marketing`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services/social-media-management`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services/branding`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services/graphic-designing`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services/business-consultancy`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/digital-business-growth`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services/ecommerce-solutions`,
      lastModified: siteLaunchDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Legal Pages
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: siteLaunchDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-and-conditions`,
      lastModified: siteLaunchDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}