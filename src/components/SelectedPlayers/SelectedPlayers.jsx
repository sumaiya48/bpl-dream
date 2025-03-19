import { IoPersonRemoveOutline } from "react-icons/io5";
import {  toast } from 'react-hot-toast';

const SelectedPlayers = ({ choosePlayer, setChoosePlayer }) => {
  const handleRemovePlayer = (playerId) => {
      const updatedPlayers = choosePlayer.filter(player => player.playerId !== playerId);
      setChoosePlayer(updatedPlayers);
      toast.success('Player removed successfully!');
  };

  return (
      <div>
          {choosePlayer.length > 0 ? (
              choosePlayer.map((player) => (
                  <div
                      key={player.playerId}
                      className="border p-4 flex justify-between items-center"
                  >
                      <div className="flex items-center gap-3">
                          <img
                              src={player.image}
                              alt={player.name}
                              className="w-16 h-16"
                          />
                          <div>
                              <p>{player.name}</p>
                              <p>{player.country}</p>
                          </div>
                      </div>
                      <button
                          onClick={() => handleRemovePlayer(player.playerId)}
                          className="bg-red-500 text-white py-1 px-3 rounded"
                      >
                          Remove
                      </button>
                      
                  </div>
              ))
          ) : (
              <div className="flex flex-col items-center justify-center lg:h-64 bg-gray-100 border-2 border-dashed rounded-xl shadow-sm">
                  <IoPersonRemoveOutline className="text-6xl text-gray-400 mb-4" />
                  <h2 className="text-xl font-semibold text-gray-600">
                      No Player Selected
                  </h2>
                  <p className="text-gray-500">
                      Start choosing players to build your dream team!
                  </p>
                  
              </div>
          )}
      </div>
  );
};

export default SelectedPlayers;
