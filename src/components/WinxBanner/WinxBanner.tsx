import useDevices from "../../hooks/useDevices"

import winxBannerDesktop from '../../assets/winx-banner-desktop.webp'
import winxBannerMobile from '../../assets/winx-banner-mobile.png'

import styles from './WinxBanner.module.scss'

const WinxBanner = () => {
    const { isMobile } = useDevices()
    const banner = isMobile ? winxBannerMobile : winxBannerDesktop

    return (
        <img className={styles.image} src={banner} alt="Banner das Winx" />
    )
}

export default WinxBanner