const countdownMessage = (daysLeft: number) => {
    if (daysLeft > 0) {
        return (
            <div>
                <h1>Faltam um total de</h1>
                <h1>{daysLeft}</h1>
                <h1>dias para a festinha na casa da Laura</h1>
            </div>
        )
    } else if (daysLeft < 0) {
        return (
            <div>
                <h1>A festinha da Laura já aconteceu e foi muito boa hehe</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>A festinha da Laura é hoje!!!</h1>
            </div>
        )
    }
}

const calculateDaysLeft = () => {
    const startDate = new Date().getTime()
    const endDate = new Date('2023-11-11').getTime()
    const diffDate = endDate - startDate

    return Math.floor(diffDate / (1000 * 60 * 60 * 24))
}

const DaysCounter = () => {
    return (
        <>
            <h1>
                {countdownMessage(calculateDaysLeft())}
            </h1>
        </>
    )
}

export default DaysCounter