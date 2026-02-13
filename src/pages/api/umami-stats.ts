export async function GET() {
  try {
    const baseUrl = import.meta.env.UMAMI_BASE_URL;
    const websiteId = import.meta.env.UMAMI_WEBSITE_ID;
    const token = import.meta.env.UMAMI_TOKEN;

    const endAt = Date.now();
    const startAt = 0;

    const res = await fetch(
      `${baseUrl}/api/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch Umami stats" }),
        { status: 500 }
      );
    }

    const data = await res.json();

    return new Response(JSON.stringify({
      pageviews: data.pageviews ?? 0,
      visits: data.visits ?? 0,
      visitors: data.visitors ?? 0,
    }), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}
