import { Layout } from "@/components/layouts"
import { EntryStatus } from "@/interfaces"
import { DeleteOutline, SaveOutlined } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Radio, RadioGroup, TextField, capitalize } from "@mui/material"
import { isValidObjectId } from "mongoose"
import { GetServerSideProps } from "next"
import { ChangeEvent, useState } from "react"

const radioOptions: EntryStatus[] = ["Pending", "In progress", "finished"]

const EntryPage = ({ id }: any) => {

    const [inputValue, setInputValue] = useState("")
    const [status, setStatus] = useState<EntryStatus>("Pending")
    const [touched, setTouched] = useState<Boolean>(false)

    const changeInput = (evt: ChangeEvent<HTMLInputElement>) => setInputValue(evt.target.value)
    const changeStatus = (evt: ChangeEvent<HTMLInputElement>) => setStatus(evt.target.value as EntryStatus)
    const onSave = () => console.log({ status, inputValue })

    console.log(id)

    return (
        <Layout title="...">
            <Grid container justifyContent={"center"} sx={{ marginTop: 2 }}>

                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader title={`Entrada: `} subheader={`Hace ...`}>
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

    if (!isValidObjectId(id)) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    return {
        props: {
            id
        }
    }

}

export default EntryPage