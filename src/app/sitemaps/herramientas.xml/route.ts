import { entriesToXml, toolEntries } from '../../../utils/sitemapEntries';

export const dynamic = 'force-static';

export function GET() {
  return new Response(entriesToXml(toolEntries()), {
    headers: { 'Content-Type': 'application/xml' },
  });
}
