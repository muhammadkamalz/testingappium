describe('logout tanpa login', () => {
    it('Gagal Logout', async() => {
        const tombolbar = $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')
        const logout = $('~menu item log out')
        const lanjutlogout = $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2]')
        const sukseslogout = $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView')
        const logoutbox = $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout')

        await tombolbar.click()
        await browser.pause(1000)
        await browser.touchAction([
            { action: 'press', x: 208, y: 1026 },
            {action: 'wait', ms:1000},
            { action: 'moveTo', x: 208, y: 254 },
            'release'
        ])
        await browser.pause(1000)
        await logout.click()
        await browser.pause(1000)
        await expect(logoutbox).toBeExisting()
        await browser.pause(1000)
        await lanjutlogout.click()
        await browser.pause(1000)
        await expect(sukseslogout).not.toHaveTextContaining('You are successfully logged out.')
    })
})
