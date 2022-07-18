import styles from "../styles/EditorsPick.module.css"
import Link from "next/link"
const EditorsPick = ({editorPicks}) => {

  return (
   
<div className={styles.editors_pick_bigger_container}>
  <h2>Editörün Seçimi</h2>
  <div className={styles.editors_pick_container}>
        {editorPicks.map((editorPick, index) => (
      <Link key={index}  href={`/${editorPick.node.slug}`}>
           <div  className={styles.editors_pick_card}>
            
            <p>{editorPick.node.categories[0].name}</p>
            <h5>{editorPick.node.title}</h5>
           </div>
      </Link>
          
        ))}
    </div>
</div>
  )
}

export default EditorsPick