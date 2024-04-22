import React from 'react'
import MenuLink from '../Menulink/Menulink'
import { HomeOutlined ,ExitToAppOutlined,
    FileCopyOutlined,
    GroupOutlined,
    HearingOutlined,
    List,
    MovieCreationOutlined,
    PhotoSizeSelectActualOutlined,
    ScheduleOutlined,
    Settings,
    ShoppingBasketOutlined, } from '@mui/icons-material'
export default function Leftbar() {
  return (
    <div className=''>
      {/* <div className="row"> */}
        {/* <div className="col-md-2"> */}
        <div className="leftbar" style={{borderRight:'1px solid lightgray',}}>
      <div className="leftbarWrapper" style={{padding:'20px'}}>
        <MenuLink icon={<HomeOutlined />} text="Homepage" />
        <MenuLink icon={<List />} text="Lists" />
        <MenuLink icon={<ShoppingBasketOutlined />} text="Products" />
        <MenuLink icon={<GroupOutlined />} text="Groups" />
        <MenuLink icon={<FileCopyOutlined />} text="Pages" />
        <MenuLink icon={<PhotoSizeSelectActualOutlined />} text="Photos" />
        <MenuLink icon={<MovieCreationOutlined />} text="Videos" />
        <MenuLink icon={<ScheduleOutlined />} text="Schedule" />
        <MenuLink icon={<HearingOutlined />} text="Wishlist" />
        <MenuLink icon={<Settings />} text="Settings" />
        <MenuLink icon={<ExitToAppOutlined />} text="Logout" />
      </div>
    </div>
        </div>
      // </div>
    // </div>
  )
}
