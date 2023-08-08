import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Layout } from '@/components/layouts'
import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { EntryList, NewEntry } from '@/context/ui'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title='home'>
      <Grid container spacing={2}>

        <Grid xs={12} sm={4} item>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" />
            <CardContent>
              <NewEntry />
              <EntryList status='Pending' />
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} sm={4} item>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En progreso" />
            <CardContent>
              <EntryList status='In progress' />
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} sm={4} item>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completados" />
            <CardContent>
              <EntryList status='finished' />
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Layout>

  )
}
