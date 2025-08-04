import Brand from "./Brand";
import styles from './Footer.module.css';

export default function Footer() {
    return <footer className={`${styles.cst_footer} container-fluid d-flex flex-column justify-content-center p-4 gap-3`}>
        <div className="row gap-3 py-3">
            <div className="col-12 col-sm d-flex flex-column justify-content-center align-items-center">
                <Brand />
            </div>
            <div className="col-12 col-sm d-flex flex-column justify-content-center align-items-center">
                <img style={{ maxWidth: "100px" }} src={import.meta.env.BASE_URL.concat("allbeach-logo.png")} />
            </div>
        </div>
        <div className="row">
            <div className="col container-fluid text-center">
                <div className="row gap-2 gap-md-0">
                    <div className="col-12 col-md-4">
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
                    <div className="col-12 col-md-4">
                        <p className="m-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-telephone-fill"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                                />
                            </svg>
                            <span>
                                <span className="fw-bold"> Prenota ora!</span> Chiama <a className="text-decoration-none" href="tel:+39 349 691 4998">+39 349 691 4998</a>
                            </span>
                        </p>
                    </div>
                    <div className="col-12 col-md-4">
                        <p className="m-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-clock-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                            </svg>
                            <span>
                                <span className="fw-bold"> La cucina è aperta tutti i giorni dalle 12:00 alle 14:30</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.credits} row text-center`}>
            <span>Made with <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                fill="currentColor"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16">
                <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
            </svg>
                {" by"} <a className={styles.credits.concat(" text-decoration-none")} href="https://nicholasmagi.it">Nicholas Magi</a></span>
        </div>
    </footer>
}