export default function BookCard({ img, title }) {
    return (
        <div className="w-full h-72 bg-gray-400">
            <figure className="w-full h-full relative">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <figcaption className="absolute bottom-0 p-2 text-white bg-slate-950/70 w-full text-center font-bold">
                    {title}
                </figcaption>
            </figure>
        </div>
    )
}
