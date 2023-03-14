import React, { useEffect, useState } from 'react'
import Container from '../../Utils/Contatiner/Container';
import { instence } from './../../Api/instence';
import CategoryItem from './Category-item';

const Categoris = () => {


    const [categoriysData, setCategoriys] = useState([]);
    useEffect(() => {
        instence.get("/categories").then(respons => setCategoriys(respons.data))
    }, [])

    return (
        <div>
            <Container>
                <div className='d-flex justify-content-between mt-5' >
                    {
                        categoriysData.map(cat => <CategoryItem key={cat.id} img={cat.image} text={cat.name} />)

                    }
                </div>

            </Container>
        </div>
    )
}

export default Categoris
