export function SendBox({ onChange, value, onSend}){
    return(
        <div className="flex w-full p-2 justify-center space-x-2 bg-indigo-950">
                <input onChange={onChange} value={value} type="text" placeholder="say something" className=" w-full p-2" />
                <button onClick={() => { onSend(value) }} className="p-2 bg-blue-500 text-white">send</button>

        </div>
    )
}