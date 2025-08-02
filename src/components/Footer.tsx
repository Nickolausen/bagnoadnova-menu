import Brand from "./Brand";
import styles from './Footer.module.css';

export default function Footer() {
    return <footer className="container-fluid bg-dark d-flex flex-column justify-content-center p-4 gap-3">
        <div className="row gap-3 py-3">
            <div className="col-12 col-sm d-flex flex-column justify-content-center align-items-center">
                <Brand />
            </div>
            <div className="col-12 col-sm d-flex flex-column justify-content-center align-items-center">
                <img style={{ maxWidth: "100px" }} src={import.meta.env.BASE_URL.concat("allbeach-logo.png")} />
            </div>
        </div>
        <div className="row">
            <div className="col text-center">
                <p className="m-0 align-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        fill="currentColor"
                        className="mx-1 bi bi-geo"
                        viewBox="0 0 16 16"
                    >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                    <span>
                        Viale G. Carducci, 47042 Valverde FC
                    </span>
                </p>
            </div>
        </div>
        <div className={`${styles.credits} row text-center text-dark-gray`}>
            <small>Made with love by <a className={styles.credits.concat(" text-decoration-none")} href="https://nicholasmagi.it">Nicholas Magi</a></small>
        </div>
    </footer>
}