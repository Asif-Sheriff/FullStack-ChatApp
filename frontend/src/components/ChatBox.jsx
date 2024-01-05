import { ReceivedTextBox } from './ReceivedTextBox';
import { SendBox } from './SendBox';
import { SentTextBox } from './SentTextBox';

export function ChatBox({ receivedText, onChange, value, onSend, textList }) {

    const renderedMessages = [];
    function handleRendering() {
        let x = 0, y = 0;
      
        while (x < textList.length && y < receivedText.length) {
          if (textList[x].date > receivedText[y].date) {
            renderedMessages.push(
              <li className="w-full" key={'received-' + y}>
                <ReceivedTextBox text={receivedText[y].text} />
              </li>
            );
            y++;
          } else {
            renderedMessages.push(
              <li className="w-full" key={'sent-' + x}>
                <SentTextBox text={textList[x].text} />
              </li>
            );
            x++;
          }
        }
      
        // If there are remaining messages in either array, add them
        while (x < textList.length) {
          renderedMessages.push(
            <li className="w-full" key={'sent-' + x}>
              <SentTextBox text={textList[x].text} />
            </li>
          );
          x++;
        }
      
        while (y < receivedText.length) {
          renderedMessages.push(
            <li className="w-full" key={'received-' + y}>
              <ReceivedTextBox text={receivedText[y].text} />
            </li>
          );
          y++;
        }        
      }
      

    return (
        <div className="flex flex-col w-full items-end bg-blue-900">

            <div className="flex justify-end w-full h-full p-2 overflow-auto">
                <ul className='flex flex-col w-full items-end space-y-2'>

                {handleRendering()}
                {renderedMessages}
                </ul>

            </div>
            <SendBox onChange={onChange} value={value} onSend={onSend} />

        </div>
    )
} 