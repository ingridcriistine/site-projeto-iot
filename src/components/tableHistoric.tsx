"use client"
interface dadoLinhasTable {
    tituloUm: string ,
    tituloDois: string,
    tituloTres: string,
    tituloQuatro: string,
    tituloCinco: string,
    dadoLinha : {[key: string] : {name: string , RFID: string, datetime: string, loan: string, return: string }}[]
}

const TabelaHistorico: React.FC<dadoLinhasTable> = ({tituloUm, tituloDois, tituloTres, tituloQuatro, tituloCinco, dadoLinha}) => {{
    console.log(dadoLinha);
    return (
        <> 
         <table className="flex w-full flex-col">
            <thead className="w-full items-center flex ">
                <tr className="flex w-full items-center">
                    <th className="justify-center flex w-[25%] p-5">{tituloUm}</th>
                    <th className="justify-center flex w-[25%] p-5">{tituloDois}</th>
                    <th className="justify-center flex w-[25%] p-5">{tituloTres}</th>
                    <th className="justify-center flex w-[25%] p-5">{tituloQuatro}</th>
                    <th className="justify-center flex w-[25%] p-5">{tituloCinco}</th>
                </tr>
            </thead>
            <tbody className="w-full items-center">
                {Object.values(dadoLinha).map((item,index) => (
                    <tr key={index} className="flex w-full items-center	">
                        <td className="justify-center flex w-[25%] border-b-2 p-2">{item.name}</td>
                        <td className="justify-center flex w-[25%] border-b-2 p-2">{item.RFID}</td>
                        <td className="justify-center flex w-[25%] border-b-2 p-2">{item.loan}</td>
                        <td className="justify-center flex w-[25%] border-b-2 p-2">{item.return}</td>
                        <td className="justify-center flex w-[25%] border-b-2 p-2">{item.datetime}</td>
                    </tr>
                )   
                )}
            </tbody>
        </table>
        </>

    );
}}
export default TabelaHistorico;