type UmamiStats = {
	pageviews: number;
	visits: number;
	visitors: number;
};

const EMPTY_STATS: UmamiStats = {
	pageviews: 0,
	visits: 0,
	visitors: 0,
};

function json(data: unknown, status = 200) {
	return new Response(JSON.stringify(data), {
		status,
		headers: {
			"Content-Type": "application/json",
			"Cache-Control": "no-store",
		},
	});
}

export async function GET() {
	const baseUrlRaw = (import.meta.env.UMAMI_BASE_URL || "").trim();
	const websiteId = (import.meta.env.UMAMI_WEBSITE_ID || "").trim();
	const token = (import.meta.env.UMAMI_TOKEN || "").trim();
	const apiKey = (import.meta.env.UMAMI_API_KEY || "").trim();

	if (!baseUrlRaw || !websiteId || (!token && !apiKey)) {
		return json({
			...EMPTY_STATS,
			error: "Umami is not configured",
		});
	}

	const endAt = Date.now();
	const startAt = 0;
	const baseUrl = baseUrlRaw.replace(/\/+$/, "");

	// Umami deployments differ: some expect /api/websites, some /websites.
	const urls = [
		`${baseUrl}/api/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}`,
		`${baseUrl}/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}`,
	];

	const headers: Record<string, string> = { Accept: "application/json" };
	if (token) headers.Authorization = `Bearer ${token}`;
	if (apiKey) headers["x-umami-api-key"] = apiKey;

	let lastError = "Request failed";

	for (const url of urls) {
		try {
			const res = await fetch(url, { headers });
			if (!res.ok) {
				lastError = `HTTP ${res.status} at ${url}`;
				continue;
			}

			const data = await res.json();
			return json({
				pageviews: Number(data?.pageviews ?? 0),
				visits: Number(data?.visits ?? 0),
				visitors: Number(data?.visitors ?? 0),
			});
		} catch (err) {
			lastError = err instanceof Error ? err.message : "Unknown fetch error";
		}
	}

	return json({
		...EMPTY_STATS,
		error: lastError,
	});
}
