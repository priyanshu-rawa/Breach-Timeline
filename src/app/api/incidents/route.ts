import { incidents } from "@/data/incidents";

export const dynamic = "force-static";

export function GET() {
  return Response.json(
    {
      name: "CyberTimeline",
      license: "CC BY 4.0",
      count: incidents.length,
      note: "Damage figures are estimates compiled from public reporting.",
      incidents,
    },
    { headers: { "Cache-Control": "public, max-age=3600" } },
  );
}
