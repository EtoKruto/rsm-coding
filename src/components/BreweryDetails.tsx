import GMap from "./GMap";

function BreweryDetails({ brewery, coord, setIsOpened }: any) {
  return (
    <div className="relative">
      <div className="flex items-center justify-around p-4 m-4 ">
        <div>
          <div>
            <h1 className="text-3xl font-['Roboto'] ">{brewery.name}</h1>
          </div>
          <div>
            <h3>
              {brewery.street +
                ", " +
                brewery.city +
                ", " +
                brewery.country +
                ", " +
                brewery.postal_code}
            </h3>
          </div>
        </div>

        <div>
          {coord.lat && coord.lng ? (
            <GMap coord={coord} />
          ) : (
            <>Map Not Available</>
          )}
        </div>
      </div>{" "}
      <button
        className="absolute text-3xl top-3 right-4 hover:text-white transition-transform duration-500 hover:scale-110 active:scale-100 "
        onClick={() => setIsOpened(false)}
      >
        ⓧ
      </button>
    </div>
  );
}

export default BreweryDetails;
