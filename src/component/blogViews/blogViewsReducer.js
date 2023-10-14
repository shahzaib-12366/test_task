
// blogViewsReducer.js
const INCREMENT_BLOG_VIEWS = 'INCREMENT_BLOG_VIEWS';

export const incrementBlogViews = (blogId) => ({
  type: INCREMENT_BLOG_VIEWS,
  blogId, 
});

const initialState = {
  // Initialize the state with views for each blog
  // Example: 1: 10, 2: 15, ...
};

const blogViewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BLOG_VIEWS: // Use 'INCREMENT_BLOG_VIEWS' instead of 'INCREMENT_BLOG_VIEW'
      return {
        ...state,
        [action.blogId]: (state[action.blogId] || 0) + 1,
      };
    default:
      return state;
  }
};

export default blogViewsReducer;
