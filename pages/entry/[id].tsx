import { Layout } from "@/components/layouts"
import { EntriesContext } from "@/context/entries"
import { getEntryById } from "@/database/entryDb"
import { Entry, EntryStatus } from "@/interfaces"
import { DeleteOutline, SaveOutlined } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Radio, RadioGroup, TextField, capitalize } from "@mui/material"
import { isValidObjectId } from "mongoose"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { ChangeEvent, FC, useContext, useState } from "react"

const radioOptions: EntryStatus[] = ["Pending", "In progress", "finished"]

interface Props {
    entry: Entry
}

const EntryPage: FC<Props> = ({ entry }) => {

    const [inputValue, setInputValue] = useState<string>(entry.description)
    const [status, setStatus] = useState<EntryStatus>(entry.status)
    const [touched, setTouched] = useState<Boolean>(false)

    const { updateEntry } = useContext(EntriesContext)

    const router = useRouter()

    const changeInput = (evt: ChangeEvent<HTMLInputElement>) => setInputValue(evt.target.value)
    const changeStatus = (evt: ChangeEvent<HTMLInputElement>) => setStatus(evt.target.value as EntryStatus)
    const onSave = () => {
        if (inputValue.length === 0) return

        try {
            const updatedEntry = { ...entry, description: inputValue, status }
            updateEntry(updatedEntry)
            router.push("/")

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Layout title={inputValue}>
            <Grid container justifyContent={"center"} sx={{ marginTop: 2 }}>

                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader title={`Entrada: ${inputValue.slice(0, 15)}`} subheader={`Hace ${entry.createdAt} minutos`}>
                        </CardHeader>

                        <CardContent>
                            <TextField onChange={changeInput} value={inputValue} sx={{ marginTop: 2, marginBottom: 1 }} fullWidth placeholder="Nueva entrada" autoFocus multiline label={"nueva entrada"} onBlur={() => setTouched(true)} />

                            <FormControl>
                                <FormLabel>Status</FormLabel>
                                <RadioGroup value={status} onChange={changeStatus} row>
                                    {
                                        radioOptions.map((option) => {
                                            return (
                                                <FormControlLabel key={option} value={option} control={<Radio />} label={capitalize(option)} />
                                            )
                                        })
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CardContent>

                        <CardActions>
                            <Button onClick={onSave} startIcon={<SaveOutlined />} fullWidth variant="outlined" disabled={inputValue.length <= 0}>Save</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <IconButton sx={{ position: "fixed", bottom: 30, right: 30, backgroundColor: "red" }}>
                    <DeleteOutline />
                </IconButton>

            </Grid>
        </Layout>
    )

}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { id } = params as { id: string }

    const entry = await getEntryById(id)

    if (!entry) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    return {
        props: {
            entry
        }
    }

}

export default EntryPage