import classNames from 'classnames'
import styles from './DaysCounter.module.scss'

const countdownMessage = (daysLeft: number) => {
    if (daysLeft > 0) {
        return (
            <div className={styles.container}>
                <h1 className={styles['container-items']}>
                    <span className={styles.item}>Faltam um total de</span>
                    <span className={classNames(styles.item, styles['days-left'], styles.emphasis)}>{daysLeft}</span>
                    <span className={classNames(styles.item, styles.subtitle)}>dias para a festinha na casa da Laura</span>
                </h1>
            </div>
        )
    } else if (daysLeft < 0) {
        return (
            <div className={styles.container}>
                <h1 className={classNames(styles.item, styles.emphasis)}>A festinha da Laura realmente aconteceu, não acredito nisso</h1>
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <h1 className={classNames(styles.item, styles.emphasis)}>A festinha da Laura é hoje!!!</h1>
            </div>
        )
    }
}

const calculateDaysLeft = () => {
    const startDate = new Date()
    const endDate = new Date('2023-11-18')

    const diffDate = endDate.getTime() - startDate.getTime()
    return Math.floor(diffDate / (1000 * 60 * 60 * 24))
}

const DaysCounter = () => {
    return (
        <>
            {countdownMessage(calculateDaysLeft())}
        </>
    )
}

export default DaysCounter