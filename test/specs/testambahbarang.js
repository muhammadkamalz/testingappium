describe('Input barang ke keranjang', () => {
    it('Berhasil dimasukkan', async() => {
        //data yang ingin diverif dan di klik
        const item1 = $('(//android.view.ViewGroup[@content-desc="store item"])[1]')
        const tambah = $('~Add To Cart button')
        const keranjang = $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView')
        const plus = $('//android.view.ViewGroup[@content-desc="counter plus button"]/android.widget.ImageView')
        const jumlah = $('//android.view.ViewGroup[@content-desc="counter amount"]/android.widget.TextView')
        const total = $('~total number')
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
        await plus.click()
        await browser.pause(1000)
        await tambah.click()

        //proses cek hal keranjang terbuka atau tidak
        await browser.pause(1000)
        await keranjang.click()
        await browser.pause(1000)

        await expect(jumlah).toHaveText('2')
        await browser.pause(1000)
        await expect(total).toHaveTextContaining('2 items')
    })
})
