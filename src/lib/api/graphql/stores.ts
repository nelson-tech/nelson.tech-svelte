import { browser } from '$app/env';
import * as Types from './types';
import { defaultStoreValue, RequestStatus, ResponseResultType, type PatchType, type RequestParameters, type RequestQueryParameters, type RequestResult } from '@kitql/client';
import { get, writable } from 'svelte/store';
import { kitQLClient } from '../kitQLClient';
 
/**
 * Init KitQL (to have clientStarted = true!)
 *
 * Waiting for: https://github.com/sveltejs/kit/issues/4447
 */
export function KQL__Init() {}
 
/* Internal. To skip await on a client side navigation in the load function (from queryLoad)! */
let clientStarted = false; // Will be true on a client side navigation
if (browser) {
	addEventListener('sveltekit:start', () => {
		clientStarted = true;
	});
}
 
/**
 * ResetAllCaches in One function!
 */
export function KQL__ResetAllCaches() {
	KQL_GetCart.resetCache();
	KQL_GetCustomerData.resetCache();
	KQL_GetProductsWithCategories.resetCache();
	KQL_GetProductsByCategory.resetCache();
	KQL_GetProductCategories.resetCache();
	KQL_GetProductDataFromSlug.resetCache();
	KQL_GetCategorySlugs.resetCache();
	KQL_GetCategoryFromSlug.resetCache();
	KQL_Title.resetCache();
	KQL_GetUser.resetCache();
	KQL_GetHome.resetCache();
}
 
/* Operations 👇 */
function KQL_RegisterUserStore() {
	const operationName = 'KQL_RegisterUser';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.RegisterUserMutation, Types.RegisterUserMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.RegisterUserMutationVariables>
		): Promise<RequestResult<Types.RegisterUserMutation, Types.RegisterUserMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_RegisterUser).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.RegisterUserMutation, Types.RegisterUserMutationVariables>({
				skFetch: fetch,
				document: Types.RegisterUserDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `RegisterUser` Operation
 */
export const KQL_RegisterUser = KQL_RegisterUserStore();

function KQL_LoginUserStore() {
	const operationName = 'KQL_LoginUser';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.LoginUserMutation, Types.LoginUserMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.LoginUserMutationVariables>
		): Promise<RequestResult<Types.LoginUserMutation, Types.LoginUserMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_LoginUser).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.LoginUserMutation, Types.LoginUserMutationVariables>({
				skFetch: fetch,
				document: Types.LoginUserDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `LoginUser` Operation
 */
export const KQL_LoginUser = KQL_LoginUserStore();

function KQL_LoginUserWithCookiesStore() {
	const operationName = 'KQL_LoginUserWithCookies';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.LoginUserWithCookiesMutation, Types.LoginUserWithCookiesMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.LoginUserWithCookiesMutationVariables>
		): Promise<RequestResult<Types.LoginUserWithCookiesMutation, Types.LoginUserWithCookiesMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_LoginUserWithCookies).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.LoginUserWithCookiesMutation, Types.LoginUserWithCookiesMutationVariables>({
				skFetch: fetch,
				document: Types.LoginUserWithCookiesDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `LoginUserWithCookies` Operation
 */
export const KQL_LoginUserWithCookies = KQL_LoginUserWithCookiesStore();

function KQL_LogoutUserStore() {
	const operationName = 'KQL_LogoutUser';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.LogoutUserMutation, Types.LogoutUserMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.LogoutUserMutationVariables>
		): Promise<RequestResult<Types.LogoutUserMutation, Types.LogoutUserMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_LogoutUser).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.LogoutUserMutation, Types.LogoutUserMutationVariables>({
				skFetch: fetch,
				document: Types.LogoutUserDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `LogoutUser` Operation
 */
export const KQL_LogoutUser = KQL_LogoutUserStore();

function KQL_RefreshAuthTokenStore() {
	const operationName = 'KQL_RefreshAuthToken';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.RefreshAuthTokenMutation, Types.RefreshAuthTokenMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.RefreshAuthTokenMutationVariables>
		): Promise<RequestResult<Types.RefreshAuthTokenMutation, Types.RefreshAuthTokenMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_RefreshAuthToken).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.RefreshAuthTokenMutation, Types.RefreshAuthTokenMutationVariables>({
				skFetch: fetch,
				document: Types.RefreshAuthTokenDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `RefreshAuthToken` Operation
 */
export const KQL_RefreshAuthToken = KQL_RefreshAuthTokenStore();

function KQL_ResetUserPasswordStore() {
	const operationName = 'KQL_ResetUserPassword';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.ResetUserPasswordMutation, Types.ResetUserPasswordMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.ResetUserPasswordMutationVariables>
		): Promise<RequestResult<Types.ResetUserPasswordMutation, Types.ResetUserPasswordMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_ResetUserPassword).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.ResetUserPasswordMutation, Types.ResetUserPasswordMutationVariables>({
				skFetch: fetch,
				document: Types.ResetUserPasswordDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `ResetUserPassword` Operation
 */
export const KQL_ResetUserPassword = KQL_ResetUserPasswordStore();

function KQL_SendPasswordResetEmailStore() {
	const operationName = 'KQL_SendPasswordResetEmail';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.SendPasswordResetEmailMutation, Types.SendPasswordResetEmailMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.SendPasswordResetEmailMutationVariables>
		): Promise<RequestResult<Types.SendPasswordResetEmailMutation, Types.SendPasswordResetEmailMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_SendPasswordResetEmail).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.SendPasswordResetEmailMutation, Types.SendPasswordResetEmailMutationVariables>({
				skFetch: fetch,
				document: Types.SendPasswordResetEmailDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `SendPasswordResetEmail` Operation
 */
export const KQL_SendPasswordResetEmail = KQL_SendPasswordResetEmailStore();

function KQL_AddToCartStore() {
	const operationName = 'KQL_AddToCart';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.AddToCartMutation, Types.AddToCartMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.AddToCartMutationVariables>
		): Promise<RequestResult<Types.AddToCartMutation, Types.AddToCartMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_AddToCart).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.AddToCartMutation, Types.AddToCartMutationVariables>({
				skFetch: fetch,
				document: Types.AddToCartDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `AddToCart` Operation
 */
export const KQL_AddToCart = KQL_AddToCartStore();

function KQL_ClearCartStore() {
	const operationName = 'KQL_ClearCart';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.ClearCartMutation, Types.ClearCartMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.ClearCartMutationVariables>
		): Promise<RequestResult<Types.ClearCartMutation, Types.ClearCartMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_ClearCart).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.ClearCartMutation, Types.ClearCartMutationVariables>({
				skFetch: fetch,
				document: Types.ClearCartDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `ClearCart` Operation
 */
export const KQL_ClearCart = KQL_ClearCartStore();

function KQL_RemoveCartItemStore() {
	const operationName = 'KQL_RemoveCartItem';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.RemoveCartItemMutation, Types.RemoveCartItemMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.RemoveCartItemMutationVariables>
		): Promise<RequestResult<Types.RemoveCartItemMutation, Types.RemoveCartItemMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_RemoveCartItem).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.RemoveCartItemMutation, Types.RemoveCartItemMutationVariables>({
				skFetch: fetch,
				document: Types.RemoveCartItemDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `RemoveCartItem` Operation
 */
export const KQL_RemoveCartItem = KQL_RemoveCartItemStore();

function KQL_UpdateCartItemQuantityStore() {
	const operationName = 'KQL_UpdateCartItemQuantity';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.UpdateCartItemQuantityMutation, Types.UpdateCartItemQuantityMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.UpdateCartItemQuantityMutationVariables>
		): Promise<RequestResult<Types.UpdateCartItemQuantityMutation, Types.UpdateCartItemQuantityMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_UpdateCartItemQuantity).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.UpdateCartItemQuantityMutation, Types.UpdateCartItemQuantityMutationVariables>({
				skFetch: fetch,
				document: Types.UpdateCartItemQuantityDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `UpdateCartItemQuantity` Operation
 */
export const KQL_UpdateCartItemQuantity = KQL_UpdateCartItemQuantityStore();

function KQL_CheckoutStore() {
	const operationName = 'KQL_Checkout';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.CheckoutMutation, Types.CheckoutMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.CheckoutMutationVariables>
		): Promise<RequestResult<Types.CheckoutMutation, Types.CheckoutMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_Checkout).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.CheckoutMutation, Types.CheckoutMutationVariables>({
				skFetch: fetch,
				document: Types.CheckoutDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `Checkout` Operation
 */
export const KQL_Checkout = KQL_CheckoutStore();

function KQL_GetCartStore() {
	const operationName = 'KQL_GetCart';
	const operationType = ResponseResultType.Query;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.GetCartQuery, Types.GetCartQueryVariables>>({...defaultStoreValue, operationName, operationType});

		async function queryLocal(
			params?: RequestQueryParameters<Types.GetCartQueryVariables>
		): Promise<RequestResult<Types.GetCartQuery, Types.GetCartQueryVariables>> {
			let { fetch, variables, settings } = params ?? {};
			let { cacheMs, policy } = settings ?? {};

			const storedVariables = get(KQL_GetCart).variables;
			variables = variables ?? storedVariables;
			policy = policy ?? kitQLClient.policy;

			// Cache only in the browser for now. In SSR, we will need session identif to not mix peoples data
			if (browser) {
				if (policy !== 'network-only') {
					// prettier-ignore
					const cachedData = kitQLClient.requestCache<Types.GetCartQuery, Types.GetCartQueryVariables>({
						variables, operationName, cacheMs,	browser
					});
					if (cachedData) {
						const result = { ...cachedData, isFetching: false, status: RequestStatus.DONE };
						if (policy === 'cache-first') {
							set(result);
							if (!result.isOutdated) {
								return result;
							}
						} else if (policy === 'cache-only') {
							set(result);
							return result;
						} else if (policy === 'cache-and-network') {
							set(result);
						}
					}
				}
			}

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.GetCartQuery, Types.GetCartQueryVariables>({
				skFetch: fetch,
				document: Types.GetCartDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		query: queryLocal,

		/**
		 * Ideal for SSR query. To be used in SvelteKit load function
		 * @returns fill this store & the cache
		 */
		queryLoad: async (
			params?: RequestQueryParameters<Types.GetCartQueryVariables>
		): Promise<void> => {
			if (clientStarted) {
				queryLocal(params); // No await on purpose, we are in a client navigation.
			} else {
				await queryLocal(params);
			}
		},

		/**
		 * Reset Cache
		 */
		resetCache(
			variables: Types.GetCartQueryVariables | null = null,
			allOperationKey: boolean = true,
			withResetStore: boolean = true
		) {
			kitQLClient.cacheRemove(operationName, { variables, allOperationKey });
			if (withResetStore) {
				set({ ...defaultStoreValue, operationName });
			}
		},

		/**
		 * Patch the store &&|| cache with some data.
		 */
		// prettier-ignore
		patch(data: Types.GetCartQuery, variables: Types.GetCartQueryVariables | null = null, type: PatchType = 'cache-and-store'): void {
			let updatedCacheStore = undefined;
			if(type === 'cache-only' || type === 'cache-and-store') {
				updatedCacheStore = kitQLClient.cacheUpdate<Types.GetCartQuery, Types.GetCartQueryVariables>(operationName, data, { variables });
			}
			if(type === 'store-only' ) {
				let toReturn = { ...get(KQL_GetCart), data, variables } ;
				set(toReturn);
			}
			if(type === 'cache-and-store' ) {
				set({...get(KQL_GetCart), ...updatedCacheStore});
			}
			kitQLClient.logInfo(operationName, "patch", type);
		}
	};
}
/**
 * KitQL Svelte Store with the latest `GetCart` Operation
 */
export const KQL_GetCart = KQL_GetCartStore();

function KQL_GetCustomerDataStore() {
	const operationName = 'KQL_GetCustomerData';
	const operationType = ResponseResultType.Query;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.GetCustomerDataQuery, Types.GetCustomerDataQueryVariables>>({...defaultStoreValue, operationName, operationType});

		async function queryLocal(
			params?: RequestQueryParameters<Types.GetCustomerDataQueryVariables>
		): Promise<RequestResult<Types.GetCustomerDataQuery, Types.GetCustomerDataQueryVariables>> {
			let { fetch, variables, settings } = params ?? {};
			let { cacheMs, policy } = settings ?? {};

			const storedVariables = get(KQL_GetCustomerData).variables;
			variables = variables ?? storedVariables;
			policy = policy ?? kitQLClient.policy;

			// Cache only in the browser for now. In SSR, we will need session identif to not mix peoples data
			if (browser) {
				if (policy !== 'network-only') {
					// prettier-ignore
					const cachedData = kitQLClient.requestCache<Types.GetCustomerDataQuery, Types.GetCustomerDataQueryVariables>({
						variables, operationName, cacheMs,	browser
					});
					if (cachedData) {
						const result = { ...cachedData, isFetching: false, status: RequestStatus.DONE };
						if (policy === 'cache-first') {
							set(result);
							if (!result.isOutdated) {
								return result;
							}
						} else if (policy === 'cache-only') {
							set(result);
							return result;
						} else if (policy === 'cache-and-network') {
							set(result);
						}
					}
				}
			}

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.GetCustomerDataQuery, Types.GetCustomerDataQueryVariables>({
				skFetch: fetch,
				document: Types.GetCustomerDataDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		query: queryLocal,

		/**
		 * Ideal for SSR query. To be used in SvelteKit load function
		 * @returns fill this store & the cache
		 */
		queryLoad: async (
			params?: RequestQueryParameters<Types.GetCustomerDataQueryVariables>
		): Promise<void> => {
			if (clientStarted) {
				queryLocal(params); // No await on purpose, we are in a client navigation.
			} else {
				await queryLocal(params);
			}
		},

		/**
		 * Reset Cache
		 */
		resetCache(
			variables: Types.GetCustomerDataQueryVariables | null = null,
			allOperationKey: boolean = true,
			withResetStore: boolean = true
		) {
			kitQLClient.cacheRemove(operationName, { variables, allOperationKey });
			if (withResetStore) {
				set({ ...defaultStoreValue, operationName });
			}
		},

		/**
		 * Patch the store &&|| cache with some data.
		 */
		// prettier-ignore
		patch(data: Types.GetCustomerDataQuery, variables: Types.GetCustomerDataQueryVariables | null = null, type: PatchType = 'cache-and-store'): void {
			let updatedCacheStore = undefined;
			if(type === 'cache-only' || type === 'cache-and-store') {
				updatedCacheStore = kitQLClient.cacheUpdate<Types.GetCustomerDataQuery, Types.GetCustomerDataQueryVariables>(operationName, data, { variables });
			}
			if(type === 'store-only' ) {
				let toReturn = { ...get(KQL_GetCustomerData), data, variables } ;
				set(toReturn);
			}
			if(type === 'cache-and-store' ) {
				set({...get(KQL_GetCustomerData), ...updatedCacheStore});
			}
			kitQLClient.logInfo(operationName, "patch", type);
		}
	};
}
/**
 * KitQL Svelte Store with the latest `GetCustomerData` Operation
 */
export const KQL_GetCustomerData = KQL_GetCustomerDataStore();

function KQL_GetProductsWithCategoriesStore() {
	const operationName = 'KQL_GetProductsWithCategories';
	const operationType = ResponseResultType.Query;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.GetProductsWithCategoriesQuery, Types.GetProductsWithCategoriesQueryVariables>>({...defaultStoreValue, operationName, operationType});

		async function queryLocal(
			params?: RequestQueryParameters<Types.GetProductsWithCategoriesQueryVariables>
		): Promise<RequestResult<Types.GetProductsWithCategoriesQuery, Types.GetProductsWithCategoriesQueryVariables>> {
			let { fetch, variables, settings } = params ?? {};
			let { cacheMs, policy } = settings ?? {};

			const storedVariables = get(KQL_GetProductsWithCategories).variables;
			variables = variables ?? storedVariables;
			policy = policy ?? kitQLClient.policy;

			// Cache only in the browser for now. In SSR, we will need session identif to not mix peoples data
			if (browser) {
				if (policy !== 'network-only') {
					// prettier-ignore
					const cachedData = kitQLClient.requestCache<Types.GetProductsWithCategoriesQuery, Types.GetProductsWithCategoriesQueryVariables>({
						variables, operationName, cacheMs,	browser
					});
					if (cachedData) {
						const result = { ...cachedData, isFetching: false, status: RequestStatus.DONE };
						if (policy === 'cache-first') {
							set(result);
							if (!result.isOutdated) {
								return result;
							}
						} else if (policy === 'cache-only') {
							set(result);
							return result;
						} else if (policy === 'cache-and-network') {
							set(result);
						}
					}
				}
			}

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.GetProductsWithCategoriesQuery, Types.GetProductsWithCategoriesQueryVariables>({
				skFetch: fetch,
				document: Types.GetProductsWithCategoriesDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		query: queryLocal,

		/**
		 * Ideal for SSR query. To be used in SvelteKit load function
		 * @returns fill this store & the cache
		 */
		queryLoad: async (
			params?: RequestQueryParameters<Types.GetProductsWithCategoriesQueryVariables>
		): Promise<void> => {
			if (clientStarted) {
				queryLocal(params); // No await on purpose, we are in a client navigation.
			} else {
				await queryLocal(params);
			}
		},

		/**
		 * Reset Cache
		 */
		resetCache(
			variables: Types.GetProductsWithCategoriesQueryVariables | null = null,
			allOperationKey: boolean = true,
			withResetStore: boolean = true
		) {
			kitQLClient.cacheRemove(operationName, { variables, allOperationKey });
			if (withResetStore) {
				set({ ...defaultStoreValue, operationName });
			}
		},

		/**
		 * Patch the store &&|| cache with some data.
		 */
		// prettier-ignore
		patch(data: Types.GetProductsWithCategoriesQuery, variables: Types.GetProductsWithCategoriesQueryVariables | null = null, type: PatchType = 'cache-and-store'): void {
			let updatedCacheStore = undefined;
			if(type === 'cache-only' || type === 'cache-and-store') {
				updatedCacheStore = kitQLClient.cacheUpdate<Types.GetProductsWithCategoriesQuery, Types.GetProductsWithCategoriesQueryVariables>(operationName, data, { variables });
			}
			if(type === 'store-only' ) {
				let toReturn = { ...get(KQL_GetProductsWithCategories), data, variables } ;
				set(toReturn);
			}
			if(type === 'cache-and-store' ) {
				set({...get(KQL_GetProductsWithCategories), ...updatedCacheStore});
			}
			kitQLClient.logInfo(operationName, "patch", type);
		}
	};
}
/**
 * KitQL Svelte Store with the latest `GetProductsWithCategories` Operation
 */
export const KQL_GetProductsWithCategories = KQL_GetProductsWithCategoriesStore();

function KQL_GetProductsByCategoryStore() {
	const operationName = 'KQL_GetProductsByCategory';
	const operationType = ResponseResultType.Query;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.GetProductsByCategoryQuery, Types.GetProductsByCategoryQueryVariables>>({...defaultStoreValue, operationName, operationType});

		async function queryLocal(
			params?: RequestQueryParameters<Types.GetProductsByCategoryQueryVariables>
		): Promise<RequestResult<Types.GetProductsByCategoryQuery, Types.GetProductsByCategoryQueryVariables>> {
			let { fetch, variables, settings } = params ?? {};
			let { cacheMs, policy } = settings ?? {};

			const storedVariables = get(KQL_GetProductsByCategory).variables;
			variables = variables ?? storedVariables;
			policy = policy ?? kitQLClient.policy;

			// Cache only in the browser for now. In SSR, we will need session identif to not mix peoples data
			if (browser) {
				if (policy !== 'network-only') {
					// prettier-ignore
					const cachedData = kitQLClient.requestCache<Types.GetProductsByCategoryQuery, Types.GetProductsByCategoryQueryVariables>({
						variables, operationName, cacheMs,	browser
					});
					if (cachedData) {
						const result = { ...cachedData, isFetching: false, status: RequestStatus.DONE };
						if (policy === 'cache-first') {
							set(result);
							if (!result.isOutdated) {
								return result;
							}
						} else if (policy === 'cache-only') {
							set(result);
							return result;
						} else if (policy === 'cache-and-network') {
							set(result);
						}
					}
				}
			}

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.GetProductsByCategoryQuery, Types.GetProductsByCategoryQueryVariables>({
				skFetch: fetch,
				document: Types.GetProductsByCategoryDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		query: queryLocal,

		/**
		 * Ideal for SSR query. To be used in SvelteKit load function
		 * @returns fill this store & the cache
		 */
		queryLoad: async (
			params?: RequestQueryParameters<Types.GetProductsByCategoryQueryVariables>
		): Promise<void> => {
			if (clientStarted) {
				queryLocal(params); // No await on purpose, we are in a client navigation.
			} else {
				await queryLocal(params);
			}
		},

		/**
		 * Reset Cache
		 */
		resetCache(
			variables: Types.GetProductsByCategoryQueryVariables | null = null,
			allOperationKey: boolean = true,
			withResetStore: boolean = true
		) {
			kitQLClient.cacheRemove(operationName, { variables, allOperationKey });
			if (withResetStore) {
				set({ ...defaultStoreValue, operationName });
			}
		},

		/**
		 * Patch the store &&|| cache with some data.
		 */
		// prettier-ignore
		patch(data: Types.GetProductsByCategoryQuery, variables: Types.GetProductsByCategoryQueryVariables | null = null, type: PatchType = 'cache-and-store'): void {
			let updatedCacheStore = undefined;
			if(type === 'cache-only' || type === 'cache-and-store') {
				updatedCacheStore = kitQLClient.cacheUpdate<Types.GetProductsByCategoryQuery, Types.GetProductsByCategoryQueryVariables>(operationName, data, { variables });
			}
			if(type === 'store-only' ) {
				let toReturn = { ...get(KQL_GetProductsByCategory), data, variables } ;
				set(toReturn);
			}
			if(type === 'cache-and-store' ) {
				set({...get(KQL_GetProductsByCategory), ...updatedCacheStore});
			}
			kitQLClient.logInfo(operationName, "patch", type);
		}
	};
}
/**
 * KitQL Svelte Store with the latest `GetProductsByCategory` Operation
 */
export const KQL_GetProductsByCategory = KQL_GetProductsByCategoryStore();

function KQL_GetProductCategoriesStore() {
	const operationName = 'KQL_GetProductCategories';
	const operationType = ResponseResultType.Query;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.GetProductCategoriesQuery, Types.GetProductCategoriesQueryVariables>>({...defaultStoreValue, operationName, operationType});

		async function queryLocal(
			params?: RequestQueryParameters<Types.GetProductCategoriesQueryVariables>
		): Promise<RequestResult<Types.GetProductCategoriesQuery, Types.GetProductCategoriesQueryVariables>> {
			let { fetch, variables, settings } = params ?? {};
			let { cacheMs, policy } = settings ?? {};

			const storedVariables = get(KQL_GetProductCategories).variables;
			variables = variables ?? storedVariables;
			policy = policy ?? kitQLClient.policy;

			// Cache only in the browser for now. In SSR, we will need session identif to not mix peoples data
			if (browser) {
				if (policy !== 'network-only') {
					// prettier-ignore
					const cachedData = kitQLClient.requestCache<Types.GetProductCategoriesQuery, Types.GetProductCategoriesQueryVariables>({
						variables, operationName, cacheMs,	browser
					});
					if (cachedData) {
						const result = { ...cachedData, isFetching: false, status: RequestStatus.DONE };
						if (policy === 'cache-first') {
							set(result);
							if (!result.isOutdated) {
								return result;
							}
						} else if (policy === 'cache-only') {
							set(result);
							return result;
						} else if (policy === 'cache-and-network') {
							set(result);
						}
					}
				}
			}

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.GetProductCategoriesQuery, Types.GetProductCategoriesQueryVariables>({
				skFetch: fetch,
				document: Types.GetProductCategoriesDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		query: queryLocal,

		/**
		 * Ideal for SSR query. To be used in SvelteKit load function
		 * @returns fill this store & the cache
		 */
		queryLoad: async (
			params?: RequestQueryParameters<Types.GetProductCategoriesQueryVariables>
		): Promise<void> => {
			if (clientStarted) {
				queryLocal(params); // No await on purpose, we are in a client navigation.
			} else {
				await queryLocal(params);
			}
		},

		/**
		 * Reset Cache
		 */
		resetCache(
			variables: Types.GetProductCategoriesQueryVariables | null = null,
			allOperationKey: boolean = true,
			withResetStore: boolean = true
		) {
			kitQLClient.cacheRemove(operationName, { variables, allOperationKey });
			if (withResetStore) {
				set({ ...defaultStoreValue, operationName });
			}
		},

		/**
		 * Patch the store &&|| cache with some data.
		 */
		// prettier-ignore
		patch(data: Types.GetProductCategoriesQuery, variables: Types.GetProductCategoriesQueryVariables | null = null, type: PatchType = 'cache-and-store'): void {
			let updatedCacheStore = undefined;
			if(type === 'cache-only' || type === 'cache-and-store') {
				updatedCacheStore = kitQLClient.cacheUpdate<Types.GetProductCategoriesQuery, Types.GetProductCategoriesQueryVariables>(operationName, data, { variables });
			}
			if(type === 'store-only' ) {
				let toReturn = { ...get(KQL_GetProductCategories), data, variables } ;
				set(toReturn);
			}
			if(type === 'cache-and-store' ) {
				set({...get(KQL_GetProductCategories), ...updatedCacheStore});
			}
			kitQLClient.logInfo(operationName, "patch", type);
		}
	};
}
/**
 * KitQL Svelte Store with the latest `GetProductCategories` Operation
 */
export const KQL_GetProductCategories = KQL_GetProductCategoriesStore();

function KQL_GetProductDataFromSlugStore() {
	const operationName = 'KQL_GetProductDataFromSlug';
	const operationType = ResponseResultType.Query;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.GetProductDataFromSlugQuery, Types.GetProductDataFromSlugQueryVariables>>({...defaultStoreValue, operationName, operationType});

		async function queryLocal(
			params?: RequestQueryParameters<Types.GetProductDataFromSlugQueryVariables>
		): Promise<RequestResult<Types.GetProductDataFromSlugQuery, Types.GetProductDataFromSlugQueryVariables>> {
			let { fetch, variables, settings } = params ?? {};
			let { cacheMs, policy } = settings ?? {};

			const storedVariables = get(KQL_GetProductDataFromSlug).variables;
			variables = variables ?? storedVariables;
			policy = policy ?? kitQLClient.policy;

			// Cache only in the browser for now. In SSR, we will need session identif to not mix peoples data
			if (browser) {
				if (policy !== 'network-only') {
					// prettier-ignore
					const cachedData = kitQLClient.requestCache<Types.GetProductDataFromSlugQuery, Types.GetProductDataFromSlugQueryVariables>({
						variables, operationName, cacheMs,	browser
					});
					if (cachedData) {
						const result = { ...cachedData, isFetching: false, status: RequestStatus.DONE };
						if (policy === 'cache-first') {
							set(result);
							if (!result.isOutdated) {
								return result;
							}
						} else if (policy === 'cache-only') {
							set(result);
							return result;
						} else if (policy === 'cache-and-network') {
							set(result);
						}
					}
				}
			}

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.GetProductDataFromSlugQuery, Types.GetProductDataFromSlugQueryVariables>({
				skFetch: fetch,
				document: Types.GetProductDataFromSlugDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		query: queryLocal,

		/**
		 * Ideal for SSR query. To be used in SvelteKit load function
		 * @returns fill this store & the cache
		 */
		queryLoad: async (
			params?: RequestQueryParameters<Types.GetProductDataFromSlugQueryVariables>
		): Promise<void> => {
			if (clientStarted) {
				queryLocal(params); // No await on purpose, we are in a client navigation.
			} else {
				await queryLocal(params);
			}
		},

		/**
		 * Reset Cache
		 */
		resetCache(
			variables: Types.GetProductDataFromSlugQueryVariables | null = null,
			allOperationKey: boolean = true,
			withResetStore: boolean = true
		) {
			kitQLClient.cacheRemove(operationName, { variables, allOperationKey });
			if (withResetStore) {
				set({ ...defaultStoreValue, operationName });
			}
		},

		/**
		 * Patch the store &&|| cache with some data.
		 */
		// prettier-ignore
		patch(data: Types.GetProductDataFromSlugQuery, variables: Types.GetProductDataFromSlugQueryVariables | null = null, type: PatchType = 'cache-and-store'): void {
			let updatedCacheStore = undefined;
			if(type === 'cache-only' || type === 'cache-and-store') {
				updatedCacheStore = kitQLClient.cacheUpdate<Types.GetProductDataFromSlugQuery, Types.GetProductDataFromSlugQueryVariables>(operationName, data, { variables });
			}
			if(type === 'store-only' ) {
				let toReturn = { ...get(KQL_GetProductDataFromSlug), data, variables } ;
				set(toReturn);
			}
			if(type === 'cache-and-store' ) {
				set({...get(KQL_GetProductDataFromSlug), ...updatedCacheStore});
			}
			kitQLClient.logInfo(operationName, "patch", type);
		}
	};
}
/**
 * KitQL Svelte Store with the latest `GetProductDataFromSlug` Operation
 */
export const KQL_GetProductDataFromSlug = KQL_GetProductDataFromSlugStore();

function KQL_GetCategorySlugsStore() {
	const operationName = 'KQL_GetCategorySlugs';
	const operationType = ResponseResultType.Query;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.GetCategorySlugsQuery, Types.GetCategorySlugsQueryVariables>>({...defaultStoreValue, operationName, operationType});

		async function queryLocal(
			params?: RequestQueryParameters<Types.GetCategorySlugsQueryVariables>
		): Promise<RequestResult<Types.GetCategorySlugsQuery, Types.GetCategorySlugsQueryVariables>> {
			let { fetch, variables, settings } = params ?? {};
			let { cacheMs, policy } = settings ?? {};

			const storedVariables = get(KQL_GetCategorySlugs).variables;
			variables = variables ?? storedVariables;
			policy = policy ?? kitQLClient.policy;

			// Cache only in the browser for now. In SSR, we will need session identif to not mix peoples data
			if (browser) {
				if (policy !== 'network-only') {
					// prettier-ignore
					const cachedData = kitQLClient.requestCache<Types.GetCategorySlugsQuery, Types.GetCategorySlugsQueryVariables>({
						variables, operationName, cacheMs,	browser
					});
					if (cachedData) {
						const result = { ...cachedData, isFetching: false, status: RequestStatus.DONE };
						if (policy === 'cache-first') {
							set(result);
							if (!result.isOutdated) {
								return result;
							}
						} else if (policy === 'cache-only') {
							set(result);
							return result;
						} else if (policy === 'cache-and-network') {
							set(result);
						}
					}
				}
			}

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.GetCategorySlugsQuery, Types.GetCategorySlugsQueryVariables>({
				skFetch: fetch,
				document: Types.GetCategorySlugsDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		query: queryLocal,

		/**
		 * Ideal for SSR query. To be used in SvelteKit load function
		 * @returns fill this store & the cache
		 */
		queryLoad: async (
			params?: RequestQueryParameters<Types.GetCategorySlugsQueryVariables>
		): Promise<void> => {
			if (clientStarted) {
				queryLocal(params); // No await on purpose, we are in a client navigation.
			} else {
				await queryLocal(params);
			}
		},

		/**
		 * Reset Cache
		 */
		resetCache(
			variables: Types.GetCategorySlugsQueryVariables | null = null,
			allOperationKey: boolean = true,
			withResetStore: boolean = true
		) {
			kitQLClient.cacheRemove(operationName, { variables, allOperationKey });
			if (withResetStore) {
				set({ ...defaultStoreValue, operationName });
			}
		},

		/**
		 * Patch the store &&|| cache with some data.
		 */
		// prettier-ignore
		patch(data: Types.GetCategorySlugsQuery, variables: Types.GetCategorySlugsQueryVariables | null = null, type: PatchType = 'cache-and-store'): void {
			let updatedCacheStore = undefined;
			if(type === 'cache-only' || type === 'cache-and-store') {
				updatedCacheStore = kitQLClient.cacheUpdate<Types.GetCategorySlugsQuery, Types.GetCategorySlugsQueryVariables>(operationName, data, { variables });
			}
			if(type === 'store-only' ) {
				let toReturn = { ...get(KQL_GetCategorySlugs), data, variables } ;
				set(toReturn);
			}
			if(type === 'cache-and-store' ) {
				set({...get(KQL_GetCategorySlugs), ...updatedCacheStore});
			}
			kitQLClient.logInfo(operationName, "patch", type);
		}
	};
}
/**
 * KitQL Svelte Store with the latest `GetCategorySlugs` Operation
 */
export const KQL_GetCategorySlugs = KQL_GetCategorySlugsStore();

function KQL_GetCategoryFromSlugStore() {
	const operationName = 'KQL_GetCategoryFromSlug';
	const operationType = ResponseResultType.Query;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.GetCategoryFromSlugQuery, Types.GetCategoryFromSlugQueryVariables>>({...defaultStoreValue, operationName, operationType});

		async function queryLocal(
			params?: RequestQueryParameters<Types.GetCategoryFromSlugQueryVariables>
		): Promise<RequestResult<Types.GetCategoryFromSlugQuery, Types.GetCategoryFromSlugQueryVariables>> {
			let { fetch, variables, settings } = params ?? {};
			let { cacheMs, policy } = settings ?? {};

			const storedVariables = get(KQL_GetCategoryFromSlug).variables;
			variables = variables ?? storedVariables;
			policy = policy ?? kitQLClient.policy;

			// Cache only in the browser for now. In SSR, we will need session identif to not mix peoples data
			if (browser) {
				if (policy !== 'network-only') {
					// prettier-ignore
					const cachedData = kitQLClient.requestCache<Types.GetCategoryFromSlugQuery, Types.GetCategoryFromSlugQueryVariables>({
						variables, operationName, cacheMs,	browser
					});
					if (cachedData) {
						const result = { ...cachedData, isFetching: false, status: RequestStatus.DONE };
						if (policy === 'cache-first') {
							set(result);
							if (!result.isOutdated) {
								return result;
							}
						} else if (policy === 'cache-only') {
							set(result);
							return result;
						} else if (policy === 'cache-and-network') {
							set(result);
						}
					}
				}
			}

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.GetCategoryFromSlugQuery, Types.GetCategoryFromSlugQueryVariables>({
				skFetch: fetch,
				document: Types.GetCategoryFromSlugDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		query: queryLocal,

		/**
		 * Ideal for SSR query. To be used in SvelteKit load function
		 * @returns fill this store & the cache
		 */
		queryLoad: async (
			params?: RequestQueryParameters<Types.GetCategoryFromSlugQueryVariables>
		): Promise<void> => {
			if (clientStarted) {
				queryLocal(params); // No await on purpose, we are in a client navigation.
			} else {
				await queryLocal(params);
			}
		},

		/**
		 * Reset Cache
		 */
		resetCache(
			variables: Types.GetCategoryFromSlugQueryVariables | null = null,
			allOperationKey: boolean = true,
			withResetStore: boolean = true
		) {
			kitQLClient.cacheRemove(operationName, { variables, allOperationKey });
			if (withResetStore) {
				set({ ...defaultStoreValue, operationName });
			}
		},

		/**
		 * Patch the store &&|| cache with some data.
		 */
		// prettier-ignore
		patch(data: Types.GetCategoryFromSlugQuery, variables: Types.GetCategoryFromSlugQueryVariables | null = null, type: PatchType = 'cache-and-store'): void {
			let updatedCacheStore = undefined;
			if(type === 'cache-only' || type === 'cache-and-store') {
				updatedCacheStore = kitQLClient.cacheUpdate<Types.GetCategoryFromSlugQuery, Types.GetCategoryFromSlugQueryVariables>(operationName, data, { variables });
			}
			if(type === 'store-only' ) {
				let toReturn = { ...get(KQL_GetCategoryFromSlug), data, variables } ;
				set(toReturn);
			}
			if(type === 'cache-and-store' ) {
				set({...get(KQL_GetCategoryFromSlug), ...updatedCacheStore});
			}
			kitQLClient.logInfo(operationName, "patch", type);
		}
	};
}
/**
 * KitQL Svelte Store with the latest `GetCategoryFromSlug` Operation
 */
export const KQL_GetCategoryFromSlug = KQL_GetCategoryFromSlugStore();

function KQL_TitleStore() {
	const operationName = 'KQL_Title';
	const operationType = ResponseResultType.Query;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.TitleQuery, Types.TitleQueryVariables>>({...defaultStoreValue, operationName, operationType});

		async function queryLocal(
			params?: RequestQueryParameters<Types.TitleQueryVariables>
		): Promise<RequestResult<Types.TitleQuery, Types.TitleQueryVariables>> {
			let { fetch, variables, settings } = params ?? {};
			let { cacheMs, policy } = settings ?? {};

			const storedVariables = get(KQL_Title).variables;
			variables = variables ?? storedVariables;
			policy = policy ?? kitQLClient.policy;

			// Cache only in the browser for now. In SSR, we will need session identif to not mix peoples data
			if (browser) {
				if (policy !== 'network-only') {
					// prettier-ignore
					const cachedData = kitQLClient.requestCache<Types.TitleQuery, Types.TitleQueryVariables>({
						variables, operationName, cacheMs,	browser
					});
					if (cachedData) {
						const result = { ...cachedData, isFetching: false, status: RequestStatus.DONE };
						if (policy === 'cache-first') {
							set(result);
							if (!result.isOutdated) {
								return result;
							}
						} else if (policy === 'cache-only') {
							set(result);
							return result;
						} else if (policy === 'cache-and-network') {
							set(result);
						}
					}
				}
			}

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.TitleQuery, Types.TitleQueryVariables>({
				skFetch: fetch,
				document: Types.TitleDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		query: queryLocal,

		/**
		 * Ideal for SSR query. To be used in SvelteKit load function
		 * @returns fill this store & the cache
		 */
		queryLoad: async (
			params?: RequestQueryParameters<Types.TitleQueryVariables>
		): Promise<void> => {
			if (clientStarted) {
				queryLocal(params); // No await on purpose, we are in a client navigation.
			} else {
				await queryLocal(params);
			}
		},

		/**
		 * Reset Cache
		 */
		resetCache(
			variables: Types.TitleQueryVariables | null = null,
			allOperationKey: boolean = true,
			withResetStore: boolean = true
		) {
			kitQLClient.cacheRemove(operationName, { variables, allOperationKey });
			if (withResetStore) {
				set({ ...defaultStoreValue, operationName });
			}
		},

		/**
		 * Patch the store &&|| cache with some data.
		 */
		// prettier-ignore
		patch(data: Types.TitleQuery, variables: Types.TitleQueryVariables | null = null, type: PatchType = 'cache-and-store'): void {
			let updatedCacheStore = undefined;
			if(type === 'cache-only' || type === 'cache-and-store') {
				updatedCacheStore = kitQLClient.cacheUpdate<Types.TitleQuery, Types.TitleQueryVariables>(operationName, data, { variables });
			}
			if(type === 'store-only' ) {
				let toReturn = { ...get(KQL_Title), data, variables } ;
				set(toReturn);
			}
			if(type === 'cache-and-store' ) {
				set({...get(KQL_Title), ...updatedCacheStore});
			}
			kitQLClient.logInfo(operationName, "patch", type);
		}
	};
}
/**
 * KitQL Svelte Store with the latest `Title` Operation
 */
export const KQL_Title = KQL_TitleStore();

function KQL_GetUserStore() {
	const operationName = 'KQL_GetUser';
	const operationType = ResponseResultType.Query;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.GetUserQuery, Types.GetUserQueryVariables>>({...defaultStoreValue, operationName, operationType});

		async function queryLocal(
			params?: RequestQueryParameters<Types.GetUserQueryVariables>
		): Promise<RequestResult<Types.GetUserQuery, Types.GetUserQueryVariables>> {
			let { fetch, variables, settings } = params ?? {};
			let { cacheMs, policy } = settings ?? {};

			const storedVariables = get(KQL_GetUser).variables;
			variables = variables ?? storedVariables;
			policy = policy ?? kitQLClient.policy;

			// Cache only in the browser for now. In SSR, we will need session identif to not mix peoples data
			if (browser) {
				if (policy !== 'network-only') {
					// prettier-ignore
					const cachedData = kitQLClient.requestCache<Types.GetUserQuery, Types.GetUserQueryVariables>({
						variables, operationName, cacheMs,	browser
					});
					if (cachedData) {
						const result = { ...cachedData, isFetching: false, status: RequestStatus.DONE };
						if (policy === 'cache-first') {
							set(result);
							if (!result.isOutdated) {
								return result;
							}
						} else if (policy === 'cache-only') {
							set(result);
							return result;
						} else if (policy === 'cache-and-network') {
							set(result);
						}
					}
				}
			}

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.GetUserQuery, Types.GetUserQueryVariables>({
				skFetch: fetch,
				document: Types.GetUserDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		query: queryLocal,

		/**
		 * Ideal for SSR query. To be used in SvelteKit load function
		 * @returns fill this store & the cache
		 */
		queryLoad: async (
			params?: RequestQueryParameters<Types.GetUserQueryVariables>
		): Promise<void> => {
			if (clientStarted) {
				queryLocal(params); // No await on purpose, we are in a client navigation.
			} else {
				await queryLocal(params);
			}
		},

		/**
		 * Reset Cache
		 */
		resetCache(
			variables: Types.GetUserQueryVariables | null = null,
			allOperationKey: boolean = true,
			withResetStore: boolean = true
		) {
			kitQLClient.cacheRemove(operationName, { variables, allOperationKey });
			if (withResetStore) {
				set({ ...defaultStoreValue, operationName });
			}
		},

		/**
		 * Patch the store &&|| cache with some data.
		 */
		// prettier-ignore
		patch(data: Types.GetUserQuery, variables: Types.GetUserQueryVariables | null = null, type: PatchType = 'cache-and-store'): void {
			let updatedCacheStore = undefined;
			if(type === 'cache-only' || type === 'cache-and-store') {
				updatedCacheStore = kitQLClient.cacheUpdate<Types.GetUserQuery, Types.GetUserQueryVariables>(operationName, data, { variables });
			}
			if(type === 'store-only' ) {
				let toReturn = { ...get(KQL_GetUser), data, variables } ;
				set(toReturn);
			}
			if(type === 'cache-and-store' ) {
				set({...get(KQL_GetUser), ...updatedCacheStore});
			}
			kitQLClient.logInfo(operationName, "patch", type);
		}
	};
}
/**
 * KitQL Svelte Store with the latest `GetUser` Operation
 */
export const KQL_GetUser = KQL_GetUserStore();

function KQL_GetHomeStore() {
	const operationName = 'KQL_GetHome';
	const operationType = ResponseResultType.Query;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.GetHomeQuery, Types.GetHomeQueryVariables>>({...defaultStoreValue, operationName, operationType});

		async function queryLocal(
			params?: RequestQueryParameters<Types.GetHomeQueryVariables>
		): Promise<RequestResult<Types.GetHomeQuery, Types.GetHomeQueryVariables>> {
			let { fetch, variables, settings } = params ?? {};
			let { cacheMs, policy } = settings ?? {};

			const storedVariables = get(KQL_GetHome).variables;
			variables = variables ?? storedVariables;
			policy = policy ?? kitQLClient.policy;

			// Cache only in the browser for now. In SSR, we will need session identif to not mix peoples data
			if (browser) {
				if (policy !== 'network-only') {
					// prettier-ignore
					const cachedData = kitQLClient.requestCache<Types.GetHomeQuery, Types.GetHomeQueryVariables>({
						variables, operationName, cacheMs,	browser
					});
					if (cachedData) {
						const result = { ...cachedData, isFetching: false, status: RequestStatus.DONE };
						if (policy === 'cache-first') {
							set(result);
							if (!result.isOutdated) {
								return result;
							}
						} else if (policy === 'cache-only') {
							set(result);
							return result;
						} else if (policy === 'cache-and-network') {
							set(result);
						}
					}
				}
			}

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.GetHomeQuery, Types.GetHomeQueryVariables>({
				skFetch: fetch,
				document: Types.GetHomeDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		query: queryLocal,

		/**
		 * Ideal for SSR query. To be used in SvelteKit load function
		 * @returns fill this store & the cache
		 */
		queryLoad: async (
			params?: RequestQueryParameters<Types.GetHomeQueryVariables>
		): Promise<void> => {
			if (clientStarted) {
				queryLocal(params); // No await on purpose, we are in a client navigation.
			} else {
				await queryLocal(params);
			}
		},

		/**
		 * Reset Cache
		 */
		resetCache(
			variables: Types.GetHomeQueryVariables | null = null,
			allOperationKey: boolean = true,
			withResetStore: boolean = true
		) {
			kitQLClient.cacheRemove(operationName, { variables, allOperationKey });
			if (withResetStore) {
				set({ ...defaultStoreValue, operationName });
			}
		},

		/**
		 * Patch the store &&|| cache with some data.
		 */
		// prettier-ignore
		patch(data: Types.GetHomeQuery, variables: Types.GetHomeQueryVariables | null = null, type: PatchType = 'cache-and-store'): void {
			let updatedCacheStore = undefined;
			if(type === 'cache-only' || type === 'cache-and-store') {
				updatedCacheStore = kitQLClient.cacheUpdate<Types.GetHomeQuery, Types.GetHomeQueryVariables>(operationName, data, { variables });
			}
			if(type === 'store-only' ) {
				let toReturn = { ...get(KQL_GetHome), data, variables } ;
				set(toReturn);
			}
			if(type === 'cache-and-store' ) {
				set({...get(KQL_GetHome), ...updatedCacheStore});
			}
			kitQLClient.logInfo(operationName, "patch", type);
		}
	};
}
/**
 * KitQL Svelte Store with the latest `GetHome` Operation
 */
export const KQL_GetHome = KQL_GetHomeStore();
