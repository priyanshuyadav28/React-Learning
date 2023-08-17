import Card from "./Card";

function Tours({tours, removeTour}) {
    return(
        <div className="container">
            <div className="plan">
                <h2 className="title">Plan With ❤️</h2>
            </div>

            {/* cards */}
            <div className="cards">
                {
                    tours.map((tour) => {
                        return <Card {...tour} key={tour.id} removeTour={removeTour}></Card>
                    })
                }
            </div>

        </div>
    );
}

export default Tours;