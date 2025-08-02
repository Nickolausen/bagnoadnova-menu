import styles from './Brand.module.css'

export default function Brand() {
    return <div className={`text-center text-white d-flex flex-column`}>
        <h3 className={`${styles.brand_text} m-0 display-5`}>Bagno</h3>
        <h2 className={`${styles.brand_text} m-0 display-2`}>Ad Nova</h2>
    </div>
}