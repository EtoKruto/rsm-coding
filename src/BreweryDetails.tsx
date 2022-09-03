import GMap from "./GMap";

function BreweryDetails({ brewery, coord }: any) {
  return (
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

      <div >
        {coord.lat && coord.lng ? (
          <GMap coord={coord} />
        ) : (
          <>Map Not Available</>
        )}
      </div>
    </div>
  );
}

export default BreweryDetails;
