import styles from '../styles/Home.module.css'
import Image from 'next/image'
import i1 from '../public/imagesC/1.jpg'
import Link from 'next/link'



export const Clases = ({ data, all }) => {


    if (all) {
        clases3 = data
    } else {
        var clases3 = data.slice(0, 3)
    }

    return (
        <div>
            <h1 className={ styles.title }>Clases</h1>
            <hr className={ styles.separador } />
            <div className={ styles.prices }>
                { clases3.map((c) =>
                    <div className={ styles.box }>
                        <Link href={ "/[id]" } as={ `/${ c.id }` } key={ c.id } >
                            <a>
                                <Image src={ i1 } width={ 200 } height={ 200 } />
                                <h2>{ c.nombre }</h2>
                                {/* <p>{ c.descripcion }</p> */ }
                            </a>
                        </Link>
                    </div>
                ) }
            </div>
            <div className={ styles.cen }>
                <button className={ styles.button }>Ver todas las clases</button>
            </div>
        </div>
    )
}