import React from 'react';
import PropTypes from 'prop-types';
import Button from '~/Button';
import styles from './comment.scss';

/**
 * Comment component
 */
const Comment = ({ comment, like, unlike }) => (
  <article className={styles.comment}>
    <p>{comment.text}</p>
    {
      comment.liked
        ? <Button type="button" onClick={() => unlike(comment.id)}>-1</Button>
        : <Button type="button" onClick={() => like(comment.id)}>+1</Button>
    }
  </article>
);

Comment.propTypes = {
  comment: PropTypes.PropTypes.shape({
    id: PropTypes.number.isRequired,
    liked: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  like: PropTypes.func.isRequired,
  unlike: PropTypes.func.isRequired
};

Comment.defaultProps = {
  liked: false
};

export default Comment;
