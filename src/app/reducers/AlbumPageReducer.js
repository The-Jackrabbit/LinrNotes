const albumPageReducer = (state = {
    artist: "nullArtist",
    albumName: "nullAlbumName",
    albumId: "5JppODax1KTo8AB7jhtCzk",
    genre: "nullGenre",
    type: "nullType",
    albumArtURL: "nullAlbumArtURL",
    activeSong: "nullActiveSong",
    currentTime: "00:00:00",
    endTime: "00:00:00",
    tracklist: "",
    tracklistArray: [],
    data: {}
}, action) => {
    if (action.type === 'SETARTIST') {
        state = {
            ...state,
            artist: action.payload,
        }
    }
    else if (action.type === 'SETALBUMNAME') {
        state = {
            ...state,
            albumName: action.payload,
        }
    }
    else if (action.type === 'SETALBUMID') {
        state = {
            ...state,
            albumId: action.payload,
        }
    }
    else if (action.type === 'SETGENRE') {
        state = {
            ...state,
            genre: action.payload,
        }
    }
    else if (action.type === 'SETTYPE') {
        state = {
            ...state,
            type: action.payload,
        }
    }
    else if (action.type === 'SETALBUMARTURL') {
        state = {
            ...state,
            albumArtURL: action.payload,
        }
    }
    else if (action.type === 'SETACTIVESONG') {
        state = {
            ...state,
            activeSong: action.payload,
        }
    }
    else if (action.type === 'SETCURRENTTIME') {
        state = {
            ...state,
            currentTime: action.payload,
        }
    }
    else if (action.type === 'SETENDTIME') {
        state = {
            ...state,
            endTime: action.payload,
        }
    }
    else if (action.type === 'SETTRACKLIST') {
        state = {
            ...state,
            tracklist: action.payload,
        }
    }
    else if (action.type === 'SETTRACKLISTARRAY') {
        state = {
            ...state,
            tracklistArray: action.payload,
        }
    }
    else if (action.type === 'SETDATA') {
        state = {
            ...state,
            data: action.payload,
        }
    }
    return state;
};

export default albumPageReducer;