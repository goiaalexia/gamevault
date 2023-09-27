import React, {useEffect, useRef, useState} from 'react';
import Button from "@mui/material/Button"
import InputLabel from '@mui/material/InputLabel';
import Container from "@mui/material/Container";
import {GameFormProps} from "../../models/videogame";
import {FormControl, TextField} from "@mui/material";
import Grid from "@mui/material/Grid";

// consistent storage
const VideoGameForm: React.FC<GameFormProps> = ({
                                                    gameID,
                                                    gameName,
                                                    releaseYear,
                                                    company,
                                                    rating,
                                                    sales,
                                                    platform,
                                                    description,
                                                    imageLink,
                                                    isWishlist,
                                                    updateCallback,
                                                    createCallback
                                                }: GameFormProps): React.ReactElement => {

    const [selection, setSelection] = useState<{
        gameID: number | null;
        gameName: string;
        company: string;
        rating: number | null;
        releaseYear: number | null;
        platform: string; sales: number | null;
        imageLink: string; description: string;
        isWishlist: boolean
    }>({
        gameID: null,
        gameName: "",
        company: "",
        rating: null,
        releaseYear: null,
        platform: "",
        sales: null,
        imageLink: "",
        description: "",
        isWishlist: false
    })

    useEffect(() => setSelection({
        gameID: gameID,
        gameName: gameName,
        sales: sales,
        releaseYear: releaseYear,
        company: company,
        rating: rating,
        platform: platform,
        imageLink: imageLink,
        description: description,
        isWishlist: isWishlist
    }), [gameID, gameName, releaseYear, company, rating, sales, platform, description, imageLink, isWishlist])

    const handleInputSubmit = () => {
        console.log(selection)
        selection.gameID === null ? createCallback(selection) : updateCallback(selection)
    }

    const clearSelection = () => {
        console.log(selection)
        setSelection({
            gameID: null,
            gameName: "",
            company: "",
            rating: null,
            releaseYear: null,
            platform: "",
            sales: null,
            description: "",
            imageLink: "",
            isWishlist: false
        })
    }

    const form = useRef(null)


    return (
        <FormControl className='my-3' ref={form}>
            <Container sx={{'padding':'5px'}}>
                <Grid container spacing={{xs: 2, md: 2}} columns={{xs: 4, sm: 8, md: 12}}>
                    <Grid item xs={6}>
                        <Container sx={{'display':'inline-flex', 'flex-direction':'column'}}>
                            <TextField label="ID" value={selection.gameID ? selection.gameID : ""} type="text" placeholder=""
                                          disabled InputProps={{readOnly: true}}/>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>

                        <Container sx={{'display':'inline-flex', 'flex-direction':'column'}}>
                            <TextField label="Name" value={selection.gameName ? selection.gameName : ""}
                                          onChange={(e) => {
                                              setSelection({...selection!, gameName: e.target.value}
                                              )
                                          }}
                                          type="text" placeholder=""/>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>

                        <Container sx={{'display':'inline-flex', 'flex-direction':'column'}}>
                            <TextField label="Release Year" value={selection.releaseYear ? selection.releaseYear : ""}
                                          onChange={e => {
                                              setSelection({
                                                  ...selection!,
                                                  releaseYear: Number(e.target.value)
                                              })
                                          }
                                          } type="text" placeholder=""/>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>

                        <Container sx={{'display':'inline-flex', 'flex-direction':'column'}}>
                            <TextField label="Company" value={selection ? selection!.company : ""}
                                          onChange={e => setSelection({...selection!, company: e.target.value})}
                                          type="text" placeholder=""/>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>

                        <Container sx={{'display':'inline-flex', 'flex-direction':'column'}}>
                            <TextField label="Rating" value={selection.rating ? selection.rating : ""}
                                          onChange={e => setSelection({
                                              ...selection!,
                                              rating: Number(e.target.value)
                                          })}
                                          type="text" placeholder=""/>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>

                        <Container sx={{'display':'inline-flex', 'flex-direction':'column'}}>
                            <TextField label="Sales" value={selection.sales ? selection.sales : ""}
                                          onChange={e => setSelection({
                                              ...selection!,
                                              sales: Number(e.target.value)
                                          })}
                                          type="text" placeholder=""/>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>

                        <Container sx={{'display':'inline-flex', 'flex-direction':'column'}}>
                            <TextField label="Platform" value={selection ? selection!.platform : ""}
                                          onChange={e => setSelection({
                                              ...selection!,
                                              platform: e.target.value
                                          })} type="text" placeholder=""/>
                        </Container>
                    </Grid>

                    <Grid item xs={6}>

                    <Container sx={{'display':'inline-flex', 'flex-direction':'column'}}>
                        <TextField label="Image Link" value={selection ? selection!.imageLink : ""}
                                      onChange={e => setSelection({
                                          ...selection!,
                                          imageLink: e.target.value
                                      })} type="text" placeholder=""/>
                    </Container>
                    </Grid>
                    <Grid item xs={6}>

                        <Container sx={{'display':'inline-flex', 'flex-direction':'column'}}>
                            <TextField label="Description" value={selection ? selection!.description : ""}
                                          onChange={e => setSelection({
                                              ...selection!,
                                              description: e.target.value
                                          })} type="text" placeholder=""/>
                        </Container>
                    </Grid>

                    <Grid item xs={6}>

                    <Container sx={{'display': 'inline-flex', 'justify-content' : 'inline-flex', 'margin-top':'5px','gap': '20px', 'padding':'0px'}} >
                        <Button variant={"contained"} color={"secondary"} onClick={clearSelection} sx={{'width':'235px', 'height':'50px'}}>Clear
                            Selection</Button>


                        <Button  variant={"contained"} color={"success"} sx={{'width':'240px', 'height':'50px'}}
                                onClick={handleInputSubmit}>Create/Update</Button>

                    </Container>
                    </Grid>
                </Grid>
            </Container>
        </FormControl>
    )
}

export default VideoGameForm;
