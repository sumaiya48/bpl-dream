const Player = ({ player, handleChoosePlayer }) => {
  const { name, role, image, country, battingType, biddingPrice } = player;

  return (
      <div className="card bg-base-100 border-2 shadow-sm">
          <figure className="px-10 pt-10">
              <img src={image} alt={name} className="rounded-xl h-40 w-44 cover-object " />
          </figure>
          <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <div className="flex justify-between border-b-2">
                  <p>{country}</p>
                  <p>{role}</p>
              </div>
              <p className="font-bold">Rating</p>
              <div className="flex justify-between">
                  <p className="font-bold">{battingType}</p>
                  <p>{battingType}</p>
              </div>
              <div className="flex justify-between">
                  <p className="font-bold">Price: {biddingPrice}</p>
                  <p>
                      <button
                          onClick={() => handleChoosePlayer(player)}
                          className="px-3 py-1 rounded-lg "
                      >
                          Choose Player
                      </button>
                  </p>
              </div>
          </div>
      </div>
  );
};

export default Player;
