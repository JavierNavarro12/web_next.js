import { entriesToXml, pageEntries } from '../../../utils/sitemapEntries';

export const dynamic = 'force-static';

export function GET() {
  return new Response(entriesToXml(pageEntries()), {
    headers: { 'Content-Type': 'application/xml' },
  });
}
