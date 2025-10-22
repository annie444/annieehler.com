export type KVNamespace = {
	get: (key: string, options?: unknown) => Promise<string | null>;
	put: (key: string, value: string, options?: unknown) => Promise<void>;
	del: (key: string) => Promise<void>;
};

export type D1Database = {
	prepare: (query: string) => {
		bind: (...values: unknown[]) => {
			all: <T = unknown>() => Promise<{ results: T[] }>;
			first: <T = unknown>() => Promise<T | null>;
			execute: () => Promise<unknown>;
		};
	};
};

export type R2Bucket = {
	get: (key: string) => Promise<unknown>;
	put: (key: string, value: unknown, options?: unknown) => Promise<{ etag: string }>;
	delete: (key: string) => Promise<void>;
};

export type Queue<T = unknown> = {
	send: (value: T) => Promise<void>;
	sendBatch?: (values: T[]) => Promise<void>;
};

export type CloudflareBindings = {
	KV_SITE_CACHE?: KVNamespace;
	D1_CONTENT?: D1Database;
	QUEUE_WEBHOOKS?: Queue<{ id: string; payload: Record<string, unknown> }>;
	R2_ARCHIVE?: R2Bucket;
};

export type CloudflareExecutionContext = {
	durableObjectState?: unknown;
	waitUntil?: (promise: Promise<unknown>) => void;
};

export type CloudflareEventContext = {
	env: CloudflareBindings;
	req: Request;
	ctx: CloudflareExecutionContext;
	cf?: unknown;
};

export function createEdgePreviewPayload(env: CloudflareBindings) {
	return {
		analytics: {
			enabled: Boolean(env.KV_SITE_CACHE),
			kvNamespace: env.KV_SITE_CACHE ? 'KV_SITE_CACHE' : 'unset'
		},
		contentSources: {
			dataset: env.D1_CONTENT ? 'D1_CONTENT' : 'filesystem',
			downloads: env.R2_ARCHIVE ? 'R2_ARCHIVE' : 'static'
		},
		contactQueue: env.QUEUE_WEBHOOKS ? 'QUEUE_WEBHOOKS' : null
	};
}
