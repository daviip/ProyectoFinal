import styles from '../styles/Home.module.css'
import Image from 'next/image'
import i1 from '../public/imagesC/1.jpg'
import Link from 'next/link'
// import i2 from '../public/imagesC/2.jpg'
// import i3 from '../public/imagesC/3.jpg'
// import i4 from '../public/imagesC/4.jpg'
// import i5 from '../public/imagesC/5.jpg'
// import i6 from '../public/imagesC/6.jpg'
// import i7 from '../public/imagesC/7.jpg'
// import i8 from '../public/imagesC/8.jpg'
// import i9 from '../public/imagesC/9.jpg'


export const Clases = ({ data }) => {
    return (
        <div className={ styles.containerClases }>
            { data.map((c) => 
            <div className={styles.box}>
                    <Link href={ "/[id]" } as={ `/${ c.id }` } key={c.id} >
                        <a>
                            <Image src={ i1 } width={ 200 } height={ 200 } />
                            <h2>{ c.nombre }</h2>
                            <p>{ c.descripcion }</p>
                        </a>
                    </Link>
            </div>
            ) }
        </div>
    )
}