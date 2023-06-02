describe('Menggambar X', () => {
    it('Berhasil membentuk bentuk X', async () => {
        //data untuk test gambar
        const tombolbar = $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')
        const drawing = $('//android.view.ViewGroup[@content-desc="menu item drawing"]')
        const halamangambar = $('~drawing screen')
        const save = $('~Save button')
        const notifallow = $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]')
        const allow = $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]')
        const suksessave =$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView')
        //proses membuka halaman gambar
        await tombolbar.click()
        await browser.pause(1000)
        await drawing.click()
        await browser.pause(1000)
        await expect(halamangambar).toBeExisting()
        await browser.pause(1000)
        //proses membuat bentuk x
        await browser.touchAction([
            { action: 'press', x: 208, y: 839 },
            {action: 'wait', ms:1000},
            { action: 'moveTo', x: 449, y: 693 },
            'release'
        ])
        await browser.pause(1000)
        await browser.touchAction([
            { action: 'press', x: 449, y: 839 },
            {action: 'wait', ms:1000},
            { action: 'moveTo', x: 208, y: 693 },
            'release'
        ])
        //proses saving
        await browser.pause(1000)
        await save.click()
        await browser.pause(1000)
        await expect(notifallow).toBeExisting()
        await browser.pause(500)
        await allow.click()
        await browser.pause(500)
        await expect(suksessave).toHaveTextContaining('Drawing saved successfully to gallery')
    })
})