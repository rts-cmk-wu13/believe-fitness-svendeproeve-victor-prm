import Fuse from "fuse.js";

export function fuzzySearch(query,arr,keys=[]) {
    if(!query) return arr;

    const fuseOptions = {
        // isCaseSensitive: false,
        // includeScore: false,
        // ignoreDiacritics: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        threshold: 0.3,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: [
            ...keys
        ]
    };

    const fuse = new Fuse(arr, fuseOptions);
    return fuse.search(query).map(res => res.item)
}