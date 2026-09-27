// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { KVNamespace } from '@cloudflare/workers-types';

declare global {
	namespace Cloudflare {
		interface Env {
			KV: KVNamespace;
		}
	}
	namespace App {
		interface Platform {
			env: Cloudflare.Env;
			ctx: ExecutionContext;
			caches: CacheStorage;
			cf?: IncomingRequestCfProperties
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
