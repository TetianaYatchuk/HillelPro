import logo from '/vite.svg'

function Header() {
  const now = new Date()

  return (
    <header>
    <img src={logo} alt={'logo'} />
    <h3>My home page</h3>

    <span>Time: { now.toLocaleTimeString() }</span>
  </header>
  )
}

export default Header