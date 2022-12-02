import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi"
import MenuCard from '../MenuCard'
import Navbar from '../Navbar'

const uniqueList=[
  ...new Set( Menu.map((curElem) =>{
return curElem.category;
    })
    ),"All"
]
console.log(uniqueList)



const Resturant = () => {
    const [menuData, setmenuData]= useState(Menu);
    const[menuList,setMenuList]=useState(uniqueList);

    const filterItem=(category)=>{
      if(category==="All"){
        setmenuData(Menu)
        return;
      }
        const updatedList=Menu.filter((Elem)=>{
            return Elem.category===category;
        })
setmenuData(updatedList);

    }
   
  return (
   <>
   <h1 className='heading'>Welcome To Our Restaurant</h1>
  <Navbar filterItem={filterItem} menuList={menuList} />
  <MenuCard  menuData={menuData}/>
   </>
  )
}

export default Resturant