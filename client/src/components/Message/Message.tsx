/*eslint-disable*/
import { Wrap } from './styled';
import empty from '../../images/empty.jpeg';

interface Props {
  message: string;
}

const Message = ({ message }: Props) => {
  return (
    <Wrap>
      <div>
        <img src={empty} />
        <p>{message}</p>
      </div>
    </Wrap>
  );
};

export default Message;
