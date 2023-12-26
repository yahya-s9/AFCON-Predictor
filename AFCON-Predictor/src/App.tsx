import './App.css'
import GroupTable from './components/GroupTable'

function App() {

  const groupA = ['Ivory Coast','Nigeria','Equatorial Guinea','Guinea-Bissau'];
  const groupB = ['Egypt','Ghana','Cape Verde','Mozambique'];
  const groupC = ['Senegal','Cameroon','Guinea','Gambia'];
  const groupD = ['Algeria','Burkina Faso','Mauritania','Angola'];
  const groupE = ['Tunisia','Mali','South Africa','Namibia'];
  const groupF = ['Morocco','DR Congo','Zambia','Tanzania'];

  return (
    <>
      <GroupTable countriesList={groupA} groupLetter={"A"}/>
      <GroupTable countriesList={groupB} groupLetter={"B"}/>
      <GroupTable countriesList={groupC} groupLetter={"C"}/>
      <GroupTable countriesList={groupD} groupLetter={"D"}/>
      <GroupTable countriesList={groupE} groupLetter={"E"}/>
      <GroupTable countriesList={groupF} groupLetter={"F"}/>

    </>
  )
}

export default App

