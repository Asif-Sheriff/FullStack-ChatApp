export function ChatBox(){
    return(
        <div className="flex w-full items-end bg-blue-900">
            <div className="flex w-full p-2 justify-center space-x-2 bg-indigo-950">
                <input type="text" placeholder="say something" className=" w-full p-2" />
                <button className="p-2 bg-blue-500 text-white">send</button>

            </div>

        </div>
    )
} 