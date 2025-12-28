export async function onRequest(context: any) {
  try {
    const {
      UMAMI_BASE_URL,
      UMAMI_WEBSITE_ID,
      UMAMI_TOKEN,
    } = context.env;

    const endAt = Date.now();
    const startAt = 0;

    const url =
      `${UMAMI_BASE_URL}/api/websites/${UMAMI_WEBSITE_ID}/stats` +
      `?startAt=${startAt}&endAt=${endAt}&unit=hour&timezone=Asia%2FSaigon`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${UMAMI_TOKEN}`,
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch Umami stats" }),
        { status: 500 }
      );
    }

    const data = await res.json();

    return new Response(
      JSON.stringify({
        pageviews: data.pageviews ?? 0,
        visits: data.visits ?? 0,
        visitors: data.visitors ?? 0,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}
