describe('Tes Checkout tanpa menginputkan info', () => {
    it('Muncul notifikasi error untuk tiap input', async() => {
        //data input item
        const item1 = await $('(//android.view.ViewGroup[@content-desc="store item"])[1]')
        const tambah = await $('~Add To Cart button')
        const keranjang = await $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView')
        const lanjutchekout = $('~Proceed To Checkout button')
        //data login
        const username = $('//android.widget.EditText[@content-desc="Username input field"]') 
        const password = $('~Password input field')
        const submit = $('//android.view.ViewGroup[@content-desc="Login button"]')

        //proses tes checkout
        const selesaicheckout =$('~To Payment button')
        const notiferrornegara = $('//android.view.ViewGroup[@content-desc="Country*-error-message"]/android.widget.TextView')
        const errorkodepost = $('//android.view.ViewGroup[@content-desc="Zip Code*-error-message"]/android.widget.TextView')
        const errorkota = $('//android.view.ViewGroup[@content-desc="City*-error-message"]/android.widget.TextView')
        const erroralamat = $('//android.view.ViewGroup[@content-desc="Address Line 1*-error-message"]/android.widget.TextView')
        const errornama = $('//android.view.ViewGroup[@content-desc="Full Name*-error-message"]/android.widget.TextView')
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

        await lanjutchekout.click()
        await browser.pause(1000)

        await username.setValue('bob@example.com')
        await browser.pause(1000)
        await password.setValue('10203040')
        await browser.pause(1000)
        await submit.click()

        await browser.pause(1000)
        await browser.touchAction([
            { action: 'press', x: 393, y: 909 },
            {action: 'wait', ms:1000},
            { action: 'moveTo', x: 393, y: 389 },
            'release'
        ])
        await browser.pause(1000)
        await selesaicheckout.click()
        await expect(notiferrornegara).toBeExisting()
        await browser.pause(500)
        await expect(errorkodepost).toBeExisting()
        await browser.pause(500)
        await expect(errorkota).toBeExisting()
        await browser.pause(500)
        await expect(erroralamat).toBeExisting()
        await browser.pause(500)
        await browser.touchAction([
            { action: 'press', x: 393, y: 389 },
            {action: 'wait', ms:1000},
            { action: 'moveTo', x: 393, y: 909 },
            'release'
        ])
        await browser.pause(500)
        await expect(errornama).toBeExisting()
        
    })
})