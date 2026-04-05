import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * Hook يتحكم في:
 * - تغيير اللغة
 * - تحديث dir و lang على <html>
 * - تحديث font direction
 */
export function useLanguage() {
    const { i18n } = useTranslation()
    const isAr = i18n.language === 'ar'

    useEffect(() => {
        const html = document.getElementById('html-root')
        if (!html) return
        html.setAttribute('lang', i18n.language)
        html.setAttribute('dir', isAr ? 'rtl' : 'ltr')
        document.body.style.direction = isAr ? 'rtl' : 'ltr'
    }, [i18n.language, isAr])

    const toggleLanguage = () => {
        i18n.changeLanguage(isAr ? 'en' : 'ar')
    }

    return { isAr, toggleLanguage, currentLang: i18n.language }
}