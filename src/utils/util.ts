const getImagePrefix = () => {
    // For Vercel deployment, we use "/" for both development and production
    return "/";
};

export { getImagePrefix };