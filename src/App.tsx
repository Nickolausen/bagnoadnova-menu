import Section from './components/Section'
import MenuLayout from './layouts/MenuLayout'
import all from './db/menus.json'

function App() {
  const menu = all.find(m => m.id === "menu010825")
  return menu ? <MenuLayout>
    <Section dishes={menu?.antipasti!} name='Antipasti' />
    <Section dishes={menu?.primi!} name='Primi' />
    <Section dishes={menu?.secondi!} name='Secondi' />
    <Section dishes={menu?.insalate!} name='Le nostre insalate' />
    <Section dishes={menu?.dolci!} name='Dolci' />
  </MenuLayout> : "Caricando..."
}

export default App
