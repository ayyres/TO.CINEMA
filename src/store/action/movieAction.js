export const Populer = "Populer"

export const setPopuler = (data) => {
    return {
        type: Populer,
        data: data,
        
    };
};
export const now_playing = "now_playing"

export const setnow_playing = (data) => {
    return {
        type: now_playing,
        data: data,
        
    };
};
export const top_rating = "top_rating"

export const settop_rating = (data) => {
    return {
        type: top_rating,
        data: data,
        
    };
};
export const up_coming = "up_coming"

export const setup_coming = (data) => {
    return {
        type: up_coming,
        data: data,
        
    };
};