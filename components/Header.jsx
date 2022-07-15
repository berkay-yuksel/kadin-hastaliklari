
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header_section_container}>
<Link href="/"><div>
  <img src='./logo.png' height="75px"/>
</div>
</Link>

    </div>
  )
}

export default Header