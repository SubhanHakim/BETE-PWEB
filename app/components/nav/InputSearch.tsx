import { CiSearch } from "react-icons/ci";

const InputSearch = () => {
    return ( 
        <div className="relative">
            <input placeholder="Search..." className="bg-grays px-5 py-3 roun" />
            <button className="absolute end-4 top-3 text-2xl">
                <CiSearch/>
            </button>
        </div>
     );
}
 
export default InputSearch;