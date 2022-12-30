import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from "../Component/Header/Header"
import Banner from "../Component/Banner";
import OurService from "../Component/OurService"
import HowWeAreDifferent from "../Component/HowWeAreDifferent";



export default function Home() {
  return (
    <>
      <Header/>
      <Banner/> 
      <OurService/> 
      <HowWeAreDifferent/> 
    </>
  )
}
