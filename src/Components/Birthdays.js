const Birthdays = ({ people }) => {
    return (
        <div>
            {people.map((person) => {
                const {id, name, age, image} = person;
                return <article key={id} className="person">
                <img width='10%' src={image}></img>
                <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
            </article>
            })}
        </div>
    )
}
export default Birthdays