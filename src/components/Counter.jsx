import { useState } from "react"
function Counter() {

    const [counter, setCount] = useState(0)


    // update the button increment
    const increase = () => {
        setCount(counter + 1);

    }
    // update the button decrement
    const Decrease = () => {
        setCount(counter - 1);
        if (counter == 0) {
            setCount(0)
        }

    }
    const Reset = () => {
        setCount(0);

    }
    return <div className=" flex justify-center mt-20">
        <div>
            <div counter className="w-[350px] h-[100px] p-2 rounded-full text-center text-4xl font-bold border-2 border-black ml-5 sm:ml-16  mt-5">
                <h1>{counter} </h1>
            </div>
            <button onClick={increase} className="bg-slate-600 text-3xl px-3 py-2 m-3 sm:ml-20  ml-14  rounded">increase</button>
            <button onClick={Decrease} className="bg-slate-600 text-3xl px-3 py-2 m-3 rounded">Decrease</button>
            <div className="ml-[200px]">
                <button onClick={Reset} className="bg-slate-600 text-3xl px-3 py-2 sm:m-3 rounded  ">Reset</button>
            </div>
        </div>
    </div>
}

export default Counter