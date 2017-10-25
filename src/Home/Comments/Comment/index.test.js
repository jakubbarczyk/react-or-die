import React from 'react';
import { shallow } from 'enzyme';
import Button from '~/Button';
import Comment from './';

describe('Comment', () => {
  const likeFake = jest.fn();
  const unlikeFake = jest.fn();
  const commentMock = { id: 100, liked: false, text: 'This is a comment.' };
  const createComment = (options) => {
    const comment = Object.assign(commentMock, options);
    return shallow(<Comment comment={comment} like={likeFake} unlike={unlikeFake} />);
  };

  it('should display comment text', () => {
    const comment = createComment();
    expect(comment.find('p').text()).toEqual(commentMock.text);
  });

  it('should trigger like action for unliked comment', () => {
    const comment = createComment({ liked: false });
    comment.find(Button).simulate('click');
    expect(likeFake).toHaveBeenCalledWith(commentMock.id);
  });

  it('should trigger unlike action for liked comment', () => {
    const comment = createComment({ liked: true });
    comment.find(Button).simulate('click');
    expect(unlikeFake).toHaveBeenCalledWith(commentMock.id);
  });
});
