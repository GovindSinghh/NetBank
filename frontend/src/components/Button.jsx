

export function Button({label, onClick}) {
    return <button onClick={onClick} type="button" className="px-5 py-2.5 mt-4 mb-1 w-full text-white bg-gray-800 hover:bg-slate-700  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm">{label}</button>
}