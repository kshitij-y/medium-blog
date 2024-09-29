
interface props {
    name: string
}
export const Avtar = ({ name }: props) => {
    const firsChar = name[0].toUpperCase();
    
    return (
        <div className="border rounded-full w-6 h-6 justify-center text-center bg-gray-400 text-white">
            {firsChar}
        </div>
    )
}