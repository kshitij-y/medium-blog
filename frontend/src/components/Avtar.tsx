
interface props {
    name: string
}
export const Avtar = ({ name }: props) => {
    const firsChar = name[0].toUpperCase();
    const getRandomColor = (): string => {
        const colors = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400'];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    const color = getRandomColor();
    
    return (
        <div className={`border rounded-full w-6 h-6 justify-center text-center ${color} text-white`}>
            {firsChar}
        </div>
    )
}