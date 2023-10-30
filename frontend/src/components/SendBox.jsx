export function SendBox({ onChange, value, onSend}){
    return(
        <div className="flex w-full p-2 justify-center space-x-2 bg-indigo-950">
                <input onKeyDown={(event) => {
                        if (event.key === 'Enter') {onSend(value)
                        }
                    }} onChange={onChange} value={value} type="text" placeholder="say something" className=" w-full p-2" />
                <button onKeyDown={(event)=>{if(event.key==="enter"){}}} onClick={() => { onSend(value) }} className="p-2 bg-blue-500 text-white">send</button>

        </div>
    )
}