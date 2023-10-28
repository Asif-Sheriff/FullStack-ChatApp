import { SendBox } from './SendBox';
import { TextBox } from './TextBox';

export function ChatBox({ onChange, value, onSend, textList }) {
    return (
        <div className="flex flex-col w-full items-end bg-blue-900">

            <div className="flex justify-end w-full h-full p-2">
                <ul className='flex flex-col items-end space-y-2'>

                {textList.map((text) => {
                    return (
                        <li>
                            <TextBox text={text} />
                        </li>
                    )
                })}
                </ul>

            </div>
            <SendBox onChange={onChange} value={value} onSend={onSend} />

        </div>
    )
} 