export type appInitialState = {
    error: any;
    loading: boolean;
    wikipediaData: Array<{pageid: number; title: string; snippet: string}>;
};
