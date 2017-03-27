const albumPageReducer = (state = {
    artist: "nullArtist",
    albumName: "nullAlbumName",
    albumId: "nullAlbumId",
    genre: "nullGenre",
    type: "nullType",
    albumArtURL: "nullAlbumArtURL",
    activeSong: "nullActiveSong",
    endTime: "00:00:00",
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
    else if (action.type === 'SETENDTIME') {
        state = {
            ...state,
            endTime: action.payload,
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