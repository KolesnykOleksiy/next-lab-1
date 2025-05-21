type AppProps = {
    label: string,
    isActive?: boolean;
}
export default function NavBarItem({ label, isActive = false  }:AppProps) {
    return (
        <div
            className={`px-4 py-2 text-sm font-medium ${
                isActive ? 'bg-cyan-500 text-white' : 'bg-transparent text-black'
            } hover:bg-cyan-600 hover:text-white cursor-pointer rounded`}
        >
            {label}
        </div>
    );
}