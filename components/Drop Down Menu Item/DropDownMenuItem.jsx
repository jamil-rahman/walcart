import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Image from "next/image";
import styles from "../../styles/Dropdown.module.css";

function DropDownMenuItem(props) {
  return (
    <>
     <DropdownButton
        as={ButtonGroup}
        drop="end"
        variant="light"
        title={
            <>
          <div className={styles.drop_menu_item}>
            <Image src={props.img} alt={props.alt} />
            <span style={{marginLeft: "16px"}}>
            {props.title}
            </span>
          </div>
          </>
        }
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
          width: "250px", 
          borderBottom: "0.5px solid #F4F4F4"
        }}
      >
        <Dropdown.Item eventKey="1" style={{height:"60px", padding: '16px', width: '280px'}}>Laptop and Desktop</Dropdown.Item>
        <Dropdown.Item eventKey="2" style={{height:"60px", padding: '16px', width: '280px'}}>Home Living</Dropdown.Item>
        <Dropdown.Item eventKey="3" style={{height:"60px", padding: '16px', width: '280px'}}>Books and Stationary</Dropdown.Item>
        <Dropdown.Item eventKey="4" style={{height:"60px", padding: '16px', width: '280px'}}>Home Appliances</Dropdown.Item>
        <Dropdown.Item eventKey="5" style={{height:"60px", padding: '16px', width: '280px'}}>Electric Appliances</Dropdown.Item>
        <Dropdown.Item eventKey="6" style={{height:"60px", padding: '16px', width: '280px'}}>Fast Food and Snack</Dropdown.Item>
    
      </DropdownButton>
    </>
  )
}

export default DropDownMenuItem