import Bun from 'bun';
import { paths } from '../router/paths';
import xml from 'xml';
import xmlFormat from 'xml-formatter';
import { unlinkSync } from 'node:fs';
import dayjs from 'dayjs';
import { omit } from 'lodash';

// Define the path to the sitemap file
const sitemapPath: string = './public/sitemap.xml';

// If the sitemap file exists, delete it
if (await Bun.file(sitemapPath).exists()) {
  unlinkSync(sitemapPath);
}

// Omit 'designSystem' and 'notFound' keys from the paths object
const routesToOmit: string[] = ['designSystem', 'notFound'];
const routes = omit(paths, routesToOmit);

// Get the current date in the format 'YYYY-MM-DDTHH:mm:ssZ'
const currentDate: string = dayjs().format('YYYY-MM-DDTHH:mm:ssZ');

const productionUrl: string = Bun.env.VITE_APP_PRODUCTION_URL;

// Map over the keys in the routes object to create an array of sitemap items
const sitemapItems = Object.keys(routes).map(
  (key: string): { url: ({ changefreq: any } | { lastmod: string } | { loc: string } | { priority: number })[] } => ({
    url: [
      { loc: `${productionUrl}${routes[key].path}` },
      { lastmod: currentDate },
      { changefreq: routes[key].frequency },
      { priority: 1 }
    ]
  })
);

// Create the sitemap object structure
const sitemapObject: {
  urlset: (
    | { _attr: { xmlns: string; 'xmlns:xsi': string; 'xsi:schemaLocation': string } }
    | { url: ({ changefreq: any } | { lastmod: string } | { loc: string } | { priority: number })[] }
  )[];
} = {
  urlset: [
    {
      _attr: {
        xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
        'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
        'xsi:schemaLocation':
          'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd'
      }
    },
    ...sitemapItems
  ]
};

// Convert sitemap object to an XML string
const sitemap: string = `<?xml version="1.0" encoding="UTF-8"?>${xml(sitemapObject)}`;

// Format the XML string for readability
const prettySitemap: string = xmlFormat(sitemap, {
  collapseContent: true
});

// Write the formatted XML string to the sitemap file
await Bun.write('./public/sitemap.xml', prettySitemap);
