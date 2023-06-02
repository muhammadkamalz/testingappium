describe('Test Checkout tanpa login', () => {
    it('Halaman Login ditampilkan', async() => {
        //data yang ingin diverif dan di klik
        const item1 = await $('(//android.view.ViewGroup[@content-desc="store item"])[1]')
        const tambah = await $('~Add To Cart button')
        const keranjang = await $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView')
        const halkeranjang = await $('~cart screen')
        const lanjutchekout = $('~Proceed To Checkout button')
        const halamanlogin = $('//android.view.ViewGroup[@content-desc="login screen"]/android.widget.ScrollView/android.view.ViewGroup')
        //proses input barang
        await item1.click()
        await browser.pause(1000)
        await browser.touchAction([
            { action: 'press', x: 348, y: 1136 },
            {action: 'wait', ms:1000},
            { action: 'moveTo', x: 348, y: 202 },
            'release'
        ])
        await browser.pause(1000)
        await tambah.click()

        //proses cek hal keranjang terbuka atau tidak
        await browser.pause(1000)
        await keranjang.click()
        await browser.pause(1000)

        await expect(halkeranjang).toBeExisting()
        
        await lanjutchekout.click()
        await browser.pause(1000)
        await expect(halamanlogin).toBeExisting()
    })
})