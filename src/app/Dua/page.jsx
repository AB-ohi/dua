import React from 'react';
import Sidebar from './sidebar';
import Categories from './categories';
import Settings from './Settings';

import DuaBody from './[DuaBody]';

const DuaPage = () => {
    return (
        <div className='flex justify-between p-[40px] pb-0'>
            <Sidebar/>
            <Categories/>
            <DuaBody/>
            <Settings/>
        </div>
    );
};

export default DuaPage;