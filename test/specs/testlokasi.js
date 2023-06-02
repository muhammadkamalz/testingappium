describe('Geolocation test', () => {
    it('Berhasil menampilkan longitude & latitude', async() => {
        //data & button
        const tombolbar = $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')
        const geo = $('~menu item geo location')
        const notifallow =$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]')
        const allowsementara = $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]')
        const judul = $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')
        const latitude = $('~latitude data')
        const longitude =$('~longitude data')
        //proses cek geolokasi
        await tombolbar.click()
        await browser.pause(1000)
        await geo.click()
        await browser.pause(500)
        await expect(notifallow).toBeExisting()
        await browser.pause(500)
        await allowsementara.click()
        await browser.pause(500)
        await expect(judul).toBeExisting()
        await browser.touchAction([
            { action: 'press', x: 348, y: 1136 },
            {action: 'wait', ms:1000},
            { action: 'moveTo', x: 348, y: 202 },
            'release'
        ])
        await expect(latitude).toBeExisting()
        await browser.pause(500)
        await expect(longitude).toBeExisting()
    })
})