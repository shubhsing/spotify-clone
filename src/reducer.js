export const initialState={
    user:null,
    playing:false,
    item:null,
    playlists:[],
    // token:'BQBbNC9KFbs_kK629gFigqwtPezcEZ9sh1DCz0Q-vkTdsmniAWKXskak0Xd-ybib14PerPNwzPcaJjIqkrJqHULHkGFNK2SKnNA7Z5u581pse_90BhRsfDg1hV2zkKK5GK_SUx3C6jnOyLtXrSZU6TmUlLF8MYA_fSO6k-xZ7TFODoauyboX',
}
const reducer = (state,action) => {
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token:action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return {
            ...state,
            discover_weekly:action.discover_weekly
            }    
        default:
            return state;
    }
}
export default reducer
