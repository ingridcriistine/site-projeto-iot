import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import img1 from "../app/assets/bosch.png";
import img2 from "../app/assets/bosch.png";
import img3 from "../app/assets/bosch.png";
import img4 from "../app/assets/bosch.png";

interface CardProps {
    imagem: number,
    title: string,
    status: string
}

export const CardTool: React.FC<CardProps> = ({imagem, title, status}) => {
    return(
        <div className="flex flex-col relative w-64 h-[200px] m-4 bg-white rounded-3xl align-center shadow-md shadow-slate-100 hover:scale-110 transition easy-in-out text-black">
            <Image src={imagem === 1 ? img1 : imagem === 2 ? img2 : imagem === 3 ? img3 : img4} alt="imagem" className="h-36 object-cover rounded-t-3xl"/>
            <div className="flex align-center justify-around">
                <h3 className="m-4">{title}</h3>
                <div className={status === "true" ? "w-2 h-2 bg-green-500 m-6" : "bg-red-600 w-2 h-2 m-6"}></div>
            </div>
        </div>
    )
}