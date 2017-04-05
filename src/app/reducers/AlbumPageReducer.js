const albumPageReducer = (state = {
    artist: "nullArtist",
    albumName: "nullAlbumName",
    albumId: "",
    genre: "nullGenre",
    type: "nullType",
    albumIndex: 0,
    albumArtURL: "nullAlbumArtURL",
    albumList: [],
    activeSong: "nullActiveSong",
    currentTime: "00:00:00",
    endTime: "00:00:00",
    tracklist: "",
    activeLyrics: "Drop out of life with bong in hand",
    tracklistArray: [],
    tracklistIds: [],
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
    else if (action.type === 'SETALBUMINDEX') {
        state = {
            ...state,
            albumIndex: action.payload,
        }
    }
    else if (action.type === 'SETALBUMLIST') {
        state = {
            ...state,
            albumList: action.payload,
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
    }else if (action.type === 'SETACTIVELYRICS') {
        state = {
            ...state,
            activeLyrics: action.payload,
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
    else if (action.type === 'SETTRACKLISTIDS') {
        state = {
            ...state,
            tracklistIds: action.payload,
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