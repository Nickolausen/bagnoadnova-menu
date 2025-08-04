import MenuItem from "./MenuItem"
import Title from "./Title"
import type { Dish } from "../types/dishes"

type SectionProps = {
    name: string,
    dishes: Dish[]
}

export default function Section(props: SectionProps) {
    // Le nostre insalate -> le-nostre-insalate
    let sectionId = props.name
        .replace(' ', '-')
        .toLowerCase()
        .normalize()

    return <section id={sectionId}>
        <Title level={2}> <a className="text-decoration-none" href={`#${sectionId}`}>{props.name}</a></Title>
        <div className='container-fluid px-0 d-flex flex-column gap-4'>
            { props.dishes.map((dish, idx) => <MenuItem key={dish.dishName + idx} {...dish}/>)}
        </div>
    </section>
}