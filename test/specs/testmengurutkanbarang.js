describe('Mengurutkan barang', () => {
    it('Membuka halaman catalog terlebih dahulu', async() => {
        //data untuk membuka catalog
        const tombolbar = $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')
        const catalog = $('~menu item catalog')
        const halcatalog = $('//android.view.ViewGroup[@content-desc="products screen"]/android.widget.ScrollView')

        //proses untuk membuka catalog 
        await tombolbar.click()
        await browser.pause(1000)
        await catalog.click()
        await browser.pause(1000)
        await expect(halcatalog).toBeExisting()
        await browser.pause(1000)
    })
    it ('Berhasil mengurutkan', async() => {
        //data untuk mengurutkan
        const sort = $('//android.view.ViewGroup[@content-desc="sort button"]/android.widget.ImageView')
        const sortbox = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup')
        const harganaik = $('~priceAsc')
        //mengecek apakah priceAsc terpilih & aktif
        const ceksort = $('~priceAsc').$('~active option')
        //proses untuk mengurutkan
        await sort.click()
        await browser.pause(1000)
        await expect(sortbox).toBeExisting()
        await browser.pause(1000)
        await harganaik.click()
        await browser.pause(1000)
        await sort.click()
        await expect(ceksort).toBeExisting()
    })
})