declare namespace svelte.JSX {
	export interface HTMLAttributes<T> {
		onpanstart?: (event: CustomEvent) => void;
		onpanmove?: (event: CustomEvent) => void;
		onpanend?: (event: CustomEvent) => void;
	}
}
