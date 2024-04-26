const Signup = () =>{
    return(
        <div className="flex flex-grow-0 flex-shrink-0 flex-basis-1/2 p-0 z-10 w-full">
            
            <div className="p-12 absolute w-3/12 my-36 mx-auto left-0 right-0">
                <h1 className="font-bold text-3xl absolute py-2 p-2 text-white">Unlimited movies, TV shows and more</h1>
                <input type="text" placeholder="Email Address" className="p-2 border rounded-md border-gray-500 border-opacity-70 bg-transparent text-white  m-2 w-full" />
                <button className="p-2 m-2 mt-4 rounded-md bg-red-600 w-full text-white">Sign In</button>
            </div>
            
        </div>
    )
}

export default Signup