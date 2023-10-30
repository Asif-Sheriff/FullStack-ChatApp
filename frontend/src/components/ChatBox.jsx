import { ReceivedTextBox } from './ReceivedTextBox';
import { SendBox } from './SendBox';
import { SentTextBox } from './SentTextBox';

export function ChatBox({ receivedText, onChange, value, onSend, textList }) {
    return (
        <div className="flex flex-col w-full items-end bg-blue-900">

            <div className="flex justify-end w-full h-full p-2">
                <ul className='flex flex-col w-full items-end space-y-2'>

                {textList.map((text) => {
                    return (
                        <li className="w-full">
                            <SentTextBox text={text} />
                        </li>
                    )
                })}
                {receivedText.map((text) => {
                    return (
                        <li className="w-full">
                            <ReceivedTextBox text={text} />
                        </li>
                    )
                })}
                </ul>

            </div>
            <SendBox onChange={onChange} value={value} onSend={onSend} />

        </div>
    )
} 