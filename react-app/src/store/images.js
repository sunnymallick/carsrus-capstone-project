export const LOAD = 'images/LOAD'

const loadImages = (images) => ({
    type: LOAD,
    images
})

export const getAllImages = () => async (dispatch) => {
    const res = await fetch(`/api/images/`);

    if (res.ok) {
        const images = await res.json();
        dispatch(loadImages(images.images))
        return res;
    }
}