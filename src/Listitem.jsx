export function Listitem({ arr, handleFunct, deleteFunct}) {



    return (
        <ul>
            {arr.map((item) => (
                <li key={item.id}>
                    <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={(e) => handleFunct(item.id, e.target.checked)}

                    />
                    {item.text}
                    <button onClick={() => deleteFunct(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
