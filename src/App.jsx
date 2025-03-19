import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Newsletter from './components/Newsletter/Newsletter';
import { Toaster, toast } from 'react-hot-toast';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

function App() {
  const [claimCredit, setClaimCredit] = useState(0);
  const [availablePlayers, setAvailablePlayers] = useState([]);
  const [activeTab, setActiveTab] = useState('available');
  const [choosePlayer , setChoosePlayer] = useState([]);


  useEffect(() => {
    fetch('playerData.json')
      .then((res) => res.json())
      .then((data) => setAvailablePlayers(data));
  }, []);

  // claim credit button
  const handleClaimCredit = () => {
    let newCount = claimCredit + 1500000;
    setClaimCredit(newCount);
    toast.success('Credit Successfully Added!');
  };

  // choose player 

// Choose Player Function with Max Limit
const handleChoosePlayer = (player) => {
  // Check if the player is already selected
  const selectedPlayer = choosePlayer.find(p => p.playerId === player.playerId);
  
  // If the player is already selected, show the error toast and return
  if (selectedPlayer) {
    toast.error(`${player.name} is already selected!`);
    return; // Prevent further actions
  }

  // Check if there are already 6 selected players
  if (choosePlayer.length >= 6) {
    toast.error('You can only select up to 6 players!');
    return; // Prevent further selections
  }

  // Remove commas and convert biddingPrice to integer
  const playerCredit = player.biddingPrice.replace(/,/g, ''); // Remove commas
  const playerCreditInt = parseInt(playerCredit, 10); // Convert to integer
  
  // Check if the user has enough credit
  if (claimCredit >= playerCreditInt) {
    // Deduct the credit if the player is selected
    const newCredit = claimCredit - playerCreditInt;
    setClaimCredit(newCredit);

    // Add the player to the selected list
    const newPlayer = [...choosePlayer, player];
    setChoosePlayer(newPlayer);

    // Show success toast
    toast.success(`${player.name} has been selected successfully!`);
  } else {
    // Show error toast if there is insufficient credit
    toast.error('You have insufficient credit');
  }
};


  


  return (
    <>
      <main className='w-10/12 mx-auto'>
        <Navbar claimCredit={claimCredit}></Navbar>
        <Banner handleClaimCredit={handleClaimCredit}></Banner>

        <div className='flex justify-between items-center mb-3'>
          <p className='font-bold text-xl'>
            {activeTab ==='available' && ('Available Player')}
            {activeTab ==='selected' && (`Selected Player(${choosePlayer.length}/6)`)}
          </p>
          <div className='flex items-center'>
            <button
              onClick={() => setActiveTab('available')}
              className={`rounded-l-xl border-2 py-2 px-4 ${
                activeTab === 'available' ? 'bg-yellow-400 text-black' : ''
              }`}
            >
              Available
            </button>
            <button
              onClick={() => setActiveTab('selected')}
              className={`rounded-r-xl border-2 py-2 px-4 ${
                activeTab === 'selected' ? 'bg-yellow-400 text-black' : ''
              }`}
            >
              Selected
            </button>
          </div>
        </div>

        {/* Conditional Rendering */}
        {activeTab === 'available' && (
          <AvailablePlayers 
          availablePlayers={availablePlayers}
          handleChoosePlayer={handleChoosePlayer}
          ></AvailablePlayers>
        )}
        <div className='lg:mb-80 mb-5' >
        {activeTab === 'selected' && (
  <div>
    <SelectedPlayers
      choosePlayer={choosePlayer}
      setChoosePlayer={setChoosePlayer}
    />
    <button
      onClick={() => setActiveTab('available')} // Change to show available players
      className="bg-red-600 mt-2 text-white py-2 px-4 rounded"
    >
      Add Player
    </button>
  </div>
)}


        </div>
      </main>

      <footer className='relative lg:mt-52 '>
        <div className='lg:absolute lg:-top-1/4  w-full'>
          <Newsletter />
        </div>
        <div>
          <Footer />
        </div>
      </footer>

      {/* Toast Notifications */}
      <Toaster position='top-center' reverseOrder={false} />
    </>
  );
}

export default App;
