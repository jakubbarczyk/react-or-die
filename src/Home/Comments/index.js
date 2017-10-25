import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { likeComment, unlikeComment } from './actions';
import Comment from './Comment';

/**
 * Comments component
 */
const Comments = ({ comments, like, unlike }) => (
  <section>
    {comments.map((comment) =>
      <Comment key={comment.id} comment={comment} like={like} unlike={unlike} />)
    }
  </section>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    liked: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  like: PropTypes.func.isRequired,
  unlike: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  comments: state.comments
});

const mapDispatchToProps = (dispatch) => ({
  like: (id) => dispatch(likeComment(id)),
  unlike: (id) => dispatch(unlikeComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
