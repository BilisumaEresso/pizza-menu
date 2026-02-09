const Pizza =(pizzas)=>{
    const list=pizzas.pizzas
    return <>
        <div className="grid gap-3 md:grid-cols-2">
            {list.map((p)=>(
                <div className="flex gap-4 m-5">
                    <img src={p.img} className="h-30" alt={p.name} />
                    <div>
                        <h1 className="text-2xl">{p.name}</h1>
                        <p>{p.desc}</p>
                        <h1>{p.price}</h1>
                    </div>
                </div>
            ))}
        </div>
    </>
}

export default Pizza