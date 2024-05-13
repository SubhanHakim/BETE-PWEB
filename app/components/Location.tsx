import { location } from "@/utils/Location";
import Link from "next/link";

const Location = () => {
    return (
        <div className="flex flex-col gap-4 justify-center pr-32 border-r-2 border-slate-100">
            {location.map((location: any) => {
                return <div key={location.id} >
                    <div className="">
                        <Link href="#" className="">{location.name_location}</Link>
                    </div>
                </div>
            })}
        </div>
    );
}

export default Location;