const Pizza = (props) => {
  return (
    <>
      <div  className="flex gap-4 m-5">
        <img src={props.p.img} className="h-22" alt={props.p.name} />
        <div>
          <h2 className="font-bold">{props.p.name}</h2>
          <p className="text-sm">{props.p.desc}</p>
          <h2>{props.p.price}</h2>
        </div>
      </div>
    </>
  );
};

export default Pizza;
