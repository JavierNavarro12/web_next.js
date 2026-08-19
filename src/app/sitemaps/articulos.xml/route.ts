import { articleEntries, entriesToXml } from '../../../utils/sitemapEntries';

export const dynamic = 'force-static';

export function GET() {
  return new Response(entriesToXml(articleEntries()), {
    headers: { 'Content-Type': 'application/xml' },
  });
}
