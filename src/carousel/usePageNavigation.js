import { useCallback, useContext } from "react";
import CarouselWrapper from "."

export default function usePageNavigation(options={loop: true, delay:0, wait: true}){
    const ctx = useContext(CarouselWrapper.Context)
    const navigateTo = useCallback(newIndex => setTimeout(() => ctx.index = newIndex, options.delay) , [ctx, options.delay])
    const navigateBack = useCallback(() =>{
        const isReady =   ctx.ready 
        if(options.wait && !isReady) return 
        ctx.direction = -1
        const isStart = ctx.index === 0 
        !isStart && navigateTo(ctx.index - 1)
        const needsLoop = isStart && options.loop 
        needsLoop && navigateTo(ctx.pages.length -1)
    }, [ctx, navigateTo, options.loop])

    const navigateForward = useCallback(() =>{
        const isReady = ctx.ready 
        if(options.wait && !isReady) return  
        ctx.direction = 1
        const isEnd = ctx.index === (ctx.pages.length -1) 
        !isEnd && navigateTo(ctx.index + 1)
        const needsLoop = isEnd && options.loop 
        needsLoop && navigateTo(0)
    }, [navigateTo, options.loop, ctx])

    

    return {navigateTo, navigateBack, navigateForward}
}