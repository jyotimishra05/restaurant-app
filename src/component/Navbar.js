import React from 'react'

// import Menu from './Basics/menuApi'

const Navbar = ({filterItem,menuList}) => {
  return (
    <>
         <nav className='navbar'>
    <div className='btn-group'>
    {menuList.map((currelem)=>{
      return (
        <button className='btn-group__item'  onClick={()=>filterItem(currelem)}>{currelem}</button>
      )
    })}
    <i class="fa-sharp fa-solid fa-cart-plus"></i>
    <p>7</p>
        {/* <div className='btn-group__item' onClick={()=>filterItem("breakfast")}>Breakfast</div> 
        <div className='btn-group__item' onClick={()=>filterItem("lunch")}>Lunch</div>
        <div className='btn-group__item' onClick={()=>filterItem("evening")}>Evening</div>
        <div className='btn-group__item' onClick={()=>filterItem("dinner")}>Dinner</div>
        <div className='btn-group__item' onClick={()=>setmenuData(Menu)}>All</div> */}
    </div>
   </nav>
    </>
  )
}

export default Navbar