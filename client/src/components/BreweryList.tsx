import BreweryEntry from "./BreweryEntry";

function BrewerList({ databaseInfo }: any) {
  return (
    <div className="brewerList">
      {databaseInfo.length > 0 ? (
        databaseInfo.map((brewery: { id: any }, index: number) => (
          <BreweryEntry key={brewery.id} brewery={brewery} index={index} />
        ))
      ) : (
        <h1 className="pr-40 text-3xl text-right pt-16">
          ^ Search for a Brewery ^
        </h1>
      )}
    </div>
  );
}

export default BrewerList;
