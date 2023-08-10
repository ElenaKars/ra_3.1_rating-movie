import Star from "./Star";

export default function Stars ({count = 0}){
    if(typeof count !== "number" || count < 1 || count > 5) return;

    return (
        <ul className="card-body-stars">
        {[...Array(Math.floor(count))].map((_, idx) => <li key={idx + 1}><Star /></li>)}
      </ul>
    )
}