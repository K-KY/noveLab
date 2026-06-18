import '../../css/novelState.css'

const NovelStateBar = ({state}) => {
    return (
        <>
            <div className={"novel-state-container"}>
                <div className={"novel-state-chip"}>
                    <p className={"novel-state-chip-content"}>{state}</p>
                </div>
            </div>
        </>
    )
}

export {NovelStateBar}