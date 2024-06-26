
import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () =>{
    const langSelector = useSelector(store=>store.gpt.languageData)
    

    return (
        <div className="pt-[10%] flex justify-center ">
            <form className="w-1/2 bg-black grid grid-cols-12">
                <input type="text" className="p-4 m-4 col-span-9" placeholder={lang[langSelector].gptSearchplaceholder} />
                <button className="py-2 col-span-3 m-4 px-4 bg-red-700 text-white rounded-lg">{lang[langSelector].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;