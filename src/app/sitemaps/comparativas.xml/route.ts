import { comparisonEntries, entriesToXml } from '../../../utils/sitemapEntries';

export const dynamic = 'force-static';

export function GET() {
  return new Response(entriesToXml(comparisonEntries()), {
    headers: { 'Content-Type': 'application/xml' },
  });
}
