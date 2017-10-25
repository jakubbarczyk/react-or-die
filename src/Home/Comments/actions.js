/**
 * action types
 */
const LIKE = 'LIKE';
const UNLIKE = 'UNLIKE';

export { LIKE, UNLIKE };

/**
 * action creators
 */
const likeComment = (id) => ({ type: LIKE, id });
const unlikeComment = (id) => ({ type: UNLIKE, id });

export { likeComment, unlikeComment };
