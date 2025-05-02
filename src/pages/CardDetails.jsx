import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RighAside';
import Details from '../layouts/details';

const CardDetails = () => {
    const details = useLoaderData();
    const {id} = useParams();
    
    const singleDetails = details.find(detail => detail.id == id);
 
    
    return (
        <div className='w-11/12 mx-auto pt-4'>
            <header className='pt-3'>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12'>
                <section className='col-span-9'>
                    <h1 className='font-bold'>Dragon News</h1>
                    <Details singleDetails={singleDetails}></Details>
                </section>
                <aside className='col-span-3'>
                    <RighAside></RighAside>
                </aside>
            </main>
        </div>
    );
};

export default CardDetails;