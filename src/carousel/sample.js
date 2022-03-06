import { Box, Button, ButtonGroup, FormControlLabel, Paper, Switch, TextField, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Carousel from "./carousel";
import CarouselPage from "./page";
import usePageNavigation from "./usePageNavigation";

export default function SamplePage(){
    const [loop, setLoop] = useState(true)
    const [wait, setWait] = useState(true)
    const [delay, setDelay] = useState(0)

    const toggleCb = el => !el
    const {navigateBack, navigateForward} = usePageNavigation({loop, wait, delay})
    const colors = "#5FA619 #244EF2 #F25324".split(" ")
    const boxProps = (index)=>({sx: {display: "flex", borderRadius: "5px", height: `${index * 20 + 20}vh`, bgcolor: colors[index] ,justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',p: 3}})
    const loopSwitchProps = {checked: loop, onClick: () => setLoop(toggleCb), inputProps: {'aria-label': 'Loop Switch'}}
    const waitSwitchProps = {checked: wait, onClick: () => setWait(toggleCb), inputProps: {'aria-label': 'Wait Switch'}}
    const delayProps = {variant: "standard", onBlur: () => delay === "" && setDelay(0), defaultValue: 0, size: "small", value: delay, onChange: ({target}) => (target.value >=0) ? setDelay(target.value): 0, inputProps: {inputMode: 'numeric', pattern: '[0-9]*'}}

    return(
        <Box sx={{display: 'flex',height: "100vh", justifyContent: "end", flexDirection: 'column'}}>
            <Paper sx={{my: 2, p:1, mx: 'auto', width: "75%" }}>
                <Carousel>
                    <CarouselPage>
                        <Box {...boxProps(0)}>
                            <Typography variant="h1">   Page One   </Typography>
                            <Typography variant="body2">    This Page is initialized on load   </Typography>
                        </Box>
                    </CarouselPage>
                    <CarouselPage>
                        <Box {...boxProps(1)}>
                            <Typography variant="h1">   Page Two   </Typography>
                            <Typography variant="body2">    This demonstrates another page  </Typography>
                        </Box>
                    </CarouselPage>
                    <CarouselPage>
                        <Box {...boxProps(2)}>
                            <Typography variant="h1">   Page Three  </Typography>
                            <Typography variant="body2">    This is the final page, but we loop back to the front!  </Typography>
                        </Box>
                    </CarouselPage>
                    
                </Carousel>
                <Box display={"flex"} justifyContent={"space-evenly"} pt={1}>
                    <Tooltip title={"Loop Carousel Pages"} >
                        <FormControlLabel control={<Switch {...loopSwitchProps}/>} label="Loop"/>
                    </Tooltip>
                    <Tooltip title={"Wait for previous transition to complete"} >
                        <FormControlLabel control={<Switch {...waitSwitchProps}/>} label="Wait"/>
                    </Tooltip>
                    <Tooltip title={"Delay transitioning in milliseconds"} >
                        <TextField {...delayProps} label="Delay"/>
                    </Tooltip>
                </Box>
                <ButtonGroup fullWidth sx={{mt: 1}}>
                    <Button onClick={navigateBack} sx={{color: 'text.secondary'}} variant="text">Back</Button>
                    <Button onClick={navigateForward} sx={{color: 'text.secondary'}} variant="text">Forward</Button>
                </ButtonGroup>
            </Paper>
        </Box>
        
    )
}