import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() =>{
        const i = setInterval(() =>{
            //API polling
            // console.log("API calling");
            dispatch(
                addMessage({
                name:generateRandomNames(),
                message:makeRandomMessage(10) + "🚀",
            }))
        },1500);

        return () => clearInterval(i);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <>
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg shadow-lg overflow-y-scroll flex flex-col-reverse">
      <div>
       {//Not use indexes as Key
       chatMessages.map((c, index) =><ChatMessage
        key={index} 
        name={c.name}
        message={c.message}
       />)
       }
      </div>      
    </div>

    <form 
      className="w-full p-2 m-2 border border-black rounded-md" 
      onSubmit={(e) =>{
        e.preventDefault();
        console.log("ON submit form", liveMessage);
        dispatch(addMessage({
          name:"Mouli",
          message:liveMessage,
        }));
        setLiveMessage("");
      }}>
      <input 
      className="w-96 p-2" 
      type="text" 
      placeholder="Enter your text"
      value={liveMessage}
      onChange={(e) =>{
        setLiveMessage(e.target.value);
      }}
      />
      <button className="px-3 mx-4 bg-green-400 rounded-lg">Send</button>
    </form>
    </>
  )
}

export default LiveChat