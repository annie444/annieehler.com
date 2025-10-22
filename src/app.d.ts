// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { CloudflareBindings } from '$lib/server/cloudflare';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env: CloudflareBindings;
		}
	}
}

export { };
