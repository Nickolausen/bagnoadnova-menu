import type { PropsWithChildren } from "react"
import Footer from "../components/Footer"
import Title from "../components/Title"
import styles from "./MenuLayout.module.css"
import ThemeSwitcher from "../components/ThemeSwitcher"

type MenuLayoutProps = {} & PropsWithChildren

export default function MenuLayout({ children }: MenuLayoutProps) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    const days = [ "Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato" ]
    const todayAsString = `${days[today.getDay()]}, ${dd}·${mm}·${yyyy}`;
    return (
        <>
            <div className="ms-auto me-3 mt-3">
                <ThemeSwitcher/>
            </div>
            <Title level={1} className={`${styles.main_title} text-center pt-1`}>Il menù della <br /><span className={`${styles.main_title_span} fw-bold`}>SETTIMANA</span></Title>
            <Title level={3}>— {todayAsString} —</Title>
            <main style={{ scrollBehavior: "smooth" }} className="pt-3 pb-5 px-5 flex-grow-1 d-flex flex-column justify-content-center gap-5">
                {children}
            </main>
            <Footer />
        </>
    )
}