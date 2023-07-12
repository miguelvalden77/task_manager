import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Layout } from '@/components/layouts'
import { Card, CardHeader, Grid } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <Layout title='home'>
        <Grid container spacing={2}>
          
          <Grid xs={12} sm={4} item>
            <Card sx={{height: "calc(100vh - 100px)"}}>
              <CardHeader title="Pendientes"/>
            </Card>
          </Grid>

          <Grid xs={12} sm={4} item>
            <Card sx={{height: "calc(100vh - 100px)"}}>
              <CardHeader title="En progreso"/>
            </Card>
          </Grid>

          <Grid xs={12} sm={4} item>
            <Card sx={{height: "calc(100vh - 100px)"}}>
              <CardHeader title="Completados"/>
            </Card>
          </Grid>

        </Grid>
      </Layout>
      
  )
}
