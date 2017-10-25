import { LIKE, UNLIKE } from './Comments/actions';

const initialState = {
  comments: [
    {
      id: 1,
      liked: false,
      text: 'React or die, dude.'
    }
  ]
};

/**
 * comments reducer
 */
const comments = (state = initialState, action) => {
  switch (action.type) {
    case LIKE:
      return {
        comments: state.comments.map((comment) => {
          if (comment.id === action.id) {
            return Object.assign({}, comment, { liked: true });
          }
          return comment;
        })
      };
    case UNLIKE:
      return {
        comments: state.comments.map((comment) => {
          if (comment.id === action.id) {
            return Object.assign({}, comment, { liked: false });
          }
          return comment;
        })
      };
    default:
      return state;
  }
};

export default comments;
