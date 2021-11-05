// import React, { useEffect } from 'react';
import { CommentContent } from './styled';

interface CommentProps {
  content: string;
  created: Date;
  setModifyContent: (arg: string) => void;
}

const CommentBox = ({ content, created, setModifyContent }: CommentProps) => {
  setModifyContent(content);

  return (
    <CommentContent>
      <p>{content}</p>
      <span>
        {new Date(created).toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </span>
    </CommentContent>
  );
};

export default CommentBox;
