/*eslint-disable*/
import { Wrap } from './styled';
import empty from '../../images/empty.jpeg';

interface Props {
  message: string;
}

const Message = ({ message }: Props) => {
  return (
    <Wrap>
      <img src={empty} />
      <p>{message}</p>
    </Wrap>
  );
};

export default Message;
