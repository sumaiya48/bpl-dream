import Player from "../Player/Player"

const AvailablePlayers = ({availablePlayers,handleChoosePlayer}) => {


    return (
        
       <div >
             
             <div className="grid lg:grid-cols-3 gap-4">
               {
            availablePlayers.map(player =>(<Player
                key={player.playerId}
                player={player}
                handleChoosePlayer={handleChoosePlayer}
            ></Player>))
          }
        </div>
       </div>
    );
};

export default AvailablePlayers;