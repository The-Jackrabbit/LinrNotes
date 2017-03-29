export function setArtist(artist) {
    return {
        type: "SETARTIST",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(artist);
            }, 2000);
        })
    };
}

export function setTracklist(tracklist) {
    return {
        type: "SETTRACKLIST",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(tracklist);
            }, 2000);
        })
    };
}

export function setTracklistArray(tracklistArray) {
    return {
        type: "SETTRACKLISTARRAY",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(tracklistArray);
            }, 2000);
        })
    };
}
